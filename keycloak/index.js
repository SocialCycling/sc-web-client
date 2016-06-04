import Keycloak from './keycloak'

const keycloakConfig = require("file!./keycloak.json")
const keycloak = Keycloak(keycloakConfig)
export const TOKEN_REFRESH_INTERVAL = 3000
export const TOKEN_MIN_VALIDITY = 30

export default keycloak