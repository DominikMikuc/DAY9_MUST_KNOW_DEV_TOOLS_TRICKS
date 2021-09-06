const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];
const p = document.querySelector('p');
    function makeGreen() {
      const p = document.querySelector('p');
      p.style.color = '#BADA55';
      p.style.fontSize = '50px';
    }

    // Regular
console.log('hello'); 
    // Interpolated
// console.log('Hello I am a %s string!', ''); //! Wczesniejsze 

// console.log(`Hello I am ${var}`); //! Obecne
    // Styled
console.log('%c I am some great text','font-size:20px;background:blue;text-shadow:10px 10px 0 red')
    // warning!
console.warn('OH NOOO');
    // Error :|
console.error('SHIT!!');
    // Info
console.info('Mikuc przestaje pic xd');
    // Testing
    //* mozna sprawdzac czy cos zawiera cos albo czy cos jest rowne czemus itd.
console.assert(1 === 1, 'That is wrong');
    // clearing
console.clear();
    // Viewing DOM Elements
console.log(p);
console.dir(p);

console.clear();
    // Grouping together
dogs.forEach(dog => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`This is ${dog.name} is ${dog.age} years old`);
  console.log(`This is ${dog.name} is ${dog.age * 7} dog  years`);
  console.groupEnd(`${dog.name}`);
});
    // counting
console.count('Wes')
console.count('Wes')
console.count('Wes')
console.count('Wes')
console.count('Wes')
console.count('Wes')
console.count('Wes')
console.count('Wes')
    // timing
console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data');
    console.log(data);
  });
    // table
console.table(dogs);
