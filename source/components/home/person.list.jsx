import React, { PropTypes } from 'react';
import PersonInfo from './person.info';

const PersonList = ({persons}) => {
    return (
        <div className="person-list">
            {
                persons.map((person, index) =>
                    <PersonInfo key={index} person={person} />
                )
            }
        </div>
    );
};

// validation rules
PersonList.propTypes = {
    persons: PropTypes.array.isRequired
};

export default PersonList;