import React from 'react';

//Componenents
import NoticeSummary from './NoticeSummary';

const NewsList = ({ notices }) => {
    return (
        <div className="row">
            <div className="col s12 m10 offset-m1">
                {
                    notices && notices.map(n => {
                        return (
                            <NoticeSummary notice={n} key={n.id} />
                        );
                    })
                }
            </div>
        </div>
    );
}

export default NewsList;
