import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../images/logo.png"
import {FaLinkedin, FaFacebookF} from "react-icons/fa";
import {AiOutlineTwitter,AiFillInstagram} from "react-icons/ai"
const Footer = () => {
  return (
    <footer>
        <div className="container footer__container" >
            <article>
                <Link to="/" className="logo">
                    <img src={Logo} alt="Footer Logo" />
                </Link>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, tenetur impedit harum eligendi odit porro illum accusantium nobis blanditiis animi eveniet tempore rerum laboriosam error.
                </p>
                <div className='footer__socials'>
                    <a href="#" target="_blank" rel="noreferrer"> <FaLinkedin/></a>
                    <a href="#" target="_blank" rel='noreferrer noopener'> <FaFacebookF/></a>
                    <a href="#" target="_blank" rel='noreferrer noopener'> <AiOutlineTwitter/></a>
                    <a href="#" target="_blank" rel='noreferrer noopener'> <AiFillInstagram/></a>

                </div>
            </article>
            <article>
                <h4>Permalinks</h4>
                <Link to="/about">About</Link>
                <Link to="/plans">Plans</Link>
                <Link to="/trainers">Trainers</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/contact">Contact</Link>
            </article>
            <article>
                <h4>Insights</h4>
                <Link to="/s">Blog</Link>
                <Link to="/s">Case</Link>
                <Link to="/s">Case Studies</Link>
                <Link to="/s">Communities</Link>
                <Link to="/s">FAQS</Link>
            </article>
            <article>
                <h4>Permalinks</h4>
                <Link to="/contact">Contact Us</Link>
                <Link to="/s">Support</Link>


            </article>
        </div>
        <div className="footer__copyRight">
            <small>2022 Egator Tutorials &copy; All Rights RESERVED</small>
        </div>
    </footer>
  )
}

export default Footer
