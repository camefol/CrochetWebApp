import logo from '../crochet.jpg';
import { Link } from 'react-router-dom';
import '../styles/TopBar.css';


const LoginBlock = () => {
    return (
      <nav className='NavBar'>
      <ul className='NavBar-navs'>
      <li className='NavBar-logo'><Link to='/'><img src={logo} className='logo' alt='Nice pic'/></Link></li>
          <li><Link href="#">Tutorials</Link></li>
          <li><Link href="#">Generator</Link></li>
          <li><Link to='/about-us'>About us</Link></li>
      <ul className='socials'>
        <li><Link href="#">Sign In</Link></li>
        <li><Link href="#">Log In</Link></li>
      </ul>
      <ul className='socials'>
        <li> Hello</li>
      </ul>
      </ul>
    </nav>
    );
  };
  
  export default LoginBlock;