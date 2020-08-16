<template>
     <div class="card">
        <div class="card-header">
            <h3 class="card-title">Liste des clients</h3>
        </div>
        <div class="table-responsive">
        <table class="table card-table table-striped table-vcenter">
            <thead>
                <tr>
                    <th colspan="2">Client</th>
                    <th>Description</th>
                    <th>Date</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="client in clients" :key="client">
                    <td class="w-1"><span class="avatar" style="background-image: url(./demo/faces/male/9.jpg)"></span></td>
                    <td>{{ client.name }}</td>
                    <td>{{client.description}}</td>
                    <td class="text-nowrap">May 6, 2018</td>
                    <td class="w-1"><a href="#" class="icon"><i class="fe fe-trash"></i></a></td>
                </tr>
            </tbody>
        </table>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            clients: [
                { id: 1, name: "Client 1", description: "Description", adresse: "Adresse", logo: ""}
            ]
        }
    }
}
</script>

<style>

</style>