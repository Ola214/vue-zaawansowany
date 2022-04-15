import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://adv-vue.firebaseio.com'
});

instance.defaults.headers.common['Is-Admin'] = 'true';

export default instance;