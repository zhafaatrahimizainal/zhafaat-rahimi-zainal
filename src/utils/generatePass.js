import bcrypt from "bcryptjs";

const password = "Motorr!$5577"; // ganti password kamu

const hash = await bcrypt.hash(password, 10);
console.log(hash);