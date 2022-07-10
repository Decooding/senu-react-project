import React, {CustomComponent} from 'react';
import { NavDropdown } from 'react-bootstrap';
import Notifications from "react-notifications-menu";

const Nav = () => {
  const NavBarStyle = {
    minheight: '8vh',
    position: 'fixed',
    zIndex: '10',
    marginTop: "-70px"
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark col-12 " style={NavBarStyle}>
      <div className="container-fluid">
        <a className="navbar-brand me-3" href="/">
          <img src={require('./s60.png')} />

        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item me-3">
              <a className="nav-link active" aria-current="page" href="/dashboard">Dashboard</a>
            </li>
            <li className="nav-item me-3">
              <a className="nav-link " href="/registration">Регистрация</a>
            </li>
            <li className="nav-item me-3">
              <a className="nav-link " href="/entry">Вход</a>
            </li>

            <li className="nav-item me-3 dropdown">
              <NavDropdown
                id="nav-dropdown-dark-example"
                title="Документ"
                menuVariant="dark"
              >
                <NavDropdown.Item href="#doverenost">Доверенность</NavDropdown.Item>
                <NavDropdown.Item href="#creditOnPay">Счет на оплату</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.3">Создать</NavDropdown.Item>
              </NavDropdown>
            </li>
          </ul>

          <form className="d-flex">
            <Notifications notificationCard={CustomComponent}  />
            <input className="form-control me-2" type="search" placeholder="Поиск" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Искать</button>
          </form>
        </div>
      </div>
    </nav>

  );
};

export default Nav;