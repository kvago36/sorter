import { NumbersCollection } from './NumbersCollection'
import { CharactersCollection } from './CharactersCollection'
import { LinkedList } from './LinkedList'

const numbersCollection = new NumbersCollection([114, 4, -1, 5, 10])
const charactersCollection = new CharactersCollection('XaaFsfwghwz')
const linkedList = new LinkedList()

numbersCollection.sort()
charactersCollection.sort()

linkedList.add(114)
linkedList.add(4)
linkedList.add(-1)
linkedList.add(5)
linkedList.add(10)

linkedList.sort()

linkedList.print()
console.log(numbersCollection.data)
console.log(charactersCollection.data)