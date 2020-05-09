import Head from 'next/head';
import Link from 'next/link';
import PageLayout from '../components/PageLayout';
import io from "socket.io-client";
// const ENDPOINT = "http://127.0.0.1:8000"; // backend server endpoint
// IMPORTANT; switch to this below endpoint when done on dev!
const ENDPOINT = "https://bestcah-api.herokuapp.com/";
import { useState, useEffect } from "react";
import UserContext from '../components/UserContext';
import GameEntry from "../components/GameEntry";


// code taken from GameEntry.jsx
function RoomLinkComponent(props) {
    if (props.hidden) {
      return null;
    }
    var roomLink = "/room/";
    roomLink = roomLink.concat(props.roomId)
    return (
        <Link href = {roomLink}>
            <button> Go to room!</button>
        </Link>
    );
  }

export default function Home() {
  // code taken from start-game.jsx
  const [roomId, setRoomId] = useState("");

  useEffect(() => {
    const socket = io(ENDPOINT);
    socket.emit('test', "testing")
    socket.emit('createRoom')
    console.log("socket emitted")
    socket.on('dispatchRoomId', roomId => {
      setRoomId(roomId)
    })
  }, [])


  return (
    <div className="container">
      <Head>
        <title>ACH</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h2 className="title">
          Cards Against Humanity
        </h2>

        <p className="description">
          A Card Game for Horrible People <br />
          <code>social distancing edition</code>
        </p>

        <div className="grid">
          <Link href="/import-cards">
            <a className="card">
              <p>Add Cards</p>
            </a>
          </Link>

        <GameEntry roomId = {roomId}> </GameEntry>

        <Link href="/about">
          <a className="card">
            <p>About</p>
          </a>
        </Link>

        <Link href="/contact">
          <a className="card">
            <p>Contact</p>
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
          justify-content: center;
          align-items: center;
          background-color: black;
          color: white;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          color: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: row;
          max-width: 800px;
          max-height: 600px
          margin-top: 3rem;
        }

        .card {
          margin: 0.3rem;
          flex-basis: 15%;
          padding: 0 1.5rem 1.5rem 0.7rem;
          text-align: left;
          background-color: white;
          color: black;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 20px;
          transition: color 0.15s ease, border-color 0.15s ease;
          min-width: 15%;
          min-height: 15%;
          vertical-align: top;
          white-space: nowrap;
          align-self: flex-end;
        }

        .big-card {
          margin: 1.5rem 2rem 2rem 7rem;
          padding: 1.5rem 0 1.5rem 0;
          text-align: center;
          background-color: white;
          color: black;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 20px;
          transition: color 0.15s ease, border-color 0.15s ease;
          flex-basis: 50%;
          flex-direction: column;
          min-width: 34%;
          min-height: 50%;
          white-space: nowrap;
          height: 360px;
          display: flex;
          justify-content: center;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #594d0a;
          border-color: #594d0a;
          margin-bottom: 1rem;
        }

        .card p {
          margin: 0 0 4rem 0;
          font-size: 1rem;
          font-weight: bold;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 800px) {
          .grid {
            width: 100%;
            height: 100%,
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  )
}
