addLayer("r", {
    name: "Reality", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "R", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0)
    }},
    color: "#d41323",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "reality points", // Name of prestige currency
    baseResource: "realities", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.25, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade("r", 11)) {
            mult = new Decimal(2)
        }
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        exp = new Decimal(1)
        if (hasUpgrade("r", 11)) {
            exp = new Decimal(1.05)
        }
        if (hasUpgrade("r", 21)) {
            exp = new Decimal(1.10)
        }
        return exp
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    upgrades:  {
        rows: 5,
        cols: 5,
        11: {
            title: "Begin Reality",
            description: "Doubles base number gain, reality point gain, and raises realities gain ^1.05.",
            cost: new Decimal(2)
        },
        21: {
            title: "Raise Realities",
            description: "Raises realities gain by ^1.05",
            cost: new Decimal(50)
        },
        31: {
            title: "Alter Reality",
            description: "Unlocks the Skill Tab",
            cost: new Decimal(500)
        }
    },
    layerShown(){return true}
})
