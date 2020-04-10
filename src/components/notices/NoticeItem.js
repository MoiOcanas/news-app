import React from 'react';
import { Link } from 'react-router-dom';

const NoticeItem = ({ notice }) => {
    return (
        <div>
            <div className="card-new">
                <div className="card-content">
                    <h4>{notice.title}</h4>

                    <p>{notice.content}</p>
                    <br />
                    <p><b>Tags:</b> <span>{notice.tags}</span></p>
                </div>
                <hr />
                <Link to={`/notice/${notice.id}`}>
                    <button className="btn purple darken-1">Notice Details</button>
                </Link>

            </div>
        </div>
    );
}

export default NoticeItem;
