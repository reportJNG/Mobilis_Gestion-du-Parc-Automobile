import styles from './Topbar.module.css';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
interface Topbarprops{
setHome:React.Dispatch<React.SetStateAction<boolean>>;
setFeedback:React.Dispatch<React.SetStateAction<boolean>>;
setProfile:React.Dispatch<React.SetStateAction<boolean>>;
setSettings:React.Dispatch<React.SetStateAction<boolean>>;
}
export default function Topbar({setHome,setFeedback,setProfile,setSettings}:Topbarprops){
    const toggle=(val:'feedback'|'home'|'profile'|'settings')=>{
    if(val==='home'){
    setFeedback(false);
    setHome(true);
    setProfile(false);
    setSettings(false);
    }
    if(val==='feedback'){
    setFeedback(true);
    setHome(false);
    setProfile(false);
    setSettings(false);
    
    }
    if(val==='profile'){
    setFeedback(false);
    setHome(false);
    setProfile(true);
    setSettings(false);
    
    }
    if(val==='settings'){
    setSettings(true); //its overlayed so it doesnt matter 
    }
    }
    const routes=useRouter();
    return(
        <div className={styles.container}> 
                        <div className={styles.left}>
                        <Image src={'/logo.png'} alt='mobilis-logo' className={styles.imagelogo} width={60} height={60}/>
                        </div>
                        <div className={styles.mid}>
                        <h1 className={styles.title}>Mobilis</h1>{/**diffrent font text make ui better */}
                        </div>
                        <div className={styles.right}>
                            
                            <button className={styles.home}
                            onClick={()=>toggle('home')}
                            aria-label='Home'
                            title='Home'
                            type='button'
                            >
                            <i className="fi fi-rr-home"></i>
                            </button>

                            <button className={styles.profile}
                            onClick={()=>toggle('profile')}
                            aria-label='Profile'
                            title='Profile'
                            type='button'
                            >
                            <i className="fi fi-rr-user"></i>
                            </button>

                            <button className={styles.feedback}
                            onClick={()=>toggle('feedback')}
                            aria-label='Feedback'
                            title='Feedback'
                            type='button'>
                            <i className="fi fi-rr-messages"></i></button>
                            
                            <button className={styles.settings}
                            onClick={()=>toggle('settings')}
                            aria-label='Settings'
                            title='Settings'
                            type='button'
                            >
                            <i className="fi fi-rr-settings-sliders"></i>
                            </button>

                            <button className={styles.quitbtndoor}
                            onClick={()=>routes.push('/')}
                            aria-label='Signout'
                            title='Signout'
                            type='button'
                            ><i className="fi fi-rr-entrance"></i></button>
                        </div>
        </div>
    )
}