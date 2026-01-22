import styles from "./Experience.module.css";
import React from "react";
import { useEffect } from "react";
type squareexpericenceporops = {
  text: string;
  setnum: React.Dispatch<React.SetStateAction<number>>;
  num: number;
  comment: string;
  icon: React.ReactNode;
  howmuch: number;
};
const incremeant = (
  sn: React.Dispatch<React.SetStateAction<number>>,
  much: number,
) => {
  setTimeout(() => {
    sn((prev) => prev + much);
  }, 10000);
};

export default function Experince({
  text,
  setnum,
  num,
  comment,
  icon,
  howmuch,
}: squareexpericenceporops) {
  useEffect(() => {
    incremeant(setnum, howmuch);
  }, [num, setnum, howmuch]);

  return (
    <div className={styles.containersquared}>
      <div className={styles.boxtheme}>{icon}</div>
      <div className={styles.count}>{num}</div>
      <div className={styles.texts}>
        <p className={styles.texttitle}>{text}</p>
        <p className={styles.textcom}>{comment}</p>
      </div>
    </div>
  );
}
