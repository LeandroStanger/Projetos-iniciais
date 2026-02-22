let musicas = [
    "Imagine", "Bohemian Rhapsody", "Thriller", "Hotel California", "Yesterday",
    "Hallelujah", "Shape of You", "Rolling in the Deep", "Smells Like Teen Spirit",
    "Despacito", "Hey Jude", "Uptown Funk", "Shallow", "Perfect", "Blinding Lights",
    "Let it Be", "Billie Jean", "Bad Guy", "Stairway to Heaven", "Sweet Child O' Mine",
    "Purple Rain", "Wonderwall", "Livin' on a Prayer", "Nothing Else Matters", "Enter Sandman",
    "Like a Rolling Stone", "Comfortably Numb", "Highway to Hell", "Back in Black", "Kashmir",
    "Creep", "Paranoid Android", "No Surprises", "Clocks", "Viva La Vida",
    "Fix You", "Yellow", "Somebody to Love", "We Will Rock You", "Don't Stop Me Now",
    "Radio Ga Ga", "Another One Bites the Dust", "Under Pressure", "The Show Must Go On", "I Want to Break Free"
];

let minusculas = musicas.map(x => x.toLowerCase());
console.log(minusculas);

let maisDe10 = minusculas.filter((x) => x.length > 10);

if (maisDe10) {
    let somaTotal = maisDe10.reduce((x, y) => x + y.length, 0);
    console.log(`\n\nOs títulos escolhidos somam ${somaTotal} caracteres, revelando a grandeza da música.`);
} else {
    console.log(`Cada música traz sua própria melodia única, sem precisar de grandes nomes.`);
}

    let soma = maisDe10.reduce((x, y) => x + y.length, 0);
    let media = soma / maisDe10.length

    console.log(`\n\nMedia: ${media.toFixed(2)}`);