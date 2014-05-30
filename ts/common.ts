class Parent {
    name: string;
 
    constructor(name: string) {
        this.name = name;
    }
 
    move(meters: number): void {
        console.log(this.name + " moved " + meters + "m.");
    }
}
 
class Child extends Parent {
    move(): void {
        console.log("slithering...");
        super.move(5);
    }
}