import React from 'react'
import Header from '../../components/Header'
import headerImage from "../../images/header_bg_1.jpg"
import StoryImage from "../../images/about1.jpg"
import VisionImage from "../../images/about2.jpg"
import MisssionImage from "../../images/about3.jpg"

import "./about.css"
const About = () => {
  return (
    <>
      <Header title="About Us" image={headerImage}  >
        Lorem, ipsum dolor sit amet consectetur 
        adipisicing elit. Dignissimos nulla
         expedita sunt labore magni eveniet 
         voluptatem doloribus? Soluta tempora
          illum, nisi quas ea nihil ipsam 
          libero eaque vitae minima magnam!
      </Header>

      <section className='about__story'>
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="Our Story Image" />
          </div>
          <div className="about__section-contnet">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque aut animi ratione sapiente iure ipsam eaque, alias sint adipisci consequatur, exercitationem quibusdam quod libero optio neque facere id expedita! Magnam?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque aut animi ratione sapiente iure ipsam eaque, alias sint adipisci consequatur, exercitationem quibusdam quod libero optio neque facere id expedita! Magnam?
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum neque veritatis quas ducimus velit odit?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quo earum ducimus?</p>

          </div>
        </div>

      </section>


      
      <section className='about__Vision'>
        <div className="container about__vision-container">
          <div className="about__section-contnet">
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque aut animi ratione sapiente iure ipsam eaque, alias sint adipisci consequatur, exercitationem quibusdam quod libero optio neque facere id expedita! Magnam?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque aut animi ratione sapiente iure ipsam eaque, alias sint adipisci consequatur, exercitationem quibusdam quod libero optio neque facere id expedita! Magnam?
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum neque veritatis quas ducimus velit odit?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quo earum ducimus?</p>
            </div>
            <div className="about__section-image">
                <img src={VisionImage} alt="Our Story Image" />
            </div>
          
        </div>
      </section>


      <section className='about__mission'>
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MisssionImage} alt="Our mission Image" />
          </div>
          <div className="about__section-contnet">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque aut animi ratione sapiente iure ipsam eaque, alias sint adipisci consequatur, exercitationem quibusdam quod libero optio neque facere id expedita! Magnam?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque aut animi ratione sapiente iure ipsam eaque, alias sint adipisci consequatur, exercitationem quibusdam quod libero optio neque facere id expedita! Magnam?
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum neque veritatis quas ducimus velit odit?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quo earum ducimus?</p>

          </div>
        </div>

      </section>

    </>
  )
}

export default About
