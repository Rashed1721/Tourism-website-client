import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthProvider from './Context/authProvider';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './component/Login/Login/Login';
import Home from './component/Home/Home/Home';
import Hotels from './component/Hotels/Hotels';
import Restaurents from './component/Restaurents/Restaurents';
import Vehicles from './component/Vehicles/Vehicles';
import Packages from './component/Packages/Packages';
import Tours from './component/Tours/Tours';
import Offers from './component/Offers/Offers';
import MyOrders from './component/MyOrders/MyOrders';
import ManageOrders from './ManageOrders/ManageOrders';
import Service from './component/Home/Service/Service';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import Footer from './component/Footer/Footer';
import Gallery from './component/Gallarey/Gallery';
import NotFound from './component/NotFound/NotFound';



function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>

            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>

            <PrivateRoute path="/hotels">
              <Hotels></Hotels>
            </PrivateRoute>
            <PrivateRoute path="/restaurant">
              <Restaurents></Restaurents>
            </PrivateRoute>

            <PrivateRoute path="/vehicle">
              <Vehicles></Vehicles>
            </PrivateRoute>
            <PrivateRoute path="/package">
              <Packages></Packages>
            </PrivateRoute>
            <PrivateRoute path="/tour">
              <Tours></Tours>
            </PrivateRoute>
            <PrivateRoute path="/offers">
              <Offers></Offers>
            </PrivateRoute>
            <PrivateRoute path="/myorders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <Route path="/manageorders">
              <ManageOrders></ManageOrders>
            </Route>
            <Route path="/gallery">
              <Gallery></Gallery>
            </Route>
            <Route exact path="/service">
              <Service></Service>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>

            <Router exact path="*">
              <NotFound></NotFound>
            </Router>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
