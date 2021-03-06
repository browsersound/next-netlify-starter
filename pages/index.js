import Link from 'next/link'
import Head from 'next/head'
import { getSortedPostsData } from '../lib/posts'
import Image from 'next/image'
// import ViewSource from '../components/view-source'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
// import Layout, { siteTitle } from '../components/layout'
// import utilStyles from '../styles/utils.module.css'


export default function Home({ allPostsData }) {
  return (
    <div className="container">
      <Head>
        <title>BROWSER | Festival for Web-based Music</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          BROWSER {''}
          <Link href="/posts/about">
          <a>2021</a>
          </Link>
        </h1>

        <p className="description">
          A Festival of Web-based Music | June 11th-13th 
        </p>

        <div className="grid">
          <a 
              Link href="/posts/mozillahubs"
              className="card">
            <h3>Virtual Festival Grounds &rarr;</h3>
            <p>Experience the festival through your own VR Avatar (a more open experience) </p>
          </a>

          <a Link href="/posts/livestream"
              className="card">
            <h3>Livestream &rarr;</h3>
            <p>Watch the festival through our curated livestream (a more coventional concert format)  </p>
          </a>

          <a
            Link href="/posts/about"
            className="card"
          >
            <h3>About &rarr;</h3>
            <p></p>
          </a>

         
        </div>

    <div className="bgWrap">
        <Image
        alt="tonejs-snippet"
        src="/images/Tone-JS-Snippet-000042.png"
        layout="fill"
        objectFit="cover"
        quality={100}
          />
    </div>

      </main>

 
      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          With support from {' '}
          <img src="/SKAM_logo_RZ.svg" alt="SKAM Logo" className="logo" />
        </a>
          <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
           {' '}
          <img src="/HMDK_Logo_1C.jpg" alt="HMDK Logo" className="logo" />
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;

        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
           background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 6rem;
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;

        }

        code {
          background: #fafafa;
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
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
          background: #fafafa;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;

        }

        .bgWrap {
          position: fixed;
          height: 100vh;
          width: 100vw;
          overflow: hidden;
          z-index: -1;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }

      `}</style>
    </div>
  )
}
