function replaceSpace(str)
{
    // write code here
    let space = '%20'
    return str.replace(/\s/g, space)
}
console.log(replaceSpace(''))
