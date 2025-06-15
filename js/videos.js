
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
                url: "https://www.youtube.com/watch?v=T-2uBnl0qRU",
                descripcion: "pas de bourrée"
            },
            {
                url: "https://www.youtube.com/watch?v=YHd5qeUgBO0",
                descripcion: "Ejercicos de barra"
            },
            {
                url: "https://www.youtube.com/watch?v=YHd5qeUgBO0",
                descripcion: "Ejercicos de barra"
            },
            {
                url: "https://www.youtube.com/watch?v=YHd5qeUgBO0",
                descripcion: "Ejercicos de barra"
            },
            {
                url: "https://www.youtube.com/watch?v=YHd5qeUgBO0",
                descripcion: "Ejercicos de barra"
            },
            {
                url: "https://www.youtube.com/watch?v=YHd5qeUgBO0",
                descripcion: "Ejercicos de barra"
            },
            {
                url: "https://www.youtube.com/watch?v=YHd5qeUgBO0",
                descripcion: "Ejercicos de barra"
            },
            {
                url: "https://www.youtube.com/watch?v=YHd5qeUgBO0",
                descripcion: "Ejercicos de barra"
            },
            {
                url: "https://www.youtube.com/watch?v=YHd5qeUgBO0",
                descripcion: "Ejercicos de barra"
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

            const resultado = document.createElement('div');
            resultado.style.display = 'grid';
            resultado.style.gridTemplateColumns = "1fr 1fr 1fr 1fr 1fr"
            resultado.style.gap = "4vh"
            resultado.style.color = "white"
            this.videos.forEach(idVideo => {
                const videoId = this.obtenerVideoId(idVideo.url);
                const tarjeta = document.createElement('div');
                tarjeta.style.display = "flex"
                tarjeta.style.flexDirection = "column"
                tarjeta.style.width = "100%";
                tarjeta.style.boxSizing = "border-box";
                tarjeta.style.backgroundColor = "black"
                tarjeta.style.border = "2px solid white"
                tarjeta.style.padding = "2vh"
                tarjeta.style.boxShadow = "3px 3px 5px white"
                tarjeta.style.flexWrap = "wrap"
                tarjeta.style.fontSize = "0.5rem"
                tarjeta.style.textAlign = "center"
                tarjeta.innerHTML = `
                <h1>Nivel pincipiantes</h1>
                <h3>${idVideo.descripcion}</h3>
                <iframe
                style="width: 100%; max-width: 100%; height: 100px; margin: 0 auto; display: block;"
                 src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
                
                `
                resultado.appendChild(tarjeta);
            });
            this.shadowRoot.appendChild(resultado)
        } catch (error) {
            console.error("Error al cargar video", error);
        }

    }
    obtenerVideoId(url) {
        const partes = url.split("v=");
        return partes[1];
    }
};

customElements.define('traer-videos', Videos)

