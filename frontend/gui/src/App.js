import React from 'react';
import Header from './Header';
import Slider from './Slider';
import Widget from './Widget';
import Main from './Main' ;
import Footer from './Footer';


function App() {
  var loadScript = function(src) {
    var tag = document.createElement('script');
    tag.async = false;
    tag.src = src;
    document.getElementsByTagName('body').appendChild(tag);
  }
  
  loadScript('/assets.js/bootstapmin.js')

  return (
    <React.Fragment>
      <Header />
      <Slider />
      <Widget />
      <Main />
      <Footer />
    </React.Fragment>
   
  );
}

export default App;
