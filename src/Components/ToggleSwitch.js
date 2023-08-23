//ToggleSwitch.js
import React, {useState} from 'react';
import styled from "styled-components";

const Switch = styled.div`
  position: relative;
  width: 60px;
  height: 28px;
  background: #b3b3b3;
  border-radius: 32px;
  padding: 4px;
  transition: 300ms all;

  &:before {
    transition: 400ms all;
    content: "";
    position: absolute;
    width: 28px;
    height: 28px;
    border-radius: 35px;
    top: 50%;
    left: 4px;
    background: white;
    transform: translate(0, -50%);
  }
`;

const Input = styled.input`
  display: none;

  &:checked + ${Switch} {
    background: green;

    &:before {
      transform: translate(32px, -50%);
    }
  }
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${(props) => props.theme.font_color};
  cursor: pointer;
`;

export const ToggleSwitch = (props) => {
    const [checked, setChecked] = useState(false); // store value
  
    const handleChange = (e) => {
        setChecked(e.target.checked)
        props.changeTheme(checked);
    }
  
    return (
      <Label>
        <span>Theme is {checked ? 'dark' : 'light'}</span>
        <Input checked={checked} 
               type="checkbox" 
               onChange={handleChange} />
        <Switch />
      </Label>
    );
};