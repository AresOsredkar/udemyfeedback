import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import FeedbackForm from './Components/FeedbackForm'
import FeedbackStats from './Components/FeedbackStats'
import FeedbackList from './Components/FeedbackList'
import Header from "./Components/Header"
import AboutPage from './Pages/AboutPage';
import AboutIconLink from './Components/AboutIconLink';
import { FeedbackProvider } from './Context/FeedbackContext';



function App() {

  return (
    <FeedbackProvider>
    <Router>
      <Header />
      <div className='container'>
        <Routes>
          <Route exact path='/' element= {
              <>
                <FeedbackForm />
                <FeedbackStats />
                <FeedbackList />  
              </>
          } />      
          <Route path='/about' element={<AboutPage />} />
        </Routes>

        <AboutIconLink />
      </div>
    </Router>
    </FeedbackProvider>
  );
}

export default App;
