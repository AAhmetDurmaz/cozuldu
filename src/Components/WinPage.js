import duvar from '../Images/duvar.png';
import komutan from '../Images/komutan.png';
import { v4 as uuid } from 'uuid';
import { useContext } from 'react';
import MainContext from '../MainContext';

const WinPage = () => {
    const { cities } = useContext(MainContext);
    return (
        <div className='h-screen'>
            <div className='w-full h-full bg-cover' style={{ backgroundImage: `url('${duvar}')` }}>
                <div className='w-full h-full flex justify-center'>
                    <div className='grid content-center px-4'>
                        <div className='bg-amber-400 px-2 py-1 rounded mb-5'>
                            <p className='text-lg font-medium'>Çok başarılı bir kriptografi uzmanısın!</p>
                            <p>Çözdüğün mektuplar ile bir çok bölgemizi koruduk! Senin başarıların sayesinde bugün Kütahya, kurtuluşunun 100. senesini kutluyor!!!</p>
                            <br/>
                            <p>Türk tarihi; devleti ayakta tutan sayısız, isimsiz kahramanlarla doludur.</p>
                            <br />
                            <p>Kaybettiğimiz şehirler:</p>
                            <ul className='list-disc list-inside'>
                                {
                                    cities.map(item => (
                                        item.lost ? <li key={uuid()}>{item.name}</li> : <></>
                                    ))
                                }
                            </ul>
                        </div>
                        <img alt='komutan' src={komutan} />
                        <button onClick={() => { window.document.location.href = '/'; }} className='bg-amber-600 border-4 shadow-xl border-amber-800 text-white px-24 py-6 rounded-full text-xl hover:bg-amber-800 transition uppercase mb-6 text-center'>Tekrar oyna</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WinPage