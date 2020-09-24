<template>
  <div class="container">
    <h1 class="title text-left">
      <span class="font-weight-bold text-primary">Github</span> Jobs
    </h1>
    <!-- Start Header Row -->
    <div class="row justify-content-center">
      <!-- Searach Bar -->
      <div class="col-lg-12 mt-5 search">
        <div class="input-group mb-3 mt-4">
          <div class="input-group-prepend">
            <span class="input-group-text bg-light border-0" id="basic-addon1">
              <font-awesome-icon icon="shopping-bag" style="color: #a5a8b9" />
            </span>
          </div>
          <input
            type="text"
            class="form-control"
            placeholder="Title, Companies, expertise or benefits"
            aria-label="Search with Title, Company or Location"
            aria-describedby="basic-addon1"
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
                  style="color: #334680; font-weight: 400"
                  >Full time</label
                >
              </div>
            </template>
          </li>
          <li class="font-weight-bolder ml-0" style="color: #a5a8b9">
            LOCATION
          </li>
          <li>
            <div class="input-group mb-3 mt-4">
              <div class="input-group-prepend">
                <span
                  class="input-group-text bg-light border-0"
                  id="basic-addon1"
                >
                  <font-awesome-icon
                    icon="globe-americas"
                    style="color: #a5a8b9"
                  />
                </span>
              </div>
              <input
                type="text"
                class="form-control border-0 form-control-lg"
                placeholder="City, state, zip code or country"
                aria-label="Username"
                aria-describedby="basic-addon1"
                style="font-size: 10px"
                v-model="searchbottom"
                @keyup.enter="Find"
              />
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
              <label for="defaultCheck1" class="form-check-label"
                >Amsterdam</label
              >
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
              {{ this.searchbottom }}
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
        <div
          class="card"
          v-for="(job, id) in fetch.slice(start, end)"
          :key="id"
        >
          <div class="card-header d-inline-flex border-0">
            <img :src="job.company_logo" alt="logo" class="img-fluid" />
            <ul>
              <li>
                <nuxt-link
                  @click.native="details(job)"
                  to
                  class="font-weight-bold text-primary"
                  >{{ job.company }}</nuxt-link
                >
              </li>
              <li>
                <h6>{{ job.title }}</h6>
              </li>
            </ul>
          </div>
          <div class="card-footer">
            <span class="box float-left">{{ job.type }}</span>
            <span class="text-secondary font-weight-bolder" id="bottom">
              &emsp;
              <font-awesome-icon icon="clock" />
              &nbsp;{{ moment(job.created_at).fromNow() }}
            </span>
            <span class="text-secondary font-weight-bolder" id="bottom">
              <font-awesome-icon icon="globe-americas" />
              &nbsp;{{ job.location }}
            </span>
          </div>
        </div>
        <nav aria-label="Page navigation">
          <ul class="pagination justify-content-end pagination-sm">
            <li :class="this.start !== 0 ? 'page-item' : 'page-item disabled'">
              <a class="page-link" @click="prevPage" aria-label="Previous">
                <span aria-hidden="true">&lt;</span>
                <span class="sr-only">Previous</span>
              </a>
            </li>
            <template v-for="(pages, index) in jobs.length / jobsperPage">
              <li
                :class="
                  pageActive && index == pageNo
                    ? 'page-item active'
                    : 'page-item'
                "
                :key="index"
              >
                <a class="page-link" @click="gotoPage(index + 1)">{{
                  pages
                }}</a>
              </li>
            </template>
            <li
              :class="
                this.end !== jobs.length ? 'page-item' : 'page-item disabled'
              "
            >
              <a class="page-link" @click="nextPage" aria-label="Next">
                <span aria-hidden="true">&gt;</span>
                <span class="sr-only">Next</span>
              </a>
            </li>
          </ul>
        </nav>
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
      searchbottom: "",
      jobs: Data.data.jobs,
      getJobs: Data.methods.getjobs,
      city: [],
      start: 0,
      end: 5,
      jobsperPage: 5,
      pageActive: true,
      pageNo: 0,
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

      if (this.searchvalue !== "") {
        this.$router.push({
          path: "/",
          query: { description: this.searchvalue },
        });
      } else if (this.searchbottom !== "") {
        this.$router.push({
          path: "/",
          query: { description: this.searchbottom },
        });
      }

      if (this.city !== "" || this.searchbottom !== "") {
        this.$router.push({
          path: "/",
          query: { description: this.city },
        });
      }
    },
    details: function (job) {
      this.$router.push({ path: "/jobsdetails", query: { Id: job.id } });
    },
    gotoPage(index) {
      this.pageNo = index - 1;
      this.start = 0;
      this.end = 5;
      if (this.start == 0) {
        this.end *= index;
        this.start = this.end - 5;
      }
      this.pageActive = true;
    },
    prevPage: function () {
      if (this.start !== 0 && this.end !== 5) {
        this.end -= 5;
        this.start = this.end - 5;
        this.pageNo--;
      }
    },
    nextPage: function () {
      if (this.end < 50) {
        this.end += 5;
        this.start = this.end - 5;
        this.pageNo++;
      }
    },
  },
  computed: {
    fetch: function () {
      if (
        this.searchvalue == "" &&
        this.city == "" &&
        this.searchbottom == ""
      ) {
        return this.jobs;
        this.$router.push({ path: "/" });
      } else {
        try {
          this.start = 0;
          this.end = 5;
          if (
            this.searchvalue !== "" ||
            this.city !== "" ||
            this.pageNo ||
            this.searchbottom !== ""
          ) {
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
li.page-item {
  margin: 4px;
}

li.page-item a {
  color: dimgray;
  cursor: pointer;
  border-color: silver;
  border-radius: 4px;
  font-size: large;
}

li.page-item a:hover {
  border-color: #007bff;
}

ul.pagination > li#C0 a {
  border-color: #007bff;
}
</style>
