import './App.css';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, CardFooter } from 'react-bootstrap';
import { useState } from 'react';

export default function App() {

  let quotes = [];

  async function loadQuotes() {
    const responce = await fetch('https://type.fit/api/quotes');
    quotes = await responce.json();
  }

  const [quote, setQuote] = useState({
    text: "I am a slow walker, but i never walk back.",
    author: "Abraham Lincoln"
  })

  const random = () => {
    const select = quotes[Math.floor(Math.random()*quotes.length)];
    setQuote(select);
  }

  const twitter = () => {
    window.open(`https://twitter.com/intent/tweet?text=${quote.text} - ${quote.author.split(',')[0]}`);
  }

  loadQuotes();
  return (
    <>
      <Card
        bg={'Dark'.toLowerCase()}
        key={'Dark'}
        text={'Dark'.toLowerCase() === 'light' ? 'dark' : 'white'}
        style={{ width: '35rem', height: '17rem' }}
        className="mb-2 card"
        id="quote-box"
      >
        <Card.Body>
          <Card.Title>
            <span id='author'>
              - {quote.author.split(',')[0]}
            </span>
          </Card.Title>
          <Card.Text>
            <span id='text'>
              " {quote.text}
            </span>
          </Card.Text>
        </Card.Body><CardFooter>
          <Button className="twitter" onClick={() => {twitter()}}><a href="twitter.com/intent/tweet" target='_blank' id="tweet-quote"><i className="bi bi-twitter"> Twitter</i></a></Button>
          <Button className='new-quote' onClick={() => {random()}}>New Quote</Button>
        </CardFooter>
      </Card>
      <p className='ploydy'>By: <a href='https://github.com/Ploydy' className='ploydyy'>Ploydy</a></p>
  {/*
      <script src="bundle.js"></script>
      <script src='https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js'></script> 
  */}
    </>
  );
}
