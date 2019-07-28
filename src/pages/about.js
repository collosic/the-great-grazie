import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Head from '../components/head';

const AboutPage = () => (
  <div>
    <Layout>
      <Head title="About" />
      <h1>About Me</h1>
      <br />
      <p>
        Hello my name is Christian Collosi. A quick introduction into who I am and what I enjoy to
        do. I'm a software developer and I'm currently focusing on front end development work. At my
        previous job I was working with WordPress, JQuery, and the Java Spring Framework. I am now
        positioning myself to learn React, Redux, Gatsby, and GraphQL in order to improve my skills.
        I enjoy lots of science fiction, bouldering, snowboarding, hiking and of course computers.
      </p>
      <p>
        <Link to="/contact">Get at me</Link>
      </p>
    </Layout>
  </div>
);

export default AboutPage;
