<template>
  <div>
    <b-row class="vh-100 vw-100 cont">
      <b-col sm="8" class="left-registro">
        <h1>IMAGEM</h1>
      </b-col>

      <b-col sm="4" class="right-registro">
        <form id="form-login" @submit="cadastrar">
          <div class="registro-titulo">
            <h1>Faça o cadastro</h1>
          </div>
          <div class="info-container">
            <label for="nome"><p>Nome</p></label>
            <input type="text" name="nome" id="nome" placeholder="Lucas Neves" v-model="form.name">
          </div>
          <div class="info-container">
            <label for="celular"><p>Celular</p></label>
            <input type="text" name="celular" id="celular" placeholder="(37)99976-8923" v-model="form.celular">
          </div>
          <div class="info-container">
            <label for="cpf"><p>CPF</p></label>
            <input type="text" name="cpf" id="cpf" placeholder="CPF" v-model="form.cpf">
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
              type="submit"
              block
              class="mb-2"
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
    async cadastrar(e) {
      e.preventDefault();

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