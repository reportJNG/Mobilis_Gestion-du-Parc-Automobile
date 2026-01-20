import styles from './Topbar.module.css';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface TopbarProps {
  setHome: React.Dispatch<React.SetStateAction<boolean>>;
  setFeedback: React.Dispatch<React.SetStateAction<boolean>>;
  setProfile: React.Dispatch<React.SetStateAction<boolean>>;
  setSettings: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Topbar({ setHome, setFeedback, setProfile, setSettings }: TopbarProps) {
  const routes = useRouter();

  const toggle = (val: 'feedback' | 'home' | 'profile' | 'settings') => {
    setHome(val === 'home');
    setFeedback(val === 'feedback');
    setProfile(val === 'profile');
    if (val === 'settings') {
      setSettings(true); // overlayed, so no need to reset others
    } else {
      setSettings(false);
    }
  };

  return (
    <div className={styles.container}>
      
      
      <div className={styles.left}>
        <Image
          src={'/logo.png'}
          alt='mobilis-logo'
          className={styles.imagelogo}
          width={60}
          height={60}
        />
      </div>

      
      <div className={styles.mid}>
        <h1 className={styles.title}>Mobilis</h1> {/* Different font for UI */}
      </div>

      
      <div className={styles.right}>

        <button
          className={styles.home}
          onClick={() => toggle('home')}
          aria-label='Accueil'
          title='Accueil'
          type='button'
        >
          <i className="fi fi-rr-home"></i>
        </button>

        <button
          className={styles.profile}
          onClick={() => toggle('profile')}
          aria-label='Profil'
          title='Profil'
          type='button'
        >
          <i className="fi fi-rr-user"></i>
        </button>

        <button
          className={styles.feedback}
          onClick={() => toggle('feedback')}
          aria-label='Signaler'
          title='Signaler'
          type='button'
        >
          <i className="fi fi-rr-messages"></i>
        </button>

        <button
          className={styles.settings}
          onClick={() => toggle('settings')}
          aria-label='Paramètres'
          title='Paramètres'
          type='button'
        >
          <i className="fi fi-rr-settings-sliders"></i>
        </button>

        <button
          className={styles.quitbtndoor}
          onClick={() => routes.push('/')}
          aria-label='Déconnexion'
          title='Déconnexion'
          type='button'
        >
          <i className="fi fi-rr-entrance"></i>
        </button>

      </div>
    </div>
  );
}
