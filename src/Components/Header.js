function Header() {

    return (
        <div>
            {/* <!-- Navigation Block --> */}
            <div className="bloc l-bloc" id="nav-bloc">
                <div className="container">
                    <nav className="navbar row">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">Company</a>
                            <button id="nav-toggle" type="button" className="ui-navbar-toggle navbar-toggle" data-toggle="collapse" data-target=".navbar-1">
                                <span className="sr-only">Toggle navigation</span><span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span>
                            </button>
                        </div>
                        <div className="collapse navbar-collapse navbar-1">
                            <ul className="site-navigation nav">
                                <li>
                                    <a href="#">about</a>
                                </li>
                                <li>
                                    <a href="#">team</a>
                                </li>
                                <li>
                                    <a href="#">projects</a>
                                </li>
                                <li>
                                    <a href="#">feed</a>
                                </li>
                                <li>
                                    <a href="#">contacts</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
            {/* <!-- Navigation Block END --> */}


            {/* <!-- Carousel --> */}
            <div className="container">
                <div className="row">
                    {/* <!-- Carousel --> */}
                    <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
                        {/* <!-- Indicators --> */}
                        <ol className="carousel-indicators">
                            <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                            <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                            <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                        </ol>
                        {/* <!-- Wrapper for slides --> */}
                        <div className="carousel-inner">
                            <div className="item active">
                                <img src="https://unsplash.s3.amazonaws.com/batch%209/barcelona-boardwalk.jpg" alt="First slide" />
                                {/* <!-- Static Header --> */}
                                <div className="header-text hidden-xs">
                                    <div className="col-md-12 text-center">
                                        <h2>
                                            <span>OUR VISION</span>
                                        </h2>
                                        <br />
                                        <div className="">
                                            <a className="btn btn-theme btn-sm btn-min-block" href="#">Read More</a></div>
                                    </div>
                                </div>
                                {/* <!-- /header-text --> */}
                            </div>
                            <div className="item">
                                <img src="https://unsplash.s3.amazonaws.com/batch%209/barcelona-boardwalk.jpg" alt="Second slide"/>
                            {/* <!-- Static Header --> */}
                                <div className ="header-text hidden-xs">
                                <div className ="col-md-12 text-center">
                                <h2>
                                <span>OUR VISION</span>
                                </h2>
                                <br/>
                                <div className ="">
                                <a className ="btn btn-theme btn-sm btn-min-block" href="#">Read More</a></div>
                                </div>
                                </div>
                            {/* <!-- /header-text --> */}
                            </div>
                            <div className="item">
                                <img src="https://unsplash.s3.amazonaws.com/batch%209/barcelona-boardwalk.jpg" alt="Third slide" />
                                {/* <!-- Static Header --> */}
                                <div className="header-text hidden-xs">
                                    <div className="col-md-12 text-center">
                                        <h2>
                                            <span>OUR VISION</span>
                                        </h2>
                                        <br />
                                        <div className="">
                                            <a className="btn btn-theme btn-sm btn-min-block" href="#">Read More</a></div>
                                    </div>
                                </div>
                                {/* <!-- /header-text --> */}
                            </div>
                        </div>
                        {/* <!-- Controls --> */}
                        <a className="left carousel-control" href="#carousel-example-generic" data-slide="prev">
                            <span className="glyphicon glyphicon-chevron-left"></span>
                        </a>
                        <a className="right carousel-control" href="#carousel-example-generic" data-slide="next">
                            <span className="glyphicon glyphicon-chevron-right"></span>
                        </a>
                    </div>
                    {/* <!-- Carousel END --> */}
                </div>
            </div>

            {/* <!-- Posts --> */}

            <div className="container">
                <div className="row">
                    <div className="col-sm-4 col-md-4">
                        <div className="post news">
                            <div className="post-img-content">
                                <img src="http://placehold.it/460x250/e67e22/ffffff&text=Lorem" className="img-responsive" />
                                <span className="post-date">Lorem Ipsum</span>
                            </div>
                            <br />
                            <div className="content">
                                <div>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                    unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </div>
                                <div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-5 col-md-5">
                        <div className="post work">
                            <div className="post-img-content">
                                <img src="http://placehold.it/460x250/2980b9/ffffff&text=Lorem" className="img-responsive" />
                                <span className="post-date">Lorem Ipsum</span>
                            </div>
                            <br />
                            <div className="content">
                                <div>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                    unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </div>
                                <div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3 col-md-3">
                        <div className="post feed">
                            <div className="post-img-content">
                                <img src="http://placehold.it/460x250/47A447/ffffff&text=Lorem" className="img-responsive" />
                                <span className="post-date">Lorem Ipsum</span>
                            </div>
                            <br />
                            <div className="content">
                                <div>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                    unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </div>
                                <div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header;