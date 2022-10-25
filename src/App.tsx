import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import HomePage from './home/homePage';
import Texts from './texts/texts';
import Numbers from './numbers/numbers';
import SchulteTable from './schulteTable/schulteTable';

function App() {
  return (
    <Router>
      <header className="App-header">
        <nav className="navbar navbar-dark navbar-expand-lg">
          <div className="container-xl">
            <Link to="/" className="navbar-brand fs-4">
              Speed Reading
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="NavigationSwitch"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <HashLink to="/#exercises" className="nav-link fs-5" aria-current="page">
                    Exercise
                  </HashLink>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2 option"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                ></input>
                <button className="btn btn-outline-light" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/texts" element={<Texts />}></Route>
          <Route path="/numbers" element={<Numbers />}></Route>
          <Route path="/schulte-table" element={<SchulteTable />}></Route>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
      </main>
    </Router>
  );
}

export default App;
