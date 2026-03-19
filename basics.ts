// Khai báo biến
const username: string = "Trang";
let age: number = 18;
const isActive: boolean = false;

// Array of string
const roles: string[] = ["QA"];

// Object user
const user: { name: string; email: string; isAdmin: boolean } = {
  name: "TrangHTT",
  email: "hoang.thi.thu.trang-b@sun-asterisk.com",
  isAdmin: false
};

// Template string
console.log(`Hello ${username}`);

// In user infor
console.log(
  `User: ${user.name} (email: ${user.email}), Roles: ${roles.join(", ")}, Active: ${isActive}`
);

// Check tuổi user
function checkAge(age: number): string {
  if (age >= 18) {
    return "Adult";
  } else {
    return "Under 18";
  }
}

// In kết quả check tuổi user
console.log(`Trang's age: ${checkAge(age)}`);