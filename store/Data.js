const Data={
    data:{
        searchvalue:'',
        jobs:[]
    },
    methods:{
        getjobs:function(){
            axios.get("https://jobs.github.com/positions.json")
            .then((response) => {
                this.jobs = response.data;
            })      
        }
    }
}

const axios = require("axios");

export default Data;

