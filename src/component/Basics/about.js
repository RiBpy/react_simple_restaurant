import React from 'react'
import {Link} from 'react-router-dom';
export const About = () => {
  return (
    <>
    
      <div className="btn-group about-header">
      <button className="btn-group__item"><Link to='/' className='link-btn'>Home</Link></button>
      </div>
      <div className='about_page'>
        <div className='display_flex'>
          <div className="about_card">
            <div className="about_content">
              <h3>Content-1</h3>
              <h5>Lorem ipsum dolor sit.</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere magni sed aspernatur quis perferendis tempora
                perspiciatis,esse ratione eius maiores fuga obcaecati quam enim, minima vel unde porro hic saepe!
              </p>
            </div>
          </div>
          <div className="about_card">
            <div className="about_content">
              <h3>Content-2</h3>
              <h5>Lorem ipsum dolor sit.</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere magni sed aspernatur quis perferendis tempora
                perspiciatis,esse ratione eius maiores fuga obcaecati quam enim, minima vel unde porro hic saepe!
              </p>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
