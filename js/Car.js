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


//     baze:
// vietomis truksta kabletaskiu, ypac uz paskutiniu return
// constructor:
// lietuviski pavadinimai
// metodas: ijungti varykli: - ok
// metodas: isjungti varykli:
// negali, jei vaziuoji
// metodas: pradeti vaziuoti:
// negali, jei bake nera reikiamo kiekio
// negali, jei varyklis nera ijungtas
// neuztenka apskaiciuoti sunaudota kuro kieki, reik ji dar ir panaudoti skaiciuojant kuro likuti
// metodas: vaziuoti:
// negali, jei varyklis nera ijungtas
// negali, jei greitis nulinis
// negali, jei nera pakankamo kiekio kuro; tikrinti this.fuelLevel < 0 neuztenka, nes cia praslysta variantas, kai this.fuelLevel yra lygus nuliui; cia reik lyginti su sanaudomis
// metodas: sustoti:
// nera uzfiksuojamas faktas, jog buvo sustota, t.y.this.speed netampa nulis
// metodas: kiek liko kuro:
// siuo metu pas tave yra apskaiciuota kiek lieka kuro, po pradejimo vaziuoti, jei kuro bakas buvo pilnas
// reikia, jog grazintu teisinga kuro likuti bake, net ir po papildomu pasivazinejimu is eiles
// metodas: uzpilti kuro baka:
// siuo metu grazinama reiksme, kiek galima uzsipilti, nors cia reikia realaus papildymo momento
// negali, jei parametras nera skaiciaus tipo
// negali, jei parametras nera "normalus" skaicius
// negali, jei parametras nera teigiamas skaicius
// negali, jei ijungtas varyklis
// negali, jei bakas jau pilnas

export class Car {
    constructor(pavadinimas, modelis, spalva, kuroBakoTalpa, vidutinesKuroSanaudos100km) {
        this.brand = pavadinimas;
        this.model = modelis;
        this.color = spalva;
        this.fuelTankCapacity = kuroBakoTalpa;
        this.averageFuelConsumptionPer100Km = vidutinesKuroSanaudos100km;
        this.theEngineTurned = false;
        this.speed = 0;
    }

    engineTurnedOn() {
        if (this.theEngineTurned !== false) {
            return 'Variklis jau veikia';
        } else {
            return 'Įjungto varyklio dar kartą įjungti negalima, sugadinsite starterį 👀';
        }
    }

    engineTurnedOff() {
        if (this.theEngineTurned === false) {
            return 'Nedirbančio varyklio išjungti negalima... Tu gal geriau nebevairuok...';
        } else {
            return 'Variklis išjungtas';
        }
    }
    startDrive() {
        if (this.speed !== 0) {
            return 'Jau važiuojame';
        } else {
            let fuelUsed = this.averageFuelConsumptionPer100Km * 2;
            return (fuelUsed) + 'l';
        }
    }
    drive() {
        if (this.fuelLevel < 0) {
            return 'Įpilkite degalų';
        } else {
            return 'Jūs galite užkurti automobilį ir važiuoti.';
        }
    }
    stop() {
        if (this.speed === 0) {
            return 'Automobilis jau sustojo';
        } else {
            return 'Automobilis nesustojo';
        }
    }
    howMuchFuelIsLeft() {
        let fuelBurn = this.fuelTankCapacity - this.averageFuelConsumptionPer100Km * 2;
        return `Liko kuro: ${fuelBurn}l`;
    }

    howMuchFuelToAdd() {
        let needed = this.fuelTankCapacity - (this.fuelTankCapacity - this.averageFuelConsumptionPer100Km * 2);
        return `Reikia užsipilti ${needed.toFixed(3)}l.`;
    }
}

