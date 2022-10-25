import React  from 'react';
import "./sidebar.css";
import {ManageSearch, Groups, InsertEmoticon, SentimentSatisfiedAlt, SentimentSatisfied } from '@mui/icons-material';
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Admin Dash</h3>
          <ul className="sidebarList">
            <NavLink to="/home/faculty/payroll-faculty/overview" 
            style={({ isActive }) => ({ 
              color: isActive ? 'black' : 'indigo' })} className="link">
            <li className="sidebarListItem active">
              <ManageSearch className="sidebarIcon" />
              Overview
            </li>
            </NavLink>

            <NavLink to="/home/faculty/payroll-faculty/members"
            style={({ isActive }) => ({ 
              color: isActive ? 'black' : 'indigo' })} className="link">
            <li className="sidebarListItem active">
            < Groups className="sidebarIcon" />
              Members
            </li>
            </NavLink>

            <NavLink to="/home/faculty/payroll-faculty/faculty" 
            style={({ isActive }) => ({ 
              color: isActive ? 'black' : 'indigo' })} className="link">
            <li className="sidebarListItem active">
              <InsertEmoticon className="sidebarIcon" />
              Faculty
            </li>
            </NavLink>

            <NavLink to="/home/faculty/payroll-faculty/staff" 
            style={({ isActive }) => ({ 
              color: isActive ? 'black' : 'indigo' })} className="link">
            
            <li className="sidebarListItem active">
              <SentimentSatisfiedAlt className="sidebarIcon" />
              Staff
            </li>
            </NavLink>

            <NavLink to="/home/faculty/payroll-faculty/adhoc" 
            style={({ isActive }) => ({ 
              color: isActive ? 'black' : 'indigo' })} className="link">
            
            <li className="sidebarListItem active">
              <SentimentSatisfied className="sidebarIcon" />
              Ad-Hoc staff
            </li>
            </NavLink>

          </ul>
        </div>
      </div>
    </div>
  );
}