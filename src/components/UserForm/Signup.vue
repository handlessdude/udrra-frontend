<template>
  <div class="flex-centred-col">

<!--    <pre>
      {{form}}
    </pre>-->

    <form class="card" @submit.prevent="submit">
      <h1>Sign up</h1>

      <h3 v-if="error">{{error}}</h3>

      <div class="form-control" :class="{invalid: !form.email.valid && form.email.touched}">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="form.email.value" @blur="form.email.blur">

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
        <input type="password" id="password" v-model="form.password.value" @blur="form.password.blur">
        <div class="small-wrapper">
          <small v-if="form.password.touched && form.password.errors.required">Password field is required</small>
          <small v-else-if="form.password.touched && form.password.errors.minLength">
            Password length can't be less then 8. Now it is {{form.password.value.length}}.
          </small>
        </div>
      </div>


      <button class="btn primary" type="submit" :disabled="!form.valid">Submit</button>
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

    const { form, isFormValid, resetForm } = useForm({
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
             isFormValid,
             resetForm ,
             submit,
             submitted,
             error }
  },
}
</script>
<style>

</style>
