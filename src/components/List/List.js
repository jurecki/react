import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero';
import Column from '../Column/Column';
import PropTypes from 'prop-types';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    childern: PropTypes.node,
    source: PropTypes.string,
  }

  static defaultProps = {
    children: <p>I can do all the things!!!</p>,
  }

  render() {
    return (
      <section className={styles.component}>
      <div className={styles.description}>
        {this.props.children}
      </div>
       <Hero titleText={this.props.title} source={this.props.source} />
       <div className={styles.columns}>
          <Column titleColumn='Animal'/>
          <Column titleColumn='Plants'/>
          <Column titleColumn='Minerals'/>
       </div>
      </section>

    )
  }
}
export default List;