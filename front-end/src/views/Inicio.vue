<template>
    <div class="vh-100">
        <NavBar/>
        <div class="inicio-container">
            <div class="inicio-topo">
                <h1>O que deseja a todo momento!</h1>
                <p>Peça de onde estiver. Comida? É aqui!</p>
            </div>
            <div class="pesquisa">
                <input type="text" placeholder="Busque algo">
                <button>Buscar</button>
            </div>
            <div class="carrouselCat">
                <div class="categorias" v-for="(categoria) in categorias" :key="categoria.id" @click="goToRestaurente(categoria.id)">
                    <div class="categoria">
                        <div class="cat-restaurante">
                            <h3>{{ categoria.nome }}</h3>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="cards">
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
    }
  },
  async created() {
    this.categorias = await this.getCategorias();
  },
  components: {
    NavBar
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
    text-decoration: none;
    outline: none;
}
.inicio-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.pesquisa {
    margin: 60px;
}
.carrouselCat {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1000px;
    flex-wrap: wrap;
}
.categorias{
    width: 240px;
    height: 145px;
    margin: 3px;
    background: rgb(114, 114, 114);
    border-radius: 15px;
    transition: .3s;
}

.categorias:hover {
    transform: scale(1.1);
}
.categoria {
    position: relative;
}

.categoria:before {
  content: ' ';
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.3;
  border-radius: 15px;
  background-image: url('../assets/categorias/hamburguer.webp');
  background-repeat: no-repeat;
  background-position: 50% 0;
  background-size: cover;
}

.cat-restaurante {
  position: relative;
  height: 145px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
}
.cat-restaurante h3 {
    font-weight: bold;
    color: white;
}

.cards {
    width: 1000px;
    margin: 50px;
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