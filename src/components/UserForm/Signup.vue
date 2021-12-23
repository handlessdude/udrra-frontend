<template>
  <div class="flex-centred-col">

    <form class="card" @submit.prevent="handleRegister">

      <h3 v-if="error">{{error}}</h3>

      <div class="flex-centred-row">

        <div class="flex-centred-col">
          <div class="form-control" :class="{invalid: !form.login.valid && form.login.touched}">
            <label for="login" >Login</label>
            <div class="input-container">
              <i class="fas fa-user icon within-input"></i>
              <input type="text" id="login" v-model="form.login.value" @blur="form.login.blur">
            </div>

            <div class="small-wrapper">
              <small v-if="form.login.touched && form.login.errors.required">
                Login field is required
              </small>
              <small v-else-if="form.login.touched && form.login.errors.minLength">
                Login length can't be less then 4. Now it is {{form.login.value.length}}.
              </small>
            </div>
          </div>

          <div class="form-control" :class="{invalid: !form.email.valid && form.email.touched}">
            <label for="email" >Email</label>
            <div class="input-container">
              <i class="fa fa-envelope icon within-input" ></i>
              <input type="email" id="email" v-model="form.email.value" @blur="form.email.blur">
            </div>

            <div class="small-wrapper">
              <small v-if="form.email.touched && form.email.errors.required">
                Email field is required
              </small>
              <small v-else-if="form.email.touched && form.email.errors.strIsEmail">
                Incorrect email format.
              </small>
            </div>

          </div>
        </div>

        <div class="flex-centred-col">
          <div class="form-control" :class="{invalid: !form.first_name.valid && form.first_name.touched}">
            <label for="first_name" >First name</label>
            <div class="input-container">
<!--              <i class="fas fa-user icon within-input"></i>-->
              <div class="within-input"></div>
              <input type="text" id="first_name" v-model="form.first_name.value" @blur="form.first_name.blur">
            </div>

            <div class="small-wrapper">
              <small v-if="form.first_name.touched && form.first_name.errors.required">
                First name field is required
              </small>
            </div>
          </div>

          <div class="form-control" :class="{invalid: !form.second_name.valid && form.second_name.touched}">
            <label for="second_name" >Second name</label>
            <div class="input-container">
<!--              <i class="fas fa-user icon within-input"></i>-->
              <div class="within-input"></div>
              <input type="text" id="second_name" v-model="form.second_name.value" @blur="form.second_name.blur">
            </div>

            <div class="small-wrapper">
              <small v-if="form.second_name.touched && form.second_name.errors.required">
                Second name field is required
              </small>
            </div>
          </div>
        </div>

      </div>

      <div class="form-control" :class="{invalid: !form.password.valid && form.password.touched}">
        <label for="password">Password</label>

        <div class="input-container">
          <i class="fa fa-key icon within-input"></i>
          <input type="password" id="password" v-model="form.password.value" @blur="form.password.blur">
        </div>

        <div class="small-wrapper">
          <small v-if="form.password.touched && form.password.errors.required">Password field is required</small>
          <small v-else-if="form.password.touched && form.password.errors.minLength">
            Password length can't be less then 8. Now it is {{form.password.value.length}}.
          </small>
        </div>

        <div class="input-container">
          <!-- lol -->
          <i class="fa fa-key icon within-input" style="visibility: hidden;"></i>
          <input type="password" v-model="password2" @blur="form.password.blur">
        </div>

        <div class="small-wrapper">
          <small v-if="form.password.touched && !(form.password.value===password2)">
            Passwords do not match.
          </small>
        </div>

      </div>


      <button class="btn primary" type="submit" :disabled="!form.valid || !(form.password.value===password2)">Submit</button>
    </form>

  </div>

</template>

<script>
import { ref, onErrorCaptured } from 'vue'
import { useForm } from './UserFormHooks/useForm'
import { required, minLength, strIsEmail } from '@/helpers/validators'
import { useStore } from 'vuex'
import {useRouter} from "vue-router";

export default {
  setup() {
    const submitted = ref(false)
    const error = ref()

    const password2 = ref('')

    const { form, isFormValid, resetForm } = useForm({
      login: {
        value: '',
        validators: { required, minLength: minLength(4)}
      },
      email: {
        value: '',
        validators: { required, strIsEmail }
      },
      first_name: {
        value: '',
        validators: { required }
      },
      second_name: {
        value: '',
        validators: { required }
      },
      password: {
        value: '',
        validators: {required, minLength: minLength(3)}
      }
    })

    const message = ref('')
    const successful = ref(false)
    const loading = ref(true)
    const store = useStore()
    const router = useRouter()

    async function handleRegister() {
      console.log('Email: ', form.email.value, '\nPassword: ', form.password.value)
      try {
        const response = await store.dispatch('auth/register', {
          login: form.login.value,
          email: form.email.value,
          first_name: form.first_name.value,
          second_name: form.second_name.value,
          password: form.password.value
        })

        message.value = response.message
        successful.value = response.success
        submitted.value = true

        const authResponse = await store.dispatch("auth/login", {
          login: form.login.value,
          password: form.password.value
        })

        message.value = authResponse.message
        successful.value = authResponse.success
        await router.push("/tracks")
      } catch (error) {
        message.value =
            (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString()
        successful.value = false
      } finally {
        loading.value = false
        console.log('signup!\nsubmitted: ', submitted.value,
                    '| success: ', successful.value,
                    '| message: ', message.value)
      }

    }

    onErrorCaptured(e => {
      error.value = e.message
    })

    return { form,
             password2,
             isFormValid,
             resetForm ,
             handleRegister,
             submitted,
             error }
  },
}
</script>
<style lang="scss">
.input-container {
  display: flex;
  width: 100%;
}

//TODO, MAKE ICONS HAVE WHITE BACKGROUND
.within-input {
  padding: 10px 10px 10px 0;
  min-width: 50px;
  min-height: 1em;
  text-align: center;
}

</style>
