import {APP_DATA_GET, APP_DATA_FAIL, APP_DATA_SUCCESS} from '../../constants/appConsts'




const initialState = {
    errorState: false,
    isFetching: false
}


export default function(state = initialState, action) {


    switch(action.type) {
        case APP_DATA_GET :
            return {
                ...state,
                isFetching: true
            }

        case APP_DATA_SUCCESS :
            const data = action.data
            return {
                ...state,
                ...data,
                errorState: false,
                isFetching: false

            }
        case APP_DATA_FAIL :
            const error = action.error
            return {
                ...state,
                error,
                errorState: true,
                isFetching: false

            }
        default :
            return state
    }

}
