import '../App.css';
 import logo1b from '../logo1b2.png';
// import funLogo from "../Logomd.png"
function Header() {
  return (
    <div className="App" >
     <img src={logo1b} className="logo1b " alt="logo header" style={{alignItem:'flex start'}} />
     <h2 style={{fontFamily: 'stick No Bills' }}>Bientôt sur vos écrans ! </h2>
        <h3 style={{fontFamily: 'stick No Bills' }}>(On your screens soon !)</h3>
    </div>
  );
}

export default Header;
