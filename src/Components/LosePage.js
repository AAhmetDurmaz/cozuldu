import duvar from '../Images/duvar.png';
import logo from '../Images/logo.png';
import komutan from '../Images/komutan.png';

const LosePage = () => {
    return (
        <div className='h-screen'>
            <div className='w-full h-full bg-cover' style={{ backgroundImage: `url('${duvar}')` }}>
                <div className='w-full h-1/4 flex justify-center'>
                    <img alt='logo' src={logo} />
                </div>
                <div className='w-full h-3/4 flex justify-center'>
                    <div className='grid content-center px-4'>
                        <div className='bg-amber-400 px-2 py-1 rounded mb-5'>
                            <p className='text-lg font-medium'>Görevinde başarısız oldun!</p>
                            <p>Birliklerin tamamını kaybettik! Yazışmaları çözemediğinden dolayı bir çok bölgeyi kaybettik!</p>
                            <p className='underline font-bold text-center'>Buradaki işine son verildi!</p>
                        </div>
                        <img alt='komutan' src={komutan} />
                        <button onClick={() => { window.document.location.href = '/'; }} className='bg-amber-600 border-4 shadow-xl border-amber-800 text-white px-24 py-6 rounded-full text-xl hover:bg-amber-800 transition uppercase mb-6 text-center'>Tekrar oyna</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LosePage