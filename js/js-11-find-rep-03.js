const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
    { id: 'player-3', name: 'Kivi', timePlayed: 230, points: 48, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
    { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];

//ищем игрока по уникальному id

const requiredId = 'player-4';
const toFindPlayer = players.find(function(player) {
    // if(player.id === requiredId) {
    //     return player;
    // }
    return player.id === requiredId;
});
console.log(toFindPlayer);