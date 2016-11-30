CREATE TABLE calendar (
  id BIGINT PRIMARY KEY NOT NULL,
  link VARCHAR(255) NOT NULL
);

CREATE TABLE group_table
(
  id BIGINT PRIMARY KEY NOT NULL,
  group_name VARCHAR(255),
  group_picture_url TEXT,
  tags VARCHAR(255),
  description VARCHAR(255)
);

CREATE TABLE user (
  id BIGINT PRIMARY KEY NOT NULL,
  display_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  picture_url VARCHAR(255)
);

CREATE TABLE announcement
(
  id BIGINT PRIMARY KEY NOT NULL,
  title VARCHAR(255),
  content TEXT,
  date TIMESTAMP,
  group_table_id BIGINT,
  FOREIGN KEY (group_table_id) REFERENCES group_table(id) ON UPDATE NO ACTION
);

CREATE TABLE event (
  id BIGINT PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
  start_date TIMESTAMP,
  end_date TIMESTAMP,
  location VARCHAR(255),
  is_private INTEGER,
  group_table_id BIGINT,
  FOREIGN KEY (group_table_id) REFERENCES group_table(id)
);

CREATE TABLE event_response (
  id BIGINT PRIMARY KEY NOT NULL,
  user_id BIGINT NOT NULL,
  event_id BIGINT NOT NULL,
  response VARCHAR(255),
  FOREIGN KEY (user_id) REFERENCES user(id),
  FOREIGN KEY  (event_id) REFERENCES event(id)
);

CREATE TABLE user_group (
  id BIGINT PRIMARY KEY NOT NULL,
  user_id BIGINT NOT NULL,
  group_table_id BIGINT NOT NULL,
  role VARCHAR(255),
  FOREIGN KEY (user_id) REFERENCES user(id),
  FOREIGN KEY (group_table_id) REFERENCES group_table(id)
);

CREATE TABLE notification (
  id BIGINT PRIMARY KEY NOT NULL,
  header VARCHAR(255),
  message VARCHAR(255),
  link VARCHAR(255),
  notification_type VARCHAR(255),
  is_read INT,
  user_id BIGINT,
  FOREIGN KEY (user_id) REFERENCES user(id)
);

