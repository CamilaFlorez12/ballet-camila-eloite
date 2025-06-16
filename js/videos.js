
class Videos extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        this.videos = [
            {
                url: "https://www.youtube.com/watch?v=bFMXJ4d4EAk",
                descripcion: "posiciones básicas de ballet"

            },
            {
                url: "https://www.youtube.com/watch?v=o1eV2Mgc_BI",
                descripcion: "Como hacer una reverencia"
            },
            {
                url: "https://www.youtube.com/watch?v=xUC9w1XSOfw",
                descripcion: "Plié y relevé"
            },
            {
                url: "https://www.youtube.com/watch?v=_pwAMoEzVag",
                descripcion: "Ejercicos de equilibrio"
            },
            {
                url: "https://www.youtube.com/watch?v=YHd5qeUgBO0",
                descripcion: "Ejercicos de barra"
            },
            {
                url: "https://www.youtube.com/watch?v=52zVBti7Ms0",
                descripcion: "Pequeños saltos (petit allegro) "
            },
            {
                url: "https://youtu.be/V0A0exOXrWs",
                descripcion: "pas de bourrée"
            },
            {
                url: "https://www.youtube.com/watch?v=hWnwLviogTs",
                descripcion: "Ejercicos de barra(Développé y Relevé Lent)"
            },
            {
                url: "https://www.youtube.com/watch?v=8ywHxIsEylI",
                descripcion: "Piruetas"
            },
            {
                url: "https://www.youtube.com/watch?v=La5gR3_sui8",
                descripcion: "Assemblé "
            },
            {
                url: "https://www.youtube.com/watch?v=ZSIfgTOowYk",
                descripcion: "Ejercicos de barra(avanzado)"
            },
            {
                url: "https://www.youtube.com/watch?v=n_gCykBVR3k",
                descripcion: "Giros fouetté"
            },
            {
                url: "https://www.youtube.com/watch?v=7RdeR8IMIkE",
                descripcion: "Grand jeté "
            },
            {
                url: "https://www.youtube.com/watch?v=XE9qNLJML80",
                descripcion: "Variacion 'lago de los cisnes'"
            },
            {
                url: "https://www.youtube.com/watch?v=P50PE8l3jG8",
                descripcion: "Ejercicos en puntas"
            },

        ];
    }
    connectedCallback() {
        this.cargarVideos();
    }

    async cargarVideos() {

        const key = 'AIzaSyB3m8UXaLep2cPHeipPCFk1ayhBZp0z2zI';
        const idDevelopers = 'UC_x5XG1OV2P6uZZ5FSM9Ttw';
        const url = `https://www.googleapis.com/youtube/v3/search?key=${key}&channelId=${idDevelopers}&part=snippet&type=video&order=date&maxResults=1`
        try {

            const contenedor = document.createElement('div');
            contenedor.classList.add('contenedor-videos');

            const secciones={
                principiante:this.crearSeccion("Nivel Principiante","white"),
                intermedio:this.crearSeccion("Nivel Intermedio","pink"),
                avanzado:this.crearSeccion("Nivel avanzado","red")
            };

            this.videos.forEach((video,index)=>{
                const videoId=this.obtenerVideoId(video.url);
                if(!videoId) return;

                const tarjeta=document.createElement('div');
                tarjeta.classList.add('tarjeta-video');

                tarjeta.innerHTML=`
                <h3>${video.descripcion}</h3>
                <iframe
                style="width: 100%; max-width: 100%; height: 30vh; margin: 0 auto; display: block;"
                 src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
                `
                 tarjeta.addEventListener("mouseover",()=>{
                    tarjeta.style.transform="scale(1.05)";
                    tarjeta.transition="transform 0.3 s ease"
                })
                tarjeta.addEventListener("mouseout",()=>{
                    tarjeta.style.transform="scale(1)"
                });
                tarjeta.style.transition="transform 0.3s ease";

                if (index < 5) {
                    secciones.principiante.appendChild(tarjeta);
                } else if (index < 10) {
                    secciones.intermedio.appendChild(tarjeta)
                } else {
                    secciones.avanzado.appendChild(tarjeta);
                }
            });
            contenedor.appendChild(secciones.principiante);
            contenedor.appendChild(secciones.intermedio);
            contenedor.appendChild(secciones.avanzado);
            this.shadowRoot.appendChild(contenedor);
            this.agregarEstilos();
        } catch(error){
            console.log("Error al cargar videos:",error)
        }
        }

            crearSeccion(tituloTexto,color){
                const seccion=document.createElement('section');
                seccion.classList.add('seccion-video');

                const tituloElemento=document.createElement('h2');
                tituloElemento.textContent=tituloTexto;
                tituloElemento.style.color=color;
                tituloElemento.classList.add('titulo-seccion');

                seccion.appendChild(tituloElemento);
                return seccion;
            }

            obtenerVideoId(url){
                if (url.includes("youtu.be")){
                    return url.split("/").pop();
                }else{
                    const partes=url.split("v=");
                    return partes[1];
                }
            }

            agregarEstilos(){
                const style =document.createElement('style');
                style.textContent=`
                     .contenedor-videos {
                display: flex;
                flex-direction: column;
                gap: 10vh;
                padding: 5vh;
            }

            .seccion-video {
                display: grid;
                place-items: center;
                gap: 5vh;
                padding: 10vh;
            }

            .titulo-seccion {
                font-size: 3rem;
                font-family: cursive;
            }

            .tarjeta-video {
                width: 50%;
                background-color: #030322;
                border: 2px solid white;
                box-shadow: 3px 3px 5px white;
                text-align: center;
                color: white;
                padding: 1rem;
            }

            .tarjeta-video iframe {
                width: 100%;
                height: 30vh;
                display: block;
                margin: 0 auto;
            }

            @media (max-width: 768px) {
                .tarjeta-video {
                    width: 70%;
                    margin-right:5vh
                }
                .titulo-seccion{
                font-size:2rem;
                text-align:center
                }
            }
        `;
        this.shadowRoot.appendChild(style);
    }
}

customElements.define('traer-videos', Videos);
