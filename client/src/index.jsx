import React from 'react';
import ReactDOM from 'react-dom/client';
// import { createRoot } from 'react-dom/client';
import RatingsAndReviews from './components/RatingsAndReviews/RatingsAndReviews.jsx';
import QuestionsAndAnswers from './components/Q&A/QuestionsAndAnswers.jsx';
import ProductOverview from './components/ProductOverview/index.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount () {
  }

  render () {
    return (
      <div>
        <ProductOverview />
        <QuestionsAndAnswers />
        <RatingsAndReviews />


      </div>

    );
  }
}

// ReactDOM.render(<App />, document.getElementById('app'));


/*****Edit to make it compatible with latest react version**********/
ReactDOM.createRoot(document.getElementById('app')).render(<App />);
