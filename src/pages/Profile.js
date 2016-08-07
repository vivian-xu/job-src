import React from 'react';
import Info from '../components/info/Info';
import Resume from '../components/resume/Resume';
import Comments from '../components/comments/Comments';
import Date from '../components/date/Date';
import Call from '../components/call/Call';

class Profile extends React.Component {
    constructor(props) {
        super(props);
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
