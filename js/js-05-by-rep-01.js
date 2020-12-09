
const friends = [
    {name: 'Mango', online: true},
    {name: 'Poly', online: true},
    {name: 'Kiwi', online: false},
    {name: 'Ajax', online: false},
];
console.table(friends);

// const nameToFind = 'Poly';

// for(const friend of friends) {

//     if(nameToFind === friend.name) {
//         console.log('Мы нашли друга,', nameToFind,'!!!');
//         break; 
//     }

//     console.log(friend);
// } 
/*************************************************************************************/
// Поиск друга по имени

const findFriendByName = function (allFriends, name) {

    for(let i = 0; i < allFriends.length; i += 1){
        console.log(allFriends[i]);

        if(allFriends[i].name === name) {
            return `Мы нашли друга, ${name} !!!`;
        }
    }

    return 'друг не нейден';
};

console.log(findFriendByName(friends, 'Poly'));
console.log(findFriendByName(friends, 'Apollo'));
/*************************************************************************************/
// Получение всех имен друзей.

const getAllNames = function(allFriends) {
    const arrNames = [];

    for(const friend of allFriends){
        arrNames.push(friend.name);
    }

    return arrNames;
}; 

console.log(getAllNames(friends));
/*************************************************************************************/ 
// Поиск друга по значению онлайн.

const getOnlineFriends = (allFriends) => {
    const arrOnline = [];

    for(let i = 0; i < allFriends.length; i++) {
        
        if (allFriends[i].online) {
            arrOnline.push(allFriends[i].name);
        }
    }

    return arrOnline;
};

console.log(getOnlineFriends(friends));