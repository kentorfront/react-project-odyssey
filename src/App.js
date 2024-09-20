import Nav from './Components/Nav/Nav';
import MainContainer from './Components/Main/MainContainer';
import Footer from './Components/Footer/Footer';
import NotFound from './Components/NotFound/NotFound';
import Login from './Components/LoginPage/Login';
import StayConnected from './Components/StayConnected/StayConnected';
import RatingContainer from './Components/RatingContainer';
import Register from './Components/RegisterPage/Register';
import PlanetDescContainer from './Components/Main/Planets/PlanetDescription/PlanetDescContainer';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {

  // const getUserId = async () => {
  //   try {
  //     const userIdKey = 'userId'
  //     const response = await axios.post('http://localhost:5000/review', { name: 'ПЕРЕМЕННАЯ С ЮЗ' });
  //     const userId = response.data.id;
  //     localStorage.setItem(userIdKey, userId);
  //   } catch (error) {
  //     console.error('Error saving user ID:', error);
  //   }
  // }; ДЛЯ СОХРАНЕНИЯ УНИКАЛЬНОГО КЛЮЧА В OKAS 

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