INSERT INTO user (id, display_name, email, description, picture_url) VALUES
  (1000, 'displayName1', 'szopanator@gmail.com',
   'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec quam non velit aliquet varius et et magna. Sed condimentum, lacus nec sagittis posuere, lacus velit rhoncus diam, vitae blandit lectus neque nec arcu. Curabitur convallis luctus augue. Sed commodo sollicitudin aliquam. Donec at tristique enim, ut ornare quam. Sed at gravida massa. Sed sed dignissim dui. Curabitur a tortor sit amet risus consequat viverra. Cras cursus et massa a ultrices. Suspendisse vitae augue id arcu fringilla varius. Maecenas convallis metus leo, id mattis purus faucibus vitae. Nam posuere ultrices ex a ullamcorper. Nam mi massa, fermentum nec elit a, mattis luctus urna. Nam ut blandit sem, non efficitur odio. Curabitur nisl magna, luctus et tellus sed, egestas mattis mi.',
   'http://xacatolicos.com/app/images/avatar/icon-user.png'),
  (1001, 'displayName2', 'email@email.iedu',
   '# Guttura tum hanc summoque illa

 ## Pavet est hunc

 Lorem markdownum verba, haec Marte, animalia luminis, sine genitoris in
 **corpora**, pristina revolutaque. Haeret sucus spectans nomina. Aqua vota porta
 est primus marmore animos carmine vidi, [quam sim](http://equorum-pecudis.org/)
 tibi aperire peremi calenti operisque procul.

 ## Furens cum suppressis dedit quare orbem fuerit

 Quo remigioque nempe, a pondere sperne: nodus vana efficient mora haustus. Ausum
 maenades motura! **Tu** calorem nomine.

 ## Pyrrham robora ab indignabere mugitu labor Tenedonque

 Ante ter, ad inter requiemque Iuppiter ossa suspiria verum sunt silet seu nondum
 validosque viva? Videtur cuius tecto priora, imago **orbem audetis**, sic, et
 pro sed ille de causamque. Manus partem de Marte insidere femina: poma repetita,
 domino! Scythiam petiisse auctor **mandere**, facerent misceat.

 - Ense cautes superest odiumque Dryopen ferrum ademit
 - Navalibus turba miserum valles pervenit acutior possent
 - Tritonida esset pars digna casus insonuit

 ## Tum sana genitor dimittit in fide negatur

 Tactusque haud formae ac haeserat **dimittit fateri** eripitur praestantia
 flore, [ditem](http://etmemorant.org/causa) sed *et* retinet, suos superest!
 Modo habet, sucos quae arescere suppressis sonus indomitae aeque, et Minyis.

 1. Ante dubito motae
 2. Receptus ingenii
 3. Vaccam tollens praeter fretum
 4. Iam ferarum illa ille

 ## Natis coeperat insequor

 Parte standi usque: Corythi tetigisse tacito corpora tempestiva omnes placebant
 terque dederint, nec coronam *quibus barbaricoque*. Valet de olivae rapienda
 domui lato nomen datis cognataque summoque. Altera Amphimedon fuit: nec cum,
 repetitaque forma melle recordor. Ulla in sustinuit ense tremendos fatalem
 sumptis [mihi opus](http://ducereaniles.io/promittitbuxoque), arces aetasque
 ocior mixtos, et tanto bracchia in auro. **Sinit venas nostro** deinde et
 despectabat genuisse repetit obrutus amanti.

 Quo *amantem*, cum aut hunc vel clausaeque, exiguus inclinavit stant; liceat.
 Conpellat retractat. Aut cuspide stipite; ille ora Labros posse suae nefas?',
   'http://xacatolicos.com/app/images/avatar/icon-user.png'
  );

INSERT INTO group_table VALUES (1000, 'Group 1', 'https://apod.nasa.gov/apod/image/1509/TexasEclipse_Westlake_2642.jpg', 'tags', 'description');
INSERT INTO group_table VALUES (1001, 'Group 2', 'http://media.istockphoto.com/photos/grey-squirrel-yawning-picture-id473012660?k=6&m=473012660&s=170667a&w=0&h=_3LVLLvzKFXrrmOB9QBKtph2zmgO-nnUdxFfGmTX35w=', 'tags', 'This group has a pretty simple description: we like to look at squirrels.');
INSERT INTO group_table VALUES (1002, 'Group 3', 'http://kingofwallpapers.com/lion-picture/lion-picture-008.jpg', 'tags', 'This group likes to take pictures of lions!');
INSERT INTO group_table VALUES (1003, 'Group 4', 'http://i.dailymail.co.uk/i/pix/2015/11/23/11/2EB9334200000578-0-image-m-63_1448278563713.jpg', 'tags', 'Join the bird watching club today!');

INSERT INTO user_group (id, user_id, group_table_id, role) VALUES
  (1000, 1000, 1000, 'AmazingRole'),
  (1001, 1000, 1001, 'AmazingRole'),
  (1002, 1000, 1002, 'AmazingRole'),
  (1003, 1000, 1003, 'AmazingRole');

INSERT INTO announcement VALUES (1000, 'Sample Title0', '# Guttura tum hanc summoque illa

 ## Pavet est hunc

 Lorem markdownum verba, haec Marte, animalia luminis, sine genitoris in
 **corpora**, pristina revolutaque. Haeret sucus spectans nomina. Aqua vota porta
 est primus marmore animos carmine vidi, [quam sim](http://equorum-pecudis.org/)
 tibi aperire peremi calenti operisque procul.

 ## Furens cum suppressis dedit quare orbem fuerit

 Quo remigioque nempe, a pondere sperne: nodus vana efficient mora haustus. Ausum
 maenades motura! **Tu** calorem nomine.

 ## Pyrrham robora ab indignabere mugitu labor Tenedonque

 Ante ter, ad inter requiemque Iuppiter ossa suspiria verum sunt silet seu nondum
 validosque viva? Videtur cuius tecto priora, imago **orbem audetis**, sic, et
 pro sed ille de causamque. Manus partem de Marte insidere femina: poma repetita,
 domino! Scythiam petiisse auctor **mandere**, facerent misceat.

 - Ense cautes superest odiumque Dryopen ferrum ademit
 - Navalibus turba miserum valles pervenit acutior possent
 - Tritonida esset pars digna casus insonuit'
  , '2012-09-17 18:47:52.69', 1000);
INSERT INTO announcement VALUES (1001, 'Sample Title1', 'Sample Content1', '2008-11-12', 1000);
INSERT INTO announcement VALUES (1002, 'Sample Title2', 'Sample Content2', '2008-11-13', 1000);
INSERT INTO announcement VALUES (1003, 'Sample Title3', 'Sample Content3', '2008-11-14', 1000);
INSERT INTO announcement VALUES (1004, 'Sample Title4', 'Sample Content4', '2008-11-15', 1000);
INSERT INTO announcement VALUES (1005, 'Sample Title5', 'Sample Content5', '2008-11-16', 1000);
INSERT INTO announcement VALUES (1006, 'Sample Title6', 'Sample Content6', '2008-11-17', 1000);
INSERT INTO announcement VALUES (1007, 'Sample Title7', 'Sample Content7', '2008-11-18', 1000);
INSERT INTO announcement VALUES (1008, 'Sample Title8', 'Sample Content8', '2008-11-19', 1000);
INSERT INTO announcement VALUES (1009, 'Sample Title9', 'Sample Content9', '2008-11-20', 1000);
INSERT INTO announcement VALUES (1010, 'Sample Title10', 'Sample Content10', '2008-11-21', 1000);
INSERT INTO announcement VALUES (1011, 'Sample Title11', 'Sample Content11', '2008-11-22', 1000);
INSERT INTO announcement VALUES (1012, 'Sample Title12', 'Sample Content12', '2008-11-23', 1000);
INSERT INTO announcement VALUES (1013, 'Sample Title13', 'Sample Content13', '2008-11-24', 1000);
INSERT INTO announcement VALUES (1014, 'Sample Title14', 'Sample Content14 \n \n This is the first of many announcements', '2008-11-25', 1000);

INSERT INTO event VALUES (1000, 'Super Awesome Event', 'This event takes place from 1pm-1pm', '2028-11-15', '2008-11-15', 'Coover Hall 1000', 0, 1000);
INSERT INTO event VALUES (1001, 'Super Awesome Event2', 'This event takes place from 1pm-2pm', '2028-11-16', '2008-11-16', 'Coover Hall 1001', 0, 1000);
INSERT INTO event VALUES (1002, 'Super Awesome Event3', 'This event takes place from 1pm-3pm', '2018-11-18', '2008-11-18', 'Coover Hall 1011', 0, 1000);
INSERT INTO event VALUES (1003, 'Super Awesome Event4', 'This event takes place from 1pm-3pm', '2031-11-18', '2008-11-18', 'Coover Hall 1011', 0, 1000);
INSERT INTO event VALUES (1004, 'This Event is in the past', 'This event should not appear', '2001-11-18', '2008-11-18', 'Coover Hall 1011', 0, 1000);

INSERT INTO notification VALUES (1000, 'Sample Header', 'Sample Message', 'https://google.com', 'MESSAGE', 0, 1000);
INSERT INTO notification VALUES (1001, 'Sample Header', 'Sample Message', 'https://google.com', 'MESSAGE', 1, 1000);