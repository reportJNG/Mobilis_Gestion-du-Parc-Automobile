SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT;
SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS;
SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION;
SET NAMES utf8mb4;

CREATE TABLE `app_user` (
  `id_app_user` int(11) NOT NULL,
  `nom` varchar(100) DEFAULT NULL,
  `prenom` varchar(100) DEFAULT NULL,
  `username` varchar(100) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `app_user` (`id_app_user`, `nom`, `prenom`, `username`, `password`, `role`) VALUES
(1, 'remouche', 'zakaria', 'zakaria04', 'zakaria04', 'admin');

CREATE TABLE `carburant` (
  `num_carburant` int(11) NOT NULL,
  `date_delivrance` date DEFAULT NULL,
  `id_employe` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `carburant_detail` (
  `num_detail` int(11) NOT NULL,
  `reference` varchar(100) DEFAULT NULL,
  `montant` decimal(10,2) DEFAULT NULL,
  `num_carburant` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `employe` (
  `id_employe` int(11) NOT NULL,
  `nom` varchar(100) DEFAULT NULL,
  `prenom` varchar(100) DEFAULT NULL,
  `fonction` varchar(100) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `entretien` (
  `num_entretien` int(11) NOT NULL,
  `type` varchar(100) DEFAULT NULL,
  `date_entretien` date DEFAULT NULL,
  `cout` decimal(10,2) DEFAULT NULL,
  `kilometrage` int(11) DEFAULT NULL,
  `id_vehicule` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `incident` (
  `num_incident` int(11) NOT NULL,
  `description` text DEFAULT NULL,
  `date_incident` date DEFAULT NULL,
  `gravite` varchar(50) DEFAULT NULL,
  `num_mission` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `mission` (
  `num_mission` int(11) NOT NULL,
  `date_sortie` date DEFAULT NULL,
  `date_retour` date DEFAULT NULL,
  `objet_mission` text DEFAULT NULL,
  `km_depart` int(11) DEFAULT NULL,
  `km_retour` int(11) DEFAULT NULL,
  `id_vehicule` int(11) DEFAULT NULL,
  `id_employe` int(11) DEFAULT NULL,
  `id_wilaya_depart` int(11) DEFAULT NULL,
  `id_wilaya_arrivee` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `suivie` (
  `num_suivie` int(11) NOT NULL,
  `type` varchar(100) DEFAULT NULL,
  `date_debut` date DEFAULT NULL,
  `date_fin` date DEFAULT NULL,
  `reference` varchar(100) DEFAULT NULL,
  `id_vehicule` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `vehicule` (
  `id_vehicule` int(11) NOT NULL,
  `matricule` varchar(50) DEFAULT NULL,
  `marque` varchar(100) DEFAULT NULL,
  `modele` varchar(100) DEFAULT NULL,
  `kilometrage` int(11) DEFAULT NULL,
  `date_achat` date DEFAULT NULL,
  `etat` varchar(50) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `wilaya` (
  `id_wilaya` int(11) NOT NULL,
  `nom_wilaya` varchar(100) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

ALTER TABLE `app_user`
  ADD PRIMARY KEY (`id_app_user`),
  ADD UNIQUE KEY `username` (`username`);

ALTER TABLE `carburant`
  ADD PRIMARY KEY (`num_carburant`),
  ADD KEY `id_employe` (`id_employe`),
  ADD KEY `created_by` (`created_by`),
  ADD KEY `updated_by` (`updated_by`);

ALTER TABLE `carburant_detail`
  ADD PRIMARY KEY (`num_detail`),
  ADD KEY `num_carburant` (`num_carburant`),
  ADD KEY `created_by` (`created_by`);

ALTER TABLE `employe`
  ADD PRIMARY KEY (`id_employe`),
  ADD KEY `created_by` (`created_by`);

ALTER TABLE `entretien`
  ADD PRIMARY KEY (`num_entretien`),
  ADD KEY `id_vehicule` (`id_vehicule`),
  ADD KEY `created_by` (`created_by`);

ALTER TABLE `incident`
  ADD PRIMARY KEY (`num_incident`),
  ADD KEY `num_mission` (`num_mission`),
  ADD KEY `created_by` (`created_by`),
  ADD KEY `updated_by` (`updated_by`);

ALTER TABLE `mission`
  ADD PRIMARY KEY (`num_mission`),
  ADD KEY `fk_vehicule` (`id_vehicule`),
  ADD KEY `fk_employe` (`id_employe`),
  ADD KEY `fk_wilaya_dep` (`id_wilaya_depart`),
  ADD KEY `fk_wilaya_arr` (`id_wilaya_arrivee`),
  ADD KEY `fk_created` (`created_by`),
  ADD KEY `fk_updated` (`updated_by`);

ALTER TABLE `suivie`
  ADD PRIMARY KEY (`num_suivie`),
  ADD KEY `id_vehicule` (`id_vehicule`),
  ADD KEY `created_by` (`created_by`);

ALTER TABLE `vehicule`
  ADD PRIMARY KEY (`id_vehicule`),
  ADD UNIQUE KEY `matricule` (`matricule`),
  ADD KEY `created_by` (`created_by`);

ALTER TABLE `wilaya`
  ADD PRIMARY KEY (`id_wilaya`),
  ADD KEY `created_by` (`created_by`);

ALTER TABLE `app_user`
  MODIFY `id_app_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

ALTER TABLE `carburant`
  MODIFY `num_carburant` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `carburant_detail`
  MODIFY `num_detail` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `employe`
  MODIFY `id_employe` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `entretien`
  MODIFY `num_entretien` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `incident`
  MODIFY `num_incident` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `mission`
  MODIFY `num_mission` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `suivie`
  MODIFY `num_suivie` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `vehicule`
  MODIFY `id_vehicule` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `wilaya`
  MODIFY `id_wilaya` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `carburant`
  ADD CONSTRAINT `carburant_ibfk_1` FOREIGN KEY (`id_employe`) REFERENCES `employe` (`id_employe`),
  ADD CONSTRAINT `carburant_ibfk_2` FOREIGN KEY (`created_by`) REFERENCES `app_user` (`id_app_user`),
  ADD CONSTRAINT `carburant_ibfk_3` FOREIGN KEY (`updated_by`) REFERENCES `app_user` (`id_app_user`);

ALTER TABLE `carburant_detail`
  ADD CONSTRAINT `carburant_detail_ibfk_1` FOREIGN KEY (`num_carburant`) REFERENCES `carburant` (`num_carburant`),
  ADD CONSTRAINT `carburant_detail_ibfk_2` FOREIGN KEY (`created_by`) REFERENCES `app_user` (`id_app_user`);

ALTER TABLE `employe`
  ADD CONSTRAINT `employe_ibfk_1` FOREIGN KEY (`created_by`) REFERENCES `app_user` (`id_app_user`);

ALTER TABLE `entretien`
  ADD CONSTRAINT `entretien_ibfk_1` FOREIGN KEY (`id_vehicule`) REFERENCES `vehicule` (`id_vehicule`),
  ADD CONSTRAINT `entretien_ibfk_2` FOREIGN KEY (`created_by`) REFERENCES `app_user` (`id_app_user`);

ALTER TABLE `incident`
  ADD CONSTRAINT `incident_ibfk_1` FOREIGN KEY (`num_mission`) REFERENCES `mission` (`num_mission`),
  ADD CONSTRAINT `incident_ibfk_2` FOREIGN KEY (`created_by`) REFERENCES `app_user` (`id_app_user`),
  ADD CONSTRAINT `incident_ibfk_3` FOREIGN KEY (`updated_by`) REFERENCES `app_user` (`id_app_user`);

ALTER TABLE `mission`
  ADD CONSTRAINT `fk_created` FOREIGN KEY (`created_by`) REFERENCES `app_user` (`id_app_user`),
  ADD CONSTRAINT `fk_employe` FOREIGN KEY (`id_employe`) REFERENCES `employe` (`id_employe`),
  ADD CONSTRAINT `fk_updated` FOREIGN KEY (`updated_by`) REFERENCES `app_user` (`id_app_user`),
  ADD CONSTRAINT `fk_vehicule` FOREIGN KEY (`id_vehicule`) REFERENCES `vehicule` (`id_vehicule`),
  ADD CONSTRAINT `fk_wilaya_arr` FOREIGN KEY (`id_wilaya_arrivee`) REFERENCES `wilaya` (`id_wilaya`),
  ADD CONSTRAINT `fk_wilaya_dep` FOREIGN KEY (`id_wilaya_depart`) REFERENCES `wilaya` (`id_wilaya`);

ALTER TABLE `suivie`
  ADD CONSTRAINT `suivie_ibfk_1` FOREIGN KEY (`id_vehicule`) REFERENCES `vehicule` (`id_vehicule`),
  ADD CONSTRAINT `suivie_ibfk_2` FOREIGN KEY (`created_by`) REFERENCES `app_user` (`id_app_user`);

ALTER TABLE `vehicule`
  ADD CONSTRAINT `vehicule_ibfk_1` FOREIGN KEY (`created_by`) REFERENCES `app_user` (`id_app_user`);

ALTER TABLE `wilaya`
  ADD CONSTRAINT `wilaya_ibfk_1` FOREIGN KEY (`created_by`) REFERENCES `app_user` (`id_app_user`);

COMMIT;

SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT;
SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS;
SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION;
