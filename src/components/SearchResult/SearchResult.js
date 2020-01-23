import React from 'react';
import styles from './SearchResult.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import Container from '../Container/Container';

class SearchResult extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    cards: PropTypes.array,
    location: PropTypes.object,
    changeSearchString: PropTypes.func,
  }

  state = {
    value: this.props.location.pathname.replace('/search/', ''),
  }
  
  render () {
    const { cards } = this.props;
    const searchString = this.props.location.pathname.replace('/search/', '');
    this.props.changeSearchString(this.state.value);
    return (
      <Container>
        <section className={styles.component}>
          <div className={styles.title}>
            Searching result for: {searchString}
          </div>
          <div className={styles.columns}>
            {cards.map(cardData => (
              <Card key={cardData.id} {...cardData} />
            ))}
          </div>
        </section>
      </Container>
    );
  }
}

export default SearchResult;
