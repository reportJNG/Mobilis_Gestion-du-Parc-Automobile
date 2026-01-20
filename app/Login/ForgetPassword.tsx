import styles from "./ForgetPassword.module.css";
import { useState } from "react";
import { Status } from "./Webpagelogin";
import { useRouter } from "next/navigation";
interface ForgetPasswordprops {
  Statehandler: () => void;
  setStatus: React.Dispatch<React.SetStateAction<Status>>;
}

export default function ForgetPassword({
  Statehandler,
  setStatus,
}: ForgetPasswordprops) {
  //here logic for first phase
  const [username, setUsername] = useState<string>("");
  const [confirme, setConfirme] = useState<boolean>(false);
  const checker = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch(
        "http://localhost/my-app/API/ForgetPasswordUser.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: username,
          }),
        },
      );
      const data = await res.json();
      if (!data.success) {
        setStatus("account-not-found");
        setUsername("");
        setTimeout(() => {
          setStatus("");
        }, 3000);
      } else {
        setStatus("account-found");
        setTimeout(() => {
          setStatus("");
          setConfirme(true);
        }, 3000);
      }
    } catch {
      setStatus("account-not-found");
      setUsername("");
      setTimeout(() => {
        setStatus("");
      }, 3000);
    }
  };
  //here logic for second phase
  const [formData, setFormData] = useState({
    password: "",
    confirmepassword: "",
  });
  const updater = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password === formData.confirmepassword) {
      try {
        const res = await fetch(
          "http://localhost/my-app/API/UpdatePasswordUser.php",
          {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({
              username: username,
              password: formData.password,
            }),
          },
        );
        const data = await res.json();
        if (!data.success) {
          setStatus("change-failed");
          setFormData((prev) => ({
            ...prev,
            password: "",
            confirmepassword: "",
          }));
          setTimeout(() => {
            setStatus("");
            setUsername("");
            setConfirme(false);
          }, 3000);
        } else {
          setStatus("changed");
          setFormData((prev) => ({
            ...prev,
            password: "",
            confirmepassword: "",
          }));
          setTimeout(() => {
            setStatus("");
            setUsername("");
            setConfirme(false);
            Statehandler();
          }, 3000);
        }
      } catch {}
    } else {
      setStatus("change-failed");
      setFormData((prev) => ({ ...prev, password: "", confirmepassword: "" }));
      setTimeout(() => {
        setStatus("");
        setConfirme(false);
        setUsername("");
      }, 3000);
    }
  };

  //logic for button links
  const routes = useRouter();
  const handlenonexsit = () => {
    routes.push("/signup");
  };
  const handleremeberpassword = () => {
    Statehandler();
  };
  return (
    <div className={styles.container}>
      {/**two form's here one before confirme username exsit and one is after */}
      {!confirme && (
        <form onSubmit={checker} className={styles.firstform}>
          <input
            type="text"
            className={styles.inp}
            maxLength={20}
            minLength={3}
            value={username}
            onChange={(e) => {
              const input = e.target.value;
              const clean = input.replace(/[^a-zA-Z0-9]/g, "");
              setUsername(clean);
            }}
            placeholder="Nom d'utilisateur"
            required
          />
          <button className={styles.button} type="submit">
            Vérifier le compte
          </button>
          <div className={styles.linksContainer}>
            <button
              aria-label="Pas de compte ?"
              title="Pas de compte ?"
              type="button"
              className={styles.forget}
              onClick={handlenonexsit}
            >
              Pas de compte ?
            </button>
            <button
              aria-label="Retour à la connexion"
              title="Retour à la connexion"
              type="button"
              className={styles.forget}
              onClick={handleremeberpassword}
            >
              Retour à la connexion
            </button>
          </div>
        </form>
      )}

      {confirme && (
        <form onSubmit={updater} className={styles.secondform}>
          <input
            type="password"
            className={styles.inp}
            maxLength={8}
            minLength={8}
            value={formData.password}
            onChange={(e) => {
              const input = e.target.value;
              const clean = input.replace(/[^a-zA-Z0-9]/g, "");
              setFormData((prev) => ({ ...prev, password: clean }));
            }}
            placeholder="Mot de passe"
            required
          />
          <input
            type="password"
            className={styles.inp}
            maxLength={8}
            minLength={8}
            value={formData.confirmepassword}
            onChange={(e) => {
              const input = e.target.value;
              const clean = input.replace(/[^a-zA-Z0-9]/g, "");
              setFormData((prev) => ({ ...prev, confirmepassword: clean }));
            }}
            placeholder="Confirmer le mot de passe"
            required
          />
          <button className={styles.button} type="submit">
            Mettre à jour
          </button>
        </form>
      )}
    </div>
  );
}
