<template>
    <div class="container-vRestaurantes">
        <NavBar/>
        <div class="container-vRestaurantes-comeco">
            <div class="container-vRestaurantes-infos">
                <div class="vRestaurantes-comeco-text">
                    <h1>Categoria: </h1>
                    <h3>{{categoria.nome}}</h3>
                </div>
                <div class="vRestaurantes-comeco-pesquisa">
                    <input type="text" placeholder="Busque algo" id="nome" v-model="filtro.nome" autocomplete="off">
                    <button @click="filtrar">Buscar</button>
                </div>
            </div>
        </div>
        <div class="container-vRestaurantes-meio">
            <div class="vRestaurantes-meio-restaurantes">
                <div v-for="(restaurante) in restaurantes" :key="restaurante.id" v-show="catCerta(restaurante.categoria)">
                    <b-card class="vRestaurantes-meio-restaurante" @click="goToRestaurante(restaurante.id)">
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="vRestaurantes-meio-restaurante-titulo">{{restaurante.nome}}</div>
                            <span class="vRestaurantes-meio-restaurante-estrela">
                                {{restaurante.estrelas}} <img src="@/assets/restaurantes-icon/estrela.png" alt="">
                            </span>
                        </div>
                        <div class="vRestaurantes-meio-restaurante-infos">
                            <span> {{ restaurante.categoria }} • {{ restaurante.duracao_comida }} • {{ restaurante.taxa_entrega }} </span>
                        </div>
                        <div class="d-flex justify-content-between align-items-start">
                            <div class="vRestaurantes-meio-restaurante-desc"> {{restaurante.descricao}} </div>
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
            categoria: {
                nome: this.nome
            },
            restaurantes: [],
            filtro: {
                nome: null,
                categoria: null
            }
        }
    },
    async created() {
        this.restaurantes = await this.getRestaurantes();
        console.log(this.restaurantes);
        if(this.$route.params.catId){
            let cat = await this.getCategoria(this.$route.params.catId);
            this.categoria.nome = cat[0].nome;
        } else {
            let pegarCat = localStorage.getItem('categoria');
            let categ = JSON.parse(pegarCat);
            this.categoria.nome = categ[0].nome;
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

            const res = await req.json();
            localStorage.setItem('categoria', JSON.stringify(res));
            return res;
        },
        catCerta(id) {
            if(this.categoria.nome === id){
                return 1;
            }
            return 0;
        },
        goToRestaurante(restId) {
            this.$router.push({ name: 'restaurante', params: { restId } });
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
    font-family: 'Poppins', sans-serif;
}
.container-vRestaurantes-comeco {
    padding: 30px 0 0 0;
    display: flex;
    justify-content: center;
}
.container-vRestaurantes-infos {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 75%;
}
.container-vRestaurantes-botao button {
    font-size: 16px;
    font-weight: 500;
    padding: 7px 14px 7px 14px;
    border-radius: 10px;
    border: 2px solid #1C3879;
    color: #1C3879;
    transition: .4s;
}

.container-vRestaurantes-botao button:hover {
    background: #1C3879;
    color: white;
}

.vRestaurantes-comeco-text h1 {
    padding-right: 20px;
    font-weight: 500;
    font-size: 50px;
}
.vRestaurantes-comeco-text h3 {
    font-weight: 400;
    font-size: 36px;
}

.vRestaurantes-comeco-pesquisa input {
    border: 1px solid grey;
    border-radius: 2px;
    height: 40px;
    width: 250px;
    padding: 5px;
    outline: none;
}
.vRestaurantes-comeco-pesquisa button {
    width: 90px;
    height: 40px;
    font-weight: 500;
    border-radius: 3px;
    background: #1C3879;
    color: white;
    border: none;
    transition: .4s;
}
.vRestaurantes-comeco-pesquisa button:hover {
    background: white;
    border: 1px solid #1C3879;
    color: #1C3879;
}
.container-vRestaurantes-meio {
    margin-top: 30px;
    display: flex;
    justify-content: center;
}
.vRestaurantes-meio-restaurantes {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 75%;
}
.vRestaurantes-meio-restaurante {
    margin: 0 40px 15px 0;
    width: 370px;
    transition: .3s;
    border: 1px solid rgb(231, 231, 231);
    cursor: pointer;
}
.vRestaurantes-meio-restaurante:hover {
    transform: scale(1.1);
    border: 1px solid rgb(201, 201, 201);
}
.vRestaurantes-meio-restaurante-titulo {
    font-size: 20px;
    font-weight: 500;
}
.vRestaurantes-meio-restaurante-estrela {
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 400;
    color: rgb(231, 189, 3);
}
.vRestaurantes-meio-restaurante-estrela img {
    margin-left: 4px;
    width: 13px;
    padding-bottom: 3px;
}
.vRestaurantes-meio-restaurante-infos {
    font-size: 13px;
    color: rgb(61, 61, 61);
}
.vRestaurantes-meio-restaurante-desc {
    color: rgb(61, 61, 61);
    font-size: 14px;
}
</style>