import logo from './logo.svg';
import './App.css';
import HugoForm from "./components/HugoForm";
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavBar from "./components/MyNavBar";
import {BrowserRouter, Route, Switch} from "react-router-dom";

function App() {
  return (
    <div>
      <MyNavBar/>
      <div>
          <BrowserRouter>
              <Switch>
                  <Route path='/form' component={HugoForm}/>
              </Switch>

          </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
