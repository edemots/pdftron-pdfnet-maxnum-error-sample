<script setup lang="ts"></script>

<template>
  <header>
    <nav>
      <ul>
        <li>
          <router-link to="/">Go to index</router-link>
        </li>
        <li>
          <router-link to="/preview">Preview file with WebViewer</router-link>
        </li>
      </ul>
    </nav>
  </header>
  <main>
    <router-view></router-view>
  </main>
</template>

<style>
main {
  min-height: 100vh;
}

header {
    padding: 1rem 0;
}

nav ul {
    display: flex;
    column-gap: 2rem;
    justify-content: center;
}

nav ul li a.router-link-active {
    color: gray;

}
</style>
