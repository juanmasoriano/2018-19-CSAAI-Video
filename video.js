function main()
{
  console.log("Video 01...")

  //-- Obtener el elemento de video
  video1 = document.getElementById("video1")

  //-- Establecer el tamaño del vídeo
  video1.width = 400;
  video1.height= 200;
  video1.src = "https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente1.mp4";


  video2 = document.getElementById("video2")

  //-- Establecer el tamaño del vídeo
  video2.width = 400;
  video2.height= 200;
  video2.src = "https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente2.mp4";

  video3 = document.getElementById("video3")

  //-- Establecer el tamaño del vídeo
  video3.width = 400;
  video3.height= 200;
  video3.src = "https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente3.mp4"

  video4 = document.getElementById("video4")

  //-- Establecer el tamaño del vídeo
  video4.width = 800;
  video4.height= 400;

  ver = document.getElementById('play')
  ver1 = document.getElementById('play1')
  ver2 = document.getElementById('play2')

  //-- Al apretar el boton de ver video
  ver.onclick = () => {
    console.log("Ver!")

    //-- Indicar la fuente del vídeo
    video4.src = "https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente1.mp4";
    video4.currentTime = video1.currentTime;
    video1.style.border = 'dotted yellow'
    video2.style.border = ''
    video3.style.border = ''
  }

  ver1.onclick = () => {
    console.log("Ver!")

    //-- Indicar la fuente del vídeo
    video4.src = "https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente2.mp4";
    video4.currentTime = video2.currentTime;
    video2.style.border = 'dotted yellow';
    video1.style.border = ''
    video3.style.border = ''
  }

  ver2.onclick = () => {
    console.log("Ver!")

    //-- Indicar la fuente del vídeo
    video4.src = "https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente3.mp4"
    video4.currentTime = video3.currentTime;
    video3.style.border = 'dotted yellow';
    video1.style.border = ''
    video2.style.border = ''
  }

  video1.onmouseover = () => {
    console.log("Mouse over!!")
    video1.muted = false;
  }

  video1.onmouseout = () => {
    console.log("Mouse out!!")
    video1.muted = true;
  }

  video2.onmouseover = () => {
    console.log("Mouse over!!")
    video2.muted = false;
  }

  video2.onmouseout = () => {
    console.log("Mouse out!!")
    video2.muted = true;
  }

  video3.onmouseover = () => {
    console.log("Mouse over!!")
    video3.muted = false;
  }

  video3.onmouseout = () => {
    console.log("Mouse out!!")
    video3.muted = true;
  }
}
