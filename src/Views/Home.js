import '../Assets/Css/Home.css';
import homepicture from '../Assets/Images/home-pic.png';

function Home() {

    return (
        <div>

            <h2 className="text-center"></h2>
           <img src={homepicture} className="img-fluid align-center"/>
            <div className="slider-info-wrap clearfix pdlr0">
                <div className="slider-info-content">

                    <div className="slider-info-item">
                        <div className="info-item-media">
                            {/* <img src={pic1}/> */}
                            <div className="info-item-text">
                                <div className="info-price font-4"><span></span></div>
                                <div className="info-temp font-4"><span>local temperature</span> some text</div>
                                <p className="info-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
                            </div>
                        </div>
                        <div className="info-item-content">
                            <div className="main-title">
                                <h3 className="title"><span className="font-4"></span>Option 1</h3>
                                <div className="price"><span>Lorem Ipsum</span></div>
                                <span className="button">some text</span>
                            </div>
                        </div>
                    </div>

                    <div className="slider-info-item">
                        <div className="info-item-media">
                            {/* <img src={pic2}/> */}
                            <div className="info-item-text">
                                <div className="info-price font-4"><span></span></div>
                                <div className="info-temp font-4"><span>local temperature</span> some text</div>
                                <p className="info-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text </p>
                            </div>
                        </div>
                        <div className="info-item-content">
                            <div className="main-title">
                                <h3 className="title"><span className="font-4"></span> Option 2</h3>
                                <div className="price"><span>Lorem Ipsum</span></div>
                                <span className="button">some text</span>
                            </div>
                        </div>
                    </div>
                    <div className="slider-info-item">
                        <div className="info-item-media">
                            {/* <img src={pic3}/> */}
                            <div className="info-item-text">
                                <div className="info-price font-4"><span></span></div>
                                <div className="info-temp font-4"><span>local temperature</span> some text</div>
                                <p className="info-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
                            </div>
                        </div>
                        <div className="info-item-content">
                            <div className="main-title">
                                <h3 className="title"><span className="font-4"></span> Option 3</h3>
                                <div className="price"><span>Lorem Ipsum</span></div>
                                <span className="button">some text</span>
                            </div>
                        </div>
                    </div>
                    <div className="slider-info-item">
                        <div className="info-item-media">
                            {/* <img src={pic4}/> */}
                            <div className="info-item-text">
                                <div className="info-price font-4"><span></span></div>
                                <div className="info-temp font-4"><span>local temperature</span> some text</div>
                                <p className="info-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
                            </div>
                        </div>
                        <div className="info-item-content">
                            <div className="main-title">
                                <h3 className="title"><span className="font-4"></span> Option 4</h3>
                                <div className="price"><span>Lorem Ipsum</span></div>
                                <span className="button">some text</span>
                            </div>
                        </div>
                    </div>
                    </div>
                    </div>

                </div>
                )
}

                export default Home;