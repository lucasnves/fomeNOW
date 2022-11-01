<template>
  <b-row class="vh-100 vw-100 cont">
    <b-col sm="8" class="left-registro">
      <h1>IMAGEM</h1>
    </b-col>

    <b-col sm="4" class="right-registro">
      <form id="form-login">
        <div class="registro-titulo">
          <h1>Faça o cadastro</h1>
        </div>
        <div class="info-container">
          <label for="name"><p>Nome</p></label>
          <input type="text" name="name" id="name" placeholder="Lucas Neves" v-model="form.name">
        </div>
        <div class="info-container">
          <label for="name"><p>Celular</p></label>
          <input type="text" name="name" id="name" placeholder="(37)99976-8923" v-model="form.celular">
        </div>
        <div class="info-container">
          <label for="name"><p>CPF</p></label>
          <input type="text" name="name" id="name" placeholder="CPF" v-model="form.cpf">
        </div>
        <div class="info-container">
          <label for="email"><p>Email</p></label>
          <input type="email" name="email" id="email" placeholder="lucas.gabriel@gmail.com" v-model="form.email">
        </div>
        <div class="info-container">
          <label for="password"><p>Senha</p></label>
          <input type="password" name="password" id="password" placeholder="•••••••••••" v-model="form.password">
        </div>
        <div class="info-container">
          <label for="passwordConfirm"><p>Confirme a senha</p></label>
          <input type="password" name="passwordConfirm" id="passwordConfirm" placeholder="•••••••••••" v-model="form.passwordConfirm">
        </div>

        <div class="info-container">
          <b-button
            type="button"
            block
            class="mb-2"
            @click="cadastrar"
          >Confirmar
          </b-button>
          <b-button
            type="button"
            block
            to="/login"
          >Voltar
          </b-button>
        </div>

      </form>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: 'Registro',
  data() {
    return {
      form: {
        name: "",
        celular: "",
        cpf: "",
        email: "",
        password: "",
        passwordConfirm: "",
      }
    }
  },
  methods: {
    cadastrar() {
      this.$router.push({ name: 'login' });
    }
  }
}
</script>

<style scoped>
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    text-decoration: none;
  }
  .cont {
    margin-left: 0;
  }
  .right-registro {
    background-color: rgb(216, 216, 216);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .registro-titulo {
    font-weight: bold;
    margin-bottom: 10px;
  }
  .info-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 8px;
  }
  .left-registro {
    background: rgb(64, 94, 72);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #form-login {
    width: 310px;
  }
</style>