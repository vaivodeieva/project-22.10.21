import '../Assets/Css/Aboutus.css';
function Aboutus() {

    return (

        <div>

            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h3>Reports</h3>

                        <div class="tabbable-panel">
                            <div class="tabbable-line">
                                <ul class="nav nav-tabs ">
                                    <li class="active">
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
                                <div class="tab-content">
                                    <div class="tab-pane active" id="tab_default_1">
                                        <p>
                                            Tab 1.
                                        </p>
                                        <p>
                                            lorem
                                        </p>
                                    </div>
                                    <div class="tab-pane" id="tab_default_2">
                                        <p>
                                            Tab 2.
                                        </p>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        </p>

                                    </div>
                                    <div class="tab-pane" id="tab_default_3">
                                        <p>
                                            Tab 3.
                                        </p>
                                        <p>
                                            Consectetur deleniti quisquam natus eius commodi.
                                        </p>

                                    </div>
                                    <div class="tab-pane" id="tab_default_4">
                                        <p>
                                            Tab 4.
                                        </p>
                                        <p>
                                            Consectetur deleniti quisquam natus eius commodi.
                                        </p>

                                    </div><div class="tab-pane" id="tab_default_5">
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