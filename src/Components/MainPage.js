import duvar from '../Images/duvar.png';
import masaBG from '../Images/masaBG.png';
import masa from '../Images/masa.png';
import kagitButton from '../Images/kagit_button.png';
import kaseImage from '../Images/kase.png';
import sonTuy from '../Images/son_tuy.png';
import Header from '../Components/Header';
import Paper from '../Components/Paper';
import Submit from '../Components/Submit';
import Alert from '../Components/Alert';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MainContext from '../MainContext';

const stories = [
    { id: 0, trick: 'DAHA DIKKATLI OL', text: 'Haberlerinizi aldık ve durumunuza çok üzüldük. İstihbaratımızın aldığı bilgiye göre savaşın bitmesine çok az kaldı. Sessizliğinizi bir süre daha korumanızı istiyoruz. Ani bir baskın durumuna karşın dikkatli olmanızı istiyoruz. Rica etmediğimizi bilmenizi ve emrimizin yerine getirileceğini biliyoruz. Canınızı dişinize takıp savaşmanızı bekliyoruz, çünkü savaşın bitmesine çok az kaldı. Iskalamamak için gelen şansları değerlendirmemiz gerekiyor ki kazanalım. Kendinize dikkat ediniz, size inanıyoruz.', city: 9 },
    { id: 1, trick: 'FPOVCTV == KUTAHYA', text: 'FPOVCTV WVOD XZKCZND FJHPOVIDHDU VPBPNOJ XVAAVMZGGDTZ ZHMDIDUZ AMVINV , DIBDGOZMZ QZ DOVGTVYVI BZGZI TDMHDWDI FDNDGDF JMYPHPU BZYDUYZI YPHGPKDIVMV NVGYDMVXVF BZGZI OZXCDUVOV ZF JGVMVF JIWDI OVH YJIVIDHGD VNFZM , 25 VYZO OJK , 20 VYZO HVFDIVGD OPAZF , 10 VYZO FVHTJI BJIYZZMHZFOZTDU. WP FVADGZTD 20 VBPNOJNOVI JIXZ FVMNDGVTDIDU.OVIMD NDUGZMD QZ TPXZ FMVGDXZTD FPONVNDI', city: 2 },
    { id: 2, trick: 'VIG**E*E Chiper (kurtulus)', text: 'SHXBFTT CSXVFFT MMLUP FL. SUJBCCLCYU, STUEEUCCESTUTH LFVSAZFCK BSLYIX AZLW 20 LCE DCDCDSE BNNLBQK IIWODO HKTRKFLL KOBIBHOYF DURKLFTS MCBTWLELSL. 10 SBH ACQKXV OY 500 VCKSFZD NZJUE IIWODO AVY JBGLPS CUCWCCGSXCQB PP TSPYI DUKUFWUUTH OIFWYDXHTTA ROBNGPNAWCQ TXTHS CCQWYY CKDCPHLFT', city: 7 },
    { id: 3, trick: 'QAZGNEG == KUTAHYA', text: 'OTMOROF YGBATSG HGQGTO C. INAXIORRK YOSGBJG QGRGT 80 HOT ZGS JUTGTOSRO GYQKX, 20 GJKZ NGBGT ZUVA BK 20 QGYG ZUV SKXSOYO BGXJOX. KSXOTOF AFKXOTK VGFGXRGXG KYFGSGTRO URGXGQ YGRJOXGIGMOF ZGTXO QXGROIKEO BK UXJASAFA QAZYGYOT QAZGNEG HGZO IKVNKYO QUSAZGTO GAMAYZU IGLLGXKRROE', city: 10 },
    { id: 4, trick: 'HEX', text: '41 4c 54 49 4e 54 41 53 20 50 49 59 41 44 45 20 42 49 52 4c 49 47 49 4e 45 0a 41 4c 54 49 4e 54 41 c5 9e 54 41 20 42 55 4c 55 4e 41 4e 20 41 53 4b 45 52 4c 45 52 49 4e 20 54 41 4d 41 4d 49 20 49 4c 45 20 44 49 47 45 52 20 42 49 52 4c 49 4b 4c 45 52 4c 45 20 45 53 20 5a 41 4d 41 4e 4c 49 20 4f 4c 41 52 41 4b 20 54 41 56 53 41 4e 4c 49 59 41 20 53 41 4c 44 52 49 52 49 4e 0a 41 55 47 55 53 54 4f 20 43 41 46 46 41 52 45 4c 4c 49 59 45', city: 4 },
    { id: 5, trick: 'HEX', text: '42 49 52 20 41 4c 42 41 59 20 4b 4f 4d 55 54 41 53 49 4e 44 41 4b 49 20 53 55 56 41 52 49 42 49 52 4c 49 4b 4c 45 52 49 20 50 49 59 41 44 45 20 54 55 4d 45 4e 49 20 49 4c 45 20 42 49 52 4c 45 53 49 50 20 45 4d 45 54 45 20 54 41 41 52 55 5a 20 45 44 49 4e 20 49 59 49 20 48 41 42 45 52 4c 45 52 49 4e 49 4e 49 5a 49 20 42 45 4b 4c 49 59 4f 52 55 5a 20 42 55 59 55 4b 20 48 45 4c 45 4e 20 49 4d 50 41 52 41 54 4f 52 4c 55 47 55 20 43 4f 4b 20 59 41 53 41 53 49 4e', city: 3 },
    { id: 6, trick: 'KIGI == GECE', text: 'FY KIGI MXMFEVM MPI 15.000 OMWMPMO SVHYRYDY SPEVEO QIVOIDI KMVQIRMDM MWXMCSVYD. EVOERMDHER OSQYXER ZPEHMQMVMR SVHYWY WMDI HIWXIO ZIVIGIOXMV. FMPKMPIVMR WMDHMVMPHMKMRM HYWYRYCSVYD. HMOOEXPM SPYRYD. XERVM WMDM ZI SVHYRYDY OYXWEWMR.', city: 5 },
    { id: 7, trick: 'DKVKTOGPKB == BITIRMENIZ', text: 'AWPCPKUVCP JWMWOGVKPFGP, MQOWVCP VTKMWRKUG ACTKP IGEG UCCV 18.00 KVKDCTK KNG AGOGM XG VGEJKBCV VGOKPK UCINCPCECMVKT. jCBKTNKMNCTKPKBK DKVKTOGPKB XG 12 OCAKU 1921 IWPW UCDCJ UCCV 06.00 FC FQOKPKEG IKTOGPKBK AWPCP JWMWOGVK QNCTCM KUVKAQTWB. KAK JCDGTNGTKPKBK DGMNKAQTWB. VCPTK UKBK MWVUCUKP', city: 6 },
];

