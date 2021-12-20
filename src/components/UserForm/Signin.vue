<template>
  <div class="flex-centred-col">

    <form class="card" @submit.prevent="submit">

      <h3 v-if="error">{{error}}</h3>

      <div class="form-control" :class="{invalid: !form.email.valid && form.email.touched}">
        <label for="email">Email</label>

        <div class="input-container">
          <i class="fa fa-envelope icon within-input" ></i>
          <input type="email" id="email" v-model="form.email.value" @blur="form.email.blur">
        </div>

        <div class="small-wrapper">
          <small v-if="form.email.touched && form.email.errors.required">Please enter your email.</small>
        </div>

      </div>

      <div class="form-control" :class="{invalid: !form.password.valid && form.password.touched}">
        <label for="password">Password</label>

        <div class="input-container">
          <i class="fa fa-key icon within-input"></i>
          <input type="password" id="password" v-model="form.password.value" @blur="form.password.blur">
        </div>

        <div class="small-wrapper">
          <small v-if="form.password.touched && form.password.errors.required">Please enter your password.</small>
        </div>
      </div>


      <button class="btn primary" type="submit" :disabled="!form.valid">Submit</button>
    </form>

  </div>

</template>

<script>
import { ref, onErrorCaptured } from 'vue'
import { useForm } from './UserFormHooks/useForm'
import { required } from '@/helpers/validators'

export default {
  setup() {
    const submitted = ref(false)
    const error = ref()

    const { form, isFormValid, resetForm } = useForm({
      email: {
        value: '',
        validators: { required }
      },
      password: {
        value: '',
        validators: {required }
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
