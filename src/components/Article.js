import React from 'react';

function Article({title, date="January 1, 1970", preview, emoji, minutes}){
    return (
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <span>{emoji} {minutes} minutes read</span>
            <p>{preview}</p>
        </article>
    );
}

export default Article;