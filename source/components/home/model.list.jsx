import React, { PropTypes } from 'react';
import ModelItem from './model.item';

const ModelList = ({data}) => {
    return (
        <div className={"model-list"}>
            {
                data.map((model, i) =>
                    <ModelItem key={i} item={model} />
                )
            }
        </div>
    );
};

// validation rules
ModelList.propTypes = {
    data: PropTypes.array.isRequired
};

export default ModelList;