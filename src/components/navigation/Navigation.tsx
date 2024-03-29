import React from 'react';
import './navigation.css';
import { SearchField } from '@components/search_field/SearchField';

export const Navigation: React.FC = () => {
  return (
    <nav className="navigation">
        <p>navigation</p>
        <SearchField></SearchField>
    </nav>);
};

export default Navigation;