import React, { useState, useEffect } from 'react';
import './Quote.css';

const QUOTES_API_URL = 'https://api.quotable.io/quotes?maxLength=100&limit=50';

const Quote = () => {
  const [quotes, setQuotes] = useState([]);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await fetch(QUOTES_API_URL);
        const data = await response.json();
        setQuotes(data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchQuotes();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 15000);

    return () => {
      clearInterval(intervalId);
    };
  }, [quotes]);

  return (
    <div className="quote-page">
      <h1>50 Quotes to Inspire You</h1>
      <div className="quote-container">
        <div className="quote">
          <p>"{quotes[currentQuoteIndex]?.content}"</p>
          <p>- {quotes[currentQuoteIndex]?.author}</p>
        </div>
      </div>
    </div>
  );
};

export default Quote;
