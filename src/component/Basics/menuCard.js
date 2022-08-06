import { motion } from "framer-motion";
import React from 'react';

const MenuCard = ({passedData}) => {
  return (
        <>
            <motion.section layout className="main-card-container">
                {
                    passedData.map((cardElement) => {
                        const {id, name, category, image,description} = cardElement; //destructuring
                        return (
                    <>
                        <div layout className="card-container" key={id}>
                            <div className="card">
                                <div className="card-body">
                                    <span className="card-number card-circle subtle">
                                       {id}
                                    </span>
                                    <span className="card-author subtle" style={{color:'blue'}}>{category}</span>
                                    <h5 className="card-title">{name}</h5>
                                    <span className="card-description subtle">
                                        {description}
                                    </span>
                                    <div className="card-read">Read</div>
                                </div>
                            <img src={image} alt="food" className="card-media" />
                            <span className="card-tag subtle">Order</span>
                            </div>
                        </div> 
                    </>
                    );
                })}
            </motion.section>
        </>
    )
}

export default MenuCard