import Header from "../../components/Header"
import HeaderImage from "../../images/header_bg_2.jpg"
import {MdEmail} from "react-icons/md"
import {BsMessenger} from "react-icons/bs"
import {IoLogoWhatsapp} from "react-icons/io"
import "./contact.css"

const Contact = () => {
  return (
    <>
    <Header image={HeaderImage} title="Get In Touch" >

    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur iure, esse rerum commodi dolorem ea minus consequuntur ducimus sint quo!</p>

    </Header>
    <section className="contact">
      <div className="container contact__container">
      <div className="contact__wrapper">
        <a href="#" target="_blank" rel="noreferrer"><MdEmail/></a>
        <a href="#" target="_blank" rel="noreferrer"><BsMessenger/></a>
        <a href="#" target="_blank" rel="noreferrer"><IoLogoWhatsapp/></a>

      </div>
      </div>
    </section>
    </>
  )
}

export default Contact