<template>
  <b-row class="vh-100 vw-100 cont">
    <b-col sm="4" class="left-login">
      <form id="form-login">
        <div class="login-titulo">
          <h1>Faça seu login</h1>
        </div>
        <div class="info-container">
          <label for="email"><p>Email</p></label>
          <input type="email" name="email" id="email" placeholder="lucas.gabriel@gmail.com" v-model="form.email">
        </div>
        <div class="info-container">
          <label for="password" class="d-flex justify-content-between"
          > <p>Senha</p> <small><a href="#">Esqueceu a senha?</a></small>
          </label>
          <input type="password" name="password" id="password" placeholder="•••••••••••" v-model="form.password">
        </div>

        <div class="info-container">
          <b-button
            type="button"
            block
            class="mb-2"
            @click="login"
          >Entrar
          </b-button>
          <b-button
            type="button"
            block
            to="/registro"
          >Não tem conta?
          </b-button>
        </div>
      </form>
    </b-col>

    <b-col sm="8" class="right-login">
      <h1>IMAGEM</h1>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      form: {
        email: "",
        password: ""
      }
    }
  },
  methods: {
    async login() {
      this.$router.push({ name: 'inicio '});
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
  .left-login {
    background-color: rgb(216, 216, 216);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .login-titulo {
    font-weight: bold;
    margin-bottom: 10px;
  }
  .info-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 8px;
  }
  .right-login {
    background: rgb(64, 94, 94);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #form-login {
    width: 300px;
  }
</style>