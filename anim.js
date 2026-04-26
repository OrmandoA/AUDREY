// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "en ese momento", time: 15 },
  { text: "el susurro de los pájaros", time: 18 },
  { text: "solitario antes de que el sol llorara", time: 27 },
  { text: "cayo del cielo", time: 32 },
  { text: "como gotas de agua", time: 33 },
  { text: "Donde estoy ahora? no se por que", time: 41 },
  { text: "lindas mariposas en mis manos", time: 47 },
  { text: "demasiada luz para el crepusculo", time: 54 },
  { text: "en el estado de ánimo para el amor de las flores", time: 59 },
  { text: "esa visión", time: 67 },
  { text: "Realmente me dejo alucinando", time: 72 },
  { text: "Silencio dejame ver lo que era", time: 78 },
  { text: "solo quiero vivir en las nubes", time: 83 },
  { text: "Donde estoy ahora? no se por que", time: 91 },
  { text: "lindas mariposas en mis manos", time: 97 },
  { text: "demasiada luz para el crepusculo", time: 104 },
  { text: "en el estado de ánimo para el amor de las flores", time: 108 },
  { text: "en ese momento", time: 144 },
  { text: "el susurro de los pájaros", time: 148 },
  { text: "solitario antes de que el sol llorara", time: 153 },
  { text: "cayo del cielo", time: 158 },
  { text: "como gotas de agua", time: 164 },
  { text: "Donde estoy ahora? no se por que", time: 169 },
  { text: "lindas mariposas en mis manos", time: 176 },
  { text: "demasiada luz para el crepusculo", time: 183 },
  { text: "en el estado de ánimo para el amor de las flores", time: 188 },
  { text: "Amor.", time: 140 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);