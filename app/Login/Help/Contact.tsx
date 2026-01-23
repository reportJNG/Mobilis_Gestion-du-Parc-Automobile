import styles from "./Contact.module.css";
interface Contactprops {
  ui: React.ReactNode;
  comment: string;
  text: string;
}
export default function Contact({ ui, text, comment }: Contactprops) {
  return (
    <div className={styles.container}>
      <div className={styles.uiholder}>
        {/*inside div will always have i */}
        {ui}
        <div className={styles.insideuiholder}>{comment}</div>
      </div>
      <div className={styles.textholder}>
        <span className={styles.text}>{text}</span>
      </div>
    </div>
  );
}
