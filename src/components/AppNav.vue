<script>
export default {};
</script>

<template>
  <nav>
    <div class="container">
      <div class="row">
        <div class="content">
          <ul class="d-flex gap-3 list-unstyled">
            <li>
              <router-link class="navbar-brand" :to="{ name: 'home' }"
                >Boolpress</router-link
              >
            </li>
            <li>
              <router-link class="nav-item" :to="{ name: 'projects.index' }"
                >Projects</router-link
              >
            </li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<style></style>
