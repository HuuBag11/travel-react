import Reac, {useState, useRef, useEffect} from "react";
import { Header } from "antd/es/layout/layout";
import { Button, Menu, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import {Link} from 'react-router-dom'

import "./NavBar.scss"
import { useAuth } from "../../store/AuthContext";

const menuItems = [
  { key: 0, label: "Home", path: "/" },
  { key: 1, label: "News", path: "/news" },
  { key: 2, label: "Destinations", path: "/destinations" },
  { key: 3, label: "About Us", path: "/about-us" },
  { key: 4, label: "Contact", path: "contact" },
];


export const NavBar2 = () => {
    const [activeSearch, setActiveSearch] = useState(false);
    const inputRef = useRef(null);
    const { isLoggedIn, userName } = useAuth();
    
    const handleActiveSearch = () =>{
        setActiveSearch(prev => !prev)
    }

    useEffect(()=>{
        if(activeSearch && inputRef.current){
            inputRef.current.focus();
        }
    }, [activeSearch]);
  return (
    <Header className="header navbar-2">
      <div className="demo-logo ">
        <Link to="/">LOGO</Link>
      </div>
      <Menu
        className="nav"
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["0"]}
        
      >
        {
          menuItems.map(item => (
            <Menu.Item key={item.key}>
              <Link to={item.path}>{item.label}</Link>
            </Menu.Item>
          ))
        }
      </Menu>
      <div className="profile">
        <div className={`${activeSearch ? 'active' : ''} search__form`}>
        <Input ref={inputRef} placeholder="Enter the keyword..." />
          <Button shape="circle" icon={<SearchOutlined color="black" />} onClick={handleActiveSearch} />
        </div>
        <div className="book__now">
          {
            isLoggedIn ? (
              <Link to="/my-account">Hi, {userName}</Link>
            ) : (
              <Link to="/login">Book now</Link>
            )
          }
        </div>
      </div>
    </Header>
  );
};
