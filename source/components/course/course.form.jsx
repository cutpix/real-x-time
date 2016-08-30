import React from 'react';
import TextInput from '../common/text.input';
import SelectInput from '../common/select.input';

const CourseForm = (props) => {
    return (
        <form>
            <h1>Manage Course Form</h1>
            <TextInput />
            <SelectInput />
            <TextInput />
            <TextInput />
            <input
                type="submit"
                disabled={props.loading}
                value={props.loading ? 'Saving...' : 'Save'}
                className="btn btn-primary"
                onClick={props.onSave} />
        </form>
    );
};

export default CourseForm;