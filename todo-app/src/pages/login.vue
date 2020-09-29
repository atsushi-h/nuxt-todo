<template>
  <firebase-auth />
</template>

<script lang="ts">
import Vue from 'vue';
import FirebaseAuth from '~/components/FirebaseAuth.vue';

export default Vue.extend({
  name: 'Login',
  components: {
    FirebaseAuth,
  },
});
</script>
