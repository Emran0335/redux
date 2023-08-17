const arr = [
    {
        id: 1,
        score: 0,
    },
    {
        id: 2,
        score: 1,
    }
]

const idGenerator = (arr)=> {
    const maxId = arr.reduce((firstStore, current)=> Math.max(firstStore, current.id),-1)
    return maxId + 1;
}
console.log(idGenerator(arr))

const itemFilter = arr.filter(item=> item.id != 1)
console.log(itemFilter)
