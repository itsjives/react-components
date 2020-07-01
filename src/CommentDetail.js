import React from 'react';
import faker from 'faker';

const CommentDetail = props => {
    console.log(props);
    return (
        <div className="comment">
                <a href="/" className="avatar">
                    <img src={faker.image.avatar()}/>
                </a>
                <div className="content">
                    <a href="/" className="author">
                        {props.author}
                    </a>
                    <div className="metadata">
                        <span className="date">Today at 6pm</span>
                    </div>
                    <div className="text">Nice Post!</div>
                </div>
        </div>
    );
};

export default CommentDetail; 