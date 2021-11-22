import '../Assets/Css/Cart.css';
import $ from 'jquery';


function Cart() {
  let check = false;

  function changeVal(el) {
    let qt = parseFloat(el.parent().children(".qt").html());
    let price = parseFloat(el.parent().children(".price").html());
    let eq = Math.round(price * qt * 100) / 100;
    
    el.parent().children(".full-price").html( eq + "€" );
    
    changeTotal();      
  }
  
  function changeTotal() {
    
    let price = 0;
    
    $(".full-price").each(function(index){
      price += parseFloat($(".full-price").eq(index).html());
    });
    
    price = Math.round(price * 100) / 100;
    let tax = Math.round(price * 0.05 * 100) / 100
    let shipping = parseFloat($(".shipping span").html());
    let fullPrice = Math.round((price + tax + shipping) *100) / 100;
    
    if(price == 0) {
      fullPrice = 0;
    }
    
    $(".subtotal span").html(price);
    $(".tax span").html(tax);
    $(".total span").html(fullPrice);
  }
  
  $(document).ready(function(){
    
    $(".remove").click(function(){
      let el = $(this);
      el.parent().parent().addClass("removed");
      window.setTimeout(
        function(){
          el.parent().parent().slideUp('fast', function() { 
            el.parent().parent().remove(); 
            if($(".product").length == 0) {
              if(check) {
                $("#cart").html("<h1>The shop does not function, yet!</h1><p>If you liked my shopping cart, please take a second and heart this Pen on <a href='https://codepen.io/ziga-miklic/pen/xhpob'>CodePen</a>. Thank you!</p>");
              } else {
                $("#cart").html("<h1>No products!</h1>");
              }
            }
            changeTotal(); 
          });
        }, 200);
    });
    
    $(".qtPlus").click(function(){
      $(this).parent().children(".qt").html(parseInt($(this).parent().children(".qt").html()) + 1);
      
      $(this).parent().children(".full-price").addClass("added");
      
      let el = $(this);
      window.setTimeout(function(){el.parent().children(".full-price").removeClass("added"); changeVal(el);}, 150);
    });
    
    $(".qt-minus").click(function(){
      
      let child = $(this).parent().children(".qt");
      
      if(parseInt(child.html()) > 1) {
        child.html(parseInt(child.html()) - 1);
      }
      
      $(this).parent().children(".full-price").addClass("minused");
      
      let el = $(this);
      window.setTimeout(function(){el.parent().children(".full-price").removeClass("minused"); changeVal(el);}, 150);
    });
    
    window.setTimeout(function(){$(".is-open").removeClass("is-open")}, 1200);
    
    $(".btn").click(function(){
      check = true;
      $(".remove").click();
    });
  });


  return (

    <div>
      <header id="site-header">
        <div className="container">
          <h1>Shopping cart <span>[</span> <em><a href="https://codepen.io/tag/rodeo-007" target="_blank">CodePen Challange</a></em> <span className="last-span is-open">]</span></h1>
        </div>
      </header>

      <div className="container">

        <section id="cart">
          <article className="product">
            <header>
              <a className="remove">
                <img src="http://www.astudio.si/preview/blockedwp/wp-content/uploads/2012/08/1.jpg" alt=""/>

                <h3>Remove product</h3>
              </a>
            </header>

            <div className="content">

              <h1>Lorem ipsum</h1>

              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, numquam quis perspiciatis ea ad omnis provident laborum dolore in atque.

              <div title="You have selected this product to be shipped in the color yellow." style={{top: 0}} className="color yellow"></div>
              <div style={{top: '43px'}} className="type small">XXL</div>
            </div>

            <footer className="content">
              <span className="qt-minus">-</span>
              <span className="qt">2</span>
              <span className="qtPlus">+</span>

              <h2 className="full-price">
                29.98€
              </h2>

              <h2 className="price">
                14.99€
              </h2>
            </footer>
          </article>

          <article className="product">
            <header>
              <a className="remove">
                <img src="http://www.astudio.si/preview/blockedwp/wp-content/uploads/2012/08/3.jpg" alt=""/>

                <h3>Remove product</h3>
              </a>
            </header>

            <div className="content">

              <h1>Lorem ipsum dolor</h1>

              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, numquam quis perspiciatis ea ad omnis provident laborum dolore in atque.

              <div title="You have selected this product to be shipped in the color red." style={{top: 0}} className="color red"></div>
              <div title="You have selected this product to be shipped sized Small." style={{top: '43px'}} className="type small">Small</div>
            </div>

            <footer className="content">

              <span className="qt-minus">-</span>
              <span className="qt">1</span>
              <span className="qtPlus">+</span>

              <h2 className="full-price">
                79.99€
              </h2>

              <h2 className="price">
                79.99€
              </h2>
            </footer>
          </article>

          <article className="product">
            <header>
              <a className="remove">
                <img src="http://www.astudio.si/preview/blockedwp/wp-content/uploads/2012/08/5.jpg" alt="" />

                <h3>Remove product</h3>
              </a>
            </header>

            <div className="content">

              <h1>Lorem ipsum dolor ipsdu</h1>

              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, numquam quis perspiciatis ea ad omnis provident laborum dolore in atque.

              <div title="You have selected this product to be shipped in the color blue." style={{top: 0}} className="color blue"></div>
              <div style={{top: '43px'}} className="type small">Large</div>
            </div>

            <footer className="content">

              <span className="qt-minus">-</span>
              <span className="qt">3</span>
              <span className="qtPlus">+</span>

              <h2 className="full-price">
                53.99€
              </h2>

              <h2 className="price">
                17.99€
              </h2>
            </footer>
          </article>

        </section>

      </div>

      <footer id="site-footer">
        <div className="container clearfix">

          <div className="left">
            <h2 className="subtotal">Subtotal: <span>163.96</span>€</h2>
            <h3 className="tax">Taxes (5%): <span>8.2</span>€</h3>
            <h3 className="shipping">Shipping: <span>5.00</span>€</h3>
          </div>

          <div className="right">
            <h1 className="total">Total: <span>177.16</span>€</h1>
            <a className="btn">Checkout</a>
          </div>

        </div>
      </footer>
    </div>

  )
}

export default Cart;