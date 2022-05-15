import { useContext } from 'react';
import MainContext from '../MainContext';
import kalp from '../Images/kalp.png';

const Header = () => {
    const { health } = useContext(MainContext);
    return (
        <div className='w-full absolute mt-1 px-1'>
            <div className='flex left-0'>
                <img alt='kalp' src={kalp} className='h-12' />
                <div className='grid place-items-center w-full mx-2'>
                    <div className='h-6 w-full px-2 py-1 bg-gray-400 rounded-full'>
                        <div className='bg-green-600 h-full rounded-full' style={{ width: `${health}%` }}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header