const MainPage = () => {
    const navigate = useNavigate();
    const { setNote, setShowNote, setSubmitDisplay, setTrick, setCity, story, time, setTime, setAlert, setShowAlert, setStory, setHealth, kase } = useContext(MainContext);
    useEffect(() => {
        setHealth(100);
        setNote('');
        setShowNote(false);
        setAlert('');
        setShowAlert(false);
        setSubmitDisplay(false);
        setTrick('');
        setStory(0);
        setCity(0);
    }, [setHealth, setNote, setShowNote, setAlert, setShowAlert, setSubmitDisplay, setTrick, setStory, setCity])
    useEffect(() => {
        setAlert('Sol altta bulunan kısımdan mektupu aç. Mektuptaki şifreyi çözdükten sonra sağ altta bulunan mürekkep ile savunman gereken şehri işaretle! Ardından diğer mektuba geç! Süren en altta başladı bile!!! Bu süre bittiğinde askerlerimiz için geç olacak!');
        setShowAlert(true);
    }, [navigate, setShowAlert, setAlert]);
    setTimeout(async () => {
        if (time > 0) {
            setTime(time - 1);
        } else {
            navigate('/you-lost')
        }
    }, 1000);
    return (
        <>
            <Header />
            <Alert />
            <Paper />
            <Submit stories={stories} />
            <audio controls={false} autoPlay={true} loop={true}>
                <source src="https://raw.githubusercontent.com/AAhmetDurmaz/cozulducdn/master/bg_sound.mp3" type="audio/mpeg" />
            </audio>
            <div className='h-screen grid'>
                <div className='bg-cover' style={{ backgroundImage: `url('${duvar}')` }}></div>
                <div className='bg-cover' style={{ backgroundImage: `url('${masaBG}')` }}>
                    <div className='h-full grid grid-cols-1'>
                        <div>
                            <p className='absolute w-full z-[99] bg-amber-400 py-2 px-4 text-center'>{stories.length - story} mektubu çözmen için kalan süre: {Math.floor(time / 60)}:{(time - Math.floor(time / 60) * 60)} saniye</p>
                            <div className={'z-[110] w-1/3 right-10 mt-20 -rotate-45 ' + (kase ? 'absolute' : 'hidden')}><img alt='kase' src={kaseImage} /></div></div>
                        <div className='h-full bg-cover z-10' style={{ backgroundImage: `url('${masa}')` }}>
                            <div className='grid grid-cols-4 h-full'>
                                <div className='col-span-1 place-items-center grid'>
                                    <button onClick={() => { setCity(stories[story].city); setNote(stories[story].text); setTrick(stories[story].trick); setShowNote(true); setSubmitDisplay(false); }} className='h-32 w-24 absolute bg-cover bg-center' style={{ backgroundImage: `url('${kagitButton}')` }}></button>
                                </div>
                                <div className='col-span-2'></div>
                                <div className='col-span-1 place-items-center grid'>
                                    <button onClick={() => { setCity(stories[story].city); setSubmitDisplay(true); setShowNote(false); }} className='h-32 w-16 absolute bg-cover bg-center' style={{ backgroundImage: `url('${sonTuy}')` }}></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainPage