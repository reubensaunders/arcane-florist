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
    <section className="light">
    <div className="gradient1">
      <h1 className="title">Michael Saunders</h1>     
    </div>        
    </section>
      <p className="description">
      .NET core and ES6 developer
      </p>
      <Section/>      

      <div className="row">
        <Link href="mailto:mreubensaunders@gmail.com">
          <a className="card-sm">
            <h3>Contact Me <i class="fas fa-envelope-square"></i> &rarr;</h3>
            <p>Drop me a line.</p>
          </a>
        </Link>
        <Link href="https://github.com/reubensaunders">
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
