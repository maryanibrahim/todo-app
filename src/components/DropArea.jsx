import { useState } from 'react';
import PropTypes from 'prop-types';
import './DropArea.css';

const DropArea = ({ onDrop }) => {
    const [showDrop, setShowDrop] = useState(false);

    return (
        <section 
            onDragEnter={(e) => {
                e.preventDefault(); // Necessary to allow the drop event to fire
                setShowDrop(true);
            }}
            onDragOver={(e) => e.preventDefault()} // Necessary to allow the drop event to fire
            onDragLeave={() => setShowDrop(false)}
            onDragEnd={() => setShowDrop(false)}
            onDrop={(e) => {
                e.preventDefault(); // Prevent default action (open as link for some elements)
                onDrop(e); // Pass the event to the onDrop function
                setShowDrop(false);
            }}
            className={showDrop ? "drop_area" : "hide_drop"}
        >
            Drop Here
        </section>
    );
};

DropArea.propTypes = {
    onDrop: PropTypes.func.isRequired
};

export default DropArea;
