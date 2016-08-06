import React from 'react';
import { Link } from 'react-router';

import { IndexLink, link } from 'react-router';

class List extends React.Component {
    render() {
        return (
            <div>
                <p> You are here:
                    <IndexLink to="/" activeClassName="active" >
                        Home
                    </IndexLink>
                </p>
                <p> Please choose a reponsitory from the list below. </p>
                <ul>
                    <li><Link to="/detail/react"> React </Link> </li>
                    <li><Link to="/detail/react-native">React Native</Link></li>
                    <li><Link to="/detail/jest">Jest</Link></li>
                </ul>
            </div>
        );
    }
}

export default List;
