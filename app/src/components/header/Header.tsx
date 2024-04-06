import React from 'react';
import { SearchField } from '@components/search_field/SearchField';
import './header.css';

export const Header: React.FC = () => {
  return (
    <div className='header'>
        <h1>Kitty Curios and Feline Finery</h1>
        <SearchField></SearchField>
    </div>);
};

export default Header;