import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore';


class FAQ extends React.Component {
    static propTypes = {
      title: PropTypes.node,
      image: PropTypes.string,
    }
  
    render() {
      const {titlePage, image, titleImage, contentPage} = settings.faq;
  
      return (
        <Container>
          <h2>{titlePage}</h2>
          <Hero titleText={titleImage} img={image}/>
          <p>{contentPage}</p>
        </Container>
      );
    }
}

export default FAQ;