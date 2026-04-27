import bcrypt from "bcryptjs";

const password = "Khu5u5untukk@mus@j@"; // ganti password kamu

const hash = await bcrypt.hash(password, 10);
console.log(hash);