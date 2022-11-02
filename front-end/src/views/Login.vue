<template>
  <b-row class="vh-100 vw-100 cont">
    <b-col sm="4" class="left-login">
      <form id="form-login">
        <div class="login-titulo">
          <h1>Faça seu login</h1>
        </div>
        <div class="info-container">
          <label for="email"><p>Email</p></label>
          <input type="email" name="email" id="email" placeholder="Digite seu email" v-model.trim="$v.form.email.$model" :class="{ 'error': $v.form.email.$error }">
          <p v-if=" $v.form.email.$error && (this.form.email).length > 0" class="error-p"><small>Digite o email corretamente!</small></p>
        </div>
        <div class="info-container">
          <label for="password" class="d-flex justify-content-between"
          > <p>Senha</p> <small><a href="#">Esqueceu a senha?</a></small>
          </label>
          <input type="password" name="password" id="password" placeholder="•••••••••••" v-model.trim="$v.form.password.$model" :class="{ 'error': $v.form.password.$error }">
          <p v-if=" (this.form.password).length < 6 && (this.form.password).length != 0" class="error-p"><small>É necessário mais de 6 caracteres!</small></p>
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
import { required, minLength, email } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      form: {
        email: "",
        password: ""
      }
    }
  },
  validations: {
    form: {
      email: { required, email },
      password: { required, minLength: minLength(6) }
    }
  },
  methods: {
    async login() {
      this.$v.form.$touch();
      if (this.$v.$invalid) return;

      //pegando email para verificação de existencia
      const req = await fetch(`http://localhost:3000/users/?email=${this.form.email}`, {
        method: "GET",
      });
      const user = await req.json();

      if(!user || !user[0] || !user[0].email){
        this.limparInput();
        return;
      }

      //verificando se a senha é a mesma digitada.
      if(user[0].senha !== this.form.password){
        this.limparInput();
        return;
      }

      localStorage.setItem('authUser', JSON.stringify(user));
      this.$router.push({ name: 'inicio' });
    },
    limparInput() {
      this.form = {
        email: "",
        password: ""
      }
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
  input {
    padding: 4px;
    border-radius: 7px;
    border: 1px solid rgb(161, 161, 161);
    outline: none;
  }
  .error {
    border: 1.7px solid rgb(247, 48, 48);
  }
  .error-p {
    color: rgb(247, 48, 48);
  }
</style>