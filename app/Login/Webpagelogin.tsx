import styles from "./Webpagelogin.module.css";
import { useState } from "react";
import Image from "next/image";
import Message from "@/Components/Message";
import { useRouter } from "next/navigation";
import LoadingPage from "@/Components/LoadingPage";
import Secure from "@/Components/Secure";
interface LoginResponse {
  success: boolean;
  user?: {
    id: number;
    username: string;
    role: string;
  };
  error?: string;
}
export default function Webpagelogin() {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);
  const [faild, setFaild] = useState<boolean>(false);
  const routes = useRouter();

  //new code here after major updates |admin|worker|
  const [timer, setTimer] = useState<boolean>(false);

  const login = async (e: React.FormEvent) => {
    // here we check the data if it exsit in database so we can connect to webpage
    e.preventDefault();
    if (name === "Admin" && password === "Admin123") {
      setTimer(true);
      setTimeout(() => {
        setTimer(false);
        setSecuring(true);
      }, 5000);
    } else {
      const res = await fetch("http://localhost/my-app/API/Login.php", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          username: name,
          password: password,
        }),
      });
      const data: LoginResponse = await res.json();
      if (
        !data.success &&
        data.user?.role !== "admin" &&
        data.user?.role !== "worker"
      ) {
        setFaild(true);
        const time = setTimeout(() => {
          setFaild(false);
        }, 3000);
        return () => clearTimeout(time);
      } else {
        // connected {admin||worker}
        setSuccess(true);
        const time = setTimeout(() => {
          //here send worker to worker panel admin to admin panel
          if (data.user?.role === "admin") {
            setTimer(true);
            setTimeout(() => {
              setTimer(false);
              setSecuring(true);
            }, 5000);
          }
          if (data.user?.role === "worker") {
            setTimer(true);
            setTimeout(() => {
              setTimer(false);
              setSecuring(true);
            }, 5000);
          }

          setSuccess(false);
        }, 3000);
        return () => clearTimeout(time);
      }
    }
  };
  //here new logic for secure component
  const WorkerPassword = "W2027Xmb"; //workers admin static

  const [DoneSecure, setDoneSecure] = useState<boolean>(false);
  const [securing, setSecuring] = useState<boolean>(false);
  return (
    <div className={styles.container}>
      {!timer && !securing && (
        <div className={styles.backbutton}>
          <button
            className={styles.backbtn}
            onClick={() => routes.push("/")}
            aria-label="Retour"
            title="Retour"
          >
            <i className="fi fi-rr-left"></i>
          </button>
        </div>
      )}
      {!timer && !securing && (
        <div className={styles.image}>
          <Image
            src="/mobi.png"
            alt="Mobilis"
            className={styles.bigimage}
            width={600}
            height={600}
            priority
          />
        </div>
      )}
      {!timer && !securing && (
        <div className={styles.box}>
          <div className={styles.logo}>
            <Image
              src="/logo.png"
              alt="Mobilis"
              className={styles.small}
              width={80}
              height={80}
              priority
            />
          </div>
          <div className={styles.title}>
            <h1 className={styles.texttile}>Gestion du Parc Automobile</h1>
          </div>
          (
          <form onSubmit={login} className={styles.inputhanlder}>
            {/**no injection now input good handled*/}
            <input
              type="text"
              className={styles.inp}
              maxLength={20}
              minLength={3}
              value={name}
              onChange={(e) => {
                const input = e.target.value;
                const clean = input.replace(/[^a-zA-Z0-9]/g, "");
                setName(clean);
              }}
              placeholder="Nom d'utilisateur"
              required
            />
            <input
              type="password"
              className={styles.inp}
              maxLength={8}
              minLength={8}
              value={password}
              onChange={(e) => {
                const input = e.target.value;
                const clean = input.replace(/[^a-zA-Z0-9]/g, "");
                setPassword(clean);
              }}
              placeholder="Mot de passe"
              required
            />
            <button className={styles.button} type="submit">
              Se connecter
            </button>
            <div className={styles.linksContainer}>
              <button
                type="button"
                className={styles.forget}
                onClick={() => routes.push("/Login/Help")}
              >
                Connexion impossible besoin d’aide ?
              </button>
            </div>
          </form>
          )
        </div>
      )}
      {success && <Message text="Connexion réussie !" state={true} />}
      {faild && (
        <Message
          text="Nom d’utilisateur ou mot de passe incorrect."
          state={false}
        />
      )}
      {timer && <LoadingPage name={name} />}
      {!timer && securing && (
        <Secure
          name={name}
          setDone={setDoneSecure}
          testerpsw={WorkerPassword}
          where="/Workers"
        />
      )}
    </div>
  );
}
