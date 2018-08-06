import React from 'react';
import { Collapse } from 'antd';
import FetchHOC from '../Patterns/FetchHOC';
import styles from '../../components/Comments/Comments.scss';

const { Panel } = Collapse;

const Comments = comments => (
    <Collapse>
        <Panel header="Comments" key="1">
            <ul className={styles.commentsText}>
                {(comments && comments.data) && comments.data.map(c => (
                    <li key={c.id}>
                        <p>{c.email}</p>
                        <p>{c.name}</p>
                        <p>{c.body}</p>
                    </li>),
                )
                }
            </ul>
        </Panel>
    </Collapse>
);

export default FetchHOC(Comments);
