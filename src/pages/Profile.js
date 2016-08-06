import React from 'react';
import Nav from '../components/Nav';
import Info from '../components/Info';
import Resume from '../components/Resume';
import Comments from '../components/Comments';
import Date from '../components/Date';
import Call from '../components/Call';

class Profile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Nav />
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
