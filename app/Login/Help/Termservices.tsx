import styles from "./Termservices.module.css";

export default function Termservices() {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <p>
          ATM Mobilis est le principal opérateur mobile en Algérie, offrant des
          services de télécommunications fiables et abordables aux particuliers
          et aux entreprises depuis 2002.
        </p>

        <p>
          Nous proposons des solutions mobiles, de données et digitales de haute
          qualité, conçues pour soutenir la communication, la connectivité et la
          transformation numérique à travers tout le pays.
        </p>

        <p>
          Mobilis sengage dans linnovation et lamélioration continue, en
          investissant dans des technologies modernes pour offrir un réseau
          rapide, sécurisé et couvrant l’ensemble du territoire.
        </p>

        <p>
          La satisfaction des clients est au cœur de notre mission. Nous
          fournissons un support client réactif et une assistance technique pour
          aider les utilisateurs à tout moment.
        </p>

        <p>
          Nous prenons la protection des données très au sérieux. Mobilis
          applique des mesures de sécurité strictes pour garantir la
          confidentialité, lintégrité et la sécurité des informations
          personnelles des utilisateurs.
        </p>

        <p>
          En tant quopérateur national responsable, Mobilis contribue au
          développement socio-économique de l’Algérie en favorisant l’inclusion
          numérique et la croissance durable.
        </p>

        <p>
          En utilisant les services de Mobilis, les utilisateurs bénéficient
          d’un partenaire de télécommunications de confiance, transparent et
          centré sur le client.
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
