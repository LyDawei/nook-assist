import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const AboutPage = () => (
  <Layout basicFooter>
    <SEO title="About" />
    About Page
    <p>David Ly</p>
    <p>Houston, TX</p>
    <p>Full Stack Developer</p>
    <p>
      Made this project for fun to learn Gatsbyjs and review ReactJs
      fundamentals.
    </p>
  </Layout>
);

export default AboutPage;
