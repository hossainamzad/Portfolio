import React from 'react';
const About = () =>{
  return (
    <div>
      <header className="about-header">
        <h3 className="about-title">AMZAD &nbsp;//&nbsp; HOSSAIN</h3>
        <h3 className=" about-sub-title">My Skills</h3>
        <hr />
      </header>
      <div className="skillsWrapper">
        <div className="coreSkills">
          <ul>
            <li className="cell"><img src={require('../html.png')}/></li>
            <li className="cell"><img src={require('../css.jpeg')}/></li>
            <li className="cell"><img src={require('../JS.png')}/></li>
            <li className="cell"><img src={require('../node.png')}/></li>
            <li className='cell'><img src={require('../react.png')}/></li>
          </ul>
        </div>
        <div className="otherSkills">
          <ul>
            <li className='cell'><img src={require('../Ruby.png')}/>Ruby</li>
            <li className='cell'><img src={require('../rails.jpeg')}/></li>
            <li className='cell'><img src={require('../postgreSQL.png')}/>postgreSQL</li>
            <li className="cell"><img src={require('../sql.png')}/>SQL</li>
            <li className="cell"><img src={require('../heroku.png')}/></li>
          </ul>
        </div>
      </div>
    </div>

  )
}


export default About;
