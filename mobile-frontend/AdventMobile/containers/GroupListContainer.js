import React, { Component } from 'react';
import GroupList from './../components/GroupList';
import GroupViewContainer from './GroupViewContainer';
import { StyleSheet, Image } from 'react-native';
var Platform = require('react-native').Platform;

export default class GroupListContainer extends Component {
    constructor(props) {

        super(props);

        this.state = {
            groups: []
        };
        this.groupPage = this.groupPage.bind(this)
    }

    _fetchData(userEmail) {

        this.setState({groups:[
            {
                id: 1,
                groupName: userEmail,
                description: "description"
            },
            {
                "id":1000,
                "groupName":"Group 1",
                "groupPictureUrl":"https://apod.nasa.gov/apod/image/1509/TexasEclipse_Westlake_2642.jpg",
                "tags":"tags",
                "description":"description",
                "events":[
                    {
                        "id":1000,
                        "name":"Super Awesome Event",
                        "description":"This event takes place from 1pm-1pm",
                        "startDate":"2016-12-03 06:00:12",
                        "endDate":"2016-12-03 06:12:12",
                        "location":"Coover Hall 1000",
                        "private":false
                    },
                    {
                        "id":1001,
                        "name":"Super Awesome Event2",
                        "description":"This event takes place from 1pm-2pm",
                        "startDate":"2017-01-02 06:10:00",
                        "endDate":"2017-01-02 07:11:11",
                        "location":"Coover Hall 1001",
                        "private":false
                    },
                    {
                        "id":1002,
                        "name":"Super Awesome Event3",
                        "description":"This event takes place from 1pm-3pm",
                        "startDate":"2018-11-18 06:10:00",
                        "endDate":"2018-11-18 06:10:01",
                        "location":"Coover Hall 1011",
                        "private":false
                    },
                    {
                        "id":1003,
                        "name":"Super Awesome Event4",
                        "description":"This event takes place from 1pm-3pm",
                        "startDate":"2031-11-18 06:10:00",
                        "endDate":"2031-11-18 06:10:01",
                        "location":"Coover Hall 1011",
                        "private":false
                    },
                    {
                        "id":1004,
                        "name":"This Event is in the past",
                        "description":"This event should not appear",
                        "startDate":"2001-11-18 06:10:00",
                        "endDate":"2001-11-18 06:10:01",
                        "location":"Coover Hall 1011",
                        "private":false
                    }
                ],
                "userGroups":[
                    {
                        "id":1000,
                        "user":{
                            "id":1000,
                            "displayName":"displayName1",
                            "email":"szopanator@gmail.com",
                            "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec quam non velit aliquet varius et et magna. Sed condimentum, lacus nec sagittis posuere, lacus velit rhoncus diam, vitae blandit lectus neque nec arcu. Curabitur convallis luctus augue. Sed commodo sollicitudin aliquam. Donec at tristique enim, ut ornare quam. Sed at gravida massa. Sed sed dignissim dui. Curabitur a tortor sit amet risus consequat viverra. Cras cursus et massa a ultrices. Suspendisse vitae augue id arcu fringilla varius. Maecenas convallis metus leo, id mattis purus faucibus vitae. Nam posuere ultrices ex a ullamcorper. Nam mi massa, fermentum nec elit a, mattis luctus urna. Nam ut blandit sem, non efficitur odio. Curabitur nisl magna, luctus et tellus sed, egestas mattis mi.",
                            "pictureUrl":"http://xacatolicos.com/app/images/avatar/icon-user.png"
                        },
                        "group":{
                            "id":1000,
                            "groupName":"Group 1",
                            "groupPictureUrl":"https://apod.nasa.gov/apod/image/1509/TexasEclipse_Westlake_2642.jpg",
                            "tags":"tags",
                            "description":"description"
                        },
                        "role":"OWNER"
                    },
                    {
                        "id":1004,
                        "user":{
                            "id":0,
                            "displayName":"Colin Heinrichs",
                            "email":"chein@iastate.edu",
                            "description":"description",
                            "pictureUrl":"http://xacatolicos.com/app/images/avatar/icon-user.png"
                        },
                        "group":{
                            "id":1000,
                            "groupName":"Group 1",
                            "groupPictureUrl":"https://apod.nasa.gov/apod/image/1509/TexasEclipse_Westlake_2642.jpg",
                            "tags":"tags",
                            "description":"description"
                        },
                        "role":"ADMIN"
                    },
                    {
                        "id":1006,
                        "user":{
                            "id":1001,
                            "displayName":"displayName2",
                            "email":"email@email.iedu",
                            "description":"# Guttura tum hanc summoque illa\n\n ## Pavet est hunc\n\n Lorem markdownum verba, haec Marte, animalia luminis, sine genitoris in\n **corpora**, pristina revolutaque. Haeret sucus spectans nomina. Aqua vota porta\n est primus marmore animos carmine vidi, [quam sim](http://equorum-pecudis.org/)\n tibi aperire peremi calenti operisque procul.\n\n ## Furens cum suppressis dedit quare orbem fuerit\n\n Quo remigioque nempe, a pondere sperne: nodus vana efficient mora haustus. Ausum\n maenades motura! **Tu** calorem nomine.\n\n ## Pyrrham robora ab indignabere mugitu labor Tenedonque\n\n Ante ter, ad inter requiemque Iuppiter ossa suspiria verum sunt silet seu nondum\n validosque viva? Videtur cuius tecto priora, imago **orbem audetis**, sic, et\n pro sed ille de causamque. Manus partem de Marte insidere femina: poma repetita,\n domino! Scythiam petiisse auctor **mandere**, facerent misceat.\n\n - Ense cautes superest odiumque Dryopen ferrum ademit\n - Navalibus turba miserum valles pervenit acutior possent\n - Tritonida esset pars digna casus insonuit\n\n ## Tum sana genitor dimittit in fide negatur\n\n Tactusque haud formae ac haeserat **dimittit fateri** eripitur praestantia\n flore, [ditem](http://etmemorant.org/causa) sed *et* retinet, suos superest!\n Modo habet, sucos quae arescere suppressis sonus indomitae aeque, et Minyis.\n\n 1. Ante dubito motae\n 2. Receptus ingenii\n 3. Vaccam tollens praeter fretum\n 4. Iam ferarum illa ille\n\n ## Natis coeperat insequor\n\n Parte standi usque: Corythi tetigisse tacito corpora tempestiva omnes placebant\n terque dederint, nec coronam *quibus barbaricoque*. Valet de olivae rapienda\n domui lato nomen datis cognataque summoque. Altera Amphimedon fuit: nec cum,\n repetitaque forma melle recordor. Ulla in sustinuit ense tremendos fatalem\n sumptis [mihi opus](http://ducereaniles.io/promittitbuxoque), arces aetasque\n ocior mixtos, et tanto bracchia in auro. **Sinit venas nostro** deinde et\n despectabat genuisse repetit obrutus amanti.\n\n Quo *amantem*, cum aut hunc vel clausaeque, exiguus inclinavit stant; liceat.\n Conpellat retractat. Aut cuspide stipite; ille ora Labros posse suae nefas?",
                            "pictureUrl":"http://xacatolicos.com/app/images/avatar/icon-user.png"
                        },
                        "group":{
                            "id":1000,
                            "groupName":"Group 1",
                            "groupPictureUrl":"https://apod.nasa.gov/apod/image/1509/TexasEclipse_Westlake_2642.jpg",
                            "tags":"tags",
                            "description":"description"
                        },
                        "role":"MEMBER"
                    }
                ],
                "announcements":[
                    {
                        "id":1000,
                        "title":"Sample Title0",
                        "content":"# Guttura tum hanc summoque illa\n\n ## Pavet est hunc\n\n Lorem markdownum verba, haec Marte, animalia luminis, sine genitoris in\n **corpora**, pristina revolutaque. Haeret sucus spectans nomina. Aqua vota porta\n est primus marmore animos carmine vidi, [quam sim](http://equorum-pecudis.org/)\n tibi aperire peremi calenti operisque procul.\n\n ## Furens cum suppressis dedit quare orbem fuerit\n\n Quo remigioque nempe, a pondere sperne: nodus vana efficient mora haustus. Ausum\n maenades motura! **Tu** calorem nomine.\n\n ## Pyrrham robora ab indignabere mugitu labor Tenedonque\n\n Ante ter, ad inter requiemque Iuppiter ossa suspiria verum sunt silet seu nondum\n validosque viva? Videtur cuius tecto priora, imago **orbem audetis**, sic, et\n pro sed ille de causamque. Manus partem de Marte insidere femina: poma repetita,\n domino! Scythiam petiisse auctor **mandere**, facerent misceat.\n\n - Ense cautes superest odiumque Dryopen ferrum ademit\n - Navalibus turba miserum valles pervenit acutior possent\n - Tritonida esset pars digna casus insonuit",
                        "date":1347925672690,
                        "group":{
                            "id":1000,
                            "groupName":"Group 1",
                            "groupPictureUrl":"https://apod.nasa.gov/apod/image/1509/TexasEclipse_Westlake_2642.jpg",
                            "tags":"tags",
                            "description":"description"
                        }
                    },
                    {
                        "id":1001,
                        "title":"Sample Title1",
                        "content":"Sample Content1",
                        "date":1226469600000,
                        "group":{
                            "id":1000,
                            "groupName":"Group 1",
                            "groupPictureUrl":"https://apod.nasa.gov/apod/image/1509/TexasEclipse_Westlake_2642.jpg",
                            "tags":"tags",
                            "description":"description"
                        }
                    },
                    {
                        "id":1002,
                        "title":"Sample Title2",
                        "content":"Sample Content2",
                        "date":1226556000000,
                        "group":{
                            "id":1000,
                            "groupName":"Group 1",
                            "groupPictureUrl":"https://apod.nasa.gov/apod/image/1509/TexasEclipse_Westlake_2642.jpg",
                            "tags":"tags",
                            "description":"description"
                        }
                    },
                    {
                        "id":1003,
                        "title":"Sample Title3",
                        "content":"Sample Content3",
                        "date":1226642400000,
                        "group":{
                            "id":1000,
                            "groupName":"Group 1",
                            "groupPictureUrl":"https://apod.nasa.gov/apod/image/1509/TexasEclipse_Westlake_2642.jpg",
                            "tags":"tags",
                            "description":"description"
                        }
                    },
                    {
                        "id":1004,
                        "title":"Sample Title4",
                        "content":"Sample Content4",
                        "date":1226728800000,
                        "group":{
                            "id":1000,
                            "groupName":"Group 1",
                            "groupPictureUrl":"https://apod.nasa.gov/apod/image/1509/TexasEclipse_Westlake_2642.jpg",
                            "tags":"tags",
                            "description":"description"
                        }
                    },
                    {
                        "id":1005,
                        "title":"Sample Title5",
                        "content":"Sample Content5",
                        "date":1226815200000,
                        "group":{
                            "id":1000,
                            "groupName":"Group 1",
                            "groupPictureUrl":"https://apod.nasa.gov/apod/image/1509/TexasEclipse_Westlake_2642.jpg",
                            "tags":"tags",
                            "description":"description"
                        }
                    },
                    {
                        "id":1006,
                        "title":"Sample Title6",
                        "content":"Sample Content6",
                        "date":1226901600000,
                        "group":{
                            "id":1000,
                            "groupName":"Group 1",
                            "groupPictureUrl":"https://apod.nasa.gov/apod/image/1509/TexasEclipse_Westlake_2642.jpg",
                            "tags":"tags",
                            "description":"description"
                        }
                    },
                    {
                        "id":1007,
                        "title":"Sample Title7",
                        "content":"Sample Content7",
                        "date":1226988000000,
                        "group":{
                            "id":1000,
                            "groupName":"Group 1",
                            "groupPictureUrl":"https://apod.nasa.gov/apod/image/1509/TexasEclipse_Westlake_2642.jpg",
                            "tags":"tags",
                            "description":"description"
                        }
                    },
                    {
                        "id":1008,
                        "title":"Sample Title8",
                        "content":"Sample Content8",
                        "date":1227074400000,
                        "group":{
                            "id":1000,
                            "groupName":"Group 1",
                            "groupPictureUrl":"https://apod.nasa.gov/apod/image/1509/TexasEclipse_Westlake_2642.jpg",
                            "tags":"tags",
                            "description":"description"
                        }
                    },
                    {
                        "id":1009,
                        "title":"Sample Title9",
                        "content":"Sample Content9",
                        "date":1227160800000,
                        "group":{
                            "id":1000,
                            "groupName":"Group 1",
                            "groupPictureUrl":"https://apod.nasa.gov/apod/image/1509/TexasEclipse_Westlake_2642.jpg",
                            "tags":"tags",
                            "description":"description"
                        }
                    }
                ]
            }

        ]});
        // fetch('http://proj-309-la-03.cs.iastate.edu/api/auth/group/my-groups/' + userEmail, {
        //     method: 'GET',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json',
        //     }
        // })
        //     .then((response) => response.json())
        //     .then((responseData) => {
        //
        //         this.setState({groups:responseData});
        //     })
        //     .done();
    }

    groupPage(group) {

        this.props.toRoute({
            name: "Group",
            component: GroupViewContainer,
            passProps: {
                group: group,
            }
        });
    }

    componentDidMount() {
        this._fetchData(this.props.user.email)
    }

    render() {
        return <GroupList
            groups={this.state.groups}
            groupPage={this.groupPage}
        />;
    }
}