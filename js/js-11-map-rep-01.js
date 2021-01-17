const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
    { id: 'player-3', name: 'Kivi', timePlayed: 230, points: 48, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
    { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];
// возвращает массив имен геймеров. 

// выполнена задача с анонимной стрелочной функцией
// const playersName = players.map(player => player.name);
// console.table(playersName);

// выполнена задача с function declaration 
const playersName = players.map( function(player) {
    return player.name;
});
console.table(playersName);

// увеличивает количество очков каждого геймера на 10%.

// грязный код - изменяет оригиналы.
// const updatedPlatersPoints = players.map(function(player) {
//     return player.points += player.points * 0.1;
// });
// console.table(updatedPlatersPoints);

// чистый код - возвражает новые объекты.
const updatedPlayersPoints = players.map(function(player) {
    return {
        ...player,
        points: player.points += player.points * 0.1,
    }
});

console.table(updatedPlayersPoints);
console.log('players === updatedPlayersPoints :', players === updatedPlayersPoints, '!');

// увеличивает количество чаосв для геймера. 

const playerId = 'player-3';
const updatedPlayersTimePlayed = players.map(function(player) {
    if(player.id === playerId) {
        return {
            ...player,
            timePlayed: player.timePlayed + 50,
        }
    }
    return player;
});
console.table(updatedPlayersTimePlayed);