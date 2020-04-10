import React from 'react';
import { Link } from 'react-router-dom';

const NoticeSummary = ({ notice }) => {
    return (
        <div className="card-secondary">
            <h4>{notice.title}</h4>
            <p>{notice.content}</p>
            <p><b>By:</b> <span>{notice.authorFirstName} {notice.authorLastName}</span></p>
            <p><b>Tags:</b> {notice.tags}</p>
            <div className="text-center m-1">
                <Link to={`/notice/${notice.id}`} className="details-link" key={notice.id}>
                    details
                </Link>
            </div>
        </div>
    );
}

export default NoticeSummary;