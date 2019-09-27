import axios from 'axios'

const instance = axios.create({

    baseURL:'https://axiosdemo-291c4.firebaseio.com'

})

instance.defaults.headers.common['SOMETHING'] = 'something'

export default instance