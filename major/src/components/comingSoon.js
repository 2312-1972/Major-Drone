import logo from '../logo.svg';
import '../App.css';
import funLogo from "../Logomd.png"
function Coming() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="message">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 class="title h1border">MAJOR DRONE</h1>
        <h2 className="hmessage">Bientôt sur vos écrans ! </h2>
        <div className="alignfundrone">
            <h3 className="hmessage">(On your screens soon !)</h3>
        <img className="giftdrone" align="center" width="10%"  alt="logo" src={funLogo} />
        </div>
        <p align="center">
       <img className="giftdrone" align="center" width="100%"  alt="GIF" src="https://media.giphy.com/media/Q94TX0ecoNtTadxhvx/giphy.gif"/>
      
       </p>
        </div>
        
      </header>
    </div>
  );
}

export default Coming;