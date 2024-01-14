
const newLocal = ServerEvents.recipes(event => {

    function treeGrowing(type) {
        event.recipes.gtceu.tree_greenhouse(`${type}_growing`)
            .notConsumable(`minecraft:${type}_sapling`)
            .itemOutputs(`32x minecraft:${type}_log`)
            .inputFluids('minecraft:water 100')
            .duration(600)
            .EUt(20);

        event.recipes.gtceu.tree_greenhouse(`${type}_CO2_growing`)
            .notConsumable(`minecraft:${type}_sapling`)
            .itemOutputs(`64x minecraft:${type}_log`)
            .outputFluids('gtceu:oxygen 1000')
            .inputFluids('minecraft:water 100', 'gtceu:carbon_dioxide 500')
            .duration(600)
            .circuit(2)
            .EUt(20);

        event.recipes.gtceu.tree_greenhouse(`${type}_NPKCO2_growing`)
            .notConsumable(`minecraft:${type}_sapling`)
            .itemOutputs(`128x minecraft:${type}_log`)
            .outputFluids('gtceu:oxygen 2500')
            .inputFluids('minecraft:water 1000', 'gtceu:carbon_dioxide 1000', 'gtceu:npk_solution 150')
            .duration(600)
            .circuit(3)
            .EUt(20);

    }

    event.recipes.gtceu.large_chemical_reactor('npk_solution')
        .itemInputs('15x gtceu:apatite_dust')
        .itemInputs('5x gtceu:potassium_dust')
        .inputFluids('gtceu:sulfur_trioxide 288', 'gtceu:nitrogen 1000', 'gtceu:distilled_water 2200')
        .outputFluids('gtceu:npk_solution 6400')
        .circuit(24)
        .duration(600)
        .EUt(20);


    treeGrowing('oak');
    treeGrowing('birch');
    treeGrowing('spruce');
    treeGrowing('dark_oak');
    treeGrowing('jungle');
    treeGrowing('acacia');

    event.recipes.gtceu.tree_greenhouse(`mangrove_growing`)
        .notConsumable(`minecraft:mangrove_propagule`)
        .itemOutputs(`32x minecraft:mangrove_log`)
        .chancedOutput(`minecraft:mangrove_propagule`, 1000, 0)
        .inputFluids('minecraft:water 100')
        .duration(400)
        .EUt(20);


    event.recipes.gtceu.tree_greenhouse(`mangrove_CO2_growing`)
        .notConsumable(`minecraft:mangrove_propagule`)
        .itemOutputs(`64x minecraft:mangrove_log`)
        .outputFluids('gtceu:oxygen 1000')
        .inputFluids('minecraft:water 100', 'gtceu:carbon_dioxide 500')
        .duration(600)
        .circuit(2)
        .EUt(512 * 0.75);

    event.recipes.gtceu.tree_greenhouse(`${type}_NPKCO2_growing`)
        .notConsumable(`minecraft:mangrove_propagule`)
        .itemOutputs(`128x minecraft:mangrove_log`)
        .outputFluids('gtceu:oxygen 2500')
        .inputFluids('minecraft:water 1000', 'gtceu:carbon_dioxide 1000', 'gtceu:npk_solution 150')
        .duration(600)
        .circuit(3)
        .EUt(2048 * 0.75);

    event.shaped(Item.of('gtceu:tree_greenhouse'), [
        'WAW',
        'MHM',
        'SCS'
    ], {
        W: 'gtceu:wrought_iron_plate',
        A: 'gtceu:iron_axe',
        M: 'gtceu:lv_electric_motor',
        H: 'gtceu:lv_machine_hull',
        S: 'gtceu:steel_plate',
        C: '#forge:circuits/mv'
    });

});