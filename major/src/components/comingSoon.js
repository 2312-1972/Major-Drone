import logo from '../logo.svg';
import '../App.css';
// import funLogo from "../Logomd.png"

function Coming() {
  return (
    <div class="App">
      <header class="App-header">
        <div class="message">
        <img src={logo} class="App-logo" alt="logo" />
        <h1 class="title " style={{fontFamily: 'stick No Bills' }}>MAJOR DRONE</h1>
        <h2 style={{fontFamily: 'stick No Bills' }}>Bientôt sur vos écrans ! </h2>
        <h3 style={{fontFamily: 'stick No Bills' }}>(On your screens soon !)</h3>
        <div class="alignfundrone">
            
        
        </div>
        <section align="center">
       <img class="giftdrone" align="center" width="60%" height="auto" alt="GIF" src="https://media.giphy.com/media/Q94TX0ecoNtTadxhvx/giphy.gif"/>
     
       
       </section>
        </div>
        
      </header>
    </div>
  );
}

export default Coming;