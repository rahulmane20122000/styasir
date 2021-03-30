import React from 'react'
import Sidebar from '../src/components/Sidebar';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Train from './pages/Train';


import Target from './pages/Target';



const App = () => {
  return (
   <>
   <BrowserRouter>
     <Sidebar/>
     <Switch>
       <Route path="/basic/target" exact component={Target} />
       <Route exact path="/basic/train_test"  component={Train} />
       
       
     </Switch>
   </BrowserRouter>
   </>
  );
}

export default App

