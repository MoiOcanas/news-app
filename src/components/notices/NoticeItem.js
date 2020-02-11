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
                    <p><strong>Tags:</strong> <span className="purple-text">{notice.tags}</span></p>
                </div>
                <hr />
                <Link to={`/notice/${notice.id}`}>
                    <span className="purple-text" href="#">Notice details</span>
                </Link>

            </div>
        </div>
    );
}

export default NoticeItem;
