import Nav from './Components/Nav/Nav';
import MainContainer from './Components/Main/MainContainer';
import Footer from './Components/Footer/Footer';
import NotFound from './Components/NotFound/NotFound';
import Login from './Components/LoginPage/Login';
import StayConnected from './Components/StayConnected/StayConnected';
import RatingContainer from './Components/Rating/RatingContainer';
import Register from './Components/RegisterPage/Register';
import PlanetDescContainer from './Components/Main/Planets/PlanetDescription/PlanetDescContainer';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  localStorage.setItem("user", true) // delete on dev (temp)

    return(
      <div className="App">
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route element={<MainContainer />} exact path='/' />
            <Route element={<StayConnected />} exact path='/stay-connected' />
            <Route element={<Login />} exact path='/login' />
            <Route element={<Register />} exact path='/register' />
            <Route element={<PlanetDescContainer />} exact path='/planetDescription/:id' />
            <Route element={<RatingContainer />} path='/review' />
            <Route element={<NotFound />} path='*' />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    )
}

export default App;