import styled from "styled-components";
// components
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import NavLink from "react-bootstrap/NavLink";
import NavDropdown from "react-bootstrap/NavDropdown";
import NavbarToggle from "react-bootstrap/NavbarToggle";

export const Nav = styled(Navbar)`
  & {
    border: none;
    padding: var(--gap) 0;
  }
`;

export const NavItem = styled(NavLink)`
  & {
    margin-left: var(--gap);
  }
`;

export const NavItemLink = styled(Link)`
  & {
    color: var(--support-color-1);
    transition: 0.2s;

    :hover {
      color: var(--secondary-color);
      transition: 0.2s;
    }
  }
`;

export const Dropdown = styled(NavDropdown)`
  & a.dropdown-toggle {
    color: var(--support-color-1) !important;
    margin-left: var(--gap);
    transition: 0.2s;

    :hover {
      color: var(--secondary-color) !important;
      transition: 0.2s;
    }

    .dropdown-menu .dropdown-item {
      transition: 0.2s;

      :hover {
        color: var(--secondary-color) !important;
        transition: 0.2s;
      }
    }
  }
`;

export const NavToggle = styled(NavbarToggle)`
  & {
    border: none;

    span {
      border-color: var(--support-color-1);
    }
  }
`;

export const HeaderContainer = styled.header`
  & {
    background: var(--base-color);
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.2), 0px 4px 5px rgba(0, 0, 0, 0.12),
      0px 2px 4px rgba(0, 0, 0, 0.14);
  }
`;
