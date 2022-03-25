const object = {
    flag: '🇨🇦',
    country: {
        city: 'vancouver',
    },
};

const deepClone = JSON.parse(JSON.stringify(object));
deepClone.flag = '🇹🇼';
deepClone.country.city = 'taipei';
console.log(deepClone);
// {country: '🇹🇼', {city: 'taipei'}}

console.log(object);