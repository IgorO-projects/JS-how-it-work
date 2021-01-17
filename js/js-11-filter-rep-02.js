const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
    { id: 'player-3', name: 'Kivi', timePlayed: 230, points: 48, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
    { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];

// возвращает массив геймеров онлайн
const isOnline = players.filter(function(player) {
    return player.online;
});
console.table(isOnline);

// возвращает массив геймеров не онлайн 
const isOfline = players.filter(function(player) {
return !player.online;
});
console.table(isOfline);

//получаем харкорных геймеров у который наиграно 250 часов. 
const requiredHours = 250;
const hardCorePlayers = players.filter(function(player) {
    // if(player.timePlayed > requiredHours) {
    //     return player;
    // }
    return player.timePlayed >= requiredHours;
});
console.table(hardCorePlayers);