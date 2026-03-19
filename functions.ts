// trả về tổng
function sum(a: number, b: number): number {
  return a + b;
}

// trả về tích
const multiply = (a: number, b: number): number => a * b;

// Function greet 
function greet(name: string, role: string = "Guest"): void {
  console.log(`Hello ${name}, your role is ${role}`);
}

// async function delayPrint
async function delayPrint(msg: string, time: number): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, time));
  console.log(msg);
}

// Test các function
console.log("Sum is", sum(1, 4));
console.log("Multiply is", multiply(0.25, 3));

greet("TrangHTT", "QA");
greet("Nam"); 
delayPrint(" Message se hien thi sau 5 giay", 5000);