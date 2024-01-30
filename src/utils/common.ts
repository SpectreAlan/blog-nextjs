import CryptoJS from "crypto-js";

export function decrypt(data: string) {
    const key: string = process.env.NEXT_PUBLIC_CRYPTO_SECRET_KEY!
    const bytes = CryptoJS.AES.decrypt(data as string, key)
    const decrypt = bytes.toString(CryptoJS.enc.Utf8)
    return JSON.parse(decrypt)
}