import React,{useState} from 'react';
import "./style.css";
import Menu from "./menuApi"
import MenuCard from "./menuCard"
import { Header } from './header';

const uniqueCategory = [...new Set(   //spread operator(...) new Set (to get unique category)
    Menu.map((cardElement) => {
        return cardElement.category;  
        })
),"All"];
const Restaurant = () => {
    const [menuData, setMenuData] =useState(Menu); //hooks
    const[menuList,setMenuList] = useState(uniqueCategory);
    const filterItem = (Category) => {
        if(Category === "All"){
            setMenuData(Menu);
            return;
        }
        const updatedList=Menu.filter((cardElement) => {
            return cardElement.category === Category;
        });
        setMenuData(updatedList);
    };
  return (
    <>
    <Header filterItem={filterItem} itemList={menuList} />
    <MenuCard passedData={menuData}/>
    </>
    )
}
export default Restaurant