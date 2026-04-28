// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "🌅 Si tu sabes que te quiero", time: 31 },
  { text: "💛 Que sin ti mi amor me muero", time: 32 },
  { text: "👀 Nunca dudes que te extraño", time: 36 },
  { text: " Nunca dudes que te amo", time: 37 },
  { text: " Cómo pienso en tu sonria", time: 40 },
  { text: " Cuando me besa la brisa", time: 43 },
  { text: " Y el dorado de tu pelo", time: 45 },
  { text: " Se me enreda entre mi cuerpo", time: 47 },
  { text: " Cuando tu me amas siento", time: 50 },
  { text: " Que enloquecen mis sentidos", time: 54 },
  { text: " Nada existe, nada vale", time: 56 },
  { text: " Solo escucho tus gemidos", time: 58 },
  { text: " Si tú sabes que te quiero", time: 64 },
  { text: " Que sin ti mi amor me muero", time: 66 },
  { text: " Nunca dudes que te amo", time: 69 },
  { text: " Nunca dudes que te extraño", time: 75 },
  { text: " ✨ Que te amo", time: 80 },

  { text: " A pesar de estar ausente", time: 89 },
  { text: " En mi mente estás presente", time: 91 },
  { text: " Y no importa la distancia", time: 93 },
  { text: " Que a nosotros nos aparte", time: 95 },
  { text: " Siento ansias del regreso", time: 98 },
  { text: " Siento ansias de besarte", time: 102 },
  { text: " Y en mis brazos amarrarte", time: 104 },
  { text: " Y gritarte que eres mía", time: 109 },
  { text: " Si tú sabes que te quiero", time: 112 },
  { text: " Que sin ti mi amor me muero", time: 115 },
  { text: " Nunca dudes que te amo", time: 117 },
  { text: " Nunca dudes que te extraño", time: 123 },
  { text: "✨ Que te amo", time: 128 },

  { text: "✨💛🌅 ", time: 134 },
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
