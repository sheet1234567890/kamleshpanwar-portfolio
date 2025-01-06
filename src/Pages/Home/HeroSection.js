import heroImg from "./img/Kp.png";
import {  Typewriter } from 'react-simple-typewriter';
import{ SiGeeksforgeeks, SiGithub, SiLeetcode, SiLinkedin }from 'react-icons/si'

const HeroSection = () => {
 
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hello 👋, I'm </p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Kamlesh Panwar</span>  
          </h1>
          <h3 style={{zIndex:""}}>I am <Typewriter style={{zIndex:"-1"}}
              words={['Technical Lead.' , 'Software Engineer.' ,'Software Architect.' , ' Full Stack Web Developer.','.NET Developer.']}
              loop={Infinity}
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1000}
              cursor="true"
              cursorBlinking={false}
              cursorStyle='|'
          />
          {/* <Cursor className='cursor-typing' cursorColor='white'  cursorBlinking={false}/> */}
          
          </h3>
          {/* <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1> */}
          <div className="herosection--social--icon">
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/kamlesh-panwar1988"
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                <><SiLinkedin size='30px'  className='linkedin---icon'/></>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Kamlesh-Panwar/"
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                <SiGithub size="30px"  className='github---icon'/>
              </a>
            </li>
            {/* <li>
              <a
                href="https://auth.geeksforgeeks.org/user/kuldeeppanwar460/practice"
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                <SiGeeksforgeeks size="30px"  className='gfg---icon'/>
              </a>
            </li> */}
            {/* <li>
              <a
                href="https://leetcode.com/kuldeeppanwar460/"
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                <SiLeetcode size="30px"  className='leetcode---icon'/>
              </a>
            </li> */}
          </ul>
        </div>
          {/* <p className="hero--section-description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            <br /> Dolorum, quas. Amet soluta assumenda cum?
          </p> */}
           <button className=" btn btn-primary" onClick={()=>{window.open('https://drive.google.com/file/d/1hwoHDtCGvLJdwAa2PsjP8lc7wGdTtLd6/view?usp=drive_link','_blank')}}>Get Resume</button>
        </div>
       
      </div>



      <div className="hero--section--img">
        <img src={heroImg} alt="Hero Section" />
      </div>
    </section>
  );
}

export default HeroSection
