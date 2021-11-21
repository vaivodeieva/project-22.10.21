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
                    <div className="col-md-12">
                        <h3>Reports</h3>

                        <div className="tabbable-panel">
                            <div className="tabbable-line">
                                <ul className="nav nav-tabs ">
                                    <li className="active">
                                        <a href="#tab_default_1" data-toggle="tab">
                                            Company or Individual </a>
                                    </li>
                                    <li>
                                        <a href="#tab_default_2" data-toggle="tab">
                                            Report title and Category </a>
                                    </li>
                                    <li>
                                        <a href="#tab_default_3" data-toggle="tab">
                                            Your Reports </a>
                                    </li>
                                    <li>
                                        <a href="#tab_default_4" data-toggle="tab">
                                            Documents </a>
                                    </li>
                                    <li>
                                        <a href="#tab_default_5" data-toggle="tab">
                                            TC </a>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div className="tab-pane active" id="tab_default_1">
                                        <p>
                                            <img src={pic1}/>
                                        </p>
                                        <p>
                                            lorem
                                        </p>
                                    </div>
                                    <div className="tab-pane" id="tab_default_2">
                                        <p>
                                            Tab 2.
                                        </p>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        </p>

                                    </div>
                                    <div className="tab-pane" id="tab_default_3">
                                        <p>
                                            Tab 3.
                                        </p>
                                        <p>
                                            Consectetur deleniti quisquam natus eius commodi.
                                        </p>

                                    </div>
                                    <div className="tab-pane" id="tab_default_4">
                                        <p>
                                            Tab 4.
                                        </p>
                                        <p>
                                            Consectetur deleniti quisquam natus eius commodi.
                                        </p>

                                    </div><div className="tab-pane" id="tab_default_5">
                                        <p>
                                            Tab 5.
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