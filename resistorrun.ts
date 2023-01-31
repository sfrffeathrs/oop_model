class Resistor {
    r: number = 0;
    constructor(r: number) {
        this.r = r;
    }
    getCurrent(u: number): number {
        return u / this.r;
    }
    getPower(u: number): number {
        return u * this.getCurrent(u);
    }
    getResistance(): number {
        return this.r;
    }
}

class SeriesCircuit {
    resistors: Resistor[] = []
    push(r: Resistor) {
        this.resistors.push(r);
    }
    getTotalResistance() {
        let sum: number = 0;
        this.resistors.forEach((r: Resistor) => { sum += r.getResistance() });
        return sum;
    }
    getCurrent(u: number) {
        return u / this.getTotalResistance();
    }
    getTotalPower(u: number){
        return u * this.getCurrent(u)
    }
    getBiggestResistance(): Resistor{
        let biggest = 0
        this.resistors.sort((a, b) => (a.getResistance() > b.getResistance()) ? 1 : -1).reverse()
        return this.resistors[0]
    }
}

let sc1: SeriesCircuit = new SeriesCircuit();
sc1.push(new Resistor(220));
sc1.push(new Resistor(110));
sc1.push(new Resistor(220));

console.log(sc1.getTotalResistance());
console.log(sc1.getCurrent(12));
console.log(sc1.getTotalPower(12))
console.log(sc1.getBiggestResistance())

let sc2: SeriesCircuit = new SeriesCircuit();
sc2.push(new Resistor(220));
sc2.push(new Resistor(220));
sc2.push(new Resistor(220));
console.log(sc2.getTotalResistance());
console.log(sc2.getCurrent(12));
console.log(sc2.getTotalPower(12))
console.log(sc2.getBiggestResistance())