<template>
  <div class="flex-centred-col">

    <form class="card" @submit.prevent="handleLogin">

      <h3 v-if="error">{{error}}</h3>

      <div class="form-control" :class="{invalid: !form.login.valid && form.login.touched}">
        <label for="login" >Login</label>
        <div class="input-container">
          <i class="fas fa-user icon within-input"></i>
          <input type="text" id="login" v-model="form.login.value" @blur="form.login.blur">
        </div>

        <div class="small-wrapper">
          <small v-if="form.login.touched && form.login.errors.required">Please enter your login.</small>
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
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  setup() {
    const submitted = ref(false)
    const error = ref()

    const { form, isFormValid, resetForm } = useForm({
      login: {
        value: '',
        validators: { required }
      },
      password: {
        value: '',
        validators: {required }
      }
    })

    const message = ref('')
    const successful = ref(false)
    const loading = ref(true)
    const store = useStore()
    const router = useRouter()

    async function handleLogin() {
      console.log('Login:', form.login.value, '\nPassword:', form.password.value)

      loading.value = true

      try {
        const response = await store.dispatch('auth/login', {
          login: form.login.value,
          password: form.password.value,
        })
        message.value = response.message
        successful.value = true
        submitted.value = true
        //console.log(response)
        await router.push("/")
      } catch (error) {
        message.value =
            (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString()
        successful.value = false
      } finally {
        loading.value = false
        /*console.log('signin!\nsubmitted: ', submitted.value,
            '| success: ', successful.value,
            '| message: ', message.value)*/
      }
    }

    onErrorCaptured(e => {
      error.value = e.message
    })

    return {
      form,
      isFormValid,
      resetForm ,
      handleLogin,
      submitted,
      error }
  },

}
</script>
<style lang="scss">
//@import "../../styles/user-form-styles.scss";

</style>
