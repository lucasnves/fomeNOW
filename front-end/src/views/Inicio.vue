<template>
    <div class="container-vInicio">
        <NavBar/>
        <div class="container-vInicio-comeco">

            <div class="vInicio-comeco-textos">
                <h1>O que deseja a todo momento!</h1>
                <p class="mt-3">Peça de onde estiver. Comida? É aqui!</p>
            </div>

            <div class="vInicio-comeco-pesquisa">
                <input type="text" placeholder="Busque algo">
                <button>Buscar</button>
            </div>

            <div class="vInicio-comeco-carouselCategoria">
                <div><h3>Categorias:</h3></div>
                <div class="vInicio-carouselCategoria">
                    <div class="vInicio-carouselCategoria-categorias" v-for="(categoria) in categorias" :key="categoria.id" @click="goToRestaurente(categoria.id)">
                        <div class="vInicio-carouselCategoria-categoria">
                            <span>{{ categoria.nome }}</span>
                        </div>
                    </div>
                </div>
            </div>
            

        </div>

        <div class="container-vInicio-meio">
            
            <div class="vInicio-meio-cards">
                <div class="card">
                    <div class="card-img">
                        <img src="@/assets/cards/registre.jpg" alt="">
                    </div>
                    <div class="card-text">
                        <h1>Registre seu restaurante</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus voluptatibus a in ab est, commodi voluptatem.</p>
                    </div>
                    <button>Saiba mais</button>
                </div>
                <div class="card">
                    <div class="card-img">
                        <img src="@/assets/cards/entregador.webp" alt="">
                    </div>
                    <div class="card-text">
                        <h1>Seja um entregador</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus voluptatibus a labore autem qui ipsa sit non.</p>
                    </div>
                    <button>Saiba mais</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NavBar from '../components/NavBar.vue';

export default {
  data() {
    return {
        categorias: [],
        slide: 0,
        sliding: null,
    }
  },
  async created() {
    this.categorias = await this.getCategorias();
  },
  components: {
    NavBar,
  },
  methods: {
    async getCategorias() {
        const req = await fetch('http://localhost:3000/categorias', {
            method: "GET",
        });
        return await req.json();
    },
    goToRestaurente(catId) {
        this.$router.push({ name: 'restaurantes', params: { catId } });
    }
  }
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}
/*  CONTAINER DO COMEÇO */
.container-vInicio {
    background: rgb(245, 245, 245);
}
.container-vInicio-comeco {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 0 40px 0;
}
.vInicio-comeco-textos {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 50px;
}
.vInicio-comeco-pesquisa {
    margin: 25px 0 50px 0;
}
.vInicio-comeco-pesquisa input {
    border: 1px solid grey;
    border-radius: 3px;
    margin: 10px;
    height: 50px;
    padding: 10px;
    width: 550px;
}
.vInicio-comeco-pesquisa button {
    background: #1C3879;
    border: none;
    border-radius: 3px;
    width: 120px;
    height: 50px;
    color: white;
    font-weight: 500;
}
.vInicio-comeco-carouselCategoria {
    display: flex;
    width: 65%;
    flex-direction: column;
}
.vInicio-comeco-carouselCategoria h3 {
    padding-left: 4px;
    font-size: 32px;
    font-weight: 600;
}
.vInicio-carouselCategoria {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}
.vInicio-carouselCategoria-categorias {
    padding: 5px;
}
.vInicio-carouselCategoria-categoria {
    background: rgb(13, 34, 78);
    color: white;
    border-radius: 10px;
    padding: 10px;
    transition: .2s;
}
.vInicio-carouselCategoria-categoria h3 {
    font-size: 20px;
    font-weight: 500;
}

.vInicio-carouselCategoria-categoria:hover {
    transform: scale(1.1);
    cursor: pointer;
}

/*  CONTAINER DO MEIO */
.container-vInicio-meio {
    background: rgb(240, 240, 240);
}
.vInicio-meio-cards {
    width: 100%;
    padding: 80px 0 30px 0;
    display: flex;
    justify-content: center;
}
.card img {
    width: 100%;
    height: 200px;
    border-radius: 15px 15px 0px 0px;
}
.card {
    width: 400px;
    margin: 20px;
    border-radius: 15px;
    border: 0.5px solid rgb(207, 207, 207);
    display: flex;
    align-items: center;
}
.card-text {
    display: flex;
    flex-direction: column;
    padding: 20px;
}

.card-text h1 {
    font-size: 24px;
}
.card-text p{
    padding-top: 15px;
}
.card button {
    font-size: 18px;
    font-weight: bold;
    border-radius: 15px;
    border: none;
    padding: 10px;
    width: 90%;
    margin-bottom: 10px;
}
</style>