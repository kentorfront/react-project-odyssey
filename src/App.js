import Nav from './Components/Nav/Nav';
import MainContainer from './Components/Main/MainContainer';
import Footer from './Components/Footer/Footer';
import NotFound from './Components/NotFound/NotFound';
import Login from './Components/LoginPage/Login';
import StayConnected from './Components/StayConnected/StayConnected';
import CreateCard from './Components/CreateCardPage/CreateCard';
import RatingContainer from './Components/RatingContainer';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {

    return(
      <div className="App">
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route element={<MainContainer />} exact path='/' />
            <Route element={<StayConnected />} exact path='/stay-connected' />
            <Route element={<Login />} exact path='/login' />
            <Route element={<CreateCard />} path='/createMessage' />
            <Route element={<RatingContainer />} path='/review' />
            <Route element={<NotFound />} path='*' />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    )
}

export default App;