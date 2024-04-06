import React from "react";
import "./navigation.css";
import { NavItem } from "@components/nav_item/NavItem";
import NavItemData from "@customtypes/NavItemData";
import Subnavigation from "@components/subnavigation/Subnavigation";

type NavigationProps = {
  navData: NavItemData[];
};

export const Navigation: React.FC<NavigationProps> = (
  props: NavigationProps
) => {
  const { navData } = props;

  return (
    <nav className="navigation">
      <ul className="navigation-list">
        {navData.map((navItem: NavItemData) => (
          <NavItem key={navItem.id} navItemData={navItem}>
            <>
              {/* todo: this sould get added on hover/click not on load */}
              {navItem.children && (
                <Subnavigation subnavData={navItem.children}/>
              )}
            </>
          </NavItem>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
