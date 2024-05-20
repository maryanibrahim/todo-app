import React from 'react';
import PropTypes from 'prop-types';
import "./Tag.css";

const Tag = ({ tagName, selectTag, selected }) => {
    // Corrected property name and fixed hex color code
    const tagStyle = {
        Study: {backgroundColor: "#fda821"},
        Diet: {backgroundColor: "#15d4c5"},  // Corrected the color code
        Gym: {backgroundColor: "#ffd12c"},
        default: {backgroundColor: "#f9f9f9"}
    };

    // Use the tagName or default style based on 'selected' status
    const style = selected ? tagStyle[tagName] || tagStyle.default : tagStyle.default;

    return (
        <button 
            type='button'
            className='tag' 
            style={style}
            onClick={() => selectTag(tagName)}
        >
            {tagName}
        </button>
    );
};

// Added 'selected' prop and improved existing PropTypes
Tag.propTypes = {
    tagName: PropTypes.string.isRequired, // tagName should be a string and is required
    selectTag: PropTypes.func.isRequired,  // selectTag should be a function and is required
    selected: PropTypes.bool // 'selected' is not marked as required assuming it's optional
};

export default Tag;
