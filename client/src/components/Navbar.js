import React, { Component } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Button,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
   } from 'reactstrap';
import '../css/UserHomePage.css'


class CustomNavbar extends Component {

    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }

      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
      render() {
        return (

<Navbar expand="md">
              <NavbarBrand>
            <ul className="menuItems">
                <li className="menuItem">
                    <a href="/home">Home</a>
                </li>
                <li className="menuItem">
                    <a>Categories</a>
                </li>
                <li className="menuItem">
                    <a>Books</a>
                </li>
                <li className="menuItem">
                    <a>Authors</a>
                </li>
            </ul>
                  </NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                <NavItem className="leftMenuItem">
                <div class="container h-100">
                    <div class="d-flex justify-content-center h-100">
                        <div class="searchbar">
                            <form action="search">
                                <input class="search_input" type="text" name="" placeholder="Search..."/>
                                <button type="submit" class="search_icon"><i class="fas fa-search"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
                  </NavItem>
                  <UncontrolledDropdown nav inNavbar className="leftMenuItem">
                    <DropdownToggle nav caret>
                      User
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>
                        Edit Profile
                      </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>
                        Account setting
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <NavItem className="leftMenuItem">
                  <Button id='signOut' type="submit"><a href="/">Sign out</a></Button>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
        );
      }
    }

    export default CustomNavbar;