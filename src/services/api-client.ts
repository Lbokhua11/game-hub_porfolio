import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '4ad237d82da2472eabd3cadfa239d817',
    }
})