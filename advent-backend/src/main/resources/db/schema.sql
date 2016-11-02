CREATE TABLE calendar (
  id BIGINT PRIMARY KEY NOT NULL,
  link VARCHAR(255) NOT NULL
);

CREATE TABLE group_table
(
  id BIGINT PRIMARY KEY NOT NULL,
  group_name VARCHAR(255),
  group_picture_url VARCHAR(255),
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
  content VARCHAR(255),
  group_table_id BIGINT,
  FOREIGN KEY (group_table_id) REFERENCES group_table(id) ON UPDATE NO ACTION
);

CREATE TABLE event (
  id BIGINT PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
  start_date DATE,
  end_date DATE,
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
  (1000, 'displayName1', 'email@address.com',
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

INSERT INTO group_table VALUES (1, 'groupName', 'groupPictureUrl', 'tags', 'description');

INSERT INTO announcement VALUES (1, 'title', 'content', 1);

INSERT INTO notification VALUES (1, 'Sample Header', 'Sample Message', 'https://google.com', 'MESSAGE', 0, 1000);
INSERT INTO notification VALUES (2, 'Sample Header', 'Sample Message', 'https://google.com', 'MESSAGE', 1, 1000);
