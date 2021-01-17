const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
    { id: 'player-3', name: 'Kivi', timePlayed: 230, points: 48, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
    { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
]; 

// возвращает тру, если все элементы соотвествуют условию коллбэка.
const requiredTimePlayed = 250; 
const everyTimePlayed = players.every(function(player) {
    return player.timePlayed >= requiredTimePlayed;
})
console.log('Is all players have timeplayed > 250h? -',everyTimePlayed);

const isAllOnline = players.every(function(player) {
    return player.online;
});
console.log('Is all online? -',isAllOnline);

// возвращает тру, если хотя бы 1 элементы соотвествуют условию коллбэка.
const someTimePlayed = players.some(function(player) {
    return player.timePlayed >= requiredTimePlayed;
})
console.log('Is someone player has timeplayed > 250h? -', someTimePlayed);

const IsSomeOneOnline = players.some(function(player) {
return player.online;
});
console.log('Is someone online? -',IsSomeOneOnline);