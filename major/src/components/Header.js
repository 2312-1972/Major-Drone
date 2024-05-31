import '../App.css';
 import logo1b from '../logo1b2.png';
// import funLogo from "../Logomd.png"
function Header() {
  return (
    <div className="App" >
     <img src={logo1b} className="logo1b " alt="logo header" style={{display: 'flex', justifyContent: 'flex start', }} />
      
    </div>
  );
}

export default Header;
