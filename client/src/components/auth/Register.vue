<template>
  <div>
    <h1>Register</h1>

    <input v-model="email" type="email" name="email" placeholder="Email">
    <input v-model="password" type="password" name="password" placeholder="Password">
    <button @click="register">Register</button>
    
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async register () {
      await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
    }
  }
}
</script>

<style>

</style>


