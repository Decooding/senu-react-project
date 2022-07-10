import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div style={{ display: 'flex', height: '93vh', overflow: 'scroll initial',  position: 'fixed', zIndex: '11' }}>
      <CDBSidebar className="bg-dark navbar-dark navbar-expand-lg" >
        <CDBSidebarHeader prefix={<i className="navbar-toggler-icon fa-large"></i>}>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Главная</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/credit" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Счета</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/tables" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Довереность</CDBSidebarMenuItem>
            </NavLink>      
            <NavLink exact to="/staff" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Сотрудники</CDBSidebarMenuItem>
            </NavLink> 
            <NavLink exact to="/proxy" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Компания</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/invoice" /*target="_blank"*/ activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">404 page</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter>
          <div
            style={{
              padding: '20px 5px', color:'#fff'
            }}
          >
            <NavLink exact to="/profile" activeClassName="activeClicked"  style={{color:'#fff'}}>
              <CDBSidebarMenuItem icon="user">Профиль</CDBSidebarMenuItem>
            </NavLink> 
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;