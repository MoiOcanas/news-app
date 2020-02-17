import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment'

const NoticeSummary = ({ notice }) => {
    return (
        <div className="card-noti" key={notice.id}>
            <h4 className="purple-text">{notice.title}</h4>
            <p>{notice.content}</p>
            <p><strong>By:</strong> <span className="purple-text">{notice.authorFirstName} {notice.authorLastName}</span></p>
            <p><strong>Tags:</strong> {notice.tags}</p>
            <hr />
            <p className="grey-text">{notice.createdAt ?
                moment(notice.createdAt.toDate().toString()).calendar() :
                null}</p>
            <Link to={`/notice/${notice.id}`} className="btn purple darken-1 z-depth-0" key={notice.id}>
                <h6 className="purple-text white-text">Notice details</h6>
            </Link>
        </div>
    );
}

export default NoticeSummary;