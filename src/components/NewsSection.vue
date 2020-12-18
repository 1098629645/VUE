<template>
    <div class="row mt-md-5 mt-sm-5 mt-xs-5">

        <div class="col-lg-6 col-xs-12" v-for="(newsd, index) of news" :key="index">
            <div class="d-flex justify-content-center align-items-center">

                <div class="p-3">
                    <img :src="newsd.image" alt="" height="200px">
                </div>

                <div class="p-2">
                    <h3>{{newsd.title}}</h3>
                    <p>{{newsd.description}}</p>
                </div>

            </div>
            <div class="d-flex container-fluid justify-content-end pb-2 mt-n2">
                <button type="button" class="btn btn-outline-info"><a v-bind:href="newsd.url" target="_blank">Info</a></button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios"

export default {
    name: "NewsSection",
    data(){
        return {news : null}
    },
    created(){
        axios
        .get('https://gnews.io/api/v4/top-headlines?&max=8&lang=es&token=b08956c8565d1f2650b5238b5d24bb2f')
        .then(response => {this.news = response.data.articles})
        // b08956c8565d1f2650b5238b5d24bb2f
        // b696859a815a2bc591a9ae77df3a68eb
    }
}
</script>
