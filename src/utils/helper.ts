const cutStr = (str: string , num: number = 60) => {
    return str?.length > num ? str.slice(0 , num) + "..." : str
}


export {
    cutStr
}