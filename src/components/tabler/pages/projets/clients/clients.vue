<template>
    <div>
        <tabler-title title="Clients" />
        <client-list />
    </div>
</template>

<script>
// import clientList from './client-list';
const axios = require('axios').default;
// axios.defaults.baseURL = 'http://mydash.yonkou.info';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

export default {
    components: {
        // clientList
    },
    data(){
        return{
            info: null,
            // loading: true,
            // errored: false,
            dash_server : 'http://mydash.yonkou.info/api',
            local_server : 'http://localhost:7000/api',
        }
    },
    created(){
        axios.get(this.dash_server + '/projet__clients')
        .then(response => {  
            this.info = response.data
            console.log(this.info);
            })
        .catch(error => {
            console.log(error);
            // this.errored = true
        }) 
    } ,

    
}
</script>

<style>

</style>