<template>
  <div id="app">
    <RegPopup
        style="z-index: 10005"
        v-if="regPopupHashes.includes($route.hash)"
    />
    <VerNav
        :is_auth="getAuth.is_auth"
        :email="getAuth.user.email"
    />
    <router-view
        v-if="!loading"
        :is_auth="getAuth.is_auth"
    />
  </div>
</template>

<script>

import RegPopup from "@/components/common/RegPopup";
import VerNav from "@/components/common/VerNav";
import {mapActions, mapGetters} from "vuex";
import {HTTP} from "@/api/common";


export default {
  name: 'App',
  components: {
    RegPopup,VerNav
  },
  data() {
    return {
      loading: true,
      is_portfolio_emit: false,
      is_waiting_started: false,
      regPopupHashes: [
        '#sign_in',
        '#sign_up',
        '#reset_password',
        '#reset_password_confirmation',
        '#log_out',
        '#account_activation',
        '#api_key_change'
      ],
      reloadDataCounter: 0
    }
  },
  methods: {
    ...mapActions(['verifyToken', 'setEmailMessages','activation', 'authorization', 'logout', 'setUser', 'createUser','setEmailMessages']),
  },
  computed: {
    ...mapGetters(['getAuth']),
    is_auth: function () {
      return this.getAuth.is_auth
    },
  },
  async mounted() {
    let localStorageToken = localStorage.getItem('token')
    if (localStorageToken) {
      await this.verifyToken({"token": localStorageToken})
      if (!this.getAuth.errors.verifyError) {
        HTTP.defaults.headers.common['Authorization'] = 'JWT ' + localStorageToken
        await this.setUser()
        await this.setEmailMessages('?ordering=-created_at')
      }
    }
    this.loading = false
  },
}

</script>


<style>
</style>
