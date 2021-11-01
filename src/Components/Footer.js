import '../Assets/Css/Footer.css';
import VanillaTilt from 'vanilla-tilt';

function Footer() {

    VanillaTilt.init(document.querySelectorAll(".redes li a"), {
        max: 30,
        speed: 400,
        glare: true,
        "max-glare": 1
      });
      
      // Source Code for Vanilla Javascript Tilt: https://cdnjs.cloudflare.com/ajax/libs/vanilla-tilt/1.7.0/vanilla-tilt.min.js
      

    return (

        <div>

  <footer class="rodape" id="rodape">
    <ul class="redes">
      <li data-text="Facebook"><a target="blanck" class="facebook" href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
      <li data-text="Instagram"><a target="blanck" class="instagram" href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
      <li data-text="Twitter"><a target="blanck" class="twitter" href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
      <li data-text="Youtube"><a target="blanck" class="youtube" href="#"><i class="fa fa-youtube" aria-hidden="true"></i></a></li>
      <li data-text="Linkedin"><a target="blanck" class="linkedin" href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
      <li data-text="Githube"><a target="blanck" class="githube" href="#"><i class="fa fa-github" aria-hidden="true"></i></a></li>
      <li data-text="Codepen"><a target="blanck" class="codepen" href="#"><i class="fa fa-codepen" aria-hidden="true"></i></a></li>
    </ul>
  </footer>

        </div>
    )
}

export default Footer;