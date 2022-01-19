console.log('JS OK');
/* Traccia
Descrizione:
1. Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
2. Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
3. Creare un array di oggetti di studenti (ossìa oggetti con le proprietà sopra descritte).
4. Ciclare su tutti gli studenti e stampare per ognuno di essi: nome e cognome.
5. Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere all’array creato in precedenza, un nuovo oggetto studente inserendo nell’ ordine: nome, cognome e età.
*/

// 1 Creiamo un oggetto che contenga le informazioni dello studente secondo traccia

const resultElement = document.getElementById('result'); // Recupero l'elemento in pagina

const student = {
    name: 'Antonio',
    surname: 'Nicodemo',
    age: 24,
};

// Stampiamo (per il momento in console) tutte le proprietà dell'oggetto student.

for (let key in student) {
    console.log(student[key]);
}

// 3 Creiamo un array di studenti

const students = [
    { name: 'Pippo', surname: 'Baudo', age: 55, },
    { name: 'Mario', surname: 'Rossi', age: 28, },
    { name: 'Lapo', surname: 'Raspanti', age: 25, },
];

students.push(student);
console.log(students);

let sum = ''; // !!!!!!!!! Variabile flag che andrà a formare cio che voglio scrivere nel DOM !!!!!!!!!!!!

// 4 Ciclare gli oggetti e scrivere in pagina nome e cognome.

for (let i = 0; i < students.length; i++) {

    console.log(students[i]);

    const currentElement = students[i];

    for (let key in currentElement) {
        console.log(currentElement[key]);
        if (key != 'age') {  // Escludiamo la proprietà 'age' dalla somma di sotto
            sum = sum + ' ' + [key] + ' ' + currentElement[key];
        }
        resultElement.innerText = sum;
    }
};

// 5 Diamo la possibilità all'utente di  inserire i suoi dati per poi metterli nell'array precedentemente creato

const userName = prompt(`Qual è il tuo nome?`);
const userSurname = prompt(`Qual è il tuo cognome?`);
const userAge = parseInt(prompt('Quanti anni hai?'));

const userData = [];

userData.push(userName, userSurname, userAge)

console.log(userData);

students.push(userData);

console.log(students)