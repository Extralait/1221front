<template>
  <div class="navbar-container">
    <div class="navbar"
         v-bind:class="{'zero-height':!is_active}"
    >
      <div class="log-container">
        <BaseTitle
            :classObject="{black:true}"
            v-if="!is_auth"
            text="sign in"
            route="#sign_in"
        />
        <BaseTitle
            :classObject="{black:true}"
            v-if="!is_auth"
            text="sign up"
            route="#sign_up"
        />
        <BaseTitle
            :classObject="{black:true}"
            v-if="is_auth"
            :text="'Log\u00A0out'"
            route="#log_out"
        />
      </div>
    </div>
    <span class="toggle"
          @click="is_active=!is_active"
    >☰</span>
  </div>
</template>

<script>
import BaseTitle from "@/components/base/base_text/BaseTitle";
import {mapActions} from "vuex";
import {HTTP} from "../../api/common";

export default {
  name: "Navbar",
  props: [
    'is_auth'
  ],
  components: {
    BaseTitle
  },

  data() {
    return {
      is_active: false
    }
  },
  methods: {
    ...mapActions(['logout','setFiles']),
    // eslint-disable-next-line no-unused-vars
    onResize(event) {
      if (window.innerWidth > 720) {
        this.is_active = false
      }
    },
    postFile: function (event){
      const file = event.target.files[0]
      let formData = new FormData()
      formData.append("file_object", file)
      let setFiles = this.setFiles
      HTTP({
        method: "post",
        url: "http://localhost:8000/api/processed-files/",
        data: formData,
      })
          .then(async function (response) {
            //handle success
            await setFiles()
            console.log(response);
          })
          .catch(function (response) {
            //handle error
            console.log(response);
          })
    },
  },
  mounted() {
    window.addEventListener('resize', this.onResize)
    this.onResize()
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  },


}
</script>

<style scoped>
/*.navbar {*/
/*  height: 40px;*/
/*  width: 100%;*/
/*  background-color: white;*/
/*  display: flex;*/
/*  justify-content: space-between;*/
/*  align-items: center;*/
/*}*/

/*.navbar a, .navbar button {*/
/*  color: white;*/
/*  margin: 1%;*/
/*  transition: all 0.3s*/
/*}*/

/*.navbar-container{*/
/*  overflow: hidden*/
/*}*/

/*.navbar button {*/
/*  padding-right: 25px;*/
/*}*/

/*.log-container {*/
/*  display: flex;*/
/*  flex-direction: row;*/
/*}*/

/*.log-container a, .log-container p {*/
/*  width: 180px;*/
/*}*/

.log-container a:first-child{
  margin-right: 20px;
}

.toggle, #menu-checkbox {
  display: none;
}


</style>