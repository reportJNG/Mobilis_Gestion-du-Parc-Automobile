import styles from './Webpagelogin.module.css';
import { useState } from 'react';
import Image from 'next/image';

export default function Webpagelogin(){
    const [name,setName]=useState<string>('');
    const [password,setPassword]=useState<string>('');
    
    const login = async(e: React.FormEvent) => { // here we check the data if it exsit in database so we can connect to webpage
        e.preventDefault();
        const res=await fetch("http://localhost/api/login.php",
            {method:'POST',
            headers:{'Content-type':'application/json'},
            body:JSON.stringify({
                username:name,password:password
            })});
        const data = await res.json();

        if(!data.success){
            console.log('Failed to login');
        }
        else{
            console.log('IT WORKED');
        }   
    }

    const handleForgotPassword = () => {
        
        console.log('Forgot password functionality');
    }

    const handleForgotUsername = () => {
        
        console.log('Forgot username functionality');
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
                
                <form onSubmit={login} method="post" className={styles.inputhanlder}> {/**add securty for inputs later to send valid data and no sql injection*/}
                    <input 
                        type="text" 
                        className={styles.inp} 
                        maxLength={50} 
                        minLength={1} 
                        value={name} 
                        onChange={(e)=>setName(e.target.value)}
                        placeholder="Nom d'utilisateur"
                        required
                    />
                    
                    <input 
                        type="password" 
                        className={styles.inp} 
                        maxLength={50} 
                        minLength={1} 
                        value={password} 
                        onChange={(e)=>setPassword(e.target.value)}
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
                            onClick={handleForgotPassword}
                        >
                            Mot de passe oublié?
                        </button>
                        
                        <button 
                            type="button" 
                            className={styles.forget}
                            onClick={handleForgotUsername}
                        >
                            Nom dutilisateur oublié?
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}