import letters from '../img/letters.jpg';
import num from '../img/num.png';
import schultetable from '../img/schultetable.png';
import intro from '../img/intro.jpg';
import Card from './card';

function HomePage() {
  return (
    <div>
      <section className="intro container-xl">
        <div className="row align-items-center">
          <div className="col-7 ">
            <h1>Read faster, remember more</h1>
            <div className="intro-border"></div>
          </div>
          <div className="col-5">
            <div style={{ backgroundImage: `url(${intro})` }} className="intro-img w-100"></div>
          </div>
        </div>
      </section>
      <main>
        <div id="exercises" className="container-xl">
          <div className="row">
            <div className="col-lg-4">
              <Card
                img={letters}
                title={'Reading accelerator'}
                text={
                  'The exercise is aimed at developing your higher reading speed and suppressing replays'
                }
                btnText={'Start'}
                path={'/texts'}
              />
            </div>
            <div className="col-lg-4">
              <Card
                img={num}
                title={'Remember the number'}
                text={
                  'The exercise is aimed at developing instant memory and expanding the field of vision'
                }
                btnText={'Start'}
                path={'/numbers'}
              />
            </div>
            <div className="col-lg-4">
              <Card
                img={schultetable}
                title={'Schulte table'}
                text={
                  'The Schulte table is a table with randomly arranged numbers that serve to develop the speed of finding them in ascending order. This exercise improves your peripheral vision'
                }
                btnText={'Start'}
                path={'/schulte-table'}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default HomePage;
