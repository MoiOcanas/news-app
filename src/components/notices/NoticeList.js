import React from 'react';

//Components
import NoticeItem from './NoticeItem';

const NoticeList = ({ notices }) => {
    return (
        <div>
            <h4>News</h4>
            {
                notices && notices.map(notice => {
                    return (
                        <NoticeItem key={notice.id} notice={notice} />
                    );
                })
            }
        </div>
    );
}

export default NoticeList;
