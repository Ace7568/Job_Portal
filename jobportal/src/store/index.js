import { configureStore } from '@reduxjs/toolkit'

import jobSlice  from './reducers/jobSlice'
import userSlice from './reducers/userSlice';


const store = configureStore({
    reducer: {
        jobs: jobSlice,
        user: userSlice  
    },
})

export default store;