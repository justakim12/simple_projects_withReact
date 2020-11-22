import './App.css';
import Header from './Header.js';

function App() {
  function numAlert() {
    window.alert("num 0 clicked!")
  }

  return (
    <body> 
      <Header></Header>
      <h1>Calculator Project</h1>
        <div class="container">
          <div class="row">
            <div id="result" class="output-bar">0</div>
          </div>

          <div class="row">
            <div class="cal-button" onClick = {numAlert}>0</div>
            <div class="cal-button">1</div>
            <div class="cal-button">2</div>
            <div id="plus" class="cal-button equation">+</div>
          </div>

          <div class="row">
            <div class="cal-button">3</div>
            <div class="cal-button">4</div>
            <div class="cal-button">5</div>
            <div id="minus" class="cal-button equation">-</div> 
          </div>

          <div class="row">
              <div class="cal-button">6</div>
              <div class="cal-button">7</div>
              <div class="cal-button">8</div>
              <div id="multiply" class="cal-button equation">x</div>
          </div>

          <div class="row">                
              <div class="cal-button">9</div>
              <div id="reset" class="cal-button equation">C</div>
              <div id="equal" class="cal-button equation">=</div>
              <div id="divide" class="cal-button equation">/</div>
          </div>
        </div>   

      <div class="content">
        Make page scrollable.
      </div>
      <div class="content">
        Make page scrollable.
      </div>
      <div class="content">
        Make page scrollable.
      </div>
      <div class="content">
        Make page scrollable.
      </div>
      <div class="content">
        Make page scrollable.
      </div>
      <div class="content">
        Make page scrollable.
      </div>
      <div class="content">
        Make page scrollable.
      </div>
      <div class="content">
        Make page scrollable.
      </div>
      <div class="content">
        Make page scrollable.
      </div>
      <div class="content">
        Make page scrollable.
      </div>
      <div class="content">
        Make page scrollable.
      </div>
      <div class="content">
        Make page scrollable.
      </div>
      <div class="content">
        Make page scrollable.
      </div>
      <div class="content">
        Make page scrollable.
      </div>
      <div class="content">
        Make page scrollable.
      </div>
    </body>
    

  );
}

export default App;
