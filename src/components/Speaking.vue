<template>
  <div class="speaking">
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
                <b-nav-text><a class="text-primary" href="/#/experience">Experience</a></b-nav-text>
                <b-nav-text><a class="text-primary font-weight-bold" href="/#/speaking">Speaking</a></b-nav-text>
              </b-navbar-nav>
            </b-collapse>
          </b-navbar>
        </aside>
        
        <main class="col-md-7 text-center">
            <div v-for="item in speaking.slice().reverse()" class="card text-center border-primary mt-3">
                <div class="card-header text-white bg-primary">
                    {{item.vc_organization}}
                </div>
                <div class="card-body">
                  <h5 class="card-title">{{item.vc_title}}</h5>
                  <a v-bind:href="item.vc_url" class="btn btn-primary">Go to</a>
                </div>
                <div class="card-footer text-muted"> {{item.vc_dates}} </div>
              </div>
        </main>
      </div>    
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'speaking',
  data () {
    return {
      speaking: {}
    }
  },
  mounted () {
    axios.get('http://localhost:3000/speaking').then((response) => {
      console.log(response.data)
      this.speaking = response.data
    }).catch((error) => {
      console.log(error)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
