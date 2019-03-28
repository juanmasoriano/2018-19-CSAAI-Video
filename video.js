function main()
{
  console.log("Video 01...")

  //-- Obtener el elemento de video
  video1 = document.getElementById("video1")

  //-- Establecer el tamaño del vídeo
  video1.width = 400;
  video1.height= 200;

  ver = document.getElementById('play')

  //-- Al apretar el boton de ver video
  ver.onclick = () => {
    console.log("Ver!")

    //-- Indicar la fuente del vídeo
    video1.src ="realizador-fuente1.mp4"
  }

  video1.onmouseover = () => {
    console.log("Mouse over!!")
    video1.muted = false;
  }

  video1.onmouseout = () => {
    console.log("Mouse out!!")
    video1.muted = true;
  }
}
