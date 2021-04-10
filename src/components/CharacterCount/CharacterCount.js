import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { TextContext } from '../App/App';

export default function CharacterCount({ show }) {
  const text = useContext(TextContext);

  if (!show) {
    return null;
  }

  return (
    <div>
      Character Count: {text.length}
    </div>
  )
}

CharacterCount.proTypes = {
  show: PropTypes.bool.isRequired
}