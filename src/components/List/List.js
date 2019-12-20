import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero';
import Column from '../Column/ColumnContainer';
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';
//import Creator from '../Creator/Creator';

class List extends React.Component {

  static propTypes = {
    title: PropTypes.node.isRequired,
    source: PropTypes.string,
    description: PropTypes.node,
    columns: PropTypes.array,
    image: PropTypes.node,
  };

  static defaultProps = {
    description: settings.defaultListDescription,
  };
  
  render() {
    const {columns, title, image, description} = this.props;
    return (
      <section className={styles.component}>
        <Hero titleText={title} source={image} />
        <div className={styles.description}>
          {ReactHtmlParser(description)}
        </div>
        <div className={styles.columns}>
          {columns.map(columnData => (
            <Column key={columnData.id} {...columnData} />
          ))}
        </div>
        {/*
        <div className={styles.creator}>
          <Creator text={settings.columnCreatorText} action={(title) => this.addColumn(title)} />
        </div>
        */}
      </section>
    );
  }
}
export default List;