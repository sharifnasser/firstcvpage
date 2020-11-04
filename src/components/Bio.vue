<template>
  <div class="bio">
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
                <b-nav-text><a class="text-primary font-weight-bold" href="/#/bio">Bio</a></b-nav-text>
                <b-nav-text><a class="text-primary" href="/#/experience">Experience</a></b-nav-text>
                <b-nav-text><a class="text-primary" href="/#/speaking">Speaking</a></b-nav-text>
              </b-navbar-nav>
            </b-collapse>
          </b-navbar>
        </aside>
        
        <main class="col-md-7 text-center">
          <p style="font-family: Roboto; font-size: large;">
            Sharif is a 4th-year Digital System and Robotics student at Tecnológico de Monterrey in México. 
            During his undergraduate studies, he has participated in several extracurricular activities that allowed him to lead 
            student groups, volunteer as an instructor for young people, become a student ambassador, and work as an Industry 4.0 Intern.
            <br> <br>
            Driven by his passion for technology and education, Sharif joined the Microsoft Student Partners (now Microsoft Learn Student Ambassadors) 
            program last year. Since then, he takes pride in teaching and amplifying his impact on hundreds of young and adult Latin Americans who have 
            attended his events. Currently, he also serves as a Peer Mentor for first-year students and dedicates his free time to learn about AI and 
            Deep Learning. 
            <br> <br>
            As a soon graduate, his goals include joining a company that seeks to shape a better world for everyone, 
            pursuing a master's degree involving research experience, and empowering people - <b>probably not in that order.</b>
        </p>
        <div v-for="item in education" class="card text-center border-primary mt-3">
          <div class="card-header text-white bg-primary">
              {{item.vc_school}}
          </div>
          <div class="card-body">
            <h5 class="card-title">{{item.vc_title}}</h5>
            <p class="card-text"><i class="fa fa-graduation-cap"></i></p>
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
  name: 'bio',
  data () {
    return {
      education: {}
    }
  },
  mounted () {
    axios.get('http://localhost:3000/education').then((response) => {
      console.log(response.data)
      this.education = response.data
    }).catch((error) => {
      console.log(error)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
