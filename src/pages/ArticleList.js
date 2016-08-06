import React from 'react';


import Slide from '../components/Slide';
import ArticleBlock from '../components/ArticleBlock';


class ArticleList extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'ArticleList';
    }
    render() {
        return (
            <div>
                <Slide  />
                <ArticleBlock />
            </div>
        );
    }
}

export default ArticleList;
