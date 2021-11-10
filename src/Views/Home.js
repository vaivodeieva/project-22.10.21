import '../Assets/Css/Home.css';
import homepicture from '../Assets/Images/home-pic.png';
import pic1 from '../Assets/Images/pic1.jpg';
import pic2 from '../Assets/Images/pic2.jpg';
import pic3 from '../Assets/Images/pic3.jpeg';
import pic4 from '../Assets/Images/pic4.jpg';

function Home() {

    return (
        <div>

            <h2 className="text-center"></h2>
           <img src={homepicture} className="img-fluid align-center"/>
            <div className="slider-info-wrap clearfix pdlr0">
                <div className="slider-info-content">

                    <div className="slider-info-item">
                        <div className="info-item-media">
                            {/* <img src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" data-at2x="pic/slider-info-3@2x.jpg" alt="" /> */}
                            <img src={pic1}/>
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
                            {/* <img src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" data-at2x="pic/slider-info-2@2x.jpg" alt="" /> */}
                            <img src={pic2}/>
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
                            {/* <img src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" data-at2x="pic/slider-info-2@2x.jpg" alt="" /> */}
                            <img src={pic3}/>
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
                            {/* <img src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" data-at2x="pic/slider-info-2@2x.jpg" alt="" /> */}
                            <img src={pic4}/>
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