import kagit from '../Images/kagit.png';
import { useContext } from 'react';
import MainContext from '../MainContext';

const Paper = () => {
    const { note, showNote, setShowNote, trick } = useContext(MainContext);
    return (
        <>
            <div className={'w-full h-screen flex items-center ' + (showNote ? 'absolute' : 'hidden')}>
                <div className='h-2/3'>
                    <img alt='kagit' src={kagit} className='absolute w-full z-[100]' />
                    <p className='absolute px-16 py-16 z-[101] break-all'>{note}<br /><span className='font-medium'>İPUCU: {trick}</span></p>
                    <button className='z-[110] absolute right-10 mt-3 py-2 px-4 text-black font-bold ' onClick={() => { setShowNote(false); }}>X</button>
                </div>
            </div >
        </>
    )
}

export default Paper