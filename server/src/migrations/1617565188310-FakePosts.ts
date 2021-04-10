import { MigrationInterface, QueryRunner } from 'typeorm';

export class FakePosts1617565188310 implements MigrationInterface {
  public async up(_: QueryRunner): Promise<void> {
    //     await queryRunner.query(`
    //         insert into post (title, type, "creatorId", "createdAt") values ('nulla suspendisse potenti cras in purus eu magna vulputate luctus', 'Khaki', 7, '2021-01-05T00:32:13Z');
    // insert into post (title, type, "creatorId", "createdAt") values ('nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit', 'Crimson', 7, '2021-01-02T02:35:57Z');
    // insert into post (title, type, "creatorId", "createdAt") values ('erat vestibulum sed magna at nunc commodo placerat praesent blandit nam', 'Khaki', 7, '2020-04-16T23:08:07Z');
    // insert into post (title, type, "creatorId", "createdAt") values ('nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede', 'Turquoise', 7, '2020-06-07T09:59:00Z');
    // insert into post (title, type, "creatorId", "createdAt") values ('congue eget semper rutrum nulla nunc purus phasellus in felis donec semper', 'Crimson', 7, '2020-08-18T21:41:09Z');
    // insert into post (title, type, "creatorId", "createdAt") values ('lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed', 'Fuscia', 7, '2021-01-21T03:09:45Z');
    // insert into post (title, type, "creatorId", "createdAt") values ('volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac consequat metus', 'Khaki', 7, '2020-10-03T07:30:59Z');
    // insert into post (title, type, "creatorId", "createdAt") values ('luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh', 'Purple', 7, '2020-04-25T06:27:27Z');
    // insert into post (title, type, "creatorId", "createdAt") values ('nulla sed accumsan felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices', 'Teal', 7, '2020-07-03T14:16:33Z');
    // insert into post (title, type, "creatorId", "createdAt") values ('a libero nam dui proin leo odio porttitor id consequat in consequat', 'Blue', 7, '2020-04-17T14:16:50Z');
    // insert into post (title, type, "creatorId", "createdAt") values ('nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse', 'Pink', 7, '2020-06-19T05:48:44Z');
    // insert into post (title, type, "creatorId", "createdAt") values ('lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit amet nulla quisque', 'Teal', 7, '2020-12-25T15:26:24Z');
    // insert into post (title, type, "creatorId", "createdAt") values ('nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel', 'Goldenrod', 7, '2020-05-27T10:01:08Z');
    // insert into post (title, type, "creatorId", "createdAt") values ('nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in', 'Purple', 7, '2021-03-01T14:05:01Z');
    // insert into post (title, type, "creatorId", "createdAt") values ('lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus', 'Red', 7, '2020-10-29T01:18:25Z');
    // insert into post (title, type, "creatorId", "createdAt") values ('dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices', 'Red', 7, '2020-10-19T11:18:39Z');
    // insert into post (title, type, "creatorId", "createdAt") values ('urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate', 'Violet', 7, '2020-12-14T09:58:36Z');
    // insert into post (title, type, "creatorId", "createdAt") values ('suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper', 'Blue', 7, '2021-02-06T17:49:51Z');
    // insert into post (title, type, "creatorId", "createdAt") values ('fusce congue diam id ornare imperdiet sapien urna pretium nisl ut', 'Red', 7, '2020-06-05T19:22:29Z');
    // insert into post (title, type, "creatorId", "createdAt") values ('non velit donec diam neque vestibulum eget vulputate ut ultrices', 'Teal', 7, '2020-07-15T05:11:39Z');
    // insert into post (title, type, "creatorId", "createdAt") values ('eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris', 'Khaki', 7, '2021-02-21T19:58:18Z');
    // insert into post (title, type, "creatorId", "createdAt") values ('sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo', 'Puce', 7, '2020-06-03T05:42:27Z');
    // insert into post (title, type, "creatorId", "createdAt") values ('aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem', 'Maroon', 7, '2021-02-18T11:42:09Z');
    // insert into post (title, type, "creatorId", "createdAt") values ('aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea', 'Teal', 7, '2020-12-15T18:02:29Z');
    // insert into post (title, type, "creatorId", "createdAt") values ('proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio', 'Puce', 7, '2020-07-09T19:35:00Z');
    // insert into post (title, type, "creatorId", "createdAt") values ('mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes', 'Maroon', 7, '2020-04-08T20:30:36Z');
    // insert into post (title, type, "creatorId", "createdAt") values ('id lobortis convallis tortor risus dapibus augue vel accumsan tellus', 'Puce', 7, '2020-10-21T06:09:14Z');
    // insert into post (title, type, "creatorId", "createdAt") values ('sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes', 'Teal', 7, '2020-12-12T07:58:57Z');
    // insert into post (title, type, "creatorId", "createdAt") values ('justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed', 'Yellow', 7, '2020-08-23T04:31:12Z');
    // insert into post (title, type, "creatorId", "createdAt") values ('eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis augue', 'Yellow', 7, '2020-10-12T23:25:16Z');
    // insert into post (title, type, "creatorId", "createdAt") values ('ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at', 'Goldenrod', 7, '2021-03-24T17:05:18Z');
    // insert into post (title, type, "creatorId", "createdAt") values ('eros vestibulum ac est lacinia nisi venenatis tristique fusce congue', 'Maroon', 7, '2020-10-27T22:40:03Z');
    // insert into post (title, type, "creatorId", "createdAt") values ('gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio', 'Goldenrod', 7, '2020-12-18T23:20:25Z');
    // insert into post (title, type, "creatorId", "createdAt") values ('vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh', 'Mauv', 7, '2021-03-13T14:01:41Z');
    // insert into post (title, type, "creatorId", "createdAt") values ('adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue', 'Goldenrod', 7, '2021-03-20T02:07:40Z');
    // insert into post (title, type, "creatorId", "createdAt") values ('vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer', 'Teal', 7, '2021-01-29T23:02:26Z');
    // insert into post (title, type, "creatorId", "createdAt") values ('felis donec semper sapien a libero nam dui proin leo odio', 'Goldenrod', 7, '2020-04-10T09:19:57Z');
    // insert into post (title, type, "creatorId", "createdAt") values ('eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa', 'Blue', 7, '2020-06-30T17:54:03Z');
    // insert into post (title, type, "creatorId", "createdAt") values ('praesent lectus vestibulum quam sapien varius ut blandit non interdum in ante vestibulum ante ipsum', 'Orange', 7, '2020-08-25T20:03:01Z');
    // insert into post (title, type, "creatorId", "createdAt") values ('elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in', 'Puce', 7, '2020-12-16T16:48:08Z');
    // insert into post (title, type, "creatorId", "createdAt") values ('suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum', 'Crimson', 7, '2020-08-11T06:03:28Z');
    // insert into post (title, type, "creatorId", "createdAt") values ('rutrum rutrum neque aenean auctor gravida sem praesent id massa', 'Yellow', 7, '2020-12-18T01:17:36Z');
    // insert into post (title, type, "creatorId", "createdAt") values ('sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue', 'Fuscia', 7, '2020-05-22T07:10:38Z');
    // insert into post (title, type, "creatorId", "createdAt") values ('ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar', 'Maroon', 7, '2020-09-06T07:09:35Z');
    // insert into post (title, type, "creatorId", "createdAt") values ('neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi', 'Puce', 7, '2020-12-08T08:35:17Z');
    // insert into post (title, type, "creatorId", "createdAt") values ('id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed', 'Puce', 7, '2021-02-15T09:26:11Z');
    // insert into post (title, type, "creatorId", "createdAt") values ('potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis', 'Indigo', 7, '2020-07-16T05:16:11Z');
    // insert into post (title, type, "creatorId", "createdAt") values ('diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed', 'Mauv', 7, '2020-12-07T17:43:00Z');
    // insert into post (title, type, "creatorId", "createdAt") values ('donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis', 'Khaki', 7, '2021-04-02T19:45:29Z');
    // insert into post (title, type, "creatorId", "createdAt") values ('in est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla', 'Violet', 7, '2021-04-02T02:33:25Z');
    // insert into post (title, type, "creatorId", "createdAt") values ('proin at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum', 'Mauv', 7, '2020-06-13T08:22:05Z');
    // insert into post (title, type, "creatorId", "createdAt") values ('aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent', 'Blue', 7, '2020-07-21T21:03:22Z');
    // insert into post (title, type, "creatorId", "createdAt") values ('tincidunt lacus at velit vivamus vel nulla eget eros elementum', 'Fuscia', 7, '2021-02-19T19:44:24Z');
    // insert into post (title, type, "creatorId", "createdAt") values ('mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum', 'Puce', 7, '2021-03-28T15:07:00Z');
    // insert into post (title, type, "creatorId", "createdAt") values ('pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est', 'Indigo', 7, '2020-07-10T22:17:13Z');
    // insert into post (title, type, "creatorId", "createdAt") values ('nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis', 'Crimson', 7, '2020-07-19T08:34:00Z');
    // insert into post (title, type, "creatorId", "createdAt") values ('aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus', 'Indigo', 7, '2021-03-05T07:49:08Z');
    // insert into post (title, type, "creatorId", "createdAt") values ('pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim', 'Turquoise', 7, '2020-04-10T05:38:33Z');
    // insert into post (title, type, "creatorId", "createdAt") values ('luctus nec molestie sed justo pellentesque viverra pede ac diam cras', 'Mauv', 7, '2021-03-07T18:09:03Z');
    // insert into post (title, type, "creatorId", "createdAt") values ('cras in purus eu magna vulputate luctus cum sociis natoque penatibus et', 'Turquoise', 7, '2021-01-10T12:39:30Z');
    // insert into post (title, type, "creatorId", "createdAt") values ('libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo', 'Teal', 7, '2020-11-09T19:03:52Z');
    // insert into post (title, type, "creatorId", "createdAt") values ('vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum', 'Pink', 7, '2020-11-07T22:54:08Z');
    // insert into post (title, type, "creatorId", "createdAt") values ('donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla', 'Fuscia', 7, '2021-01-25T22:13:14Z');
    // insert into post (title, type, "creatorId", "createdAt") values ('vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac', 'Purple', 7, '2021-01-13T17:37:51Z');
    // insert into post (title, type, "creatorId", "createdAt") values ('viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien', 'Mauv', 7, '2020-05-11T09:15:15Z');
    // insert into post (title, type, "creatorId", "createdAt") values ('natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam', 'Purple', 7, '2020-06-18T00:41:32Z');
    // insert into post (title, type, "creatorId", "createdAt") values ('cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes', 'Goldenrod', 7, '2020-09-30T22:12:14Z');
    // insert into post (title, type, "creatorId", "createdAt") values ('id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget', 'Turquoise', 7, '2021-01-14T22:28:52Z');
    // insert into post (title, type, "creatorId", "createdAt") values ('aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed', 'Red', 7, '2020-08-10T06:39:25Z');
    // insert into post (title, type, "creatorId", "createdAt") values ('aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus', 'Teal', 7, '2021-02-19T08:35:57Z');
    // insert into post (title, type, "creatorId", "createdAt") values ('lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer', 'Mauv', 7, '2021-01-05T23:42:58Z');
    // insert into post (title, type, "creatorId", "createdAt") values ('maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum', 'Crimson', 7, '2020-11-19T17:48:21Z');
    // insert into post (title, type, "creatorId", "createdAt") values ('consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor', 'Maroon', 7, '2021-02-09T02:57:06Z');
    // insert into post (title, type, "creatorId", "createdAt") values ('non interdum in ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan', 'Yellow', 7, '2020-06-16T05:54:01Z');
    // insert into post (title, type, "creatorId", "createdAt") values ('lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien', 'Aquamarine', 7, '2020-11-28T17:30:14Z');
    // insert into post (title, type, "creatorId", "createdAt") values ('convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus', 'Green', 7, '2020-04-14T21:41:22Z');
    // insert into post (title, type, "creatorId", "createdAt") values ('a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum', 'Indigo', 7, '2020-07-27T12:25:12Z');
    // insert into post (title, type, "creatorId", "createdAt") values ('in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat', 'Orange', 7, '2020-12-06T13:27:13Z');
    // insert into post (title, type, "creatorId", "createdAt") values ('curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi', 'Teal', 7, '2021-02-20T17:02:45Z');
    // insert into post (title, type, "creatorId", "createdAt") values ('dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros', 'Purple', 7, '2020-06-11T02:45:13Z');
    // insert into post (title, type, "creatorId", "createdAt") values ('sapien placerat ante nulla justo aliquam quis turpis eget elit sodales', 'Crimson', 7, '2020-09-24T07:39:35Z');
    // insert into post (title, type, "creatorId", "createdAt") values ('eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam dui proin leo', 'Purple', 7, '2021-01-30T09:28:59Z');
    // insert into post (title, type, "creatorId", "createdAt") values ('quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst', 'Purple', 7, '2020-06-30T06:34:47Z');
    // insert into post (title, type, "creatorId", "createdAt") values ('justo eu massa donec dapibus duis at velit eu est congue elementum in hac habitasse platea dictumst morbi', 'Maroon', 7, '2020-09-17T14:31:27Z');
    // insert into post (title, type, "creatorId", "createdAt") values ('nonummy integer non velit donec diam neque vestibulum eget vulputate ut', 'Mauv', 7, '2020-09-16T17:43:57Z');
    // insert into post (title, type, "creatorId", "createdAt") values ('mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed vel enim sit', 'Fuscia', 7, '2020-04-23T12:01:13Z');
    // insert into post (title, type, "creatorId", "createdAt") values ('ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit', 'Mauv', 7, '2020-08-16T14:42:27Z');
    // insert into post (title, type, "creatorId", "createdAt") values ('viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam', 'Mauv', 7, '2020-08-20T03:47:32Z');
    // insert into post (title, type, "creatorId", "createdAt") values ('ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec', 'Goldenrod', 7, '2021-01-07T10:26:24Z');
    // insert into post (title, type, "creatorId", "createdAt") values ('donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede', 'Maroon', 7, '2020-11-27T10:37:41Z');
    // insert into post (title, type, "creatorId", "createdAt") values ('luctus et ultrices posuere cubilia curae nulla dapibus dolor vel', 'Violet', 7, '2021-02-11T00:49:31Z');
    // insert into post (title, type, "creatorId", "createdAt") values ('eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus', 'Aquamarine', 7, '2020-09-21T02:46:03Z');
    // insert into post (title, type, "creatorId", "createdAt") values ('praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi', 'Puce', 7, '2020-12-04T08:54:19Z');
    // insert into post (title, type, "creatorId", "createdAt") values ('justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse', 'Khaki', 7, '2021-03-25T09:26:24Z');
    // insert into post (title, type, "creatorId", "createdAt") values ('maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu', 'Aquamarine', 7, '2021-02-27T17:32:02Z');
    // insert into post (title, type, "creatorId", "createdAt") values ('lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor', 'Maroon', 7, '2020-05-26T02:41:43Z');
    // insert into post (title, type, "creatorId", "createdAt") values ('cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra', 'Fuscia', 7, '2020-11-13T07:24:49Z');
    // insert into post (title, type, "creatorId", "createdAt") values ('vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit', 'Fuscia', 7, '2020-04-21T13:08:34Z');
    // insert into post (title, type, "creatorId", "createdAt") values ('lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in', 'Teal', 7, '2020-04-16T10:11:53Z');
    // insert into post (title, type, "creatorId", "createdAt") values ('ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam', 'Indigo', 7, '2020-04-27T17:43:19Z');
    //         `);
  }

  public async down(_: QueryRunner): Promise<void> {}
}
