import React from 'react';

const PersonInfo = ({person}) => {
    const {name, about, job, gender, age} = person;
    return (
        <div className="person-row">
            <header className="title">
                <div className="name">
                    {name.first} {name.last}
                </div>
                <div className="spec">
                    <span className="job-title">{job.title}</span>
                    <span className="job-status">{job.status}</span>
                </div>
                <div className="details">
                    <div className="gender">
                        <span>Gender '{gender}</span>
                    </div>
                    <div className="age">
                        <span>Age '{age}</span>
                    </div>
                </div>
            </header>
            <p className="about">{about}</p>
        </div>
    );
};

export default PersonInfo;