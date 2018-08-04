import React from 'react';
import { MyContextConsumer } from '../CommentsContext/index';

const Comments = () => (
    <MyContextConsumer>
        {context => (
            <div>
                {!!context.comments &&
                    <ul>
                        {context.comments.map(comment => (
                            <li key={comment.id}>
                                {comment.body}
                            </li>
                        ))}
                    </ul>}
            </div>)
        }
    </MyContextConsumer>
);

export default Comments;
