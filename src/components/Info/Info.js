import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';


class Info extends React.Component {
    static propTypes = {
      title: PropTypes.node,
    }

    render() {
      const {title} = this.props;

      return (
        <Container>
          <Hero titleText={title} />
          <h2>Info</h2>
          <p>Lorem ipsum dolor sit amet,</p>
        </Container>
      );
    }
}

export default Info;