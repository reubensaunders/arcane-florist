import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/temple/nav'
import Section from '../components/section'
import Footer from '../components/temple/footer';
import Top from '../components/temple/top';
import Anime from 'react-anime';


const Home = () => (
  <div>
    <Top/>
    <Head title="Hello" />
    
    <Nav />    
    <div id="hi" className="hero">
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
            <h3>Contact Me <i className="fas fa-envelope-square"></i> &rarr;</h3>
            <p>Drop me a line.</p>
          </a>
        </Link>
        <Link href="https://github.com/reubensaunders">
          <a className="card-md">
            <h3>Examples <i className="fas fa-code"></i> &rarr;</h3>
            <p>
              Find other example boilerplates on the{' '}
              <code>create-next-app</code> site
            </p>
          </a>
        </Link>
      </div>     
    </div>
    <div className="big-quote">
    <section className="light">
    <div className="gradient1">
        <h2>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</h2>
      </div>
      </section>
    </div>
    
    <Footer/>
 
  </div>
)

export default Home
