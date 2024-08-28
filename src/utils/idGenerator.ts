import { customAlphabet } from "nanoid"
const generateId = () => {
    const numberId = customAlphabet('1234567890', 3)
    return numberId();
}

export default generateId