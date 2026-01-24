import styles from "./ImagerHolder.module.css";
import Image from "next/image";

interface ImagerHolderProps {
  Title: string;
  link: string;
}

export default function ImagerHolder({ Title, link }: ImagerHolderProps) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        <strong>{Title}</strong>
      </h2>
      <div className={styles.imageholder}>
        <Image
          src={link}
          alt={Title}
          width={1000}
          height={1000}
          aria-label={Title}
          title={Title}
          priority={true}
        />
      </div>
    </div>
  );
}
