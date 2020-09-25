<template>
  <!-- Start Container -->
  <div class="container">
    <h1 class="title text-left">
      <span class="font-weight-bold">Github</span> Jobs
    </h1>
    <!-- Start Row -->
    <div class="row mt-5" v-for="(job, id) in showDetails" :key="id">
      <!-- Start First Col -->
      <div class="col-lg-4 text-left">
        <nuxt-link to="/" class="text-primary">Back to search</nuxt-link>
        <h6 class="text-secondary mt-3">HOW TO APPLY</h6>
        <p v-html="job.how_to_apply" style="white-space: normal"></p>
      </div>
      <!-- End First Col -->

      <!-- Start Second Col -->
      <div class="col-lg-8 text-left">
        <div class="top">
          <h5 style="color: #334680" class="job-title">{{ job.title }}</h5>
          <span class="job-type">{{ job.type }}</span>
        </div>
        <br />
        <span
          class="text-secondary font-weight-bolder time"
          style="margin-left: -20px"
        >
          &emsp;
          <font-awesome-icon icon="clock" />
          &nbsp;{{ moment(job.created_at).fromNow() }} </span
        ><br />
        <img :src="job.company_logo" alt="logo" class="img-fluid" />
        <span class="text-secondary font-weight-bolder job-location">
          <font-awesome-icon icon="globe-americas" />
          &nbsp;{{ job.location }}
        </span>
        <p
          class="job-detail text-justify mt-3"
          style="color: #334680; font-size: large"
          v-html="job.description"
        ></p>

        <!-- Footer -->
        <div class="footer text-center">Khurram Munir @ DevChallenges.io</div>

      </div>
      <!-- End Second Col -->
    </div>
    <!-- End Row -->
  </div>
  <!-- End Container -->
</template>

<script>
import Data from "../store/Data";

export default {
  data() {
    return {
      jobId: this.$route.query.Id,
      getjobs: Data.methods.getjobs,
      jobs: Data.data.jobs,
      moment: Data.data.moment,
    };
  },

  computed: {
    showDetails: function () {
      return this.jobs.filter((job) => job.id == this.jobId);
    },
  },
  mounted() {
    //calling API
    this.getjobs();
  },
};
</script>

<style scoped>
.job-detail {
  color: navy;
  font-weight: 500;
}

img {
  max-width: 100px;
  height: 100px;
  flex-shrink: 0;
  object-fit: contain;
}
</style>>
</style>