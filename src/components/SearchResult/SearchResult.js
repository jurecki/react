import React from 'react';
import styles from './SearchResult.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import Container from '../Container/Container';


class SearchResult extends React.Component {

 static propTypes = {
   title: PropTypes.node,
   cards: PropTypes.array,
   searchString: PropTypes.string,
 };



 render() {
   const {cards, searchString} = this.props;
   return (
     <Container>
       <section className={styles.component}>
         <div className={styles.title}>Searching result for: {searchString}</div>
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
