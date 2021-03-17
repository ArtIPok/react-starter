import React from 'react';
import Container from '../Container/Container';
import { settings } from '../../data/dataStore';
import Hero from '../Hero/Hero';

const Info = () => (

  <Container>
    <h2>{settings.info.titlePage}</h2>
    <Hero titleText={settings.info.titleImage} img={settings.info.image}/>
    <p>{settings.info.contentPage}</p>
  </Container>
);

export default Info;