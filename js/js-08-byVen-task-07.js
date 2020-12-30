const ladder = {
    step: 0, 
    showSteps () {
        console.log(this.step);
    },
    up(value = 1) {
        if(value < 1) return;
        this.step += value;
    },
    down(value = 1) {
        if(value < 1) return;
        this.step -= value;
        if(this.step < 0) {
            console.log('this is ground floor, there is only hell');
            this.step = 0;
            return;
        };
    }
};

ladder.showSteps();
ladder.up();
ladder.up();
ladder.showSteps();
ladder.down();
ladder.down();
ladder.down();
ladder.down();
ladder.down();
ladder.down();
ladder.down();
ladder.down();
ladder.showSteps();