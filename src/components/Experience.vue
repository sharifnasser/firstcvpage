<template>
  <div class="experience">
    <div class="container">
      <div class="row">
        <aside class="col-md-5 text-center text-md-right">
          <b-navbar toggleable class="d-block">
            <b-navbar-toggle target="navbar-toggle-collapse">
              <template #default="{ expanded }">
                <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
                <b-icon v-else icon="chevron-bar-down"></b-icon>
              </template>
            </b-navbar-toggle>
        
            <b-collapse id="navbar-toggle-collapse" is-nav>
              <b-navbar-nav class="flex-column ml-md-auto mt-3 nav h4 font-weight-normal">
                <b-nav-text><a class="text-primary" href="/">Home</a></b-nav-text>
                <b-nav-text><a class="text-primary" href="/#/bio">Bio</a></b-nav-text>
                <b-nav-text><a class="text-primary font-weight-bold" href="/#/experience">Experience</a></b-nav-text>
                <b-nav-text><a class="text-primary" href="/#/speaking">Speaking</a></b-nav-text>
              </b-navbar-nav>
            </b-collapse>
          </b-navbar>
        </aside>
        
        <main class="col-md-7 text-center">
            <div v-for="experience in experiences.slice().reverse()" class="card text-center border-primary mt-3">
                <div class="card-header text-white bg-primary">
                    {{experience.vc_company}}
                </div>
                <div class="card-body">
                  <h5 class="card-title">{{experience.vc_title}}</h5>
                  <p class="card-text">{{experience.vc_description}}...</p>
                </div>
                <div class="card-footer text-muted"> {{experience.vc_dates}} </div>
              </div>
        </main>
      </div>    
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'experience',
  data () {
    return {
      experiences: {}
    }
  },
  mounted () {
    axios.get('http://localhost:3000/experience').then((response) => {
      console.log(response.data)
      this.experiences = response.data
    }).catch((error) => {
      console.log(error)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
