function tema(opcion){

let mensaje = "";

if(opcion === "⚽ Deportes"){

mensaje = "🔥 Te gustan los deportes.";

}

else if(opcion === "👗 Moda"){

mensaje = "✨ Te interesa la moda.";

}

else if(opcion === "🍔 Comida"){

mensaje = "🍕 Te encanta la comida.";

}

else if(opcion === "💻 Tecnología"){

mensaje = "🤖 La tecnología es tu favorita.";

}

else if(opcion === "🎵 Música"){

mensaje = "🎧 La música es lo tuyo.";

}

document.getElementById("respuesta").innerHTML = mensaje;

}