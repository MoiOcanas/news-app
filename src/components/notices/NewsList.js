import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NewsList extends Component {
    render() {
        const { notices } = this.props;
        return (
            <div className="row">
                <div className="col s12 m10 offset-m1">
                    {
                        notices && notices.map(n => {
                            return (
                                <div className="card-new">
                                        <h4>{ n.title }</h4>
                                        <p>{ n.content }</p>
                                        <p><strong>By:</strong> <span className="purple-text">{ n.authorFirstName } { n.authorLastName }</span></p>
                                        <p><strong>Tags:</strong> { n.tags }</p>
                                        <hr />
                                        <Link to={`/notice/${n.id}`}>
                                            <h6 className="purple-text" href="#">Notice details</h6>
                                        </Link>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

export default NewsList;
