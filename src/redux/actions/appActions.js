

import {APP_DATA_LOCATION, APP_DATA_GET, APP_DATA_SUCCESS, APP_DATA_FAIL} from '../../constants/appConsts'


async function getAppData() {
    try{
        const data = await fetch(APP_DATA_LOCATION).then(result => result.json())
        return data
    }catch(error) {
        console.error('[ERROR] - getAppData:', error)
        return error
    }
}

export function actionGetAppData() {
    return (dispatch) => {
        dispatch({type: APP_DATA_GET})
        return getAppData().then(
            data => dispatch({type: APP_DATA_SUCCESS, data}),
            error => dispatch({type: APP_DATA_FAIL, error})
        )
    }
}





