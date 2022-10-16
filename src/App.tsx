
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
} from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';
import HomePage from './home/homePage';
import Texts from './texts/texts';
import Numbers from './numbers/numbers';

function App() {
  return (
    <Router>
      <header className="App-header">
        <nav className="navbar navbar-dark navbar-expand-lg">
          <div className="container-xl">
            <a className="navbar-brand" href="#">Навбар</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Переключатель навигации">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to='/' className="nav-link active" aria-current="page">Home</Link>
                </li>
                <li className="nav-item">
                  <HashLink to='/#exercises' className="nav-link" aria-current="page">Exercise</HashLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path='/texts' element={<Texts />}></Route>
          <Route path='/numbers' element={<Numbers />}></Route>
          <Route path='/' element={<HomePage />}></Route>  
        </Routes>  
      </main> 
    </Router>
  );
}

export default App;
