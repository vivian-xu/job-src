import React from 'react';
import ajax from 'superagent';

import Info from '../components/info/Info';
import Resume from '../components/resume/Resume';
import Comments from '../components/comments/Comments';
import Date from '../components/date/Date';
import Call from '../components/call/Call';

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            profile:{}
        }
    }

    componentWillMount () {
        const baseURL = 'http://sf.jackon.me/api/accounts';
        const id = "1";
        ajax.get(`${baseURL}/${id}/`)
            .withCredentials()
            .set({"dataType":"jsonp",
                    'Content-type': 'application/json'
        })
            .end((error, response) => {
                    if( !error && response ) {
                        this.setState({profile: response.body });
                } else {
                    console.error(`Error fetching ${name} `, error);
             }
        });

        console.log(this.state.profile );
    }


    render() {
        return (
            <div>
                <Info />
                <Call />
                <Resume />
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
