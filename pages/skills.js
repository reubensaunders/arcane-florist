import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/temple/nav'
import Section from '../components/section'
import skills from '../helpers/skills';
import Level from '../components/temple/level';

const skillsList = skills.fetch().map((d) => <span><li id={d.name.toLowerCase()} key={d.name}>{d.name}</li><Level level={d.level}/></span>);

const Skills = () => (
  <div>
    <Head title="Skills" />
    <Nav />
    <div className="hero">
    <section className="light">
    <div className="gradient1">
      <h1 className="title">My Skills</h1>
    </div>
    </section>
      <ul className="skills">
        {skillsList}
      </ul>      
  </div>   
  <Section></Section>
  <Section></Section>
  <Section></Section>
  <Section></Section>
  <Section></Section>
  <Section></Section>
  <Section></Section>
  <Section></Section>
  <Section></Section>
  <Section></Section>
  <Section></Section>
  <Section></Section>
  <Section></Section>
  <Section></Section>
  <Section></Section>
  <Section></Section>
  <Section></Section>
  <Section></Section>
  <Section></Section>
  <Section></Section>
</div>
)

export default Skills
