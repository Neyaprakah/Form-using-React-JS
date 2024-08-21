import React from 'react';
import ReactDOM from 'react-dom';
import Content from './components/content';

function Form(){
  return(
    <div>
      <Content />
    </div>
  )
}
ReactDOM.render(<Form/>,document.getElementById("root"));