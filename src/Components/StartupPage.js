import duvar from '../Images/duvar.png';
import logo from '../Images/logo.png';
import kagit from '../Images/kagit.png';
import { Link } from 'react-router-dom';

const StartupPage = () => {
    return (
        <div className='h-screen'>
            <div className='w-full h-full bg-cover' style={{ backgroundImage: `url('${duvar}')` }}>
                <div className='w-full h-1/5 flex justify-center'>
                    <img alt='logo' src={logo} />
                </div>
                <div className='w-full h-3/5 flex justify-center'>
                    <div className='bg-cover bg-no-repeat w-full h-full bg-center px-4 py-3' style={{ backgroundImage: `url('${kagit}')` }}>
                        <p className='p-14 pb-0'>Savaştayız!! İstihbaratımızın üstün çabalarıyla bulduğu düşman ordularına gelen emirlerin mektuplarını ele geçirdik. Fakat mektuplar şifreli! Kısıtlı zamanda şifrelenmiş mesajları çözmen gerekiyor. Yoksa savunma yapmamız gereken bölgeleri bilemeyiz ve çok zayiat alırız. En sonunda biz de işgal ediliriz. Hadi acele et!! Vaktin dolmadan sana gösterilen ipuçlarını kullanarak şifreleri çözmeye başla!!!</p>
                        <Link to='/main' className='bg-amber-600 transition hover:bg-amber-800 rounded text-white px-8 py-2 float-right mr-12'>Başla!</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StartupPage