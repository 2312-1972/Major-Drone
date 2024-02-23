import logo from '../logo.svg';
import '../App.css';
import funLogo from "../Logomd.png"
function Header() {
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
       <img className="giftdrone" align="center" width="20%"  alt="logo" src={funLogo} />
       </p>
        </div>
        
      </header>
    </div>
  );
}

export default Header;
