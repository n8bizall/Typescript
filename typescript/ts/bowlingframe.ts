export class Frame { 
    score: number;
    frame:number;
    constructor(frame:number) {
        this.score = Math.floor(Math.random() *11) ;
        this.frame = frame;
    }
}

