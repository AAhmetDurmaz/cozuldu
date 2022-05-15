import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainContext from './MainContext';
// Pages
import MainPage from './Components/MainPage';
import StartPage from './Components/StartPage';
import StartupPage from './Components/StartupPage';
import LosePage from './Components/LosePage';
import WinPage from './Components/WinPage';

function App() {
    const [health, setHealth] = useState(100);
    const [note, setNote] = useState('');
    const [showNote, setShowNote] = useState(false);
    const [alert, setAlert] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [submitDisplay, setSubmitDisplay] = useState(false);
    const [trick, setTrick] = useState('');
    const [story, setStory] = useState(0);
    const [city, setCity] = useState(0);
    const [devMode, setDevMode] = useState(false);
    const [cities, setCities] = useState([
        { id: 0, name: 'Gediz', lost: false },
        { id: 1, name: 'Altıntaş', lost: false },
        { id: 2, name: 'Dumlupınar', lost: false },
        { id: 3, name: 'Emet', lost: false },
        { id: 4, name: 'Tavşanlı', lost: false },
        { id: 5, name: 'Merkez', lost: false },
        { id: 6, name: 'Domaniç', lost: false },
        { id: 7, name: 'Simav', lost: false },
        { id: 8, name: 'Aslanapa', lost: false },
        { id: 9, name: 'Hisarcık', lost: false },
        { id: 10, name: 'Pazarlar', lost: false },
    ]);
    const [time, setTime] = useState(15 * 60);
    const [kase, setKase] = useState(false);
    const data = {
        health, setHealth,
        note, setNote,
        showNote, setShowNote,
        alert, setAlert,
        showAlert, setShowAlert,
        submitDisplay, setSubmitDisplay,
        trick, setTrick,
        city, setCity,
        story, setStory,
        time, setTime,
        cities, setCities,
        devMode, setDevMode,
        kase, setKase,
    };
    return (
        <MainContext.Provider value={data}>
            <BrowserRouter>
                <Routes>
                    <Route exact path='/main' element={<MainPage cities={cities} />} />
                    <Route exact path='/startup' element={<StartupPage />} />
                    <Route exact path='/you-lost' element={<LosePage />} />
                    <Route exact path='/you-win' element={<WinPage />} />
                    <Route exact path='*' element={<StartPage />} />
                </Routes>
            </BrowserRouter>
        </MainContext.Provider>
    );
}
export default App