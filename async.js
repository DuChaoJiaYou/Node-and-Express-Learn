const setName = () => {
    return new Promise((resolve, reject) => {
        resolve('杜超')
    })
}

const getName = async () => {
    const name = await setName()
    // const welcome = "欢迎" + name
    // // console.log(welcome);
    // return welcome

}

const doSomeThing = async () => {
    const thing = await getName()
    // return '这才是终结版' + thing
}

doSomeThing().then(resolve => console.log(resolve))

const testAsync = async () => {
    return Promise.resolve('name')
}
// testAsync().then(resolve => console.log(resolve))

// const name = getName()
// console.log('之前1');
// // typeof(name)
// console.log(name);
// console.log('之后');
