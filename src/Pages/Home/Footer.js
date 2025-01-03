import { Link } from "react-scroll";
import React from "react";
import { CiLocationOn } from 'react-icons/ci'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFacebook, BsInstagram, BsPhone, BsTwitter, BsWhatsapp } from 'react-icons/bs'
// import{Link} from 'react-router-dom'
import logo from './img/kamleshlogo.png';

function Footer() {
  return (
    <footer className="footer--container">
      <div className="footer--link--container">
        <div>
          {/* <img src="./img/logofooter.png" alt="Logoipsum" /> */}
          {/* <Link to='heroSection' smooth={true} offset={-70} style={{cursor:"pointer"}}><img src="./img/logofooter.png" alt="Logoipsum" /></Link> */}
          <Link to='heroSection' smooth={true} offset={-70} style={{cursor:"pointer"}}><img src={logo} alt="" style={{height:"20px"}} /></Link>
        </div>
        <div className="footer--items">
          <ul>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="MyPortfolio"
                className="text-md project--item"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="myEducation"
                className="text-md education--item"
              >
                Education
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="testimonial"
                className="text-md skillset--item"
              >
                Skillset
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="AboutMe"
                className="text-md about--item"
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Contact"
                className="text-md contact--item"
              >
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
        {/* <div className="footer--social--icon">
          <ul>
            <li>
              <a
                href="https://api.whatsapp.com/send?phone=917489912877"
                className="navbar--content"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsWhatsapp size="30px" className="whatsapp---icon"/>
                
              </a>
            </li>
            
            <li>
              <a
                href="https://x.com/Kuldeep90901228?t=Z8XIaBNNDb-3WDxiKbRSdA&s=08"
                className="navbar--content"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsTwitter size="30px" className="twitter---icon"/>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=100053004310376"
                className="navbar--content"
                target="_blank"
                rel="noopener noreferrer"
              >
               <BsFacebook size="30px" className="facebook---icon"/>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/kuldeep_panwar460/"
                className="navbar--content"
                target="_blank"
                rel="noopener noreferrer"
              >
             <BsInstagram size="30px" className="insta---icon"/>
              </a>
            </li>
          </ul>
        </div> */}
      </div>
      <hr className="divider" />
      <div className="footer--content--container">
        <p className="footer--content made--by--kuldeep">Made by💜Kamlesh</p>
        <div className="footer--social--icon">
          <ul className="footer--contact--section">
            <li>
               <CiLocationOn className='footer--icon address--icon'/>{'\u00A0\u00A0'} <a className="address---link" href="https://maps.app.goo.gl/8fAWbdXv7gYYgmWF6" target="_blank" rel="noopener noreferrer" style={{textDecoration:"none",color:"inherit"}}> <strong>Limbodi, Indore(M.P.) 452001 </strong></a>
            </li>
            <li>
               <AiOutlineMail className='footer--icon'/>{'\u00A0\u00A0'} <a href="mailto:kuldeeppanwar460@gmail.com" target="_blank" rel="noopener noreferrer" className="email---link" style={{textDecoration:"none",color:"inherit"}}><strong>kpanwars1988@gmail.com</strong></a>
            </li>
            <li>
               <BsPhone className='footer--icon'/>{'\u00A0\u00A0'} <a href="tel:7489912877" className="phone---link" target="_blank" rel="noopener noreferrer" style={{textDecoration:"none",color:"inherit"}}><strong>+91 9589859769</strong></a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;