<template>
  <div>
    <h3>Github repositories</h3>
    <pre>{{ viewer.repositories }}</pre>
  </div>
</template>

<script>
import getRepositories from "~/apollo/queries/getRepositories.graphql";

export default {
  data() {
    return {
      viewer: {}
    };
  },

  apollo: {
    viewer: {
      query: getRepositories
    }
  }
};
</script>
