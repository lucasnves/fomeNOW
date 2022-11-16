<template>
    <div class="container-vRestaurante">
        <NavBar/>
        <div class="container-vRestaurante-comeco">
            <div class="vRestaurante-banner">
                <h1>Faça seu pedido</h1>
            </div>
            <div class="vRestaurante-infos">
                <div class="vRestaurante-infos-rest">
                    <p></p>
                    <div class="vRestaurante-infos-infostodos">
                        <div class="vRestaurante-infos-resta">
                            <h1>{{ restaurante.nome }}</h1>
                            <div class="vRestaurante-infos-resta-estrela">
                                <span>{{ restaurante.estrelas }}</span>
                                <img src="@/assets/restaurantes-icon/estrela.png" alt="" />
                            </div>
                        </div>
                        <div>
                            <h3>{{ restaurante.descricao }}</h3>
                        </div>
                    </div>
                </div>
                <div class="vRestaurante-infos-rest2">
                    <a href=""><h5>Ver mais</h5></a>
                </div>
            </div>
        </div>
        <div class="container-vRestaurante-infos2">
            <div class="container-vRestaurante-info2">
                <div class="vRestaurante-infos2-pesquisa">
                    <input type="text" placeholder="Busque no cardápio">
                </div>
                <div class="vRestaurante-infos2-entrega">
                    <div class="vRestaurante-infos2-pegar">
                        <select name="frete" id="frete">
                            <option value="">Entrega</option>
                            <option value="">Retirada</option>
                        </select>
                    </div>
                    <div class="vRestaurante-infos2-delivery">
                        <h2>Delivery</h2>
                        <span>{{ restaurante.duracao_comida }} • {{ restaurante.taxa_entrega }}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-vRestaurante-comidas">
            <div class="vRestaurante-comida">
                <div v-for="(comida) in comidas" :key="comida.id_comida">
                    <b-card class="vRestaurante-card" @click="pedirComida(comida.id_comida-1)">
                        <div class="vRestaurante-card-infos">
                            <div>
                                <h1>{{comida.nome_comida}}</h1>
                                <h2>{{comida.descricao_comida}}</h2>
                                <h3>{{comida.preco_comida}}</h3>
                            </div>
                        </div>
                    </b-card>    
                </div>
            </div>
        </div>

        <!-- http://localhost:3000/restaurantes?q=Alfa -->

        <b-modal centered size="xl" ref="modalComida" hide-footer :title='restaurante.nome' >
            <div class="d-flex justify-content-space">
                <div>
                    <img src="@/assets/semimagem.png" alt="" style="width: 500px" />
                </div>
                <div class="vRestaurante-modal-infos">
                    <div class="vRestaurante-modal-info">
                        <h1>{{ comida.nome_comida }}</h1>
                        <h3>{{ restaurante.duracao_comida }} • <span>{{ restaurante.taxa_entrega }}</span></h3>
                        <h2>{{ comida.descricao_comida }}</h2>
                    </div>
                    <div class="vRestaurante-modal-botoes">
                        <b-button variant="outline-secondary" style="margin-right: 8px" @click="hideModal">Voltar</b-button>
                        <b-button class="vRestaurante-modal-confirmar" @click="">Adicionar  {{ comida.preco_comida }}</b-button>
                    </div>
                </div>
            </div>
        </b-modal>
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
            restaurante: [],
            comidas: [],
            comida: [],
        }
    },
    async created() {
        if(this.$route.params.restId) {
            this.restaurante = await this.getRestaurante(this.$route.params.restId);
        } else {
            let pegarRest = localStorage.getItem('restaurante');
            let rest = JSON.parse(pegarRest);
            this.restaurante = rest[0];
        }
        this.comidas = this.restaurante.comidas;
    },
    methods: {
        async getRestaurante(id) {
            const req = await fetch(`http://localhost:3000/restaurantes/?id=${id}`, {
                method: "GET",
            });

            const res = await req.json();
            localStorage.setItem('restaurante', JSON.stringify(res));
            return res[0];
        },
        async pedirComida(id) {
            this.comida = this.comidas[id];
            this.$refs.modalComida.show();
        },
        hideModal() {
            this.$refs.modalComida.hide();
        }
    }
}
</script>

<style scoped>

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    text-decoration: none;
}
.container-vRestaurante-comeco {
    margin: 50px 190px 0 190px;
}

.vRestaurante-banner {
    background-image: url('../assets/semimagem.png');
    background-position: 0 -200px;
    background-size: cover;
    height: 270px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-radius: 10px;
}

