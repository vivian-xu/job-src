import React from 'react';

import Slide from '../../components/slide/Slide';
import ArticleList from '../../components/articleList/ArticleList';


class ArticleListBlock extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'ArticleListBlock';
    }
    render() {
        return (
            <div>
                <Slide  />
                <ArticleList />
            </div>
        );
    }
}

export default ArticleListBlock;
