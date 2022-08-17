import {useState} from 'react'
import Button from './Button'
import Card from "./Card"
import RatingSelect from './RatingSelect'

function FeedbackForm({handleAdd}) {
    const [text, setText] = useState('')
    const [rating, setRating] = useState(5)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if(text.trim().length > 10) {
            const newFeedback = {
                text: text,
                rating: rating,
            }
            handleAdd(newFeedback)

            setText('')
        }

        
    }

    const handleTextChange = (e) => {
        if(text === ''){
            setBtnDisabled(true)
            setMessage(null)
        }
        else if(text !== '' && text.trim().length <= 10){
            setBtnDisabled(true)
            setMessage("Message must be at least 10 characters long.")
        }
        else{
            setMessage(null)
            setBtnDisabled(false)
        }

        setText(e.target.value)
    }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>Rate our service</h2>
        <RatingSelect select={(rating) => setRating(rating)}/>
        <div className="input-group">
            
            <input onChange={handleTextChange} type="text" placeholder='Write a review' value={text} />
            <Button type='submit' version='primary' isDisabled={btnDisabled}>Send</Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm