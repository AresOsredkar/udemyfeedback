import './App.css';
import { useState } from 'react';
import FeedbackData from './data/FeedbackData';
import Header from "./Components/Header"
import FeedbackList from "./Components/FeedbackList"

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  return (
    <>
      <Header />
      <div className='container'>
        <FeedbackList feedback={feedback}/>
      </div>
    </>
    
  );
}

export default App;
