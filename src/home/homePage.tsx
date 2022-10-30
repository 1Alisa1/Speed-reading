import { Link } from 'react-router-dom';
import intro from '../img/intro.jpg';

function HomePage() {
  return (
    <div className="">
      <section className="container-xl intro">
        <div className="row align-items-center">
          <div className="col-7 ">
            <h1 className="noto-sans-600">Read faster, remember more</h1>
            <div className="intro-border"></div>
          </div>
          <div className="col-5">
            <div style={{ backgroundImage: `url(${intro})` }} className="intro-img w-100"></div>
          </div>
        </div>
      </section>
      <section className="container-xl mb-5">
        <div className="text-center">
          <p className="noto-sans-600 fs-1 mb-4">What is Speed Reading?</p>
          <p className="noto-sans-400 fs-2">
            <span className="fw-bold">Speed reading</span> is a system of tricks to read faster{' '}
            <br /> without losing comprehension.
          </p>
        </div>
      </section>
      <section className="advantages  noto-sans-400 mb-5">
        <p className="advantages-color noto-sans-600 text-center fs-1 mb-4">Advantages</p>
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="advantages-img"
                viewBox="0 0 16 16"
              >
                <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z" />
                <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z" />
              </svg>
              <p>Ability to quickly perceive information</p>
            </div>
            <div className="col-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="advantages-img"
                viewBox="0 0 16 16"
              >
                <path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12.435 12.435 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A19.626 19.626 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a19.587 19.587 0 0 0 1.349-.476l.019-.007.004-.002h.001M14 1.221c-.22.078-.48.167-.766.255-.81.252-1.872.523-2.734.523-.886 0-1.592-.286-2.203-.534l-.008-.003C7.662 1.21 7.139 1 6.5 1c-.669 0-1.606.229-2.415.478A21.294 21.294 0 0 0 3 1.845v6.433c.22-.078.48-.167.766-.255C4.576 7.77 5.638 7.5 6.5 7.5c.847 0 1.548.28 2.158.525l.028.01C9.32 8.29 9.86 8.5 10.5 8.5c.668 0 1.606-.229 2.415-.478A21.317 21.317 0 0 0 14 7.655V1.222z" />
              </svg>
              <p>
                Ability to highlight <br />
                only the main
              </p>
            </div>
            <div className="col-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="advantages-img"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M0 0h1v15h15v1H0V0Zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5Z"
                />
              </svg>
              <p>Increasing the amount of memory</p>
            </div>
            <div className="col-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="advantages-img"
                viewBox="0 0 16 16"
              >
                <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z" />
                <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
              </svg>
              <p>Development of concentration</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container-xl">
        <div className="card text-center">
          <div className="card-body">
            <h5 className="card-title fs-3 noto-sans-600">Exercises</h5>
            <p className="card-text fs-4 noto-sans-400">
              We offer online brain exercises and speed reading training.
            </p>
            <Link to="/exercises" className="btn btn-prim noto-sans-400">
              Go to exercises
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
