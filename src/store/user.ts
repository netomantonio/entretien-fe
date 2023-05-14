import {reactive} from 'vue'

const state = reactive({
  currentUser: {}
})

export default state

export function cleanCurrentUser() {
  state.currentUser = {}
}

export function setCurrentUser(user: any) {
  state.currentUser = user
}
