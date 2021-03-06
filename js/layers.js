addLayer("r", {
    name: "Reality", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "R", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
        best: new Decimal(0),
        total: new Decimal(0)
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
        if (hasUpgrade("r", 12)) {
            mult = new Decimal(2)
        }
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        exp = new Decimal(1)

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
            description: "Unlocks Skills tab and gain a Skill Point.",
            cost: new Decimal(10)
        },
        21: {
            title: "Raise Realities",
            description: "Gain another Skill Point, double point gain",
            cost: new Decimal(1000)
        },
        31: {
            title: "Alter Reality",
            description: "Can choose a second path in the first skill tree split.",
            cost: new Decimal(1e10)
        },
    buyables: {
        rows: 1,
        cols: 3,
        11: {
            title: "Reality Multiplier",
            description: "Doubles point gain",
            cost: new Decimal(1)
        }
    },
    tabFormat: {
        "Upgrades": {
            content: ["main-display",
                ["prestige-button"],
                ["display-text",
                function() {
                    return "You have" + player.a.
                }    
            ]
            ]
        },
        "Skills": {

        },
        "Buyables": {
            
        },
        "Challenges" : {

        }
    }
    },
    layerShown(){return true}
})
addLayer("sp", {
    name: "Skills",
    symbol: "SP",
    position: 0,
    startData() { return {
        unlocked: false,
        points: new Decimal(0),
        best: new Decimal(0),
        total: new Decimal(0)
        }
    },
    type: "none",
    upgrades: {
        rows: 5,
        cols: 5,
        11: {
            title: "uh",
            description: "ye",
            cost: new Decimal(1)
        }
    }
})
