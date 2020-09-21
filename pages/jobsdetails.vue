<template>
  <div class="container">
    <h1 class="title text-left">
      <span class="font-weight-bold text-primary">Daily</span> Jobs
    </h1>

    <div class="row mt-5"  v-for="(job, id) in showDetails" :key="id">
      <div class="col-lg-4 text-left">
        <nuxt-link to="/" class="text-primary">Back to search</nuxt-link>
        <h6 class="text-secondary mt-3">HOW TO APPLY</h6>
        <p v-html="job.how_to_apply" style="white-space:normal;"></p>
      </div>

      <div class="col-lg-8 text-left">
        <h5 class="text-primary">
          <span class="btn btn-outline-primary">{{job.type}}</span>
        </h5>
        <h6>
          Date:
          <span class="text-success font-weight-bold">{{job.created_at}}</span>
        </h6>
        <h6>
          Location:
          <span class="text-success font-weight-bold">{{job.location}}</span>
        </h6>
        <p class="job-detail text-justify mt-3" v-html='job.description'></p>
      </div>
    </div>
  </div>
</template>

<script>
import Data from '../store/Data';
const axios = require("axios");

export default {
 
  data() {
    return {
      jobId: this.$route.query.Id,
      getjobs: Data.methods.getjobs,
      jobs: Data.data.jobs
    };
  },

  computed: {
    showDetails: function() {
      return this.jobs.filter(job => job.id == this.jobId);
    }
  },
  mounted() {
    //calling API
    this.getjobs()
  }
};
</script>

<style scoped>
.job-detail {
  color: navy;
  font-weight: 500;
}
</style>>
</style>