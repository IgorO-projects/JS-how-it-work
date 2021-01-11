// Напишите ф-цию конструктор, которая будет создавать избирателя (name);
// У избирателя будет метод vote(presidentName) который будет менят глобальный объект
// статистики голосов и добавлять туда ключ (имя избирателя) и значение (имя президента).
// Один избиратель голосует только один раз(!)
// В конце подсчитайте голоса и определите кто выиграл выборы

const globeObj = {};

const Voter = function (name) {
    this.name = name;

    this.vote = function (presidentName) {
        for(const item in globeObj) {
            if(item.name === this.name) return;
        }
        globeObj[this.name] = presidentName;
    }
};

const voter1 = new Voter(1);
const voter2 = new Voter(2);
const voter3 = new Voter(3);
const voter4 = new Voter(4);
const voter5 = new Voter(5);
const voter6 = new Voter(6);
voter1.vote('president1');
voter2.vote('president1');
voter3.vote('president3');
voter4.vote('president2');
voter5.vote('president2');
voter6.vote('president1'); 

console.log(globeObj);

const winner = function (globeresult) {
    const presidents = {};
    for(const item in globeresult) {
        const president = globeresult[item];
        if(president in presidents) {
            presidents[president] += 1;
        } else {
            presidents[president] = 1;
        }
    }
    const votesArr = Object.values(presidents);
    const maxVotes = Math.max(...votesArr);
    for(const key in presidents) {
        if(presidents[key] === maxVotes) {
            console.log(`In presidents run the winner is: ${key} - votes: ${maxVotes}`);
        }
    }
}

winner(globeObj);