import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const WrapperDiv = styled.div`
  font-family: Open Sans;
  color: black;
  font-weight: 500;
`

const Field = styled.div`
  font-family: Open Sans;
  color: black;
  font-weight: 500;
`

const Error = styled.div`
  font-family: Open Sans;
  color: red;
  font-weight: 700;
`

const Input = styled.input`
  width: 179px;
  margin: 10px 0;
  padding: 5px 10px;
  outline: none;
  color: #505050 !important;
`

const TextInput = ({name, onChange, placeholder, value, error}) => {

  return (
    <WrapperDiv>
      <Field>
        <Input
          type="text"
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}/>
        {error && <Error>{error}</Error>}
      </Field>
    </WrapperDiv>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string
};

export default TextInput;
