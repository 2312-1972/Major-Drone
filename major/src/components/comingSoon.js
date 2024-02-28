import logo from '../logo.svg';
import '../App.css';
import funLogo from "../Logomd.png"
import lol from"../lol.jpeg"
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
        <section align="center">
       <img className="giftdrone" align="center" width="40%" height="auto" alt="GIF" src={lol}/>
      {/* "https://media.giphy.com/media/Q94TX0ecoNtTadxhvx/giphy.gif" */}
       
<div style={{ backgroundColor: 'grey', border: '1px solid black', borderRadius: '10px', padding: '10px', margin:' 20px' }}>
       <h1 style={{ fontFamily: 'stick No Bills' , border: '1px solid black',borderRadius: '10px' }}  >STICK NO BILL </h1>
       <h2 style={{ fontFamily: 'stick No Bills'  }}>Browse topics</h2>
       <h3 style={{ fontFamily: 'stick No Bills'  }}>Using variable fonts on the web</h3>
       <p style={{ fontFamily: 'stick No Bills'  }}>Welcome to our library of original guides to the world of typography, which the Google Fonts team is producing in collaboration with typographic experts from around the world. Google Fonts Knowledge enables designers and developers of all skill sets to choose and use type with purpose.</p>

       <h1 style={{ fontFamily: 'turret road' ,border: '1px solid black',borderRadius: '10px' }}>TURRET ROAD</h1>
       <h2 style={{ fontFamily: 'turret road'  }}>Browse topics</h2>
       <h3 style={{ fontFamily: 'turret road'  }}>Using variable fonts on the web</h3>
       <p style={{ fontFamily: 'turret road'  }}></p>

       <h1 style={{ fontFamily: 'bruno ace' ,border: '1px solid black',borderRadius: '10px' }}>BRUNO ACE</h1>
       <h2 style={{ fontFamily: 'bruno ace'  }}>Browse topics</h2>
       <h3 style={{ fontFamily: 'bruno ace'  }}>Using variable fonts on the web</h3>
       <p style={{ fontFamily: 'bruno ace'  }}>Welcome to our library of original guides to the world of typography, which the Google Fonts team is producing in collaboration with typographic experts from around the world. Google Fonts Knowledge enables designers and developers of all skill sets to choose and use type with purpose.</p>

       <h1 style={{ fontFamily: 'kode mono' ,border: '1px solid black',borderRadius: '10px' }}>HKODE MONO</h1>
       <h2 style={{ fontFamily: 'kode mono'  }}>Browse topics</h2>
       <h3 style={{ fontFamily: 'kode mono'  }}>Using variable fonts on the web</h3>
       <p style={{ fontFamily: 'kode mono'  }}>Welcome to our library of original guides to the world of typography, which the Google Fonts team is producing in collaboration with typographic experts from around the world. Google Fonts Knowledge enables designers and developers of all skill sets to choose and use type with purpose.</p>


       <h1 style={{ fontFamily: 'foldit',border: '1px solid black',borderRadius: '10px'  }}>FOLDIT</h1>
       <h2 style={{ fontFamily: 'foldit'  }}>Browse topics</h2>
       <h3 style={{ fontFamily: 'foldit'  }}>Using variable fonts on the web</h3>
       <p style={{ fontFamily: 'foldit'  }}>Welcome to our library of original guides to the world of typography, which the Google Fonts team is producing in collaboration with typographic experts from around the world. Google Fonts Knowledge enables designers and developers of all skill sets to choose and use type with purpose.</p>
       </div>
       
       </section>
        </div>
        
      </header>
    </div>
  );
}

export default Coming;