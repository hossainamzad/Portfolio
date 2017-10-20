import React from 'react';
const About = (props) =>
    <div className="skillsWrapper">
      <div className="coreSkills">
        <ul>
          <li className="cell"><img src={require('../html.png')}/></li>
          <li className="cell"><img src={require('../css.jpeg')}/></li>
          <li className="cell"><img src={require('../JS.png')}/></li>
          <li className="cell"><img src={require('../node.png')}/></li>
          <li className="cell"><img src={require('../sql.png')}/></li>
        </ul>
      </div>
      <div className="otherSkills">
        <ul>
          <li className='cell'><img src={require('../ruby.jpeg')}/></li>
          <li className='cell'><img src={require('../postgreSQL.png')}/></li>
          <li className='cell'><img src={require('../react.png')}/></li>
          <li className='cell'><img src={require('../rails.jpeg')}/></li>
          <li className="cell"><img src={require('../heroku.png')}/></li>
        </ul>
      </div>
    </div>

export default About;
