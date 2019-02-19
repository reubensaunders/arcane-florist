import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/temple/nav'
import Section from '../components/section'

const Home = () => (
  <div>
    <Head title="Home" />
    <Nav />

    <div className="hero">
      <h1 className="title">Reuben Saunders</h1>
      <p className="description">
      I'm a big fat nerd.        
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

      <Section/>      
      <Section/>      
      <Section/>      
      <Section/>      
      <Section/>      
      <Section/>      
      <Section/>      
      <Section/>      
      <Section/>      
    </div>
  </div>
)

export default Home
