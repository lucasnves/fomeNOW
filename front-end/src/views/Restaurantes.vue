<template>
    <div class="vw-100 container-todo">
        <NavBar/>
        <div class="sub-container">
            <div class="container-categoria">
                <button @click="voltar">Voltar</button>
                <div class="categoria-text">
                    <h1>Categoria: </h1>
                    <h3>{{categoria[0].nome}}</h3>
                </div>
                <div class="pesquisa">
                    <input type="text" placeholder="Busque algo" id="nome" v-model="filtro.nome" autocomplete="off">
                    <button @click="filtrar">Buscar</button>
                </div>
            </div>
        </div>
        <div class="sub-container2">
            <div class="restaurante-infos">
                <div v-for="(restaurante) in restaurantes" :key="restaurante.id" v-show="catCerta(restaurante.categoria)">
                    <b-card class="card-restaurante">
                        <div class="d-flex justify-content-between align-items-start">
                            <b-card-title class="mb-2 ml-5">{{restaurante.nome}}</b-card-title>
                            <span>
                                {{restaurante.estrelas}}
                            </span>
                        </div>
                        <div class="d-flex justify-content-between align-items-center">
                            <b-card-text class="desc-restaurante"><small>{{restaurante.descricao}}</small></b-card-text>
                            <button>Olhar cardapio</button>
                        </div>
                    </b-card>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';

export default {
    components: {
        NavBar
    },
    data() {
        return {
            categoria: [],
            restaurantes: [],
            filtro: {
                nome: null,
                categoria: null
            }
        }
    },
    async created() {
        this.restaurantes = await this.getRestaurantes();

        if(this.$route.params.catId){
            this.categoria = await this.getCategoria(this.$route.params.catId);
        }
    },
    methods: {
        async getRestaurantes(){
            const req = await fetch('http://localhost:3000/restaurantes', {
                method: "GET",
            });
            return await req.json();
        },
        async getCategoria(id) {
            const req = await fetch(`http://localhost:3000/categorias/?id=${id}`, {
                method: "GET",
            });
            return await req.json();
        },
        catCerta(id) {
            if(this.categoria[0].nome === id){
                return 1;
            }
            return 0;
        },
        voltar() {
            this.$router.push({ name: 'inicio' });
        },
        async filtrar() {
            let filtro = { ...this.filtro };
            const req = await fetch(`http://localhost:3000/restaurantes/?nome=${filtro.nome}`, {
                method: "GET",
            });
            const ss = await req.json();
            console.log(ss);
            this.restaurantes = await ss;
            console.log(this.restaurantes);
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
.sub-container {
    width: 100vw;
    display: flex;
    justify-content: center;
}
.container-categoria {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 60%;
}
.categoria-text {
    display: flex;
    align-items: center;
}

.pesquisa input {
    border: 1px solid grey;
    border-radius: 2px;
    margin: 10px;
    height: 40px;
    padding: 10px;
    width: 250px;
}
.pesquisa button {
    width: 90px;
    height: 40px;
}
.sub-container2 {
    width: 100vw;
    display: flex;
    justify-content: center;
    margin-top: 50px;
}
.card-restaurante {
    margin: 15px;
    width: 550px;
    transition: .3s;
    background: rgb(221, 221, 221);
}
.card-restaurante:hover {
    transform: scale(1.1);
}
.card-restaurante button:hover {
    background: red;
}
.desc-restaurante {
    width: 400px;
}
</style>