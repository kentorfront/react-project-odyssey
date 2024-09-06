import Nav from './Components/Nav/Nav';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
import NotFound from './Components/NotFound/NotFound';
import Login from './Components/LoginPage/Login';
import StayConnected from './Components/StayConnected/StayConnected';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
    return(
      <div className="App">
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route element={<Main />} exact path='/' />
            <Route element={<StayConnected />} exact path='/stay-connected' />
            <Route element={<Login />} exact path='/login' />
            <Route element={<NotFound />} path='*' />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    )
}

export default App;