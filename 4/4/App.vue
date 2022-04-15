<template>
  <div class="my-app">
    <b-container>
      <b-row>
        <b-col sm="6">
          <h2>Rejestracja</h2>
          <b-form
            @submit="submit($event, 'register')"
            @reset="reset($event, 'register')"
          >
            <b-form-group label="Adres email:" label-for="mail">
              <b-form-input
                id="mail"
                type="email"
                v-model.trim="register.email"
                @input="$v.register.email.$model = $event.trim()"
                :state="
                  !$v.register.email.$dirty ? null : !$v.register.email.$error
                "
                placeholder="Wpisz email"
              />
              <b-form-invalid-feedback>
                <p v-if="!$v.register.email.required">To pole jest wymagane!</p>
                <p v-if="!$v.register.email.email">Niepoprawny adres email!</p>
              </b-form-invalid-feedback>
              <b-form-valid-feedback>
                Wszystko jest okej!
              </b-form-valid-feedback>
            </b-form-group>

            <b-form-group label="Nazwa użytkownika:" label-for="name">
              <b-form-input
                id="name"
                type="text"
                v-model.trim="register.name"
                @input="$v.register.name.$model = $event.trim()"
                :state="
                  !$v.register.name.$dirty ? null : !$v.register.name.$error
                "
                placeholder="Wpisz nazwę użytkownika"
              />
              <b-form-invalid-feedback>
                <p v-if="!$v.register.name.required">To pole jest wymagane!</p>
                <p v-if="!$v.register.name.minLength">
                  Nazwa użytkownika musi się składać z conajmniej 5 znaków!
                </p>
              </b-form-invalid-feedback>
              <b-form-valid-feedback>
                Wszystko jest okej!
              </b-form-valid-feedback>
            </b-form-group>

            <b-form-group label="Hasło:" label-for="password">
              <b-form-input
                id="password"
                type="password"
                v-model="register.password"
                @input="$v.register.password.$model = $event"
                :state="
                  !$v.register.password.$dirty
                    ? null
                    : !$v.register.password.$error
                "
                placeholder="Wpisz hasło"
              />
              <b-form-invalid-feedback>
                <p v-if="!$v.register.password.required">
                  To pole jest wymagane!
                </p>
                <p v-if="!$v.register.password.minLength">
                  Hasło musi się składać z conajmniej 8 znaków!
                </p>
              </b-form-invalid-feedback>
              <b-form-valid-feedback>
                Wszystko jest okej!
              </b-form-valid-feedback>
            </b-form-group>

            <b-form-group label="Powtórz hasło:" label-for="repeat_password">
              <b-form-input
                id="repeat_password"
                type="password"
                v-model="register.repeat_password"
                @input="$v.register.repeat_password.$model = $event"
                :state="
                  !$v.register.repeat_password.$dirty
                    ? null
                    : !$v.register.repeat_password.$error
                "
                placeholder="Wpisz hasło"
              />
              <b-form-invalid-feedback>
                <p v-if="!$v.register.repeat_password.sameasPassword">
                  Hasła nie są takie same!
                </p>
              </b-form-invalid-feedback>
              <b-form-valid-feedback>
                Wszystko jest okej!
              </b-form-valid-feedback>
            </b-form-group>

            <b-button type="submit" variant="primary">Wyślij</b-button> &nbsp;
            <b-button type="reset" variant="danger">Resetuj</b-button>
          </b-form>
        </b-col>

        <b-col sm="6">
          <h2>Logowanie</h2>
          <b-form
            @submit="submit($event, 'login')"
            @reset="reset($event, 'login')"
          >
            <b-form-group label="Adres email:" label-for="login_mail">
              <b-form-input
                id="login_mail"
                type="email"
                v-model.trim="login.email"
                @input="$v.login.email.$model = $event.trim()"
                :state="!$v.login.email.$dirty ? null : !$v.login.email.$error"
                placeholder="Wpisz email"
              />
              <b-form-invalid-feedback>
                <p v-if="!$v.login.email.required">To pole jest wymagane!</p>
                <p v-if="!$v.login.email.email">Niepoprawny adres email!</p>
              </b-form-invalid-feedback>
              <b-form-valid-feedback>
                Wszystko jest okej!
              </b-form-valid-feedback>
            </b-form-group>

            <b-form-group label="Hasło:" label-for="login_password">
              <b-form-input
                id="login_password"
                type="password"
                v-model="login.password"
                @input="$v.login.password.$model = $event"
                :state="
                  !$v.login.password.$dirty ? null : !$v.login.password.$error
                "
                placeholder="Wpisz hasło"
              />
              <b-form-invalid-feedback>
                <p v-if="!$v.login.password.required">To pole jest wymagane!</p>
                <p v-if="!$v.login.password.minLength">
                  Hasło musi się składać z conajmniej 8 znaków!
                </p>
              </b-form-invalid-feedback>
              <b-form-valid-feedback>
                Wszystko jest okej!
              </b-form-valid-feedback>
            </b-form-group>

            <b-button type="submit" variant="primary">Wyślij</b-button> &nbsp;
            <b-button type="reset" variant="danger">Resetuj</b-button>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { required, minLength, email, sameAs } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      register: {
        name: "",
        email: "",
        password: "",
        repeat_password: "",
      },
      login: {
        name: "",
        email: "",
        password: "",
        repeat_password: "",
      },
    };
  },
  validations: {
    register: {
      name: {
        required,
        minLength: minLength(5),
      },
      email: {
        required,
        email,
      },
      password: {
        required,
        minLength: minLength(8),
      },
      repeat_password: {
        sameAsPassword: sameAs("password"),
      },
    },
    login: {
      email: {
        required,
        email,
      },
      password: {
        required,
        minLength: minLength(8),
      },
    },
  },
  methods: {
    submit(event, form) {
      event.preventDefault();
      this.$v[form].$touch();
      if (this.$v[form].$invalid) {
        alert("Błąd!");
      } else {
        alert("Wysłano!");
      }
    },
    reset(event, form) {
      event.preventDefault();
      this.name = "";
      this.email = "";
      this.password = "";

      this.$v[form].$reset();
    },
  },
};
</script>

<style>
.my-app {
  padding: 50px 0;
}

/* Fade transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>