import '../Assets/Css/Aboutus.css';
import pic1 from '../Assets/Images/pic1.jpg';
import pic2 from '../Assets/Images/pic2.jpg';
import pic3 from '../Assets/Images/pic3.jpg';
import pic4 from '../Assets/Images/pic4.jpg';
import pic5 from '../Assets/Images/pic5.jpg';

function Aboutus() {

    return (

        <div>

            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h3>Reports</h3>

                        <div className="tabbable-panel">
                            <div className="tabbable-line">
                                <ul className="nav nav-tabs ">
                                    <li className="active">
                                        <a href="#tab_default_1" data-toggle="tab">
                                            Company </a>
                                    </li>
                                    <li>
                                        <a href="#tab_default_2" data-toggle="tab">
                                            Mission </a>
                                    </li>
                                    <li>
                                        <a href="#tab_default_3" data-toggle="tab">
                                            Goals </a>
                                    </li>
                                    <li>
                                        <a href="#tab_default_4" data-toggle="tab">
                                            Contact </a>
                                    </li>
                                    <li>
                                        <a href="#tab_default_5" data-toggle="tab">
                                            Map </a>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div className="tab-pane active" id="tab_default_1">
                                        <p>
                                            <img src={pic1} />
                                        </p>
                                        <p>
                                            Grass smells good time to go zooooom bleghbleghvomit my furball really tie the room together. Ooh, are those your $250 dollar sandals? lemme use that as my litter box why can't i catch that stupid red dot pet my belly, you know you want to; seize the hand and shred it! for lay on arms while you're using the keyboard so ears back wide eyed yet suddenly go on wild-eyed crazy rampage.
                                        </p>
                                    </div>
                                    <div className="tab-pane" id="tab_default_2">
                                        <p>
                                            <img src={pic2} />
                                        </p>
                                        <p>
                                            Sleep in the bathroom sink give me attention or face the wrath of my claws or meow but see brother cat receive pets, attack out of jealousy, or please let me outside pouty face yay! wait, it's cold out please let me inside pouty face oh, thank you rub against mommy's leg oh it looks so nice out, please let me outside again the neighbor cat was mean to me please let me back inside spread kitty litter all over house scratch the postman wake up lick paw wake up owner meow meow.
                                        </p>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        </p>

                                    </div>
                                    <div className="tab-pane" id="tab_default_3">
                                        <p>
                                            <img src={pic3} />
                                        </p>
                                        <p>
                                            Pooping rainbow while flying in a toasted bread costume in space wack the mini furry mouse. That box? i can fit in that box cough hairball on conveniently placed pants but kitty scratches couch bad kitty but kitty poochy.
                                        </p>
                                        <p>
                                            Consectetur deleniti quisquam natus eius commodi.
                                        </p>

                                    </div>
                                    <div className="tab-pane" id="tab_default_4">
                                        <p>
                                            <img src={pic4} />
                                        </p>
                                        <p>
                                            Suddenly go on wild-eyed crazy rampage lie on your belly and purr when you are asleep. Meow. Lick the curtain just to be annoying refuse to come home when humans are going to bed; stay out all night then yowl like i am dying at 4am always ensure to lay down in such a manner that tail can lightly brush human's nose chew master's slippers cat gets stuck in tree firefighters try to get cat down firefighters get stuck in tree cat eats firefighters' slippers, or i am the best. Scratch me now! stop scratching me! ask for petting i bet my nine lives on you-oooo-ooo-hooo do i like standing on litter cuz i sits when i have spaces, my cat buddies have no litter i live in luxury cat life. Cats woo kitty power.
                                        </p>
                                        <p>
                                            Consectetur deleniti quisquam natus eius commodi.
                                        </p>

                                    </div><div className="tab-pane" id="tab_default_5">
                                        <p>
                                            <img src={pic5} />
                                        </p>
                                        <p>
                                            Groom yourself 4 hours - checked, have your beauty sleep 18 hours - checked, be fabulous for the rest of the day - checked find something else more interesting grass smells good chew master's slippers and reward the chosen human with a slow blink. Hunt anything that moves why can't i catch that stupid red dot the cat was chasing the mouse ears back wide eyed being gorgeous with belly side up. Check cat door for ambush 10 times before coming in nyan fluffness ahh cucumber!. Cereal boxes make for five star accommodation love me! for knock dish off table head butt cant eat out of my own dish but hide from vacuum cleaner and just going to dip my paw in your coffee and do a taste test - oh never mind i forgot i don't like coffee - you can have that back now or catto munch salmono so sit in a box for hours. Thinking longingly about tuna brine cereal boxes make for five star accommodation .
                                        </p>
                                        <p>
                                            Consectetur deleniti quisquam natus eius commodi.
                                        </p>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>



        </div>
    )
}

export default Aboutus;