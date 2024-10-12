import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { getAuth, signOut } from "firebase/auth";
import useUser from "./hooks/useUser";

const NavBar = () => {
    const [toggleSideBar, setToggleSideBar] = useState(false);
    const Navigate = useNavigate();
    const { user } = useUser();

    const showSideBar = () => {
        setToggleSideBar(true);
    }

    const hideSideBar = () => {
        setToggleSideBar(false);
    }
  return (
    <nav>
        <ul>
            <li className="hideonmobile"><Link to='/'>Home</Link></li>
            <li className="hideonmobile"><Link to='/about'>About</Link></li>
            <li className="hideonmobile"><Link to='/articles'>Article</Link></li>
            <li className="menubtn" onClick={showSideBar}>
                <div className="menubar">
                    <div className="bar"/>
                    <div className="bar"/>
                    <div className="bar"/>
                </div>
            </li>
        </ul>
        {
            toggleSideBar
            ? <ul className="sidebar" onClick={hideSideBar}>
                <li onClick={hideSideBar}>X</li>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/articles'>Article</Link></li>
            </ul>
            : null
        }
        <div className="nav-right">
            {user
             ? <button className="loginbtn" onClick={() => signOut(getAuth())}>Log Out</button>
             : <button className="loginbtn" onClick={() => Navigate('/login')}>Log in</button>}
        </div>
    </nav>
  )
}

export default NavBar;