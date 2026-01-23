import styles from "./Contact.module.css";

interface ContactProps {
  ui: React.ReactNode;
  comment: string;
  text: string;
}

export default function Contact({ ui, text, comment }: ContactProps) {
  return (
    <div className={styles.container}>
      <div className={styles.uiholder}>
        <div className={styles.iconContainer}>{ui}</div>

        <div className={styles.commentContainer}>
          <p className={styles.comment}>{comment}</p>
        </div>
      </div>

      <div className={styles.textholder}>
        <span className={styles.text}>{text}</span>
      </div>
    </div>
  );
}
