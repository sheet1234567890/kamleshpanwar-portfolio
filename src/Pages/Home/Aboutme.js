import React from 'react'
import { SlArrowRight } from 'react-icons/sl'

const Aboutme = () => {
  return (
    <section id='AboutMe' className='about--section'>
        <div className='about--section--img'>
            <img src="./img/Kp.png" alt="About me" />
            {/* <img src="./img/kk.jpg" alt="About me" /> */}
        </div>
        <div className='hero--section--content-box about--section--box'>
            <div className='hero--section--content'>
                {/* <p className='section--title'> About</p> */}
                <h1 className='skills-section--heading' style={{width:"100%",display:"flex",justifyContent:"center"}}>About Me</h1>
                <p className='hero--section--description' style={{textAlign:"justify"}}>"As a seasoned Technical Lead with over 12 years of expertise in full-stack development, I have a proven track record of translating client requirements into robust, scalable, and efficient software solutions. My core competencies include Angular, .NET Core API, SQL, ASP.NET, MVC, and Azure, with a strong focus on delivering high-quality applications through Agile methodologies. Skilled in effort estimation, project planning, and team leadership, I have successfully guided both onsite and offshore teams to achieve project goals. With a keen eye for detail, strong analytical abilities, and problem-solving expertise, I consistently drive innovation and efficiency in development processes."</p>
                <div style={{alignSelf:"flex-start",marginLeft:"35px",width:"100%"}}>
                  <h3>Key Aspects</h3>
                  <ul style={{listStyle:"none","marginTop":"20px","paddingLeft":"0px"}}>
                  <li><SlArrowRight/> <strong>Software Architect</strong></li><br />
                   <li><SlArrowRight/> <strong>Technical Lead</strong> </li><br />
                   <li><SlArrowRight/> <strong>Full stack Developement</strong></li><br />
                   <li><SlArrowRight/> <strong>Managing Database</strong> </li>
                  </ul>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Aboutme
