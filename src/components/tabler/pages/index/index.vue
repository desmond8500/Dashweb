<template>
    <div>
        <tabler-title title="Dashboard" />

        <div class="row row-cards">
            <div class="col-6 col-sm-4 col-lg-2" v-for="resume in resumes" :key="resume.id">
                <box1 :box="resume"/>
            </div>
            <div class="col-6 col-sm-12 col-lg-4">
                <quote/>
            </div>
        </div>
           

    </div>
</template>

<script>

import box1 from "../../component/box1";
import quote from "../index/quote"

export default {
    components: {
        box1, quote
    },
    data(){
        return{
            resumes: [
                {
                    id: 1,
                    name: 'Taches',
                    number: '12',
                    color: 'text-green',
                    percentage: '6%',
                    icon: 'fe fe-chevron-up'
                },
                {
                    id: 2,
                    name: 'Projets en cours',
                    number: '12',
                    color: 'text-green',
                    percentage: '6%',
                    icon: 'fe fe-chevron-up'
                },
                {
                    id: 3,
                    name: 'Devis en cours',
                    number: '12',
                    color: 'text-green',
                    percentage: '6%',
                    icon: 'fe fe-chevron-up'
                },
            ]
        }
    }
}
</script>

<style>

</style>