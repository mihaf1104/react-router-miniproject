import React, { useContext, useState } from 'react';
import { MainContext } from './contexts/MainContext';
import Gallery from './gallery/Gallery';
import Posts from './posts/Posts';
import style from './style.module.css'
import Todos from './todos/Todos';
import Users from './users/Users';
import { Navigate, Route, Routes } from 'react-router-dom';
import AddUser from './users/AddUser';
import WithAlert2 from './HOC/WithAlert2';

const Content = ()=>{

    const {showMenu,setShowMenu} = useContext(MainContext)
    const [isUser,setUser]=useState(true);
    const handleShowMenu = (event)=>{
        event.stopPropagation()
        setShowMenu(!showMenu)
        console.log(showMenu);
    }
    const renderUser=(Confirm,Alert)=><Users Confirm={Confirm}  Alert={Alert}/>
    return (
        <div className={style.content_section} onClick={()=>{setShowMenu(false)}}>
            <i className={`${style.menu_button} fas fa-bars text-dark m-2 pointer`} 
            onClick={handleShowMenu}>
                
            </i>

               <Routes>
                <Route path='/users' element={isUser? 
                          <WithAlert2 render={renderUser}/>
                          :<Navigate replace to="/posts"/> } />
                <Route path='/users/add' element={<AddUser/>}>
                    <Route path=':userId' element={<Posts/>} />
                </Route>
                <Route path='/posts' element={<Posts/>} />
                <Route path='/gallery' element={<Gallery/>} />
                <Route path='/todo' element={<Todos/>} />
                <Route path='*' element={renderUser} />
                {/*    */}
               </Routes>

        </div>
    )

}

export default Content;