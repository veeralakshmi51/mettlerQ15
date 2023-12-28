import { combineReducers } from 'redux'
import LoginReducer from './login/reducer'
import PSConfigReducer from './staffConfiguration/reducer'
import AccessControlReducer from './accesscontrol/reducer'
import OrganizationDetailsReducer from './organizationDetails/reducer'

const rootReducer = combineReducers({
  Login: LoginReducer,
  PSConfig: PSConfigReducer,
  Access: AccessControlReducer,
  Organization:OrganizationDetailsReducer
})

export default rootReducer
