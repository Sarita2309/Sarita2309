import React from 'react';

import {BrowserRouter, Route} from 'react-router-dom';

//COMPONENTS
import Header from './Header';
import Footer from './Footer';
import Home from './Home';

 class App extends React.Component{
   
    render(){
        return(
            <BrowserRouter>
              <div>
                  <Header/>
                  <Route exact path ="/" component={Home}/>
                  <Footer/>
              </div>
            </BrowserRouter>
        )
    }
}

export default App;