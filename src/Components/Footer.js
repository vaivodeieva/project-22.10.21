import '../Assets/Css/Footer.css';
// import VanillaTilt from 'vanilla-tilt';
import Tilt from 'react-vanilla-tilt';

// VanillaTilt.init(document.querySelectorAll(".redes li a"), {
//   max: 30,
//   speed: 400,
//   glare: true,
//   "max-glare": 1
// });

function Footer() {

  // Source Code for Vanilla Javascript Tilt: https://cdnjs.cloudflare.com/ajax/libs/vanilla-tilt/1.7.0/vanilla-tilt.min.js
  
  return (

    <div>
      <footer className="rodape" id="rodape">
        <ul className="redes">
          <li data-text="Facebook"><Tilt><a target="blanck" className="facebook" href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></Tilt></li>
          <li data-text="Instagram"><a target="blanck" className="instagram" href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
          <li data-text="Twitter"><a target="blanck" className="twitter" href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
          <li data-text="Youtube"><a target="blanck" className="youtube" href="#"><i className="fa fa-youtube" aria-hidden="true"></i></a></li>
          <li data-text="Linkedin"><a target="blanck" className="linkedin" href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
          <li data-text="Githube"><a target="blanck" className="githube" href="#"><i className="fa fa-github" aria-hidden="true"></i></a></li>
          <li data-text="Codepen"><a target="blanck" className="codepen" href="#"><i className="fa fa-codepen" aria-hidden="true"></i></a></li>
        </ul>
      </footer>
      
    </div>
  )
}

export default Footer;