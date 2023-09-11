import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contacts from './Contacts';
import PagePage from './PagePage';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact>
          <Home/>
          <About />
          <Contacts />
          </Route>
          <Route path="/page" component={PagePage} /> 
        </Switch>
      </div>
    </Router>
  );
}

export default App;

//another variant

// import React, { useState } from 'react';
// import Home from './Home';
// import About from './About';
// import Contacts from './Contacts';
// import PagePage from './PagePage';



// function App() {
//   const [showPage, setShowPage] = useState(false);

//   return (
//     <div>
      
//         {/* <ul>
//           <li><a href="/">Home</a></li>
//           <li><a href="/about">About</a></li>
//           <li><a href="/contacts">Contacts</a></li>
//         </ul>
      

//       <hr /> */}
      
//       {showPage ? (
//         <PagePage />
//       ) : (
//         <div>
//           <Home />
//           <About setShowPage={setShowPage} />
//           <Contacts />
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;
