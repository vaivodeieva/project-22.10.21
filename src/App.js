import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Views/Home';

function App() {
  return (

    <div >
       <Router>
                {/* <Header /> */}
                <Switch>

                    <Route exact path="/">
                        <Home />
                    </Route>

                    {/* <Route path="/articles">
                        <Articles />
                    </Route>

                    <Route path="/article">
                        <Article />
                    </Route>

                    <Route>
                        <Page404 />
                    </Route> */}

                </Switch>
                {/* <Footer /> */}
            </Router>

    </div>
  );
}

export default App;
