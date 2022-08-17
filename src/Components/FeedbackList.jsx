import {useContext} from 'react'
import FeedbackContext from '../Context/FeedbackContext'
import FeedbackItem from './FeedbackItem'
import Spinner from './Spinner'


function FeedbackList() {
    const { feedback, isLoading } = useContext(FeedbackContext)

    if(!isLoading && (!feedback || feedback.length === 0)){
        return <div>No Feedback yet!</div>
    }
    else{
        return isLoading ? 
            ( <Spinner /> ) :
            (
            <div className="feedback-list">
                {feedback.map((item) => (
                    <FeedbackItem key={item.id} item={item}/>
                ))}
            </div>
            )
    }
    }


export default FeedbackList
