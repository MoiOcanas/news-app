import React from 'react';

//Components
import NoticeSummary from './NoticeSummary';

const NoticeList = ({ notices }) => {
    return (
        <div>
            {
                notices && notices.map(notice => {
                    return (
                        <NoticeSummary key={notice.id} notice={notice} />
                    );
                })
            }
        </div>
    );
}

export default NoticeList;
