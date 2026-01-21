"use client";
import styles from "./Textchange.module.css";
import { useEffect, useState } from "react";

type TextChangeProps = {
  t: string[];
};

export default function Textchange({ t }: TextChangeProps) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = t[index];
    const speed = deleting ? 30 : 70; // Slightly faster typing speeds

    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(current.substring(0, subIndex + 1));
        setSubIndex(subIndex + 1);

        if (subIndex === current.length - 1) {
          setTimeout(() => setDeleting(true), 1200);
        }
      } else {
        setText(current.substring(0, subIndex - 1));
        setSubIndex(subIndex - 1);

        if (subIndex === 0) {
          setDeleting(false);
          setIndex((index + 1) % t.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, t]);

  return (
    <div className={styles.container}>
      <h3 className={styles.changedText}>
        {text}
        <span className={styles.cursor} />
      </h3>
    </div>
  );
}
