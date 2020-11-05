<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}
html,
body {
  height: 100%;
}

* {
  margin: 0;
  padding: 0;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}

:focus,
:active {
  outline: none;
}

a {
  transition: all 0.225s ease;
  -webkit-transition: all 0.225s ease;
  -moz-transition: all 0.225s ease;
  -o-transition: all 0.225s ease;
}

a,
a:visited {
  text-decoration: none;
}
a:hover {
  text-decoration: none;
}
a:focus,
a:active {
  outline: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
