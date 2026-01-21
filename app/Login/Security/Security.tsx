import styles from "./Security.module.css";
import { useRouter } from "next/navigation";

interface Securityprops {
  password: string;
  setPassowrd: React.Dispatch<React.SetStateAction<string>>;
}
import Image from "next/image";
import Textchange from "@/Components/Textchange";
import { useEffect, useState } from "react";
export default function Security({ password, setPassowrd }: Securityprops) {
  //define router
  const routes = useRouter();
  const t: string[] = [
    "Toujours plus proche de vous",
    "Connecter l’Algérie au futur",
    "معاً نصنع المستقبل",
    "شبكة تثق بها",
    "Together toward the future",
  ];
  const [timer, setTimer] = useState<number>(5);

  // Timer countdown effect
  useEffect(() => {
    if (timer <= 0) return;
    const intervalId = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1500);
    return () => clearInterval(intervalId);
  }, [timer]);

  // Navigation effect - triggers when timer reaches 0
  useEffect(() => {
    if (timer === 0) {
      const ADMIN_PASS = "A9$kR7!mQe2Z@Wf#T8pL";
      const WORKER_PASS = "X4!vM@2Pq9#LrS7$eZkF";

      if (password === ADMIN_PASS) {
      } else if (password === WORKER_PASS) {
      } else {
        routes.push("/");
      }

      setPassowrd("");
    }
  }, [timer, password, routes, setPassowrd]);

  return (
    <div className={styles.container}>
      <div className={styles.topbar}>
        <Image
          src={"/logo.png"}
          alt="Mobilis"
          height={70}
          width={70}
          className={styles.smallimge}
        />
      </div>
      <div className={styles.box}>
        <div className={styles.biggerlogo}>
          <Image
            src={"/mobi.png"}
            alt="Mobilis"
            height={100}
            width={100}
            className={styles.bigimage}
          />
        </div>
        <div className={styles.insidebox}>
          <Textchange t={t} />
        </div>
      </div>
      <div className={styles.downwebsite}>
        <div className={styles.linebiggerempty}>
          <div className={`styles.thefillerline${timer}`}></div>{" "}
          {/**this line should fill the bigger line loading  timer will go from 5 to 0 so loading like 5 =20% 4=40% 3=60% 2=80% 1=90% 0=100% */}
        </div>
        <div className={styles.miniloader}>
          <div className={styles.texts}>
            <i className="fi fi-rr-padlock-check"></i>
            <strong className={styles.txt}>Vérification de sécurité</strong>
          </div>
          <div className={styles.threedoots}></div>{" "}
          {/**this under the bigger line loading */}
        </div>
      </div>
    </div>
  );
}
