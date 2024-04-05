import React from 'react';
import './nav_item.css';

type NavItemProps = {
  url: string,
 children: string
};

export const NavItem: React.FC<NavItemProps> = (props: NavItemProps) => {
  const { url, children } = props;

  return (
    <li className="nav-item">
      <a href={url}>{children}</a>
    </li>
  )
};

export default NavItem;