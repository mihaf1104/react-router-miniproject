import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MainContext } from './contexts/MainContext';
import style from './style.module.css';

const Sidebar = () => {

    const { showMenu, setShowMenu } = useContext(MainContext)

    return (
        <div className={`${style.sidebar_section} bg-secondary`} style={showMenu ? { right: 0 } : {}}>
            <ul className={`${style.sidebar_list} m-0 p-0`}>
                <li className={style.sidebar_avatar}>
                    <img src="/assets/images/user2.jpg" alt="" />
                </li>

                <NavLink className={({ isActive }) => { return isActive ? "active_nav" : "" }} to="/users"  >
                    <li>کاربران</li>
                </NavLink>

                <NavLink className={({ isActive }) => { return isActive ? "active_nav" : "" }} to="/posts">
                    <li>پست ها</li>
                </NavLink>

                <NavLink className={({ isActive }) => { return isActive ? "active_nav" : "" }} to="/gallery">
                    <li>گالری</li>
                </NavLink>

                {<NavLink style={({ isActive }) => { return isActive ? { background: "black" } : {} }} to="/todo">
                    <li>کارها</li>
                </NavLink>}
             </ul>
        </div>
    )

}

export default Sidebar;