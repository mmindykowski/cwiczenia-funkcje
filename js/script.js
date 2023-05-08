const hello = (name = 'drogi użytkowniku') => {
    console.log(`Cześć ${name}, jak się masz?`);
};

hello();
hello('Mikołaj');

const add = (x = 5, y = 10) => {
    console.log(x + y)
};

add(10,20);

const numbers = (x, y, z) => {
    console.log(x, y, z);
};

numbers(15, 20, 30, 50, 60, 75, 85)

const name = 'Lisa'

const test = () => {
    console.log(`NAME w funkcji - ${name}`);
}

test()

console.log(`Name poza funkcją - ${name}`);