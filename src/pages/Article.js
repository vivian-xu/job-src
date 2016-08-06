import React from 'react';
import Nav from '../components/ArticleNav';
import ArticleBody from '../components/ArticleBody';

class Article extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Article';
    }
    render() {
        return (
            <div className="article">
                <Nav />
                <ArticleBody />
            </div>
        );
    }
}

export default Article;
