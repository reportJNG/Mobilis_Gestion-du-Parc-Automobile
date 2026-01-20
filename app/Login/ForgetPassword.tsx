import styles from './ForgetPassword.module.css';
import { useState } from 'react';
import { Status } from './Webpagelogin';
import { useRouter } from 'next/navigation';
interface ForgetPasswordprops{
    Statehandler:()=>void;
    setStatus:React.Dispatch<React.SetStateAction<Status>>;
}

export default function ForgetPassword({Statehandler,setStatus}:ForgetPasswordprops){
    const [username,setUsername]=useState<string>('')
    const [confirme,setConfirme]=useState<boolean>(false);

    const checker =async(e:React.FormEvent)=>{
        e.preventDefault();
        try{
        const res = await fetch('http://localhost/my-app/API/ForgetPasswordUser.php',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
        username:username})});
        const data = await res.json();
        if(!data.success){
        setStatus('account-not-found');
        setUsername('');
        setTimeout(() => {
        setStatus('');
        }, 3000);
        }
        else{
        setStatus('account-found');
        setUsername('');
        setTimeout(() => {
        setStatus('');
        setConfirme(true);
        }, 3000);
        }
        }
        catch{
        setStatus('account-not-found');
        setTimeout(() => {
        setStatus('');
        }, 3000);
        }
    }
    const updater=async(e:React.FormEvent)=>{
        e.preventDefault();
        const res = await fetch
    }
    const routes=useRouter();
    const handlenonexsit=()=>{
        routes.push('/signup');
    }
    const handleremeberpassword=()=>{
        routes.push('/');
    }
    return(
        <div className={styles.container}>{/**two form's here one before confirme username exsit and one is after */}
        {!confirme&&
        <form onSubmit={checker} className={styles.firstform}>
        <input 
        type="text" 
        className={styles.inp} 
        maxLength={20} 
        minLength={3} 
        value={username} 
        onChange={(e)=>{
        const input = e.target.value;
        const clean = input.replace(/[^a-zA-Z0-9]/g, '');
        setUsername(clean)}}
        placeholder="Nom d'utilisateur"
        required
        />
        <button className={styles.button} type='submit'>
        Vérifier le compte
        </button>
        <div className={styles.linksContainer}>
        <button 
        aria-label='Pas de compte ?'
        title='Pas de compte ?'
        type="button" 
        className={styles.forget}
        onClick={handlenonexsit}
        >
        Pas de compte ?
        </button>
        <button 
        aria-label='Retour à la connexion'
        title='Retour à la connexion'
        type="button" 
        className={styles.forget}
        onClick={handleremeberpassword}
        >
        Retour à la connexion
        </button>
        </div>
        </form>
        }
        </div>
    )
}