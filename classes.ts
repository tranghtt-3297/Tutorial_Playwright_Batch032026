// Interface IUser
interface IUser {
  name: string;
  email: string;
  isAdmin: boolean;
}

// Class User implements IUser
class User implements IUser {
  constructor(
    public name: string,
    public email: string,
    public isAdmin: boolean
  ) {}

  getInfo(): string {
    return `User: ${this.name}, Email: ${this.email}, Admin: ${this.isAdmin}`;
  }
}

// Class AdminUser kế thừa User
class AdminUser extends User {
  deleteUser(user: User): void {
    console.log(`Admin ${this.name} deleted user ${user.name}`);
  }
}

// Tạo instance
const user1 = new User("TrangHTT", "hoang.thi.thu.trang-b@sun-asterisk.com", false);
const user2 = new User("LinhNT", "nguyen.thi.linh@sun-asterisk.com", false);
const admin1 = new AdminUser("NamNV", "nguyen-van-nam@sun-asterisk.com", true);

// Gọi getInfo()
console.log(user1.getInfo());
console.log(user2.getInfo());
console.log(admin1.getInfo());

// Admin delete user
admin1.deleteUser(user1);

// Tạo mảng users gồm User và AdminUser
const users: User[] = [user1,user2, admin1];

// Duyệt mảng và in infor
for (const user of users) {
  console.log(user.getInfo());
}