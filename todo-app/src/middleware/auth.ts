import { Context } from '@nuxt/types';

import { auth } from '../plugins/firebase';
import { UserModule } from '../store';

export default ({ route, redirect }: Context) => {
  auth.onAuthStateChanged((user) => {
    if (user) {
      UserModule.login({ name: user.displayName, userId: user.uid });
    } else if (route.name !== 'login') {
      redirect('/login');
    }
  });
};
