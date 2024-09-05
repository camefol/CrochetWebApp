import './App.css';
import axios from 'axios';
import Home from './components/Home';
import LoginBlock from './components/LoginBar';
import BottomInfo from './components/BottomInfo';
import AboutUs from './components/About-us';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';

const apiCall = () => {
  axios.get('http://localhost:8080').then((data) => {
    //this console.log will be in our frontend console
    console.log(data)
  })
}

const apiTutorial = () => {
  axios.get('http://localhost:8080/tutorials').then((response) => {
    console.log(response.data);
  });
};

function App() {
  return (
    <BrowserRouter>
    <div className='App' >
      <header className='App-header'>
      {window.location.pathname === '/' && <LoginBlock />}
      </header>
      <div>
      <Routes>
        <Route path='/' exact Component={Home}/>
        <Route path='/tutorials' Component={Home}/>
        <Route path='/generator' Component={Home}/>
        <Route path='/about-us' Component={AboutUs}/>
        <Route path='/sign-in' Component={Home}/>
        </Routes>
      </div>
      <footer>
        <BottomInfo/>
      </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
