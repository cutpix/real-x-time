import React from 'react';
import TextInput from '../common/text.input';
import SelectInput from '../common/select.input';

const CourseForm = ({course, allAuthors, onSave, onChange, loading, errors}) => {
    return (
        <form>
            <h1>Manage Course Form</h1>
            <TextInput
                name="title"
                label="Title"
                value={course.title}
                onChange={onChange}
                error={errors.title} />
            <SelectInput
                name="authorId"
                label="Author"
                value={course.authorId}
                defaultOption="Select Author"
                options={allAuthors}
                onChange={onChange}
                error={errors.authorId} />
            <TextInput
                name=""
                label=""
                value={course.category}
                onChange={onChange}
                error={errors.category} />
            <TextInput />
            <input
                type="submit"
                disabled={loading}
                value={loading ? 'Saving...' : 'Save'}
                className="btn btn-primary"
                onClick={onSave} />
        </form>
    );
};

export default CourseForm;