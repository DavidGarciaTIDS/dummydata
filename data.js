var salida = "";

			function generarAlumnos() {
				const primerApellido = [
					"Hernández",
					"García",
					"López",
					"Martínez",
					"González",
					"Rodríguez",
					"Pérez",
					"Sánchez",
					"Ramírez",
					"Torres",
					"Flores",
					"Rivera",
					"Gómez",
					"Díaz",
					"Reyes",
					"Morales",
					"Ortega",
					"Cruz",
					"Mendoza",
					"Castillo",
					"Romero",
					"Vargas",
					"Rojas",
					"Guerrero",
					"Estrada",
					"Vázquez",
					"Silva",
					"Medina",
					"Ramos",
					"Jiménez",
					"Ortiz",
					"León",
					"Cervantes",
					"Peña",
					"Herrera",
					"Cortés",
					"Fernández",
					"Pacheco",
					"Juárez",
					"Santos",
					"Nava",
					"Zamora",
					"Navarro",
					"Mejía",
					"Campos",
					"Montes",
					"Soto",
					"Escobar",
					"Ibarra",
					"Valencia",
					"Olvera",
					"Lozano",
					"Mora",
					"Franco",
					"Chávez",
					"Solís",
					"Ríos",
					"Mendoza",
					"Lara",
					"Sosa",
					"Barrera",
					"Villa",
					"Palacios",
					"Orozco",
					"Valenzuela",
					"Sepúlveda",
					"Andrade",
					"Salgado",
					"Escobedo",
					"Acevedo",
					"Cisneros",
					"Lugo",
					"Navarrete",
					"Gallardo",
				];

				const segundoApellido = [
					"Smith",
					"Johnson",
					"Williams",
					"Jones",
					"Brown",
					"Davis",
					"Miller",
					"Wilson",
					"Moore",
					"Taylor",
					"Anderson",
					"Thomas",
					"Jackson",
					"White",
					"Harris",
					"Martin",
					"Thompson",
					"Garcia",
					"Martinez",
					"Robinson",
					"Clark",
					"Rodriguez",
					"Lewis",
					"Lee",
					"Walker",
					"Hall",
					"Allen",
					"Young",
					"King",
					"Wright",
					"Hill",
					"Scott",
					"Green",
					"Adams",
					"Baker",
					"Nelson",
					"Carter",
					"Mitchell",
					"Turner",
					"Perez",
					"Roberts",
					"Cook",
					"Morris",
					"Rogers",
					"Bell",
					"Bailey",
					"Collins",
					"Reed",
					"Kelly",
					"Howard",
					"Cooper",
					"Cox",
					"Richardson",
					"Ward",
					"Flores",
					"Morales",
					"Bennett",
					"Barnes",
					"Gonzales",
					"Fisher",
					"Vasquez",
					"Castillo",
					"Sanders",
					"Jenkins",
					"McDonald",
					"Woods",
					"Simpson",
					"Parker",
					"Holmes",
					"Harrison",
					"Kennedy",
					"Wells",
					"Alvarez",
				];

				const nombresMixtos = [
					"Alex",
					"Taylor",
					"Jordan",
					"Jamie",
					"Dakota",
					"Riley",
					"Avery",
					"Casey",
					"Jesse",
					"Angel",
					"Hayden",
					"Phoenix",
					"Morgan",
					"Payton",
					"Dylan",
					"Charlie",
					"Parker",
					"Skylar",
					"Sage",
					"Harper",
					"Reese",
					"Emerson",
					"River",
					"Drew",
					"Quinn",
					"Logan",
					"Sawyer",
					"Blake",
					"Elliott",
					"Micah",
					"Cameron",
					"Peyton",
					"Kai",
					"Rowan",
					"Jaden",
					"Dorian",
					"Emery",
					"Finley",
					"Ariel",
					"Ashton",
					"Carter",
					"Gray",
					"Hayden",
					"Jayden",
					"Kendall",
					"Leighton",
					"Mackenzie",
					"Peyton",
					"Reagan",
					"Robin",
					"Spencer",
					"Tanner",
					"Tyler",
					"Bailey",
					"Cassidy",
					"Dakota",
					"Evan",
					"Hunter",
					"Jordan",
					"Parker",
					"Riley",
					"Ryan",
					"Skyler",
					"Terry",
					"Shay",
					"Jaiden",
					"Peyton",
					"Kendall",
					"Addison",
					"Cameron",
					"Blake",
					"Phoenix",
					"Sage",
					"Parker",
					"Taylor",
					"Rowan",
				];

				salida = `CREATE DATABASE IF NOT EXISTS sistema_escolar; <br>
						CREATE TABLE sistema_escolar.alumnos (
						\`matricula\` varchar(20) NOT NULL UNIQUE,
						\`apellido1\` varchar(50) DEFAULT NULL,
						\`apellido2\` varchar(50) DEFAULT NULL,
						\`nombre\` varchar(50) DEFAULT NULL,
						\`correo\` varchar(100) DEFAULT NULL,
						\`celular\` varchar(50) DEFAULT NULL,
						UNIQUE KEY \`matricula\` (\`matricula\`),
						UNIQUE KEY \`correo\` (\`correo\`)
						) ENGINE=InnoDB DEFAULT CHARSET=latin1; <br>

						INSERT INTO sistema_escolar.alumnos() VALUES `;
				var matricula = 0;
				var numero = 0;
				for (let i = 1; i < 1251; i++) {
					matricula = ("000000000" + i).slice(-8);
					numero = "6" + Math.floor(100000000 + Math.random() * 900000000);

					salida += `(
					'${matricula}', 
					'${primerApellido[Math.floor(Math.random() * primerApellido.length)]}', 
					'${segundoApellido[Math.floor(Math.random() * segundoApellido.length)]}', 
					'${nombresMixtos[Math.floor(Math.random() * nombresMixtos.length)]}', 
					'${matricula}@uthermosillo.edu.mx',
					'${numero}'), <br>`;
				}
				salida = salida.replace(/,([^,]*)$/, ";$1");
				document.getElementById("alumnosP").innerHTML = salida;
			}

			function generarSQL() {
				// Create the element to generate the file
				var generar = document.createElement("a");

				// Set the file as data
				generar.setAttribute(
					"href",
					"data:text/plain;charset=utf-8," +
						encodeURIComponent(salida.replaceAll("<br>", " "))
				);

				// Set the file name
				generar.setAttribute("download", "Alumnos.sql");

				// Hide the element
				generar.style.display = "none";

				// Add the element to the body
				document.body.appendChild(generar);

				// Generate the file
				generar.click();

				// Delete the element
				document.body.removeChild(generar);
			}

			function generarCSV() {
                
                //delete everything BEFORE the word VALUES 
                let values = salida.replace(/.*VALUES/, "");
                console.log(values);
				// Extract the values between parentheses
				values = values.match(/\((.*?)\)/);

				// Create an array of arrays for the CSV rows
				let csvRows = values.map((value) => {
					// Remove parentheses and single quotes
					let cleanedValue = value.replace(/[\(\)']/, "");
					// Split by comma and trim each value
					return cleanedValue.split(",").map((v) => v.trim());
				});

				// Create a CSV string
				let csvString = csvRows.map((row) => row.join(",")).join("\n");

				// Create a CSV file and download it
				let downloadLink = document.createElement("a");
				downloadLink.setAttribute(
					"href",
					"data:text/csv;charset=utf-8," + encodeURIComponent(csvString)
				);
				downloadLink.setAttribute("download", "Alumnos.csv");
				downloadLink.style.display = "none";
				document.body.appendChild(downloadLink);
				downloadLink.click();
				document.body.removeChild(downloadLink);
			}

			function exportar() {}