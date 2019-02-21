import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/temple/nav'
import Section from '../components/section'
import Footer from '../components/temple/footer';
import Anime from 'react-anime';

const Home = () => (
  <div>
    <Head title="Hello" />
    <Nav />

    <div className="hero">
      <Anime easing="easeOutElastic" opacity={[0, 1.5]} translateY='-1rem' delay={(e, i) => i * 2000}>
        <h1 className="title">Michael Saunders</h1>      
      </Anime>
      <p className="description">
      .net core and ES6 developer
      </p>
      <Section/>      

      <div className="row">
        <Link href="https://github.com/zeit/next.js#getting-started">
          <a className="card-sm">
            <h3>Getting Started &rarr;</h3>
            <p>Learn more about Next on Github and in their examples</p>
          </a>
        </Link>
        <Link href="https://open.segment.com/create-next-app">
          <a className="card-md">
            <h3>Examples &rarr;</h3>
            <p>
              Find other example boilerplates on the{' '}
              <code>create-next-app</code> site
            </p>
          </a>
        </Link>        
      </div>
      <div className="row">
      <Link href="https://github.com/segmentio/create-next-app">
          <a className="card-wd">
            <h3>Portfolio &rarr;</h3>
            <p>Was this tool helpful? Let us know how we can improve it</p>
          </a>
        </Link>
      </div>
    </div>
    <Footer/>
  </div>
)

export default Home
