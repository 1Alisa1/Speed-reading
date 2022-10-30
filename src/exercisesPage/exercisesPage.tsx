import letters from '../img/letters.jpg';
import num from '../img/num.png';
import schultetable from '../img/schultetable.png';
import Card from './card';

function ExercisesPage() {
  return (
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
            path={'/exercises/texts'}
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
            path={'/exercises/numbers'}
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
            path={'/exercises/schulte-table'}
          />
        </div>
      </div>
    </div>
  );
}

export default ExercisesPage;
