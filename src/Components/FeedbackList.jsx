import {useContext} from 'react'
import FeedbackContext from '../Context/FeedbackContext'
import FeedbackItem from './FeedbackItem'


function FeedbackList() {
    const {feedback} = useContext(FeedbackContext)

    if(!feedback || feedback.length === 0){
        return <div>No Feedback yet!</div>
    }
    else{
        return (
            <div className="feedback-list">
                {feedback.map((item) => (
                    <FeedbackItem key={item.id} item={item}/>
                ))}
            </div>)
    }
    }


export default FeedbackList
