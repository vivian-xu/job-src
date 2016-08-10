import React from 'react';
import ajax from 'superagent';

import Info from '../components/info/Info';
import Resume from '../components/resume/Resume';
import Mentor from '../components/mentor/Mentor';
import Comments from '../components/comments/Comments';
import Date from '../components/date/Date';
import Call from '../components/call/Call';

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            test: [
                {
                    flag: '0',
                    test: 'test1'
                },
                {
                    flag: '0',
                    test: 'test1'
                },
            ],
            error: {
                code: 0,
                msg: "ok"
            },
            info: {
                // id: "",
                avatar: "",
                gender: "",
                industrys: []
                // email: "",
            },
            call: {},
            resume: {
                works: [],
                edus: []
            },
            mentor: {},
            date: {}
        }
    }

    componentWillMount () {
        const baseURL = '/api/accounts';
        const id = "1";

        ajax.get(`${baseURL}/${id}/`)
            .end((error, response) => {
                    if( !error && response ) {

                        let data = response.body.data;
                        console.log("set state kkkkkkk");

                        let industrys = [];
                        for( var key in data.mentorprofile ){
                            if( key.indexOf('industry') != -1 ) {
                                industrys.push( data.mentorprofile[key] );
                            }
                        }

                        this.setState({
                            test: [
                                   {
                                       flag: '0',
                                       test: 'test3'
                                   },
                                   {
                                       flag: '0',
                                       test: 'test4'
                                   },
                            ],
                            error: {
                                code: response.body.errorCode,
                                msg: response.body.errorMsg
                            },
                            info:{
                                id: data.mentorprofile.id,
                                avatar: data.avatar,
                                gender: data.gender,
                                nick_name: data.nick_name,
                                industrys: industrys
                                // name: offical_name
                            },
                            resume: {
                                works: data.workinfo_set,
                                edus: data.eduinfo_set
                            },
                            mentor: {
                                gender: data.gender,
                                text: ""
                            }
                        });
                        console.log('data nnnnnnnnnn');
                    } else {
                    console.error(`Error fetching ${name} `, error);
             }
        });
    }

    render() {
        console.log("render started");
        return (
            <div>
                <Info data={this.state.info} />
                <Call />
                <Resume data={this.state.resume} />
                <Mentor data={this.state.mentor} />
                <Comments />
                <Date />
            </div>
            );
    }
}

Profile.propTypes = {
    children: React.PropTypes.node
}

export default Profile;
