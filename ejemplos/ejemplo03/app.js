// Utilizando map

const vowels = ['a', 'e', 'i', 'o', 'u'];

const altered_vowels = vowels.map(vowel => {
    return vowel.toUpperCase();
});

//console.log(altered_vowels);

// Ejercicio calificaciones
const calificaciones = [8, 6.5, 8.5, 9, 10, 0];

const evaluacion = calificaciones.map(calificacion => {
    if (calificacion > 7.0) {
        return "Aprobado";
    }
    else {
        return "Reprobado"
    }
});

console.log(evaluacion);