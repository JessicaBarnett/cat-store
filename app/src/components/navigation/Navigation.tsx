import React from "react";
import "./navigation.css";
import { NavItem } from "@components/nav_item/NavItem";
import { SearchField } from "@components/search_field/SearchField";
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
        {navData.map((navItemData: NavItemData) => (
          <NavItem url={navItemData.link} text={navItemData.name}>
            <>
              {/* todo: this sould get added on hover/click not on load */}
              {navItemData.children && (
                <Subnavigation subnavData={navItemData.children}/>
              )}
            </>
          </NavItem>
        ))}
      </ul>
      <SearchField></SearchField>
    </nav>
  );
};

export default Navigation;
