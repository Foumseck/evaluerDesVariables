const a = 6;
const b = 12;
const c = 88;

if (a === b && b ===c) {
    console.log('Les trois variables sont identiques')
}

if (a === b || b === c || a === c) {
    console.log('Deux des variables sont identiques');
}

if (a !== b && b !== c && a !== c) {
    console.log('toutes les variables sont différentes')
}