import '../App.css';
 import logo1b from '../logo1b.png';
// import funLogo from "../Logomd.png"
function Header() {
  return (
    <div className="App">
     <img src={logo1b} className="logo1b " alt="logo header" />
        <h1 class="title " style={{fontFamily: 'stick No Bills' }}>MAJOR DRONE</h1>
    </div>
  );
}

export default Header;
