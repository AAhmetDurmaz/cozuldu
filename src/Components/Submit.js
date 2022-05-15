import { useContext } from 'react';
import MainContext from '../MainContext';
import map from '../Images/map.png';
import { v4 as uuid } from 'uuid';
import { useNavigate } from 'react-router-dom';

const Submit = ({ stories }) => {
    const navigate = useNavigate();
    const { submitDisplay, setSubmitDisplay, cities, city, setAlert, setShowAlert, story, setStory, health, setHealth, devMode, setKase, setShowNote} = useContext(MainContext);
    const checkCity = (id) => {
        if (city === id) {
            setAlert('Tebrikler! Şifreyi başarıyla çözdün ve saldırıyı püskürttük! Şimdi diğer mektuba bak. Zaman akmaya devam ediyor!!!');
            setShowNote(true);
            setKase(true);
            setTimeout(() => {
                setShowNote(false);
                setKase(false);
            }, 1000);
        } else {
            setAlert(`OLAMAZ! Hatalı yere savunma yaptık! Ne okuduğuna dikkat et! ${cities[city].name} artık düşmanın!`);
            for (let i = 0; i < 23; i++) {
                window.delay(200 + (i * 10)).then(() => setHealth(health - i));
            }
            cities[city].lost = true;
            if (health <= 25) {
                navigate('/you-lost');
            }
        }
        setShowAlert(true);
        setSubmitDisplay(false);
        if (story === stories.length - 1) {
            navigate('/you-win');
        } else {
            setStory(story + 1);
        }
    }
    return (
        <>
            <div className={'w-full h-screen flex items-center ' + (submitDisplay ? 'absolute' : 'hidden')}>
                <div className='h-2/3'>
                    <div className='absolute px-20 py-16 z-[101] right-0 bg-amber-700 h-4/5'>
                        <img alt='map' src={map} className='-z-10' />
                        <p className='text-white'>Nereyi savunacaksın?</p>
                        <div className='absolute grid grid-cols-2'>
                            {
                                devMode ?
                                    cities.map(item => (
                                        <button onClick={() => { checkCity(item.id) }} key={uuid()} disabled={item.lost} className={'text-white py-2 px-4 rounded ml-1 mt-1 ' + (item.id === city ? 'bg-blue-400' : (item.lost ? 'bg-gray-400' : 'bg-amber-600'))}>{item.name}</button>
                                    ))
                                    :
                                    cities.map(item => (
                                        <button onClick={() => { checkCity(item.id) }} key={uuid()} disabled={item.lost} className={'text-white py-2 px-4 rounded ml-1 mt-1 ' + (item.lost ? 'bg-gray-400' : 'bg-amber-600')}>{item.name}</button>
                                    ))
                            }
                        </div>
                    </div>
                    <button className='z-[110] absolute right-10 mt-3 py-2 px-4 text-black font-bold ' onClick={() => { setSubmitDisplay(false); }}>X</button>
                </div>
            </div >
        </>
    )
}

export default Submit