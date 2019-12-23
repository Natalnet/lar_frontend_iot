import React, { useRef, useEffect } from 'react';

import { useField } from '@rocketseat/unform';
import PropTypes from 'prop-types';

import { InputStyle, Span } from './styles';

export default function Input({ name, ...rest }) {
  const ref = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'value',
    });
  }, [ref.current, fieldName]); //eslint-disable-line

  return (
    <>
      <InputStyle
        name={fieldName}
        aria-label={fieldName}
        ref={ref}
        error={error}
        defaultValue={defaultValue}
        {...rest}
      />
      {error && <Span>{error}</Span>}
    </>
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
};
