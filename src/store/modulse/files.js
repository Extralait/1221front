import {
    Files,
} from '@/api/elements'
import {
    SET_FILES
} from '../mutation-types'


// Геттеры
export default {
    state: {
        files:[]
    },
    getters: {
        getFiles(state) {
            return state.files
        }

    },
// Мутации
    mutations: {
        [SET_FILES](state, files) {
            state.files = files
        },
    },
// Действия
    actions: {
        async setFiles({commit}, queryParams) {
            await Files.list(queryParams)
                .then(files => {
                    commit(SET_FILES, files)
                    console.log(files)
                }).catch((error) => {
                    console.log(error)
                })
        },
    },
}
