import styles from './Webpagelogin.module.css';
import { useState } from 'react';
import Image from 'next/image';
export default function Webpagelogin(){
    const [name,setName]=useState<string>('');
    const [password,setPassword]=useState<string>('');
    const login=()=>{

    }
    return(

        <div className={styles.container}>

                <div className={styles.image}>
                    <Image src='/mobi.png' alt='Mobilis' className={styles.bigimage}/>
                </div>

                <div className={styles.box}>
                    <div className={styles.logo}>
                    <Image src='/logo.png' alt='Mobilis' className={styles.small}/>
                    </div>
                    <div className={styles.title}>
                        <h1 className={styles.texttile}>Gestion du Parc Automobile</h1>
                    </div>
                    <form onSubmit={login} method="post" className={styles.inputhanlder}>
                    <input type="text" className={styles.inp} maxLength={50} minLength={1} value={name} onChange={(e)=>setName(e.target.value)}/> {/**here in this inputs we should add security later */}
                    <input type="text" className={styles.inp} maxLength={50} minLength={1} value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    <button className={styles.button} type='submit'>Se connecter</button>
                    </form>
                </div>

        </div>
    )
}