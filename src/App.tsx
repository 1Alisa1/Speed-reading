import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import HomePage from './home/homePage';
import Texts from './texts/texts';
import Numbers from './numbers/numbers';
import SchulteTable from './schulteTable/schulteTable';
import ExercisesPage from './exercisesPage/exercisesPage';

function App() {
  return (
    <Router>
      <header className="App-header">
        <nav className="navbar navbar-dark navbar-expand-lg">
          <div className="container-xl">
            <Link to="/" className="navbar-brand fs-4 noto-sans-600">
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
                  <HashLink
                    to="/exercises"
                    className="nav-link fs-5 noto-sans-400"
                    aria-current="page"
                  >
                    Exercises
                  </HashLink>
                </li>
              </ul>
              <form className="d-flex noto-sans-400" role="search">
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
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/exercises" element={<ExercisesPage />}></Route>
          <Route path="exercises/texts" element={<Texts />}></Route>
          <Route path="exercises/numbers" element={<Numbers />}></Route>
          <Route path="exercises/schulte-table" element={<SchulteTable />}></Route>
        </Routes>
      </main>
      <footer className="footer py-3">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <Link to="/" className="nav-link px-2 text-muted">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/exercises" className="nav-link px-2 text-muted">
              Exercises
            </Link>
          </li>
        </ul>
        <p className="text-center text-muted">&copy; 2022 Company, Inc</p>
      </footer>
    </Router>
  );
}

export default App;
