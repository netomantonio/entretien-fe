import UserModule from './user'
import {readonly} from 'vue'
import GlobalModule from './global'

export default readonly({
  User: UserModule,
  Global: GlobalModule
})
