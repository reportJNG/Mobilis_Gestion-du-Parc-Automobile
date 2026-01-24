import styles from "./Secure.module.css";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import About from "@/app/Home/About";
import Silk from "@/app/Home/Silk";
interface Secureprops {
  name: string;
  testerpsw: string;
  setRongPsw: React.Dispatch<React.SetStateAction<boolean>>;
  setGoodPsw: React.Dispatch<React.SetStateAction<boolean>>;
  setDone: React.Dispatch<React.SetStateAction<boolean>>;
  where: string;
}
export default function Secure({
  name,
  testerpsw,
  setRongPsw,
  setGoodPsw,
  setDone,
  where,
}: Secureprops) {
  const [Loading, setLoading] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");

  const routes = useRouter();
  const action = () => {
    if (testerpsw === password) {
      setGoodPsw(true);
      setLoading(true);
      setTimeout(() => {
        setGoodPsw(false);
        setTimeout(() => {
          setDone(true);
          setLoading(false);
          routes.push(where);
        }, 1000);
      }, 7000);
    } else {
      setRongPsw(true);
      setTimeout(() => {
        setRongPsw(false);
      }, 7000);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.boxtop}>
          <div className={styles.leftboxtop}>
            <button
              className={styles.backbtn}
              onClick={() => routes.push("/Login")}
              aria-label="Retour"
              title="Retour"
            >
              <i className="fi fi-rr-left"></i>
            </button>
          </div>
          <div className={styles.titlemidbox}>
            <h2>Mobilis</h2>
          </div>
          <div className={styles.righttopbox}>
            <div className={styles.profile}>
              <span className={styles.uiprofile}>
                <i className="fi fi-rr-user"></i>
                <span className={styles.minitextunder}>{name}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.silkContainer}>
        {/**full background of mid */}
        <Silk
          speed={5}
          scale={2}
          color="#1a3a1f"
          noiseIntensity={0}
          rotation={0}
        />
        <div className={styles.mid}>
          <div className={styles.boxmid}>
            <div className={styles.leftbox}>
              <div className={styles.imageholder}>
                <Image
                  src={"/mobi.png"}
                  alt="Mobilis"
                  aria-label="Mobilis"
                  title="Mobilis"
                  width={600}
                  height={600}
                  className={styles.img}
                />
              </div>
            </div>
            <div className={styles.rightbox}>
              <div className={styles.newbox}>
                <div className={styles.titleholder}>
                  <h3 className={styles.title}>Sécurité avant tout</h3>
                  <div className={styles.commentunderholder}>
                    <p className={styles.comment}>
                      Protection maximale de vos informations
                    </p>
                  </div>
                </div>
                <div className={styles.actionholder}>
                  <div className={styles.inputholder}>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => {
                        const ps = e.target.value;
                        const newps = ps.replace(/[^a-zA-Z0-9]/g, "");
                        setPassword(newps);
                      }}
                      maxLength={8}
                      minLength={8}
                      className={styles.input}
                      aria-label="Mot de passe"
                      title="Mot de passe"
                      placeholder="Mot de passe"
                    />
                  </div>
                  <div className={styles.buttonholder}>
                    <button
                      className={styles.buttonclick}
                      aria-label="Démarrer le travail"
                      title="Démarrer le travail"
                      onClick={action}
                    >
                      Démarrer le travail
                    </button>
                  </div>
                </div>
              </div>
              <div className={styles.undernewbox}>
                <div
                  className={`styles.loading ${Loading ? "none" : "loads"}`}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <About />
      </div>
    </div>
  );
}
