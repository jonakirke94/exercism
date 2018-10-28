

const allergy = {
    'eggs': 1,
    'peanuts': 2,
    'shellfish': 4,
    'strawberries': 8,
    'tomatoes': 16,
    'chocolate': 32,
    'pollen': 64,
    'cats': 128
}

export class Allergies {

    constructor(score) {
        this.score = score;
    }

    list() {
        const res = []
        Object.keys(allergy).forEach(element => {
            if (this.score & allergy[element]) {
                res.push(element);
            }
        });
        return res;
    }
    
    allergicTo(item) {
        return (this.score & allergy[item]) > 0;
    }
}