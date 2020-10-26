<template>
  <div></div>
</template>
<script>
import axios from "axios";
export default {
  mounted() {
    axios
      .get("api/v1/book", {})
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};
</script>