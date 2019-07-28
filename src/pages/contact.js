import React from 'react';
import Head from '../components/head';
import Layout from '../components/layout';

const ContactPage = () => (
  <div>
    <Layout>
      <Head title="Contact" />
      <h1>Contact</h1>
      <p>collosi@gmail.com</p>
      <br />
      <p>
        Here's my
        {' '}
        <a href="https://twitter.com/ccollosi" target="_blank">
          Twitter
        </a>
      </p>
    </Layout>
  </div>
);

export default ContactPage;