.vRestaurante-banner h1 {
    color: #ffff;
    padding: 10px;
}
.vRestaurante-infos {
    display: flex;
    justify-content: space-between;
}
.vRestaurante-infos-rest {
    display: flex;
    position: relative;
    padding: 20px 0 0 0;
}
.vRestaurante-infos-rest p::before {
    content: "";
    position: absolute;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-image: url('../assets/semimagem.png');
    background-position: -17px -140px;
    background-size: cover;
}
.vRestaurante-infos-infostodos h3 {
    padding: 0 40px 0 90px;
    color: rgb(95, 95, 95);
    font-size: 16px;
}
.vRestaurante-infos-infostodos h2 {
    font-size: 12px;
}
.vRestaurante-infos-resta {
    display: flex;
    height: 70px;
    align-items: center;
    gap: 10px;
}
.vRestaurante-infos-resta-estrela {
    margin-top: 5px;
    background: rgb(231, 189, 3);
    border-radius: 4px;
    color: rgb(255, 255, 255);
    font-weight: 500;
    display: flex;
    align-items: center;
    padding: 2px 4px 2px 4px;
    margin-right: 2px;
    gap: 5px;
}
.vRestaurante-infos-resta-estrela img {
    filter: brightness(100);
    width: 15px;
    padding-bottom: 3px;
}
.vRestaurante-infos-rest h1 {
    margin-left: 90px;
}
.vRestaurante-infos-rest2 {
    display: flex;
    align-items: center;
    padding: 20px 0 0 0;
    width: 180px;
}
.vRestaurante-infos-rest2 h5 {
    font-weight: 500;
    color: #1C3879;
    outline: none;
    text-decoration: none;
}
.container-vRestaurante-infos2 {
    display: flex;
    justify-content: center;
    margin-top: 30px;
}
.container-vRestaurante-info2 {
    display: flex;
    justify-content: space-between;
    width: 73%;
}

.vRestaurante-infos2-entrega {
    display: flex;
    gap: 15px;
}
.vRestaurante-infos2-pesquisa {
    width: 65%;
}
.vRestaurante-infos2-pesquisa input {
    height: 65px;
    width: 80%;
    padding: 10px;
    border-radius: 3px;
    border: 1px solid rgb(175, 175, 175);
    outline: none;
}
.vRestaurante-infos2-pegar select {
    height: 65px;
    padding: 10px 20px 10px 20px;
    outline: none;
    border: 1px solid rgb(175, 175, 175);
    border-radius: 3px;
    font-size: 16px;
}
.vRestaurante-infos2-delivery {
    height: 65px;
    border: 1px solid rgb(175, 175, 175);
    padding: 10px 40px 10px 10px;
    border-radius: 3px;
}
.vRestaurante-infos2-delivery h2 {
    font-size: 16px;
}
.vRestaurante-infos2-delivery span {
    font-size: 12px;
}

.container-vRestaurante-comidas {
    display: flex;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 100px;
}

.vRestaurante-comida {
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    gap: 40px;
}
.vRestaurante-card {
    width: 480px;
    margin-left: 10%;
    transition: .4s;
    height: 160px;
}
.vRestaurante-card:hover {
    transform: scale(1.1);
    border: 1px solid rgb(73, 73, 73);
}
.vRestaurante-card-infos h1 {
    font-size: 20px;
    font-weight: bold;
    padding-bottom: 15px;
}

.vRestaurante-card-infos h2 {
    font-size: 14px;
    font-weight: 400;
    color: rgb(87, 87, 87);
    max-width: 70%;
    padding-bottom: 30px;
}

.vRestaurante-card-infos h3 {
    font-size: 14px;
    font-weight: 500;
    color: #50a773;
}
.vRestaurante-modal-infos {
    display: flex;
    align-items: center;
    flex-direction: column;
}

.vRestaurante-modal-info h1 {
    font-size: 24px;
    padding: 0px 20px 2px 20px;
}
.vRestaurante-modal-info h2 {
    font-size: 16px;
    padding: 0px 20px;
    color: rgb(87, 87, 87);
}
.vRestaurante-modal-info h3 {
    font-size: 14px;
    padding: 0px 20px 15px 20px;
    color: rgb(87, 87, 87);
}
.vRestaurante-modal-info span {
    color: #f1c01e;
}

.vRestaurante-modal-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.vRestaurante-modal-botoes {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    width: 100%;
    height: 100%;
}
.vRestaurante-modal-confirmar {
    background: transparent;
    color: #1C3879;
    border: 1px solid #1C3879;
}
.vRestaurante-modal-confirmar:hover {
    background: #1C3879;
    color: white;
}

</style>