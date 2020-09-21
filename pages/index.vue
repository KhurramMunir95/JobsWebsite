<template>
  <div class="container">
    <h1 class="title text-left">
      <span class="font-weight-bold text-primary">Github</span> Jobs
    </h1>
    <!-- Start Header Row -->
    <div class="row justify-content-center">
      <!-- Searach Bar -->
      <div class="col-lg-12 mt-5 search">
        <div class="input-group">
          <input
            type="text"
            class="form-control"
            placeholder="Search with jobtype or Location"
            aria-label="Search with Title, Company or Location"
            aria-describedby="basic-addon2"
            v-model="searchvalue"
            @keyup.enter="Find"
          />
          <!-- Search Button -->
          <div class="input-group-append">
            <button class="btn btn-primary" @click="Find">Search</button>
          </div>
        </div>
      </div>
    </div>
    <!-- End Header Row -->

    <!-- Start Body Row -->

    <div class="row mt-4">
      <div class="col-lg-3">
        {{newCity}}
        <ul class="left">
          <li>
            <template>
              <div class="form-check mb-4">
                <input
                  id="defaultCheck1"
                  class="form-check-input"
                  type="checkbox"
                  value="Full Time"
                  v-model="city"
                  @change="Find"
                />
                <label
                  for="defaultCheck1"
                  class="form-check-label"
                  aria-checked="true"
                  style="color:#334680;  font-weight: 400;"
                >Full time</label>
              </div>
            </template>
          </li>
          <li class="font-weight-bolder ml-0" style="color:#A5A8B9;">LOCATION</li>
          <li>
            <div class="input-group mb-3 mt-4">
  <div class="input-group-prepend">
    <span class="input-group-text bg-light border-0" id="basic-addon1"><font-awesome-icon icon="globe-americas" style="color:#A5A8B9;"/></span>
  </div>
  <input type="text" class="form-control border-0 form-control-lg" placeholder="City, state, zip code or country" aria-label="Username" aria-describedby="basic-addon1" style="font-size:10px;" v-model="searchvalue" @keyup.enter="Find">
</div>
          </li>
          <!-- Cities  -->
          <li>
            <div class="form-check">
              <input
                id="defaultCheck1"
                class="form-check-input"
                value="Remote"
                type="checkbox"
                v-model="city"
                @change="Find"
              />
              <label for="defaultCheck1" class="form-check-label">Remote</label>
            </div>
          </li>
          <li>
            <div class="form-check">
              <input
                id="defaultCheck1"
                class="form-check-input"
                value="Berlin"
                type="checkbox"
                v-model="city"
                @change="Find"
              />
              <label for="defaultCheck1" class="form-check-label">Berlin</label>
            </div>
          </li>

          <li>
            <div class="form-check">
              <input
                id="defaultCheck1"
                class="form-check-input"
                value="Amsterdam"
                type="checkbox"
                v-model="city"
                @change="Find"
              />
              <label for="defaultCheck1" class="form-check-label">Amsterdam</label>
            </div>
          </li>

          <li>
            <div class="form-check">
              <input
                id="defaultCheck1"
                class="form-check-input"
                value="Munich"
                type="checkbox"
                v-model="city"
                @change="Find"
              />
              <label for="defaultCheck1" class="form-check-label">Munich</label>
            </div>
          </li>

          <!-- <template v-for="(position, id) in cities">
          <li :key="id">-->
          <!-- Cities  -->
          <!-- <div class="form-check">
                <input
                  id="defaultCheck1"
                  class="form-check-input"
                  :value="position.location"
                  type="checkbox"
                  v-model="city"
                  @change="Find"
                />
                <label for="defaultCheck1" class="form-check-label">{{position.location}}</label>
          </div>-->
          <!-- </li>
          </template>-->
        </ul>
        <!-- <h6 class="mt-3 text-secondary">LOCATION</h6> -->
      </div>

      <div class="col-lg-8">
        <div class="card" v-for="(job, id) in fetch" :key="id">
          <div class="card-header d-inline-flex border-0">
            <img :src="job.company_logo" alt="logo" class="img-fluid" />
            <ul>
              <li>
                <nuxt-link
                  @click.native="details(job)"
                  to
                  class="font-weight-bold text-primary"
                >{{job.company}}</nuxt-link>
              </li>
              <li>
                <h6>{{job.title}}</h6>
              </li>
            </ul>
          </div>
          <div class="card-footer">
            <span class="box float-left">{{job.type}}</span>
            <span class="text-secondary font-weight-bolder" id="bottom">
              &emsp;
              <font-awesome-icon icon="clock" />
              &nbsp;{{moment(job.created_at).fromNow()}}
            </span>
            <span class="text-secondary font-weight-bolder" id="bottom">
              <font-awesome-icon icon="globe-americas" />
              &nbsp;{{job.location}}
            </span>
          </div>
        </div>
      </div>

      <!-- End Body Row -->
    </div>
  </div>
</template>

<script>
const axios = require("axios");
import Data from "../store/Data";
var moment = require("moment");
export default {
  data() {
    return {
      moment: moment,
      searchvalue: Data.data.searchvalue,
      jobs: Data.data.jobs,
      getJobs: Data.methods.getjobs,
      city: [],
      cars: ["honda", "nissan", "audi", "honda"],
      filteredCity: [],
      newCity: "",
    };
  },

  methods: {
    remove: function () {
      if (this.city.length > 1) {
        this.searchvalue == "";
        this.city.splice(0, 1);
      }
    },
    Find: function () {
      this.remove();

      this.$router.push({
        path: "/",
        query: { description: this.searchvalue },
      });

      if (this.city !== "") {
        this.$router.push({
          path: "/",
          query: { description: this.city },
        });
        // this.searchvalue = ''
      }
    },
    details: function (job) {
      this.$router.push({ path: "/jobsdetails", query: { Id: job.id } });
    },
  },
  computed: {
    fetch: function () {
      if (this.searchvalue == "" && this.city == "") {
        return this.jobs;
        this.$router.push({ path: "/" });
      } else {
        try {
          if (this.searchvalue !== "" || this.city !== "") {
            return this.jobs.filter(
              (job) =>
                job.location == this.$route.query.description ||
                job.type == this.$route.query.description
            );
          }
        } catch (error) {
          console.log("Error: ", error);
        }
      }
    },
    cities: function () {
      var cities;
      cities = this.jobs.filter((job) => job);

      return cities;
    },
  },
  mounted() {
    this.getJobs();
  },
};
</script>

<style>
.container {
  margin-bottom: 100px;
  min-height: 100vh;
  /* display: flex; */
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 5 0px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

span.box {
  border: 1px solid #394680;
  color: #394680;
  padding: 5px;
  border-radius: 5px;
  font-weight: bolder;
  font-size: 14px;
  position: relative;
  left: 130px;
}
</style>
