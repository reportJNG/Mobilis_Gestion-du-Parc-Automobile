import styles from "./ImagerHolder.module.css";
import Image from "next/image";
interface ImagerHolderProps {
  Title: string;
  link: string;
  comment: string;
}
export default function ImagerHolder({
  Title,
  link,
  comment,
}: ImagerHolderProps) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        <strong>{Title}</strong>
      </h2>
      <div className={styles.imageholder}>
        <Image
          src={link}
          alt="Mobilis"
          width={200}
          height={200}
          aria-label={Title}
          title={Title}
        />
        <div className={styles.insideimage}>
          <p className={styles.commenttxt}>{comment}</p>
        </div>
      </div>
    </div>
  );
}
