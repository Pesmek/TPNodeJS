const { fibo } = require('./exo1');
const { print_fibo } = require('./exo2');

// node fibonacci.js get 10 => affiche le 10 ème terme 
// node fibonacci.js lsit 100 => liste les 10 premiers termes

// Il s'agit d'utiliser l'objet process pour récupérer les arguments 
// passés en ligne de commande 

// => process.argv 
const args = process.argv.slice(2);

const n = parseInt(args[1]);

switch(args[0]) {
    case 'get' : 
        console.log(fibo(n));
        break;

    case 'list' :
        print_fibo(n);
        break;

    default:
        console.log('Que faire');
        break;
}
