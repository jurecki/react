import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {pageInfo} from '../../data/dataStore';


const Info = () => (
  <Container>
    <Hero titleText={pageInfo.title} source={pageInfo.image} />
    {pageInfo.content};
  </Container>
);


export default Info;