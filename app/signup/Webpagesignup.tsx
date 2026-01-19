import styles from './Webpagesignup.module.css';
import { useState } from 'react';
import Image from 'next/image';
import Message from '@/Components/Message';
import { useRouter } from 'next/navigation';
export default function Webpagesignup(){
     const [formData, setFormData] = useState({
        nom: '',
        prenom: '',
        username: '',
        password: '',
        confirmepassword:'',
    });
    const [success,setSuccess]=useState<boolean>(false);
    const [faild,setFaild]=useState<boolean>(false);
    const routes=useRouter();
    const Signup = async (e: React.FormEvent) => {
  e.preventDefault();

    try {
    const res = await fetch('http://localhost/my-app/API/Signup.php', {//sign up user all input will be good no injection
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        nom: formData.nom,
        prenom: formData.prenom,
        password: formData.password,
        username: formData.username,
      }),
    });

    const data = await res.json();

    if (!data.success || formData.password!==formData.confirmepassword) {
      setFaild(true);
      setTimeout(() => setFaild(false), 5000);
    } else {
      setSuccess(true);
      setTimeout(() => {routes.push('/');setSuccess(false)}, 5000);
      
    }
    } catch (error) {
    console.error(error);
    setFaild(true);
    setTimeout(() => setFaild(false), 5000);
    }
    };
    const handleaccexsit=()=>{
    routes.push('/');
    }
    return(
          <div className={styles.container}>
           

            <div className={styles.box}>
                <div className={styles.logo}>
                    <Image 
                        src='/logo.png' 
                        alt='Mobilis' 
                        className={styles.small}
                        width={80}
                        height={80}
                        priority
                    />
                </div>
                
                <div className={styles.title}>
                    <h1 className={styles.texttile}>Gestion du Parc Automobile</h1>
                </div>
                
                <form onSubmit={Signup} className={styles.inputhanlder}> {/**add securty for inputs later to send valid data and no sql injection*/}
                    <input 
                        type="text" 
                        className={styles.inp} 
                        maxLength={20} 
                        minLength={3} 
                        value={formData.prenom} 
                        onChange={(e)=>{
                        const input = e.target.value;
                        const clean = input.replace(/[^a-zA-Z0-9]/g, '');
                        setFormData(prev=>({...prev,prenom:clean}))}}
                        placeholder="Prénom"
                        required
                    />
                    <input 
                        type="text" 
                        className={styles.inp} 
                        maxLength={20} 
                        minLength={3} 
                        value={formData.nom} 
                        onChange={(e)=>{
                        const input = e.target.value;
                        const clean = input.replace(/[^a-zA-Z0-9]/g, '');
                        setFormData(prev=>({...prev,nom:clean}))}}
                        placeholder="Nom"
                        required
                    />
                      <input 
                        type="text" 
                        className={styles.inp} 
                        maxLength={20} 
                        minLength={3} 
                        value={formData.username} 
                        onChange={(e)=>{
                        const input = e.target.value;
                        const clean = input.replace(/[^a-zA-Z0-9]/g, '');
                        setFormData(prev=>({...prev,username:clean}))}}
                        placeholder="Nom d’utilisateur"
                        required
                    />
                    <input 
                        type="password" 
                        className={styles.inp} 
                        maxLength={8} 
                        minLength={8} 
                        value={formData.password} 
                        onChange={(e)=>{
                        const input = e.target.value;
                        const clean = input.replace(/[^a-zA-Z0-9]/g, '');
                        setFormData(prev=>({...prev,password:clean}))}}
                        placeholder="Mot de passe"
                        required
                    />
                    <input 
                        type="password" 
                        className={styles.inp} 
                        maxLength={8} 
                        minLength={8} 
                        value={formData.confirmepassword} 
                        onChange={(e)=>{
                        const input = e.target.value;
                        const clean = input.replace(/[^a-zA-Z0-9]/g, '');
                        setFormData(prev=>({...prev,confirmepassword:clean}))}}
                        placeholder="Confirmer le mot de passe"
                        required
                    />
                    
                    <button className={styles.button} type='submit'>
                        S’inscrire
                    </button>
                    
                    <div className={styles.linksContainer}>
                        <button 
                            type="button" 
                            className={styles.forget}
                            onClick={handleaccexsit}
                        >
                                Déjà un compte ?
                        </button>
                    </div>
                </form>
            </div>
             <div className={styles.image}>
                <Image 
                    src='/mobi.png' 
                    alt='Mobilis' 
                    className={styles.bigimage}
                    width={500}
                    height={500}
                    priority
                />
            </div>
            {success&&<Message  text="Inscription réussie !" state={true}/>}
            {faild && <Message text="Une erreur est survenue." state={false} />}
        </div>
    )
}