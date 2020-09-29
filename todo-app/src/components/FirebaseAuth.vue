<template>
  <div id="firebaseui-auth-container"></div>
</template>

<script lang="ts">
import Vue from 'vue';
import { auth, authProviders } from '../plugins/firebase';

export default Vue.extend({
  name: 'FirebaseAuth',
  mounted() {
    const firebaseui = require('firebaseui');

    auth.onAuthStateChanged((user) => {
      if (!user) {
        const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth);

        const config = {
          signInOptions: [authProviders.Google],
          callbacks: {
            signInSuccessWithAuthResult: (authResult) => {
              window.location.href = '/';
              return false;
            },
          },
          signInSuccessUrl: '/',
          signInFlow: 'popup',
        };

        ui.start('#firebaseui-auth-container', config);
      }
    });
  },
});
</script>
