import '../App.css';
 import logo1b from '../logo1b2.png';
// import funLogo from "../Logomd.png"
function Header() {
  return (
    <div className="App" >
     <img src={logo1b} className="logo1b " alt="logo header" style={{display: 'flex', justifyContent: 'flex start', margin:'30px'}} />
     <h2 style={{fontFamily: 'stick No Bills', display: 'flex', justifyContent: 'start' , color:'white', margin:'30px' }}>Bientôt sur vos écrans ! </h2>
        <h3 style={{fontFamily: 'stick No Bills', display: 'flex', justifyContent: 'start', color:'white', marginLeft:'50px' }}>(On your screens soon !)</h3>
    </div>
  );
}

export default Header;
