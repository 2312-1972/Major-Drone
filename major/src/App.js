import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="message">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 class="title h1border">MAJOR DRONE</h1>
        <h2 className="hmessage">Bientôt sur vos écrans ! </h2>
        <h3 className="hmessage">(On your screens soon !)</h3>
        <p align="center">
       <img className="giftdrone" align="center" width="100%"  alt="GIF" src="https://media.giphy.com/media/Q94TX0ecoNtTadxhvx/giphy.gif"/>
       </p>
        </div>
        
      </header>
    </div>
  );
}

export default App;
