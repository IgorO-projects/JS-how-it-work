const courses = [
    { 
        name: 'Basic HTML+CSS', 
        topics: ['VSCode', 'HTML', 'CSS', 'GitHub Desktop', 'GitHub'],
    },
    { 
        name: 'Intermediate HTML+CSS', 
        topics: ['VSCode', 'Terminal', 'Git', 'GitHub', 'HTML', 'CSS'], 
    },
    { 
        name: 'Basic JavaScript', 
        topics: ['VSCode', 'Type system', 'Loops', 'Functions', 'Conditions', 'Classes', 'DOM', 'Git', 'GitHub'],
    },
    { 
        name: 'Intermediate JavaScript', 
        topics: ['VSCode', 'NPM', 'Bundlers', 'Transpiling', 'Promises', 'AJAX', 'Git', 'GitHub'],
    },
  ];

//   const allTopics = courses.reduce((acc, item) => {
//         acc.push(...item.topics);
//         return acc;
//   }, []);
  const allTopics = courses.flatMap(item => item.topics);
  console.log(allTopics);

  const uniqueTopics = allTopics.filter((item, index, arr) => {
    if(arr.indexOf(item) === index) return item;
  });

  console.log(uniqueTopics);

  //use case - как удалить ВСЕ одинаковые item.
//   const itemsWithoutDoubles = allTopics.filter((item, index, arr) => {
//     return arr.indexOf(item) === arr.lastIndexOf(item);
//   });
//   console.log(itemsWithoutDoubles);

const allTopicsViaChain = courses
.flatMap(item => item.topics)
.filter((item, index, arr) => arr.indexOf(item) === index);
console.log(allTopicsViaChain);

