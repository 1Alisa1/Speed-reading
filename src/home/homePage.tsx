import letters from '../img/letters.jpg';
import num from '../img/num.png';
import schultetable from '../img/schultetable.png';
import intro from '../img/intro.jpg';
import Card from "./card";

function HomePage() {
    return (
        <div>
            <section className='intro container-xl'>
                <div className="row align-items-center">
                    <div className="col-7 ">
                        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
                        <div className='intro-border'></div>
                    </div>
                    <div className="col-5">
                        <div style={{ backgroundImage: `url(${intro})` }} className='intro-img w-100'></div>
                    </div>
                </div>
            </section>
            <main>
                <div id='exercises' className='container-xl'>
                    <div className="row justify-content-around">
                        <div className="col-4">
                            <Card
                                img={letters}
                                title={'Reading accelerator'}
                                text={'flglhkgkflg'}
                                btnText={'Start'}
                                path={'/texts'} />
                        </div>
                        <div className="col-4">
                            <Card
                                img={num}
                                title={'Header'}
                                text={'flglhkgkflg'}
                                btnText={'Start'}
                                path={'/numbers'} />
                        </div>
                        <div className="col-4">
                            <Card
                                img={schultetable}
                                title={'Schulte table'}
                                text={'flglhkgkflg'}
                                btnText={'Start'}
                                path={'/schulte-table'} />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default HomePage