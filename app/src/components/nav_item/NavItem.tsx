import React from 'react';
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
      <a href={url}>{text}</a>
      {children}
    </li>
  )
};

export default NavItem;