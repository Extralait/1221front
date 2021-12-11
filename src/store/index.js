import Vue from 'vue'
import Vuex from 'vuex'
import auth from "./modulse/auth";
import  email_messages from "./modulse/email_messages";

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        auth,
        email_messages
    }
})