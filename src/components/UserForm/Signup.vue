<template>
  <div class="flex-centred-col">

    <form class="card" @submit.prevent="submit">

      <h3 v-if="error">{{error}}</h3>

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
import {required, minLength, strIsEmail} from '@/helpers/validators'

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
      password: {
        value: '',
        validators: {required, minLength: minLength(8)}
      }
    })

    function submit() {
      console.log('Email: ', form.email.value, '\nPassword: ', form.password.value)
      submitted.value = true
    }

    onErrorCaptured(e => {
      error.value = e.message
    })

    return { form,
             password2,
             isFormValid,
             resetForm ,
             submit,
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
  text-align: center;
}

</style>
