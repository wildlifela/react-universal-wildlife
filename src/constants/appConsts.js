import config from '../config'

export const APP_DATA_LOCATION = `http://${config.host}${config.port !== 80 ? ':'+config.port : ''}/data.json`

//Actions
export const APP_DATA_GET = 'appDataGet'
export const APP_DATA_SUCCESS = 'appDataSuccess'
export const APP_DATA_FAIL = 'appDataFail'


