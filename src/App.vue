<template>
  <div id="app">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
    <!-- Add icon library -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <!-- Add font family -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:400,500,700,900">
    <title>Sharif Nasser</title>
    
    <div class="container">
      <div class="row">
        <aside class="col-md-5">
            <h3 class="mb-1 text-muted">first CV page of</h3>
            <h1 class="mb-1">
                <a href="#">Sharif Nasser</a>
            </h1>
            <h3 class="mb-5 font-weight-light">
                Robotics Student<br>
                Microsof Learn Student Ambassador<br>
                GitKraken Ambassador
            </h3>
            <h4 class="mb-0 font-weight-normal">
                <a href="mailto:sharifnasser@gmail.com">sharifnasser@gmail.com</a>
            </h4>
            <p class="mb-0">
                <a class="text-dark" href="https://www.linkedin.com/in/sharifnasser"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                <a class="text-dark" href="https://github.com/sharifnasser"><i class="fa fa-github" aria-hidden="true"></i></a>
                <a class="text-dark" href="https://www.instagram.com/sharif_nasser"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                <a class="text-dark" href="https://twitter.com/sharif_nasser"><i class="fa fa-twitter" aria-hidden="true"></i></a>
            </p>
        </aside>
        
        <main class="col-md-5">
            <p>
                <a href="./assets/sharif.jpg">
                    <img src="./assets/sharif.jpg" alt="Sharif Nasser" class="rounded-sm" style="width: 100%">
                </a>
            </p>
        </main>
      </div>    
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style scoped>

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Style all font awesome icons */
.fa {
    padding: 20px;
    font-size: 40px;
    width: 60px;
    text-align: center;
    text-decoration: none;
}

/* Add a hover effect if you want */
.fa:hover {
    opacity: 1;
}

</style>
