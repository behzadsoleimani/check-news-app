import React from "react"
import { v4 as uuidv4 } from "uuid";
import { Navbar, Nav } from "react-bootstrap"
import {  navs } from "../../config/config"
import { LinkContainer } from "react-router-bootstrap"
import styled from "styled-components";
import { useDispatch, useSelector } from 'react-redux';
import Switch from "../Switch";
import { Avatar, Stack } from "@mui/material";
import { IGlobalState } from '../../redux/types';
import { changeThemeMode } from "../../redux/action";



 const StyledNavbar = styled(Navbar)`
background-color: ${props => props.theme === "dark" ? 'rgb(41, 47, 51)': 'rgb(184, 0, 0)'};
padding: 20px;
font-size: 18px;
`


 const StyledNav = styled(Nav)`
margin-left: 14px

`



function NavBar() {
  const dispatch = useDispatch();

  const theme = useSelector((state: IGlobalState) => state.themeMode)
  const handleToggle = (event: any) => {
    dispatch(changeThemeMode(event.target.checked))
  };

  return (
    <StyledNavbar  variant={"dark"} expand="lg" fixed="top" collapseOnSelect={true}
    theme={theme}>
      <Stack direction="row" spacing={2}
          // className={cx("icon-header", theme === "dark" ? "icon-header--darktheme" : "")}
          >
          <Avatar alt="Behzad News" src="/logo192.png" style={{
            width: "4rem"
          }} />
          {/* <Switch handleToggle={handleToggle} checked={theme === "dark"} /> */}
        </Stack>
      <Navbar.Toggle aria-controls="basic-navbar-nav" style={{
            position: "absolute",
            top: "20px",
            right: "90px"
      }} />
      <Navbar.Collapse id="basic-navbar-nav"  >
        <StyledNav  className="mr-auto">
          {navs.map(navs =>
            <LinkContainer to={navs.page} key={uuidv4()}>
              <Nav.Link className="ml-2">{navs.nav}</Nav.Link>
            </LinkContainer>
          )}
        </StyledNav>
      </Navbar.Collapse>
      <Switch checked={theme === "dark"} handleToggle={handleToggle}  />
    </StyledNavbar>
  )
}
export default NavBar;