import '../Assets/Css/Header.css';
// import $ from 'jquery';

function Header() {


    return (
        <div>

            <header class="container-fluid bg-white">

                <div class="container px-0 menuContainer">
                    <nav class="navbar navbar-expand-xl navbar-light align-items-end p-xl-0">
                        <a class="navbar-brand d-none" href="index.html">
                            <img src="https://runyoursite.in/wp-content/uploads/2020/02/runyoursite-logo.png" width="180px" class="img-fluid" />
                        </a>

                        <a href="#mobileMenu" id="mobileBar" class="d-none ml-auto"> <i class="fa fa-bars"></i></a>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav ml-md-auto justify-content-end" id="nav">
                                <li class="nav-item active">
                                    <a class="nav-link" href="index.html">Home <span class="sr-only"></span></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="about.html">About <span class="sr-only"></span></a>
                                </li>
                                <li class="nav-item dd">
                                    <a class="nav-link" href="#">Programs <span class="sr-only"></span></a>
                                    {/* <ul class="list-unstyled dropdownMenu">
							<li>
								<a href="toddlers.html">Toddlers</a>
							</li>
							<li>
								<a href="preschool.html">Preschool</a>
							</li>
						</ul> */}
                                </li>
                                <li class="nav-item dd">
                                    <a class="nav-link" href="#">Curriculum <span class="sr-only"></span></a>
                                    {/* <ul class="list-unstyled dropdownMenu">
							<li>
								<a href="play-based-learning.html">Play-Based Learning</a>
							</li>
							<li>
								<a href="physical-literacy.html">Physical Literacy</a>
							</li>
							<li>
								<a href="steam-curriculum.html">Steam Curriculum</a>
							</li>
						</ul> */}
                                </li>
                                <li class="nav-item dd">
                                    <a class="nav-link" href="#">Parent Corner <span class="sr-only">(Parent Corner)</span></a>
                                    {/* <ul class="list-unstyled dropdownMenu">
                                        <li>
                                            <a href="nutrition.html">Nutrition</a>
                                        </li>
                                        <li>
                                            <a href="parent-reviews.html">Parent Reviews</a>
                                        </li>
                                        <li>
                                            <a href="enrolment.html">Enrolment</a>
                                        </li>
                                    </ul> */}
                                </li>
                                <li class="nav-item dd">
                                    <a class="nav-link" href="#">Photo Gallery <span class="sr-only">(Photo Gallery)</span></a>
                                    {/* <ul class="list-unstyled dropdownMenu">
                                        <li>
                                            <a href="bhnM-mississauga.html">BH‘n’M - Mississauga</a>
                                        </li>
                                        <li>
                                            <a href="bhnm-brampton.html">BH‘n’M - Brampton</a>
                                        </li>
                                    </ul> */}
                                </li>
                                <li class="nav-item ">
                                    <a class="nav-link" href="contact-us.html">Contact Us <span class="sr-only"></span></a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>

            </header>

        </div >
    )
}

export default Header;