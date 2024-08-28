import { createCipheriv } from "crypto";

const encryptToUniqueCode = (text: string) => {
  const encryptKey = String(process.env.ENCRYPTION_KEY);
  const adjustedKey = encryptKey.padEnd(32, "0").slice(0, 32);
  const cipher = createCipheriv(
    "aes-256-ecb",
    Buffer.from(adjustedKey),
    Buffer.alloc(0)
  );
  let encrypted = cipher.update(text, "utf8", "hex");
  encrypted += cipher.final("hex");
  return encrypted.substring(0, 17);
};

export default encryptToUniqueCode;
