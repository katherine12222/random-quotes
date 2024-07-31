import React, { useState } from 'react';
import './App.css';

function App() {
  const [quote, setQuote] = useState('Click to generate a quote');
  const [author, setAuthor] = useState('');

  const fetchQuote = async () => {
    try {
      const response = await fetch('https://api.api-ninjas.com/v1/quotes', {
        method: 'GET',
        headers: {
          'X-Api-Key': 'PcgFjIPlxYYSf1hRGIZy+Q==T40wkqijZilipOOW' 
        }
      });
      const data = await response.json();

      console.log(data);

      if (data.length > 0 && data[0].quote && data[0].author) {
        setQuote(data[0].quote);
        setAuthor(data[0].author);
      } else {
        setQuote('Quote or author not found in the response.');
        setAuthor('');
      }
    } catch (error) {
      setQuote('An error occurred. Please try again.');
      setAuthor('');
      console.error('Error fetching quote:', error);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Quote Generator</h1>
        <div id="quote-container">
          <p id="quote">{quote}</p>
          <p id="author">{author}</p>
        </div>
        <button onClick={fetchQuote}>Generate Quote</button>
      </div>
    </div>
  );
}

export default App;