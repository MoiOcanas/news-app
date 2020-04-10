import React from 'react';
import moment from 'moment';

const AdtionalInformation = (props) => {
    const { notifications } = props;
    return (
        <div>
            <div>
                {
                    notifications && notifications.map(item => {
                        return (
                            <div className="card-secondary" key={item.id}>
                                <h5>{item.user}</h5>
                                <p>{item.content}</p>
                                <hr />
                                <div className="grey-text note-date">
                                    {moment(item.time.toDate()).fromNow()}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}


export default AdtionalInformation; 
