// CSS
import './Menu.css';

// JSON
import menuList from "./../../json/menu.json";

// HOOKS
import { useEffect, useState } from 'react';

// COMPONENTS
import TopShadow from '../TopShadow';

const Menu : any = () => {
    const menuImgs : MenuImgs = {
        netflex: "src/assets/netflex-logo-full.png",
        search: "src/assets/user/media/search.svg",
        bell: "src/assets/user/media/bell.svg",
        arrow:  "src/assets/user/media/.svg",
        user : ""
    }

    const [y, setY] = useState(window.scrollY);
    useEffect(() => {
        const handleNavigation = (e) => {
          // Scroll direction logic
        };
        window.addEventListener("scroll", handleNavigation);
        return () => window.removeEventListener("scroll", handleNavigation);
      }, [y]);

    const menu : MenuType[] = menuList; 

    return(
        <>
        <TopShadow />
        <div className={`menu-container ${y > 0? 'menu-scroll': ''}`}>
            <img className='menu-netflex' src={menuImgs.netflex} alt="netflex-logo" />
            <ul className='menu-items-container'>
                {menu.map(menuI => 
                    <li className='menu-items' key={menuI.id}>
                        <a href={menuI.route}>{menuI.item}</a>
                    </li>
                )}
            </ul>
        </div>
        </>
    )
}

export default Menu;

// TYPES
type MenuImgs = {
    netflex : string;
    search : string;
    bell : string;
    arrow :  string;
    user  : string;
}

type MenuType = {
    id : number;
    item : string;
    route : string;
}