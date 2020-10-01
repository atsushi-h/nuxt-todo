import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';

import { auth } from '../plugins/firebase';

type IUser = {
  status: string;
  name: string;
  userId: string;
};

@Module({
  name: 'user',
  stateFactory: true,
  namespaced: true,
})
export default class User extends VuexModule {
  private user: IUser = { status: '', name: '', userId: '' };

  public get isLoggedIn() {
    return this.user.status === 'loggedIn';
  }

  @Mutation
  private setUser({ status, name, userId }: IUser) {
    this.user.status = status;
    this.user.name = name;
    this.user.userId = userId;
  }

  @Action
  public login({ name, userId }: { name: string; userId: string }) {
    this.setUser({ status: 'loggedIn', name, userId });
  }

  @Action
  public async logout() {
    await auth.signOut();
    this.setUser({ status: '', name: '', userId: '' });
  }
}
