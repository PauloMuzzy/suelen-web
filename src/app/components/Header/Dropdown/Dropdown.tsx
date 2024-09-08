'use client';
import { useState } from 'react';
import styled from 'styled-components';

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.button`
  color: #fff;
  padding: 16px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
`;

const DropdownItem = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
`;

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <DropdownContainer>
      <DropdownButton onClick={handleToggle}>
        Dropdown
      </DropdownButton>
      {isOpen && (
        <DropdownContent>
          <DropdownItem href="#">Item 1</DropdownItem>
          <DropdownItem href="#">Item 2</DropdownItem>
          <DropdownItem href="#">Item 3</DropdownItem>
        </DropdownContent>
      )}
    </DropdownContainer>
  );
};

export default Dropdown;