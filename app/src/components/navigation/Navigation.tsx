import React from "react";
import "./navigation.css";
import { NavItem } from "@components/nav_item/NavItem";
import { SearchField } from "@components/search_field/SearchField";
import Category from "@customtypes/Category.ts";

type NavigationProps = {
  categories: Category[];
};

export const Navigation: React.FC<NavigationProps> = (
  props: NavigationProps
) => {
  const { categories } = props;

  return (
    <nav className="navigation">
      <ul className="navigation-list">
        {categories.map((category: Category) => (
          <NavItem url={`/category/${category.name}`}>
            {category.display_name}
          </NavItem>
        ))}
      </ul>
      <SearchField></SearchField>
    </nav>
  );
};

export default Navigation;
