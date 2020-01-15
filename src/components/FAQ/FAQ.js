import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {pageFAQ} from '../../data/dataStore';

const FAQ = () => (
  <Container>
    <Hero titleText={pageFAQ.title} source={pageFAQ.image} />
    {pageFAQ.content}
  </Container>
);

export default FAQ;