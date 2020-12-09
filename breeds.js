import * as data from './cat-and-dog-breeds.json'



const petTypes = []
for (let key in data) {
  petTypes.push(key)
}

const getBreeds = (name) => {
  const arr = []
  for (let key in data[name]) {
    const obj = data[name][key]
    obj.breed = key
    arr.push(obj)
  }
  return arr
}

const cats = getBreeds('cat_breeds')

// for (let key in cats) {
//   console.log("key-->", cats[key].breed)
// }
// const res = Object.entries(cats).map(([key, value]) => cats[key].breed)
// Object.entries(cats).map( ([key, value])
// const res = cats.map((cat, key) => cat[key])
// console.log(res)
const dogs = getBreeds('dog_breeds')

export { petTypes, cats, dogs }
