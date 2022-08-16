import Card from "./Card"
import PropTypes from "prop-types"


function FeedbackItem({text, rating}) {
    return (
        <Card reverse={true}>
            <div className="num-display">{rating}</div>
            <div className="text-display">{text}</div>
        </Card>
  )
}

FeedbackItem.propTypes = {
    text: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired
}

export default FeedbackItem
