/**
 * 
 * @param num1 
 * @param num2 
 */
const myMultiply = (num1: number, num2: number) => {
    let m: number = 0
    let str1: string = `${num1}`
    let str2: string = `${num2}`
    const str1Float: string = str1.split('.')[1]
    const str2Float: string = str1.split('.')[1]
    if (str1Float) { 
        m = str1Float.length
    }
    if (str2Float) { 
        m = m > str2Float.length ? m : str2Float.length
    }
    str1 = num1.toFixed(m)
    str2 = num2.toFixed(m)
    const transferRes: number = +(str1.replace('.', '')) * +(str2.replace('.', ''));
    const res: number = transferRes / Math.pow(10,m)
    return res
}
export default myMultiply