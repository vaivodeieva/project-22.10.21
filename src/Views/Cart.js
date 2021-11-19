function Cart() {

    return (

        <div>
            <div className="wrapper">
                <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex flex-column">
                        <div className="h3">My lists</div>
                        <div className="text-uppercase">6 sublists</div>
                    </div>
                    <div className="ml-auto btn"><span className="fas fa-cog"></span></div>
                    <div className="btn" id="sub"> + Add sublist </div>
                </div>
                <div className="notification alert alert-dismissible fade show text-white d-flex align-items-center my-3 text-justify" role="alert"> <span className="far fa-bell pr-2"></span> You've got 3 new items on your list and 7 new comments check it out! <button type="button" className="close text-white ml-auto" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true"> Ok, Thanks </span> </button> </div>
                <div id="table" className="bg-white rounded">
                    <div className="d-md-flex align-items-md-center px-3 pt-3">
                        <div className="d-flex flex-column">
                            <div className="h4 font-weight-bold">Wedding lists</div>
                            <div className="text-muted">400 items</div>
                        </div>
                        <div className="ml-auto d-flex align-items-center">
                            <div className="editors"> <img src="https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8ZmFjZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" id="img1" alt="" /> <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8ZmFjZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" id="img2" alt="" /> <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" id="img3" alt="" /> </div>
                            <div className="text-muted pl-md-0 pl-5"> + 7 editors </div>
                        </div>
                    </div>
                    <hr />
                    <div className="table-responsive">
                        <table className="table activitites" />
                        <thead>
                            <tr>
                                <th scope="col" className="text-uppercase header">item</th>
                                <th scope="col" className="text-uppercase">Quantity</th>
                                <th scope="col" className="text-uppercase">price each</th>
                                <th scope="col" className="text-uppercase">total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="item">
                                    <div className="d-flex"> <img src="https://images.unsplash.com/photo-1601479604588-68d9e6d386b5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FuZGxlc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                                        <div className="pl-2"> Suspended Heart Candles <div className="text-uppercase new"><span className="fas fa-star"></span>new</div>
                                            <div className="d-flex flex-column justify-content-center">
                                                <div className="text-muted">Blue</div>
                                                <div><a href="#"><span className="red text-uppercase"><span className="fas fa-comment pr-1"></span>add a comment</span></a> </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>120</td>
                                <td className="d-flex flex-column"><span className="red">$21.40</span> <del className="cross">$30.00</del> </td>
                                <td className="font-weight-bold"> $249 <div className="close">&times;</div> <button className="d-flex justify-content-end btn border">+ Add to cart</button> </td>
                            </tr>
                            <tr>
                                <td className="item">
                                    <div className="d-flex align-items-start"> <img src="https://www.freepnglogos.com/uploads/corona-png-logo/corona-bottle-transparent-png-logo-27.png" alt="" />
                                        <div> Wine Bottle Shaped in Gift Base <div className="text-uppercase new"><span className="fas fa-star"></span>new </div>
                                            <div> <a href="#"> <span className="red text-uppercase"> <span className="fas fa-comment pr-1"></span> add a comment </span> </a> </div>
                                        </div>
                                    </div>
                                </td>
                                <td>120</td>
                                <td className="d-flex flex-column">$21.40 </td>
                                <td className="font-weight-bold"> $249 <div className="close">&times;</div> <button className="d-flex justify-content-end align-items-end btn border">+ Add to cart</button> </td>
                            </tr>
                            <tr>
                                <td className="item">
                                    <div className="d-flex align-items-start"> <img src="https://www.freepnglogos.com/uploads/corona-png-logo/corona-bottle-transparent-png-logo-27.png" alt="" />
                                        <div> Copper Moscow Mug <div className="text-uppercase new"><span className="fas fa-star"></span>new </div>
                                            <div className="d-flex flex-column justify-content-center">
                                                <div className="text-muted">Blue/Mute</div>
                                                <div><a href="#"><span className="red text-uppercase"><span className="fas fa-comment pr-1"></span>add a comment</span></a> </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>120</td>
                                <td className="d-flex flex-column">$21.40 </td>
                                <td className="font-weight-bold"> $249 <div className="close">&times;</div> <button className="d-flex justify-content-end btn border">+ Add to cart</button> </td>
                            </tr>
                            <tr>
                                <td className="item">
                                    <div className="d-flex align-items-start"> <img src="https://www.freepnglogos.com/uploads/corona-png-logo/corona-bottle-transparent-png-logo-27.png" alt="" />
                                        <div> Wine Bottle Shaped in Gift Base <div className="d-md-flex align-items-md-center">
                                            <div className="editors"> <img src="https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8ZmFjZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" id="commentor1" alt="" /> <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8ZmFjZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" id="commentor2" alt="" /> <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" id="commentor3" alt="" /> </div>
                                            <div className="text-muted pl-md-5"> <span className="fas fa-comment"></span> <a href="#" className="comments text-muted"> + 7 comments </a> </div>
                                        </div>
                                            <div><a href="#"><span className="red text-uppercase"><span className="fas fa-comment pr-1"></span>add a comment</span></a> </div>
                                        </div>
                                    </div>
                                </td>
                                <td>120</td>
                                <td className="d-flex flex-column">$21.40 </td>
                                <td className="font-weight-bold"> $249 <div className="close">&times;</div> <button className="d-flex justify-content-end btn border">+ Add to cart</button> </td>
                            </tr>
                        </tbody>
                    </div>
                </div>
                <hr className="items" />
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col" className="text-uppercase header">item</th>
                                <th scope="col" className="text-uppercase">Quantity</th>
                                <th scope="col" className="text-uppercase">price each</th>
                                <th scope="col" className="text-uppercase">total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="item">
                                    <div className="d-flex align-items-start"> <img src="https://www.freepnglogos.com/uploads/corona-png-logo/corona-bottle-transparent-png-logo-27.png" alt="" />
                                        <div> Wine Bottle Shaped in Gift Base <div className="text-uppercase new"><span className="fas fa-star"></span>new </div>
                                            <div><a href="#"><span className="red text-uppercase"><span className="fas fa-comment pr-1"></span>add a comment</span></a> </div>
                                        </div>
                                    </div>
                                </td>
                                <td>120</td>
                                <td className="d-flex flex-column">$21.40 </td>
                                <td className="font-weight-bold"> $249 <div className="close">&times;</div> <button className="d-flex justify-content-end align-items-end btn border">+ Add to cart</button> </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="d-flex justify-content-between">
                <div className="text-muted"> <button className="btn" type="button" data-toggle="collapse" data-target="#table" aria-expanded="false" aria-controls="table"> Hide <span className="fas fa-minus"></span> </button> </div>
                <div className="d-flex flex-column justify-content-end align-items-end">
                    <div className="d-flex px-3 pr-md-5 py-1 subtotal">
                        <div className="px-4">Subtotal</div>
                        <div className="h5 font-weight-bold px-md-2">$1,340</div>
                    </div>
                    <div className="text-muted tag"> +add all the items to cart <span className="fas fa-shopping-cart pl-1"></span> </div>
                </div>
            </div>
        </div>

    )
}

export default Cart;