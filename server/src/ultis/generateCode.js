const generateCode = (lenght) => {

    const character = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const numbers = '123456789'
    let code = ''
    for (let i = 0; i < lenght - 1; i++) {
        code += character.charAt(Math.floor(Math.random() * character.length))
    }
    return `${code}${numbers.charAt(Math.floor(Math.random() * character.length))}`
}

export default generateCode