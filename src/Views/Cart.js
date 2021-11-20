import '../Assets/Css/Cart.css';
import $ from 'jquery';

function Cart() {

let cart;
let p;
let item;
let itemCopy;
let i;

let shoppingCart = (function() {
    
    cart = [];
    
    // Constructor
    function Item(name, price, count) {
      this.name = name;
      this.price = price;
      this.count = count;
    }
    
    // Save cart
    function saveCart() {
      sessionStorage.setItem('shoppingCart', JSON.stringify(cart));
    }
    
      // Load cart
    function loadCart() {
      cart = JSON.parse(sessionStorage.getItem('shoppingCart'));
    }
    if (sessionStorage.getItem("shoppingCart") != null) {
      loadCart();
    }
    
  
    let obj = {};
    
    // Add to cart
    obj.addItemToCart = function(name, price, count) {
      for(let item in cart) {
        if(cart[item].name === name) {
          cart[item].count ++;
          saveCart();
          return;
        }
      }
      let item = new Item(name, price, count);
      cart.push(item);
      saveCart();
    }
    // Set count from item
    obj.setCountForItem = function(name, count) {
      for(let i in cart) {
        if (cart[i].name === name) {
          cart[i].count = count;
          break;
        }
      }
    };
    // Remove item from cart
    obj.removeItemFromCart = function(name) {
        for(let item in cart) {
          if(cart[item].name === name) {
            cart[item].count --;
            if(cart[item].count === 0) {
              cart.splice(item, 1);
            }
            break;
          }
      }
      saveCart();
    }
  
    // Remove all items from cart
    obj.removeItemFromCartAll = function(name) {
      for(let item in cart) {
        if(cart[item].name === name) {
          cart.splice(item, 1);
          break;
        }
      }
      saveCart();
    }
  
    // Clear cart
    obj.clearCart = function() {
      cart = [];
      saveCart();
    }
  
    // Count cart 
    obj.totalCount = function() {
      let totalCount = 0;
      for(let item in cart) {
        totalCount += cart[item].count;
      }
      return totalCount;
    }
  
    // Total cart
    obj.totalCart = function() {
      let totalCart = 0;
      for(let item in cart) {
        totalCart += cart[item].price * cart[item].count;
      }
      return Number(totalCart.toFixed(2));
    }
  
    // List cart
    obj.listCart = function() {
      let cartCopy = [];
      for(i in cart) {
        item = cart[i];
        itemCopy = {};
        for(p in item) {
          itemCopy[p] = item[p];
  
        }
        itemCopy.total = Number(item.price * item.count).toFixed(2);
        cartCopy.push(itemCopy)
      }
      return cartCopy;
    }

    return obj;
  })();
  
   
  // Add item
  $('.add-to-cart').click(function(event) {
    event.preventDefault();
    let name = $(this).data('name');
    let price = Number($(this).data('price'));
    shoppingCart.addItemToCart(name, price, 1);
    displayCart();
  });
  
  // Clear items
  $('.clear-cart').click(function() {
    shoppingCart.clearCart();
    displayCart();
  });
  
  
  function displayCart() {
    let cartArray = shoppingCart.listCart();
    let output = "";
    for(let i in cartArray) {
      output += "<tr>"
        + "<td>" + cartArray[i].name + "</td>" 
        + "<td>(" + cartArray[i].price + ")</td>"
        + "<td><div className='input-group'><button className='minus-item input-group-addon btn btn-primary' data-name=" + cartArray[i].name + ">-</button>"
        + "<input type='number' className='item-count form-control' data-name='" + cartArray[i].name + "' value='" + cartArray[i].count + "'>"
        + "<button className='plus-item btn btn-primary input-group-addon' data-name=" + cartArray[i].name + ">+</button></div></td>"
        + "<td><button className='delete-item btn btn-danger' data-name=" + cartArray[i].name + ">X</button></td>"
        + " = " 
        + "<td>" + cartArray[i].total + "</td>" 
        +  "</tr>";
    }
    $('.show-cart').html(output);
    $('.total-cart').html(shoppingCart.totalCart());
    $('.total-count').html(shoppingCart.totalCount());
  }
  
  // Delete item button
  
  $('.show-cart').on("click", ".delete-item", function(event) {
    let name = $(this).data('name')
    shoppingCart.removeItemFromCartAll(name);
    displayCart();
  })
  
  
  // -1
  $('.show-cart').on("click", ".minus-item", function(event) {
    let name = $(this).data('name')
    shoppingCart.removeItemFromCart(name);
    displayCart();
  })
  // +1
  $('.show-cart').on("click", ".plus-item", function(event) {
    let name = $(this).data('name')
    shoppingCart.addItemToCart(name);
    displayCart();
  })
  
  // Item count input
  $('.show-cart').on("change", ".item-count", function(event) {
     let name = $(this).data('name');
     let count = Number($(this).val());
    shoppingCart.setCountForItem(name, count);
    displayCart();
  });
  
  displayCart();
  

    return (

        <div>
            {/* <!-- Nav --> */}
            <nav className="navbar navbar-inverse bg-inverse fixed-top bg-faded">
                <div className="row">
                    <div className="col">
                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#cart">Cart (<span className="total-count"></span>)</button><button className="clear-cart btn btn-danger">Clear Cart</button>
                    </div>
                </div>
            </nav>

            {/* <!-- Main --> */}
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="card" style={{width: '20rem'}}>
                            <img className="card-img-top" src="http://www.azspagirls.com/files/2010/09/orange.jpg" alt="Card image cap"/>
                            <div className ="card-block">
                            <h4 className ="card-title">Orange</h4>
                            <p className ="card-text">Price: $0.5</p>
                            <a href="#" data-name="Orange" data-price="0.5" className ="add-to-cart btn btn-primary">Add to cart</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card" style={{width: '20rem'}}>
                            <img className="card-img-top" src="http://images.all-free-download.com/images/graphicthumb/vector_illustration_of_ripe_bananas_567893.jpg" alt="Card image cap"/>
                            <div className ="card-block">
                            <h4 className ="card-title">Banana</h4>
                            <p className ="card-text">Price: $1.22</p>
                            <a href="#" data-name="Banana" data-price="1.22" className ="add-to-cart btn btn-primary">Add to cart</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card" style={{width: '20rem'}}>
                            <img className="card-img-top" src="https://3.imimg.com/data3/IC/JO/MY-9839190/organic-lemon-250x250.jpg" alt="Card image cap"/>
                            <div className ="card-block">
                            <h4 className ="card-title">Lemon</h4>
                            <p className ="card-text">Price: $5</p>
                            <a href="#" data-name="Lemon" data-price="5" className ="add-to-cart btn btn-primary">Add to cart</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="cart" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Cart</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <table className="show-cart table">

                            </table>
                            <div>Total price: $<span className="total-cart"></span></div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Order now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Cart;