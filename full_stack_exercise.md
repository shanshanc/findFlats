# Attempted solutions
1. In the root folder, run `npm i`
2. In the root folder, run `tsc` to generate migrated files to the built folder

3. In the src folder, run `npm test ` followed any of the three files below to test
   - highestOccurance.test.js
   - targetValue.test.js
   - checkBraces.test.js


4. For the flats recommendation. Run node findFlats.js in the built folder and see the results in the console.


# Candidate Exercise – JavaScript Full-stack Developer

> Max. duration: 48 hours

## Highest Occurrence

Create a function responsible for returning the elements with the highest frequency in an array.

Signature:

```ts
type highestOccurrence = (input: (string | number)[]) => (string | number)[];
```

Example:

```ts
highestOccurrence([2, 3, 2, 2, 2, 4, 2]);
// [2]

highestOccurrence([2, 3, 2, 3, 2, 3, 4]);
// [2, 3]

highestOccurrence(['a', 'b', 'c', 'a', 'a', 'a', 'a']);
// ['a']

highestOccurrence(['a', 'a', 2, 2, 2, 'a', 4]);
// ['a', 2]
```

## Target Value

Create a function responsible for defining if the sum of two numbers — used once or multiple times — could produce the target value.

Signature:

```ts
type targetValue = (input: [number, number], target: number) => boolean;
```

Example:

```ts
targetValue([10, 20], 30);
// true

targetValue([10, 20], 40);
// true

targetValue([10, 20], 50);
// true

targetValue([10, 20], 35);
// false

targetValue([10, 20], 10);
// false
```

## Check Braces

Create a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

A string of braces is considered valid if all braces are matched with the correct brace.

```ts
type checkBraces = (input: string) => boolean;
```

Example:

```ts
checkBraces('(){}[]');
// true

checkBraces('([{}])');
// true

checkBraces('(}');
// false

checkBraces('[(])');
// false

checkBraces('[({})](]');
// false
```

## Find a flat

The goal of this exercise is to find the bests flats available for rent in Barcelona.

For that, we're going to use the [Nestoria API](https://www.nestoria.co.uk/help/api-echo).

By using the following endpoint, find out the 10 best flats available within the first 1000 entries.
The algorithm responsible for identifying the flat's quality should — at least — the price, surface and number of rooms.

The result should be written in a JSON document.

```
https://api.nestoria.es/api?action=search_listings&country=es&encoding=json&listing_type=rent&page=1&place_name=Barcelona&pretty=1&number_of_results=50
```
