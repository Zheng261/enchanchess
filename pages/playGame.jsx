import Head from 'next/head'
import Link from 'next/link'

export default function playGame() {
  return (
    <div className="container">
      <main>
        <h1 className="title">
          Cards Against Humanity
        </h1>

        <p className="description">
          Social Distancing Edition
        </p>

		<div className="rightBanner">
			<div className = 'blackHeader'>
			    <p>Scoreboard</p>
			</div>


	        <div className="scoreboard">
	            <scoreboardText>1. (5) Joe</scoreboardText>
	            <scoreboardText>2. (4) Sally</scoreboardText>
	            <scoreboardText>3. (3) Jack</scoreboardText>
	            <scoreboardText>4. (2) Sarah</scoreboardText>
	            <scoreboardText>5. (1) Greg</scoreboardText>
	        </div>

	        <div className="blackHeader">
	            <p>Game Chat</p>
	        </div>

	       	<div className="gamechat">
	       		<a className = "messageBackground">
	            	<cardWinText>Sally gets this round’s black card!</cardWinText>
	            </a>
	            <playerText>Jack: LOL that was the perfect card to play</playerText>
	           	<a className = "messageBackground">
	            	<playerText>Sam: All the answers were pretty solid</playerText>
	           	</a>
	         	<div className="enterTextBox">
	            	<enterTextStyle>Enter Text Here</enterTextStyle>
	        	</div>
	        </div>
        </div>


        <div className="grid">
	        <a className="blackcard">
	          <p>Don’t worry kids, it gets better. I’ve been living with ______ for 20 years.</p>
	          <a className = "circle">
	          <p>60</p>
	          </a>
	        </a>
	     <div className="cardsgrid">
	          <Link href="/start-game">
	            <a className="card">
	              <p>Nickelback</p>
	            </a>
	          </Link>

	          <Link href="/start-game">
	            <a className="card">
	              <p>Nickelback</p>
	            </a>
	          </Link>


          
	        </div>
	     </div>
    	<hr className = "dividingLine"/>

	   	<div className="cardsgrid">
	      <Link href="/start-game">
	        <a className="deckCard">
	          <p>Nickelback</p>
	        </a>
	      </Link>

	      <Link href="/start-game">
	        <a className="deckCard">
	          <p>Nickelback</p>
	        </a>
	      </Link>

	      <Link href="/start-game">
	        <a className="deckCard">
	          <p>Nickelback</p>
	        </a>
	      </Link>

	      <Link href="/start-game">
	        <a className="deckCard">
	          <p>Nickelback</p>
	        </a>
	      </Link>
	    </div>

		<div className="cardsgrid">
	      <Link href="/start-game">
	        <a className="deckCard">
	          <p>Nickelback</p>
	        </a>
	      </Link>

	      <Link href="/start-game">
	        <a className="deckCard">
	          <p>Nickelback</p>
	        </a>
	      </Link>

	      <Link href="/start-game">
	        <a className="deckCard">
	          <p>Nickelback</p>
	        </a>
	      </Link>

	      <Link href="/start-game">
	        <a className="deckCard">
	          <p>Nickelback</p>
	        </a>
	      </Link>
	    </div>


      </main>


      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
        }

        main {
          padding: 0.5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 2rem;
        }

        .title,
        .description {
          text-align: left;
        }

        .description {
          line-height: 0.5;
          font-size: 1rem;
          text-align: left;
        }

         .cardsgrid {
          display: flex;
          align-items: center;
          justify-content: left;
          flex-wrap: wrap;
          flex-direction: row;
        }
        .grid {
          display: flex;
          align-items: baseline;
          justify-content: left;
          flex-wrap: wrap;
          flex-direction: row;
          max-width: 800px;
          margin-top: 0.5rem;
        }
        .rightBanner {
	      display: flex;
          align-items: baseline;
          justify-content: left;
          flex-wrap: wrap;
          flex-direction: column;
          position: absolute; 
          top: 0; 
          right: 0;
        }
        .circle {
          margin: 0.5 rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #000000;
          border-radius: 500px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }
        .chatHeader {
          background-color: black;
          width: 170px;
          height: 80px;
          margin-left: 2 rem;
          padding: 0.7rem;
          text-align: center;
          border: 1px solid #000000 ;
        }
        .blackHeader {
          background-color: black;
          width: 170px;
          height: 60px;
          margin-left: 2 rem;
          padding: 0.7rem;
          text-align: center;
          border: 1px solid #000000 ;
        }
         .blackHeader p {
          color: white; 
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }
        .scoreboard {
          width: 170px;
          height: 200px;
          margin-left: 2 rem;
          padding: 0.7rem;
          text-align: center;
          border: 1px solid #000000 ;
        }
        .scoreboard scoreboardText{
        	font-size: 1rem;
        	display: table;
        }
        .messageBackground {
          width: 170px;
          background-color: grey
        }
         .gamechat {
          width: 170px;
          height: 280px;
          margin-left: 2 rem;
          padding: 0.7rem;
          text-align: center;
          border: 1px solid #000000 ;
        }
         .gamechat cardWinText {
          color: green; 
          margin: 0;
          font-size: 0.6rem;
          display: table;
          text-align: left
        }
        .gamechat playerText {
          color: black; 
          margin: 0;
          font-size: 0.6rem;
          text-align: left;
          display: table;
        }
         .gamechat enterTextBox {
          color: black; 
          margin: 0;
          width: 170px;
          border: 1px solid #000000 ;
        }
        .gamechat enterTextStyle {
        	color:black;
        	font-size: 0.6rem,
            text-align: left;
        }
        .blackcard {
          width: 260px;
          height: 300px;
          margin: 1rem;
          padding: 1.5rem;
          text-align: left;
          background-color: black;
          border-radius: 10px;
        }

        .blackcard p {
          color: white; 
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .blackcard p {
          color: white; 
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .card {
          width: 170px;
          height: 140px;
          margin-right: 1rem;
          padding: 0.7rem;
          text-align: left;
          border: 1px solid #000000;
          border-radius: 10px;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

         .deckCard {
          width: 140px;
          height: 100px;
          margin: 0 0 0.5rem 0.5rem;
          padding: 0.7rem;
          text-align: left;
          border: 1px solid #000000;
          border-radius: 10px;
        }

        .deckCard:hover,
        .deckCard:focus,
        .deckCard:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .deckCard p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }
        .dividingLine {
	      color: black,
	      backgroundColor: black,
	      height: 5
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  )
}