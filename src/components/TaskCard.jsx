import React from 'react';
import PropTypes from 'prop-types';
import './TaskCard.css';
import Tag from './Tag';

import deleteIcon from '../assets/garpagepin.png';


const TaskCard = ({ title, tags, handleDelete, index, setActiveCard }) => {
  return (
    <article
      className='task_card'
      draggable
      onDragStart={() => setActiveCard(index)}
      onDragEnd={() => setActiveCard(null)}
    >
      <p className='task_text'>{title}</p>
      <div className='task_card_bottom_line'>
        <div className='task_card_tags'>
          {tags.map((tag, index) => (
            <Tag key={index} tagName={tag} selected={true} />
          ))}
        </div>
        <div className='task_delete' onClick={() => handleDelete(index)}>
          <img src={deleteIcon} className='delete_icon' alt='Delete' />
        </div>
      </div>
    </article>
  );
};

TaskCard.propTypes = {
  title: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleDelete: PropTypes.func.isRequired,
  index: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  setActiveCard: PropTypes.func.isRequired,
};

export default TaskCard;
