import React from 'react';
import ajax from 'superagent';

import Info from '../../components/info/Info';
import Resume from '../../components/resume/Resume';
import Mentor from '../../components/mentor/Mentor';
import Comments from '../../components/comments/Comments';
import Date from '../../components/date/Date';
import Call from '../../components/call/Call';

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            mentorId: this.props.params.mentorId,
            error: {
                code: 0,
                msg: "ok"
            },
            info: {
                id: "",
                avatar: "",
                gender: "",
                nick_name: "",
                latest_work: "",
                industrys: []
            },
            call: {},
            resume: {
                works: [],
                edus: []
            },
            mentor: {},
            comments: {
                commentsData: [],
                count: 0
            }
        }
    }

    componentWillMount () {
        const baseURL = '/api/mentors';
        const id = this.props.params.mentorId;

        ajax.get(`${baseURL}/${id}`)
            .end((error, response) => {
                    if( !error && response ) {

                        let data = response.body.data;
                        console.log("set state kkkkkkk");

                        this.setState({
                            error: {
                                code: response.body.errorCode,
                                msg: response.body.errorMsg
                            },
                            info:{
                                id: data.id,
                                avatar: data.avatar_url,
                                gender: data.gender_description,
                                nick_name: data.nick_name,
                                latest_work: data.latest_work,
                                industrys: data.industrys
                            },
                            resume: {
                                works: data.workinfos,
                                edus: data.eduinfos
                            },
                            mentor: {
                                gender: data.gender_description,
                                text: data.bio
                            },
                            comments: {
                                count: data.comments_count,
                                commentsData: data.comments
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
                <Comments data={this.state.comments} />
                <Date />
            </div>
            );
    }
}

Profile.propTypes = {
    children: React.PropTypes.node
}

export default Profile;
