import React from 'react';
import './App.css';
import letters from './img/letters.jpg';
import num from './img/num.png';
import intro from './img/intro.jpg';

function App() {
  return (
    <div className="App">
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
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">Exercise</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <section className='intro container-xl'>
        <div className="row align-items-center">
          <div className="col-7 ">
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
            <div className='intro-border'></div>
          </div>
          <div className="col-5">
              <div style={{backgroundImage: `url(${intro})`}} className='intro-img w-100'></div>
          </div>
        </div>
      </section>
      <main> 
        <div id='exercises' className='container-xl'>
          <div className="row justify-content-around">
            <div className="col-4">
              <div className="card">
                <img src={letters} className="card-img-top" alt="letters"></img>
                <div className="card-body">
                  <h5 className="card-title">Заголовок карточки</h5>
                  <p className="card-text">Небольшой пример текста, который должен основываться на названии карточки и составлять основную часть содержимого карты.</p>
                  <a href="#" className="btn btn-primary">Перейти куда-нибудь</a>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card">
                <img src={num} className="card-img-top" alt="num"></img>
                <div className="card-body">
                  <h5 className="card-title">Заголовок карточки</h5>
                  <p className="card-text">Небольшой пример текста, который должен основываться на названии карточки и составлять основную часть содержимого карты.</p>
                  <a href="#" className="btn btn-primary">Перейти куда-нибудь</a>
                </div>
              </div>  
            </div>
          </div>
        </div>
      </main> 
    </div>
  );
}

export default App;
