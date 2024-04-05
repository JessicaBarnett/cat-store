import React from 'react';
import {Link} from 'react-router-dom';
import './nav_item.css';

type NavItemProps = {
  url: string,
  text: string,
  children?: JSX.Element | JSX.Element[];
};

export const NavItem: React.FC<NavItemProps> = (props: NavItemProps) => {
  const { url, text, children } = props;

  return (
    <li className="nav-item">
      <Link to={url}>{text}</Link>
      {children}
    </li>
  )
};

export default NavItem;