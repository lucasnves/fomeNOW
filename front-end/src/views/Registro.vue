<template>
  <div>
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
            <label for="nome"><p>Nome</p></label>
            <input type="text" name="nome" id="nome" placeholder="Lucas Neves" v-model="$v.form.name.$model" :class="{ 'error': $v.form.name.$error }">
            <p v-if=" $v.form.name.$error && (this.form.name).length == 0" class="error-p"><small>Campo obrigatório!</small></p>
            <p v-if=" (this.form.name).length < 3 && (this.form.name).length != 0" class="error-p"><small>É necessário mais de 3 caracteres!</small></p>
          </div>
          <div class="info-container">
            <label for="celular"><p>Celular</p></label>
            <input type="text" name="celular" id="celular" placeholder="(37)99976-8923" v-model="$v.form.celular.$model" :class="{ 'error': $v.form.celular.$error }">
            <p v-if=" $v.form.celular.$error && (this.form.celular).length == 0" class="error-p"><small>Campo obrigatório!</small></p>
            <p v-if=" (this.form.celular).length < 11 && (this.form.celular).length != 0" class="error-p"><small>É necessário mais de 11 caracteres!</small></p>
          </div>
          <div class="info-container">
            <label for="cpf"><p>CPF</p></label>
            <input type="text" name="cpf" id="cpf" placeholder="CPF" v-model="$v.form.cpf.$model" :class="{ 'error': $v.form.cpf.$error }">
            <p v-if=" $v.form.cpf.$error && (this.form.cpf).length == 0" class="error-p"><small>Campo obrigatório!</small></p>
            <p v-if=" (this.form.cpf).length < 11 && (this.form.cpf).length != 0" class="error-p"><small>É necessário mais de 11 caracteres!</small></p>
          </div>
          <div class="info-container">
            <label for="email"><p>Email</p></label>
            <input type="email" name="email" id="email" placeholder="lucas.gabriel@gmail.com" v-model="$v.form.email.$model" :class="{ 'error': $v.form.email.$error }">
            <p v-if=" $v.form.email.$error && (this.form.email).length == 0" class="error-p"><small>Campo obrigatório!</small></p>
            <p v-if=" $v.form.email.$error && (this.form.email).length > 0" class="error-p"><small>Formato de email incorreto!</small></p>
          </div>
          <div class="info-container">
            <label for="password"><p>Senha</p></label>
            <input type="password" name="password" id="password" placeholder="•••••••••••" v-model="$v.form.password.$model" :class="{ 'error': $v.form.password.$error }">
            <p v-if=" $v.form.password.$error && (this.form.password).length == 0" class="error-p"><small>Campo obrigatório!</small></p>
            <p v-if=" (this.form.password).length < 6 && (this.form.password).length != 0" class="error-p"><small>É necessário mais de 6 caracteres!</small></p>
          </div>
          <div class="info-container">
            <label for="passwordConfirm"><p>Confirme a senha</p></label>
            <input type="password" name="passwordConfirm" id="passwordConfirm" placeholder="•••••••••••" v-model="$v.form.passwordConfirm.$model" :class="{ 'error': $v.form.passwordConfirm.$error }">
            <p v-if=" $v.form.passwordConfirm.$error && (this.form.passwordConfirm).length == 0" class="error-p"><small>Campo obrigatório!</small></p>
            <p v-if=" $v.form.passwordConfirm.$error && (this.form.passwordConfirm).length > 0" class="error-p"><small>Senhas diferentes!</small></p>
          </div>

          <div class="info-container">
            <b-button
              type="button"
              block
              class="mb-2 mt-2"
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
  </div>
</template>

<script>
import { required, minLength, email, sameAs } from "vuelidate/lib/validators";

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
  validations: {
    form: {
      name: { required, minLength: minLength(3) },
      celular: { required, minLength: minLength(11) },
      cpf: { required, minLength: minLength(11) },
      email: { required, email },
      password: { required, minLength: minLength(6) },
      passwordConfirm: { required, sameAsPassword: sameAs('password') },
    }
  },
  methods: {
    async cadastrar() {
      
      this.$v.form.$touch();
      if (this.$v.$invalid) return;

      const data = {
        nome: this.form.name,
        celular: this.form.celular,
        cpf: this.form.cpf,
        email: this.form.email,
        senha: this.form.password,
        senhaConfirmar: this.form.passwordConfirm
      }

      //transforma os dados em uma string para mandar para o banco
      const data_string = JSON.stringify(data);

      //salvando no banco
      const req = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: data_string
      });

      //enviando a rota para login
      this.$router.push({ name: 'login' });
    },
    getValidation(field) {
      if(this.$v.form.$dirty === false) {
        return null;
      }

      return !this.$v.form[field].$error;
    },
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
  input {
    padding: 4px;
    border-radius: 7px;
    border: 1px solid rgb(161, 161, 161);
    outline: none;
  }
  .error {
    border: 1.5px solid rgb(209, 13, 13);
  }
  .error-p {
    color: rgb(209, 13, 13);
  }
</style>