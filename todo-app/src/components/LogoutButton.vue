<template>
  <v-btn v-if="isLoggedIn" @click="logout" elevation="2">logout</v-btn>
</template>

<script lang="ts">
import Vue from 'vue';
import { UserModule } from '../store';

export default Vue.extend({
  name: 'LogoutButton',
  methods: {
    logout() {
      UserModule.logout();
    },
  },
  computed: {
    isLoggedIn() {
      return UserModule.isLoggedIn;
    },
  },
});
</script>
