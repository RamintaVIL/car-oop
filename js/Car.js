export class Car {
    constructor(pavadinimas, modelis, spalva, kuroBakoTalpa, vidutinesKuroSanaudos100km ) {
        this.brand = pavadinimas;
        this.model = modelis;
        this.color = spalva; 
        this.fuelTankCapacity = kuroBakoTalpa; 
        this.averageFuelConsumptionPer100Km = vidutinesKuroSanaudos100km;
        this.theEngineTurned = false;
        this.speed = 0;        
    }
    engineTurnedOn() {
        if (this.theEngineTurned) {
            return 'Variklis veikiantis';
        } else {
            return 'Įjungto varyklio dar kartą įjungti negalima, sugadinsite starterį 👀';  
           
        }   
    }
    engineTurnedOff() {
        if (!this.isTheEngineTurned) {
          return 'Nedirbančio varyklio išjungti negalima... Tu gal geriau nebevairuok...';  
        } else {
            return 'Variklis išjungtas';
        }  
    }
    startDrive() {
        if (this.speed !== 0) {
            return 'Jau važiuojame';
        } else {
            return (this.averageFuelConsumptionPer100Km * 2);
        }
    }
    drive() {
        if (this.fuelLevel <= 0){
            return 'Įpilkite degalų';
        } else {
            return 'Jūs galite užkurti automobilį ir važiuoti.'
        }
    }
    stop() {
        if (this.speed <= 0){
         return 'Automobilis jau sustojo';   
        } else {
            this.speed = 0; 
           return 'Automobilis dar nesustojo'  
        }  
    }
    howMuchFuelIsLeft() {
        return `Liko kuro: ${this.fuelTankCapacity - this.averageFuelConsumptionPer100Km * 2}`
    }
    
    // howMuchFuelToAdd() {
    //     return `Reikia uzsipilti: ${} `

    // }
}


// +   ijungti varykli
//     +   ijungto varykli dar karto ijungti negalima, sugadinti starteri
// +   isjungti varykli
//     +   isjungto varyklio isjungti negalima...
// +   pradeti vaziuoti (greitis tiesiog tampa ne nulinis ir sunaudoja 2x litrus kuro sanaudu)
// +   vaziuoti (naudoja 1x litro kuro sanaudu)
// +   sustoti (greitis tiesiog tampa nulinis)
// -   kiek liko kuro?
// -   uzpilti kuro baka (kiek litrais)




// - pavadinimas (Audi) - brand
// - modelis (80) - model
// - spalva - color
// - kuro bako talpa (litrais) - fuel tank capacity (liters) - 66 l
// - vidutines kuro sanaudos 100km - average fuel consumption per 100 km - 8.9 l/100km
// - ar ijungtas varyklis (default: false) - is the engine turned on (default: false)
// - greitis (default: 0) - speed