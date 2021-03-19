import "reflect-metadata";
import "dotenv-safe/config";
import { MikroORM } from "@mikro-orm/core";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import mikroConfig from "./mikro-orm.config";
import express from "express";
import redis from "redis";
import session from "express-session";
import connectRedis from "connect-redis";

import { __prod__, PORT, REDIS_SECRET } from "./constants";
import { UserResolver } from "./resolvers/user";
import { SnuberContext } from "./types";

(async () => {
  const orm = await MikroORM.init(mikroConfig);
  await orm.getMigrator().up();
  const app = express();

  const RedisStore = connectRedis(session);
  const redisClient = redis.createClient();

  app.listen(PORT, () => {
    console.log(`server started on port:${PORT}`);
  });

  app.use(
    session({
      name: "qid",
      store: new RedisStore({
        client: redisClient,
        disableTouch: true,
      }),
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365 * 10,
        httpOnly: true,
        secure: __prod__,
        sameSite: "lax",
      },
      secret: REDIS_SECRET,
      resave: false,
    })
  );

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver],
      validate: false,
    }),
    context: ({ req, res }): SnuberContext => ({
      em: orm.em,
      req,
      res,
    }),
  });

  apolloServer.applyMiddleware({ app });
})().catch((error) => {
  console.error(error);
});
