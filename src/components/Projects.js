import React from 'react';
const Projects = (props) =>{
  return (
    <div>
      <header className="App-header">
      <h1 className="App-title">AMZAD HOSSAIN</h1>
      <h3 className="sub-title">Full Stack Web Developer</h3>
      <hr />
    </header>
    <div className="wrapper">
    <div className="projectTwo"><a href="https://protected-reef-53266.herokuapp.com/"><img src={require('../KumraKake.png')} width="380" /></a>
      <div className="techUsed">
        <span>Technologies Used: </span>  <span>JavaScript</span> |<span>Node.js</span> |<span>Express.js</span> |<span>PostgreSQL</span>
      </div>
    </div>
    <div className="projectThree"><a href="https://github.com/hossainamzad/FoodShack"><img src={require('../FoodShack.png')} width="380" /></a>
      <div className="techUsed">
        <span>Technologies Used: </span>  <span>JavaScript</span> |<span>Node.js</span> |<span>Express.js</span> |<span>React</span> |<span>PostgreSQL</span>
      </div>
    </div>
    <div className="projectOne"><a href="https://bloodcell.herokuapp.com/"><img src={require('../BloodCell.png')} width="380" height="238px"/></a>
       <div className="techUsed">
        <span>Technologies Used: </span>  <span>Ruby</span> |<span>Ruby on Rails</span> |<span>JavaScript</span> |<span>PostgreSQL</span>
      </div>
    </div>
  </div>
  </div>

  )
}
  export default Projects;

// add this later to add your bloodcewll app to the paortfolio.
  // {   <div className="projectOne"><a href="https://bloodcell.herokuapp.com/"><img src={require('../BloodCell.png')} width="380" height="380" /></a></div>
  // }
