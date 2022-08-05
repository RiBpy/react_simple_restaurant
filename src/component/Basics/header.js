import React from 'react'
import { Link } from 'react-router-dom';
export const Header = ({ filterItem , itemList}) => {
   
    return (
        <>     
            <nav className="navbar">
                <div className="btn-group">
                    {
                        itemList.map((category) => {
                            return (
                                <button className="btn-group__item" onClick={() => filterItem(category)}>
                                    {category}
                                </button>
                            )
                        })
                    }
                    <button className="btn-group__item "><Link className="link-btn" to="about">About</Link></button>
                </div>
            </nav>
        </>
    )
}
