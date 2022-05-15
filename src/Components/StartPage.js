import duvar from '../Images/duvar.png';
import logo from '../Images/logo.png';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import MainContext from '../MainContext';

const StartPage = () => {
    const { devMode, setDevMode } = useContext(MainContext);
    return (
        <div className='h-screen'>
            <div className='w-full h-full bg-cover' style={{ backgroundImage: `url('${duvar}')` }}>
                <div className='w-full h-1/4 flex justify-center'>
                    <img alt='logo' src={logo} />
                </div>
                <div className='w-full h-2/4 flex justify-center'>
                    <div className='grid content-center'>
                        <Link to='/startup' className='bg-amber-600 border-4 shadow-xl border-amber-800 text-white px-24 py-6 rounded-full text-xl hover:bg-amber-800 transition uppercase mb-6 text-center'>Oyna</Link>
                        <div className='flex items-center justify-center'>
                            <input type='checkbox' id='devmode' onChange={() => { setDevMode(!devMode) }} /><label htmlFor='devmode' className='text-white font-medium'>Developer Mode (Juri için etkinleştirildi)</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StartPage