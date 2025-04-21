"use server";

import CryptoJS from "crypto-js";

/**
 * Encrypts the given plaintext using AES-ECB-PKCS5Padding without IV.
 * @param plaintext The text to encrypt
 * @returns Encrypted Base64 encoded string
 */
const encryptDataWithoutIV = (apiKey: string): string => {
  // Get the encryption key from environment variables
  const keyStr = process.env.ENCRYPTION_KEY;
  if (!keyStr) {
    throw new Error("ENCRYPTION_KEY environment variable is not set");
  }

  // Decode the Base64 key
  const key = CryptoJS.enc.Utf8.parse(keyStr);

  // Encrypt the apiKey
  const encrypted = CryptoJS.AES.encrypt(apiKey, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  });

  // Return Base64 encoded ciphertext
  return encrypted.toString();
}

export default encryptDataWithoutIV;
