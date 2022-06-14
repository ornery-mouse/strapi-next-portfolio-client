import axios from 'axios'

export default function getProjects(){
    return axios({
        method: 'get',
        url: 'http://localhost:1337/api/projects',
        headers: {
            'Authorization': `Bearer ${process.env.STRAPI_KEY}`
        }
    })
}