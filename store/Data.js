var moment = require("moment");
const axios = require("axios");
const Data = {
    data: {
        searchvalue: '',
        jobs: [],
        moment: moment
    },
    methods: {
        getjobs: function () {
            axios.get("https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json")
                .then((response) => {
                    this.jobs = response.data;
                })
        }
    }
}

export default Data;