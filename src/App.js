import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Views/Home';
import Header from './Components/Header';
import Categories from './Views/Categories';
import Cart from './Views/Cart';
import Aboutus from './Views/Aboutus';


function App() {
    return (

        <div >
            <Router>
                <Header />
                <Switch>

                    <Route exact path="/">
                        <Home />
                    </Route>

                    <Route path="/categories">
                        <Categories />
                    </Route>

                    <Route path="/cart">
                        <Cart />
                    </Route>

                    <Route path="/aboutus">
                        <Aboutus />
                    </Route>

                    <Route>
                        <Page404 />
                    </Route>

                </Switch>
                {/* <Footer /> */}
            </Router>

        </div>
    );
}

export default App;
