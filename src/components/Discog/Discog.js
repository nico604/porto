import React from 'react';
import PropTypes from 'prop-types';
import styles from './Discog.module.css';

const Discog = () => (
  <div className={styles.Discog} data-testid="Discog">
    Discog Component
  </div>
);

Discog.propTypes = {};

Discog.defaultProps = {};

export default Discog;
