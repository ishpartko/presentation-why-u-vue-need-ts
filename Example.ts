interface IUser {
  id: number;
}

interface IAdmin extends IUser {
  requestBan(id: number): void;
}

class User implements IUser {
  id: number;
}

class Admin implements IAdmin {
  id: number;
  requestBan(id: number) {
    console.log('ОК, забаню ' + id);
  }
}

const user1 = new User();
const user2 = new Admin();

user1.requestBan();

user2.requestBan('123');

const any = 1;
