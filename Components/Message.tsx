import styles from './Message.module.css';

interface MessageProps {
  text: string;
  state: boolean;
}

export default function Message({ text, state }: MessageProps) {
  return (
    <div className={`${styles.container} ${state ? styles.good : styles.bad}`}>
      <div className={styles.content}>
        <div className={styles.icon}>
          {state ? '✓' : '✕'}
        </div>
        <div className={styles.textContent}>
          <h4 className={styles.title}>{state ? 'Success' : 'Error'}</h4>
          <p className={styles.text}>{text}</p>
        </div>
      </div>
      <div className={styles.timeline}></div>
    </div>
  );
}