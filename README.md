# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

Da bi program radio, mora postojati MariaDB server sa bazom podataka: "api_pract" i sledecim tabelama:

CREATE TABLE `korisnik` (
  `id` int(11) NOT NULL,
  `ime` varchar(20) NOT NULL,
  `lozinka` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `lokacija` (
  `id_lokacije` int(11) NOT NULL,
  `ime` varchar(255) NOT NULL,
  `lokacija` varchar(255) NOT NULL,
  `tekst` text NOT NULL,
  `slika` varchar(255) NOT NULL,
  `kratak_opis` varchar(255) NOT NULL,
  `kordinata_x` double NOT NULL,
  `kordinata_y` double NOT NULL,
  `vreme_unosa` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

ALTER TABLE `korisnik`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `ime` (`ime`);


ALTER TABLE `lokacija`
  ADD PRIMARY KEY (`id_lokacije`);

