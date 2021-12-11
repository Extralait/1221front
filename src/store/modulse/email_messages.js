import {
    SET_EMAIL_MESSAGE, CREATE_EMAIL_MESSAGE
} from '../mutation-types'
import {EmailMessage} from "../../api/elements";


// Геттеры
export default {
    state: {
        email_messages: []
    },
    getters: {
        getEmails(state) {
            return state.email_messages
        }

    },
// Мутации
    mutations: {
        [SET_EMAIL_MESSAGE](state, email_messages) {
            state.email_messages = email_messages
        },
        [CREATE_EMAIL_MESSAGE](state, email_message) {
            state.email_messages = [email_message, ...state.email_messages]
        },
    },
// Действия
    actions: {
        async setEmailMessages({commit}, queryParams) {
            await EmailMessage.list(queryParams)
                .then(email_messages => {
                    commit(SET_EMAIL_MESSAGE, email_messages)
                }).catch((error) => {
                    console.log(error)
                })
        },
        async CreateMessage({commit}, email_messageData) {
            await EmailMessage.post(email_messageData)
                .then(email_message => {
                    commit(CREATE_EMAIL_MESSAGE, email_message)
                })
                .catch(err => {
                    console.log(err)
                })
        },

    },
}
