import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/space.PNG'
import IMG2 from '../../assets/qoute.PNG'
import IMG3 from '../../assets/cashregister.png'
import IMG4 from '../../assets/tech.PNG'
import IMG5 from '../../assets/pokimon.png'
import IMG6 from '../../assets/drum.PNG'





function Portfolio() {
  return (
    <section id='portfolio'>
      <h5> My Recent Works</h5>
      <h2>PortFolio</h2>
      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="porftfolio__item-image">
            <img src={IMG1} alt="project1" />
            </div>
            <h3>Space Travelers Hub</h3>
           <div className='portfolio__item-cta'>
           <a href="https://github.com/FarwaMuhibZada/space-travelers-hub" className='btn' targrt='_blank'>Github</a>
           <a href="https://space-traveler-hub-farwamuhibzada.netlify.app/" className='btn btn-primary' targrt='_blank'>LiveDemo</a>
           </div>
        </article>

        <article className='portfolio__item'>
          <div className="porftfolio__item-image">
            <img src={IMG2} alt="project1" />
            </div>
            <h3>Random Quote Machine</h3>
            <div className='portfolio__item-cta'>
            <a href="https://github.com/FarwaMuhibZada/random-quote-machine" className='btn' targrt='_blank'>Github</a>
            <a href="https://random-qoute-machine-farwamuhibzada.netlify.app/" className='btn btn-primary' targrt='_blank'>Live Demo</a>
            </div>
        </article>

        <article className='portfolio__item'>
          <div className="porftfolio__item-image">
            <img src={IMG3} alt="project1" />
            </div>
            <h3>Cash Register App</h3>
            <div className='portfolio__item-cta'>
            <a href="https://github.com/FarwaMuhibZada/Cash_Register_App" className='btn' targrt='_blank'>Github</a>
            <a href="https://farwamuhibzada.github.io/Cash_Register_App/" className='btn btn-primary' targrt='_blank'>Live Demo</a>
            </div>
        </article>

        <article className='portfolio__item'>
          <div className="porftfolio__item-image">
            <img src={IMG4} alt="project1" />
            </div>
            <h3>Next JS Advanced App</h3>
            <div className='portfolio__item-cta'>
            <a href="https://github.com/FarwaMuhibZada/nextjs-advanced-app" className='btn' targrt='_blank'>Github</a>
            <a href="https://nextjs-advanced-app.vercel.app/" className='btn btn-primary' targrt='_blank'>Live Demo</a>
            </div>
        </article>

        <article className='portfolio__item'>
          <div className="porftfolio__item-image">
            <img src={IMG5} alt="project1" />
            </div>
            <h3>Pokemon Search App</h3>
            <div className='portfolio__item-cta'>
            <a href="https://github.com/FarwaMuhibZada/Pokemon-Search-App" className='btn' targrt='_blank'>Github</a>
            <a href="https://farwamuhibzada.github.io/Pokemon-Search-App/" className='btn btn-primary' targrt='_blank'>Live Demo</a>
            </div>

        </article>

        <article className='portfolio__item'>
          <div className="porftfolio__item-image">
            <img src={IMG6} alt="project1" />
            </div>
            <h3>Drum Machine App</h3>
            <div className='portfolio__item-cta'>
            <a href="https://github.com/FarwaMuhibZada/build-drum-machine" className='btn' targrt='_blank'>Github</a>
            <a href="https://drum-machine-farwaamhubzada.netlify.app/" className='btn btn-primary' targrt='_blank'>Live Demo</a>
            </div>
        </article>

      </div>
    </section>
  )
}

export default Portfolio