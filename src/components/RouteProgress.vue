<!-- ProgressBar.vue -->
<template>
    <div v-if="showProgressBar" class="progress-bar">
      <div class="progress" :style="{ width: progress + '%' }"></div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showProgressBar: false,
        progress: 0,
      };
    },
    created() {
      this.$router.beforeResolve((to, from, next) => {
        this.showProgressBar = true;
        this.progress = 0;
  
        const afterEachCallback = () => {
          this.showProgressBar = false;
          this.progress = 0;
        };
  
        // Listen to the "beforeRouteEnter" hook on the component to determine when the component is fully loaded.
        to.matched.forEach((routeRecord) => {
          const asyncComponent = routeRecord.components.default;
          console.log('loading', asyncComponent , asyncComponent.options)
          if (asyncComponent && asyncComponent.options) {
            asyncComponent.options.beforeRouteEnter = (to, from, next) => {
              // Simulate loading delay
              setTimeout(() => {
                next();
              }, 1000); // Adjust the delay as needed
            };
          }
        });
  
        next();
  
        // After all components are loaded, call the afterEachCallback to hide the progress bar.
        this.$router.afterEach(afterEachCallback());
      });
    },
  };
  </script>
  
  <style>
  .progress-bar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px; /* Adjust the height as needed */
    background: #007bff; /* Progress bar color */
    z-index: 9999;
  }
  
  .progress {
    height: 100%;
    background: #007bff; /* Progress bar color */
    transition: width 0.3s;
  }
  </style>
  