import React from 'react';
import blogData from '../data/blog';
import Article  from './Article';

function ArticleList() {
    console.log(blogData);
    let postInfo = blogData.posts;
    const mappedArticles = postInfo.map((post) => {
        return (
            <Article key={post.id} title={post.title} date={post.date} preview={post.preview} minutes={post.minutes}/>
        );
    })

    return (
        <main>
            {mappedArticles}
        </main>
    );
}

export default ArticleList;