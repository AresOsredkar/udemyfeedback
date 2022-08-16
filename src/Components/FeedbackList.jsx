import React from 'react'
import FeedbackItem from './FeedbackItem'
import PropTypes from 'prop-types'

function FeedbackList({feedback}) {
  if(!feedback || feedback.length === 0){
    return <div>No Feedback yet!</div>
  }
  else{
    return (
        <div className="feedback-list">
            {feedback.map((item) => (
                <FeedbackItem key={item.id} text={item.text} rating={item.rating} />
            ))}
        </div>)
  }
}

FeedbackList.propTypes = {
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,
        })
    )
}

export default FeedbackList
