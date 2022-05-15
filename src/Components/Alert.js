import { useContext } from 'react';
import MainContext from '../MainContext';

const Alert = () => {
    const { alert, setAlert, showAlert, setShowAlert } = useContext(MainContext);
    return (
        <div className={'mt-16 px-2 w-full ' + (showAlert ? 'absolute' : 'hidden')}>
            <button onClick={() => { setAlert(''); setShowAlert(false); }} className='absolute right-0 z-10 mr-4 font-bold'>X</button>
            <div className='min-h-32 bg-amber-400 px-3 py-1 rounded'>
                {alert}
            </div>
        </div>
    )
}

export default Alert