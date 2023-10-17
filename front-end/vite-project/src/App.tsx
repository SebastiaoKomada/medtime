import 'style.sass'
import './App.css'

function App() {
   

  return (
    <>
    
   
    <nav className="navbar">
      <h1 className="navbar__logo">MedTime</h1>
      <div className="navbar__bars"><i className="fas fa-bars"></i></div>
      <div className="navbar__menu">
        <h1 className="navbar__menu--links">Home</h1>
        <h1 className="navbar__menu--links">Cadastrar</h1>
        <h1 className="navbar__menu--links" id="button">Login</h1>
      </div>
    </nav>



    
    <div className="hero">
      <div className="hero__container">
        <div className="hero__container--left">
          <h1>MedTime</h1>
          <h2> Sendo sua memória</h2>
          <p>Cadastre-se para fazer parte.</p>
          <button className="hero__container--btn"><a href="#">Cadastrar-se</a></button>
        </div>
        <div className="hero__container--right">
          <img
            src="src/assets/img1.svg"
            alt="alien"
            className="hero__container--img"
          />
        </div>
      </div>
    </div>

   

    <section className="isso">
       
    <header>
      <svg className="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">         
        <path className="wave-1" fill="#108c4e" fill-opacity="1" d="M0,128L18.5,106.7C36.9,85,74,43,111,42.7C147.7,43,185,85,222,112C258.5,139,295,149,332,149.3C369.2,149,406,139,443,122.7C480,107,517,85,554,90.7C590.8,96,628,128,665,122.7C701.5,117,738,75,775,96C812.3,117,849,203,886,213.3C923.1,224,960,160,997,138.7C1033.8,117,1071,139,1108,170.7C1144.6,203,1182,245,1218,245.3C1255.4,245,1292,203,1329,181.3C1366.2,160,1403,160,1422,160L1440,160L1440,320L1421.5,320C1403.1,320,1366,320,1329,320C1292.3,320,1255,320,1218,320C1181.5,320,1145,320,1108,320C1070.8,320,1034,320,997,320C960,320,923,320,886,320C849.2,320,812,320,775,320C738.5,320,702,320,665,320C627.7,320,591,320,554,320C516.9,320,480,320,443,320C406.2,320,369,320,332,320C295.4,320,258,320,222,320C184.6,320,148,320,111,320C73.8,320,37,320,18,320L0,320Z"></path>
        <path className="wave-2" fill="#0cab5b" fill-opacity="1" d="M0,128L24,160C48,192,96,256,144,261.3C192,267,240,213,288,176C336,139,384,117,432,128C480,139,528,181,576,181.3C624,181,672,139,720,122.7C768,107,816,117,864,128C912,139,960,149,1008,170.7C1056,192,1104,224,1152,213.3C1200,203,1248,149,1296,122.7C1344,96,1392,96,1416,96L1440,96L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path>
        <path className="wave-3" fill="#00cc66" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
    </header>
      

    </section>
    </>
  )
}

export default App
