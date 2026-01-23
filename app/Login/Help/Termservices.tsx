import styles from "./Termservices.module.css";

export default function Termservices() {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <p>
          ATM Mobilis is the leading mobile operator in Algeria, providing
          reliable and affordable telecommunications services to individuals and
          businesses since 2002.
        </p>

        <p>
          We offer high-quality mobile, data, and digital solutions designed to
          support communication, connectivity, and digital transformation across
          the country.
        </p>

        <p>
          Mobilis is committed to innovation and continuous improvement,
          investing in modern technologies to deliver a fast, secure, and
          nationwide network.
        </p>

        <p>
          Customer satisfaction is at the core of our mission. We provide
          responsive customer support and technical assistance to help users
          whenever they need it.
        </p>

        <p>
          We take data protection seriously. Mobilis applies strict security
          measures to ensure the confidentiality, integrity, and safety of
          users’ personal information.
        </p>

        <p>
          As a responsible national operator, Mobilis contributes to Algeria’s
          socio-economic development by promoting digital inclusion and
          sustainable growth.
        </p>

        <p>
          By using Mobilis services, users agree to benefit from a trusted,
          transparent, and customer-focused telecommunications partner.
        </p>
      </div>
      <button
        className={styles.visitus}
        onClick={() => window.open("https://mobilis.dz/apropos", "_blank")}
      >
        Rendez-nous visite
      </button>
    </div>
  );
}
