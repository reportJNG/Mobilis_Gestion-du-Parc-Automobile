import styles from './Webpagelogin.module.css';
import { useState } from 'react';
import Image from 'next/image';
import Message from '@/Components/Message';
import { useRouter } from 'next/navigation';
export default function Webpagelogin(){
    const [name,setName]=useState<string>('');
    const [password,setPassword]=useState<string>('');
    const [success,setSuccess]=useState<boolean>(false);
    const [faild,setFaild]=useState<boolean>(false);
    const routes=useRouter();
    const login = async(e: React.FormEvent) => { // here we check the data if it exsit in database so we can connect to webpage
        e.preventDefault();
        const res=await fetch("http://localhost/my-app/API/Login.php",
            {method:'POST',
            headers:{'Content-type':'application/json'},
            body:JSON.stringify({
                username:name,password:password
            })});
        const data = await res.json();
        if(!data.success){
        setFaild(true)
        const time = setTimeout(()=>{
            setFaild(false);
        },5000)
        return()=>clearTimeout(time);
        }
        else{ // connected
        setSuccess(true)
        const time = setTimeout(()=>{//here send it to webpage normal or panel check the user role
            setSuccess(false);
        },5000)
        return()=>clearTimeout(time);
        }}

    const handleForgotPassword = () => {
        console.log('Forgot password functionality');
    }

    const handlenonexsit=()=>{
        routes.push('/signup');
    }

    return(
        <div className={styles.container}>
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
                
                <form onSubmit={login} className={styles.inputhanlder}> {/**no injection now input good handled*/}
                    <input 
                        type="text" 
                        className={styles.inp} 
                        maxLength={20} 
                        minLength={3} 
                        value={name} 
                        onChange={(e)=>{
                        const input = e.target.value;
                        const clean = input.replace(/[^a-zA-Z0-9]/g, '');
                        setName(clean)}}
                        placeholder="Nom d'utilisateur"
                        required
                    />
                    
                    <input 
                        type="password" 
                        className={styles.inp} 
                        maxLength={8} 
                        minLength={8} 
                        value={password} 
                        onChange={(e)=>{
                        const input = e.target.value;
                        const clean = input.replace(/[^a-zA-Z0-9]/g, '');
                        setPassword(clean)}}
                        placeholder="Mot de passe"
                        required
                    />
                    
                    <button className={styles.button} type='submit'>
                        Se connecter
                    </button>
                    
                    <div className={styles.linksContainer}>
                        <button 
                            type="button" 
                            className={styles.forget}
                            onClick={handlenonexsit}
                        >
                               Pas de compte ?
                        </button>
                        <button 
                            type="button" 
                            className={styles.forget}
                            onClick={handleForgotPassword}
                        >
                            Mot de passe oublié?
                        </button>
                    </div>
                </form>
            </div>
            {success&&<Message  text="Connexion réussie !" state={true}/>}
            {faild&&<Message text="Nom d’utilisateur ou mot de passe incorrect." state={false} />}
        </div>
    )
}