import React from 'react';
import moment from 'moment';

const AdtionalInformation = (props) => {
    const { notifications } = props;
    console.log(notifications);
    return (
        <div>
            <h4>Notificacions</h4>
            <div>
                {
                    notifications && notifications.map(item => {
                        return (
                            <div className="card-new" key={item.id}>
                                <h5 className="purple-text">{item.user}</h5>
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
