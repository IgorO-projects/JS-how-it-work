// сделаем "slug" для "URL"
// необходимо сделать "top-10-benefits-of-react-framework"
// используем 3 метода 

// 1)

// const title = 'Top 10 Benefits Of React Framework';

// const normalizedTitle = title.toLowerCase();
// console.log('normalizedTitle :', normalizedTitle);

// const words = normalizedTitle.split(' ');
// console.log('Array "words":', words);

// const slug = words.join('-');
// console.log('slug :', slug);

/************************************************************************/ 

// 2)

// "chaining" - менее декларативный метод! 
// const title = 'Top 10 Benefits Of React Framework';

// const slug = title
// .toLowerCase()
// .split(' ')
// .join('-');

// console.log(slug);

// баланс между chaining и декларативным методом. 
// const title = 'Top 10 Benefits Of React Framework';

// const words = title.toLowerCase().split(' ');
// console.log('Normalized + splited to Array :', words);

// const slug = words.join('-');
// console.log('Joined to string for URL :',slug);

/************************************************************************/ 

// 3)

const title = 'Top 10 Benefits Of React Framework';
const words = title.toLowerCase().split(' ');
let slug = '';

for(i = 0; i < words.length; i += 1) {
    if (i !== words.length - 1) {
        console.log(words[i]);
        slug += words[i] + '-';
        continue;
    } 
    slug += words[i];

    // в данном случае "else" необходим, так как при каждой итерации будет добовляться слово, 
    // а нам необходимо только при последней иттерации добавить только слово.
    //  Также можно использовать "continue", он прервет итерации после достиження цели "words.length - 1"

    const isNotLastValue = i !== words.length - 1;
    // slug += isNotLastValue ? words[i] + '-' : words[i];
}
console.log(slug);