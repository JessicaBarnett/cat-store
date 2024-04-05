import React from 'react';
import './subnavigation.css';
import NavItemData from '@src/types/NavItemData';
import NavItem from '@components/nav_item/NavItem';

type SubnavigationProps = {
  subnavData: NavItemData[]
};

export const Subnavigation: React.FC<SubnavigationProps> = (props: SubnavigationProps) => {
  const { subnavData } = props;

  return (
    <ul className="subnavigation">
      {subnavData.map((subnavItem) => (
        <NavItem text={subnavItem.name} url={subnavItem.link}>
          <>
            {/* todo: this sould get added on hover/click not on load */}
            {subnavItem.children && (
              <Subnavigation subnavData={subnavItem.children}/>
            )}
          </>
        </NavItem>
      ))}
    </ul>
  )
};

export default Subnavigation;