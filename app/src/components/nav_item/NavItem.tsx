import React from 'react';
import {Link} from 'react-router-dom';
import './nav_item.css';
import NavItemData from '@customtypes/NavItemData';

type NavItemProps = {
  navItemData: NavItemData,
  children?: JSX.Element | JSX.Element[];
};

export const NavItem: React.FC<NavItemProps> = (props: NavItemProps) => {
  const { navItemData, children } = props;

  return (
    <li className="nav-item">
      <Link to={navItemData.link}>{navItemData.name}</Link>
      {children}
    </li>
  )
};

export default NavItem;