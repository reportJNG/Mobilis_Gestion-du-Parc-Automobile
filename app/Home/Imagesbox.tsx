import styles from "./Imagesbox.module.css";
import Image from "next/image";

interface Imagesboxprops {
  link: string;
  title: string;
  comment: string;
}

export default function Imagesbox({ link, title, comment }: Imagesboxprops) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.boxholder}>
        <Image
          src={link}
          alt="Image-Mobilis"
          width={500}
          height={300}
          className={styles.image}
          priority
        />
      </div>
      <h3 className={styles.commentarai}>{comment}</h3>
    </div>
  );
}
