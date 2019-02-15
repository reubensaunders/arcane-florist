import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'
import { stringify } from 'querystring';

const About = () => (
  <div>
    <Head title="Home" />
    <Nav />

    <div className="hero">
      <h1 className="title">Hello World</h1>      
      <p className="description">
      Hi, I'm Michael Saunders and I know exactly {4 * 4} things and {'jam donuts'.split('m')} are good
    </p>
  </div>   
</div>
)

export default About