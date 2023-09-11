import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <div className="container">Hello Hello</div>
      <Link to="/page">PUSH</Link>
    </div>
  );
};

export default About;


// import React from 'react';

// const About = ({ setShowPage }) => {
//   return (
//     <div>
//       <h1>About</h1>
//       <div className="container">Hello Hello</div>
//       <button onClick={() => setShowPage(true)}>PUSH</button>
//     </div>
//   );
// };

// export default About;
