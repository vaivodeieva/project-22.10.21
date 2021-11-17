import '../Assets/Css/Categories.css';

function Categories() {

    return (

        <div>

            <div className="container mt-2">  
                <div className="row">
                    <div className="col-md-3 col-sm-6 item">
                        <div className="card item-card card-block">
                            <h4 className="card-title text-right"><i className="material-icons">settings</i></h4>
                            <img src="https://static.pexels.com/photos/7096/people-woman-coffee-meeting.jpg" alt="Photo of sunset"/>
                            <h5 className ="item-card-title mt-3 mb-3">Sierra Web Development • Owner</h5>
                            <p className ="card-text">This is a company that builds websites, web apps and e-commerce solutions.</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 item">
                        <div className="card item-card card-block">
                            <h4 className="item-card-title text-right"><i className="material-icons">settings</i></h4>
                            <img src="https://static.pexels.com/photos/7357/startup-photos.jpg" alt="Photo of sunset"/>
                            <h5 className ="card-title  mt-3 mb-3">ProVyuh</h5>
                            <p className ="card-text">This is a company that builds websites.</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 item">
                        <div className="card item-card card-block">
                            <h4 className="item-card-title text-right"><i className="material-icons">settings</i></h4>
                            <img src="https://static.pexels.com/photos/262550/pexels-photo-262550.jpeg" alt="Photo of sunset"/>
                            <h5 className ="card-title  mt-3 mb-3">ProVyuh</h5>
                            <p className ="card-text">This is a company that builds websites, web apps and e-commerce solutions.</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 item">
                        <div className="card item-card card-block">
                            <h4 className="item-card-title text-right"><i className="material-icons">settings</i></h4>
                            <img src="https://static.pexels.com/photos/326424/pexels-photo-326424.jpeg" alt="Photo of sunset"/>
                            <h5 className ="card-title  mt-3 mb-3">ProVyuh</h5>
                            <p className ="card-text">This is a company that builds websites, web apps and e-commerce solutions.</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Categories;