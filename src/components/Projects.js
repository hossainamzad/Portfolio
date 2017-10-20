import React from 'react';
const Projects = (props) =>
  <div className="wrapper">
    <div className="projectTwo"><a href="https://protected-reef-53266.herokuapp.com/"><img src={require('../KumraKake.png')} width="380" height="380" /></a>
      <div className="techUsed">
        <span>Technologies Used: </span>  <span>JavaScript</span> <span>Node.js</span> <span>Express.js</span> <span>PostgreSQL</span>
      </div>
    </div>
    <div className="projectThree"><img src={require('../FoodShack.png')} width="380" height="380" /></div>
    <div className="projectThree"><img src={require('../FoodShack.png')} width="380" height="380" /></div>

  </div>
  export default Projects;
// add this later to add your bloodcewll app to the paortfolio.
  // {   <div className="projectOne"><a href="https://bloodcell.herokuapp.com/"><img src={require('../BloodCell.png')} width="380" height="380" /></a></div>
  // }
