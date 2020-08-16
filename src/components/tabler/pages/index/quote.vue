<template>
    <div>
        <blockquote class="blockquote text-right">
            <p class="mb-0">{{quote.data.quote}}</p>
            <footer class="blockquote-footer"> <cite title="Source Title">{{quote.data.author}}</cite></footer>
        </blockquote>
    </div>
</template>

<script>
const axios = require('axios').default;
    export default {
        data(){
            return {
                quote: {},
                test: null,
                quotes_server : 'http://quotesapi.yonkou.info/api',
                local_server : 'http://localhost:8000/api',
            }
        },
        created(){
            axios.get(this.quotes_server + '/quote')
                .then(response => {
                    this.test = response
                    this.quote = this.test.data
                    })
                .catch(error => console.log(error)
                );
        },
        methods: {
            store(){
                axios.post('http://localhost:8000/api/tests',{
                    prenom: this.prenom,
                    nom: this.nom
                })
                .then(response => console.log(response))
                .catch(error => console.log(error));
            },
        }
    }
</script>
