(function randomBlockDrop() {
    ModAPI.require("player");

    globalThis.RandomDropPlugin = {
        getRandomItem: function () {
            const items = [
                "minecraft:air", "minecraft:stone", "minecraft:granite", "minecraft:polished_granite",
                "minecraft:diorite", "minecraft:polished_diorite", "minecraft:andesite", "minecraft:polished_andesite",
                "minecraft:grass_block", "minecraft:dirt", "minecraft:coarse_dirt", "minecraft:podzol",
                "minecraft:cobblestone", "minecraft:oak_planks", "minecraft:spruce_planks", "minecraft:birch_planks",
                "minecraft:jungle_planks", "minecraft:acacia_planks", "minecraft:dark_oak_planks", "minecraft:oak_sapling",
                "minecraft:spruce_sapling", "minecraft:birch_sapling", "minecraft:jungle_sapling", "minecraft:acacia_sapling",
                "minecraft:dark_oak_sapling", "minecraft:sand", "minecraft:red_sand", "minecraft:gravel", "minecraft:gold_ore",
                "minecraft:iron_ore", "minecraft:coal_ore", "minecraft:oak_log", "minecraft:spruce_log", "minecraft:birch_log",
                "minecraft:jungle_log", "minecraft:dark_oak_log", "minecraft:acacia_log", "minecraft:oak_leaves", 
                "minecraft:spruce_leaves", "minecraft:birch_leaves", "minecraft:jungle_leaves", "minecraft:dark_oak_leaves",
                "minecraft:acacia_leaves", "minecraft:sponge", "minecraft:wet_sponge", "minecraft:glass", "minecraft:lapis_ore",
                "minecraft:lapis_block", "minecraft:dispenser", "minecraft:sandstone", "minecraft:chiseled_sandstone",
                "minecraft:smooth_sandstone", "minecraft:note_block", "minecraft:bed", "minecraft:powered_rail",
                "minecraft:detector_rail", "minecraft:sticky_piston", "minecraft:cobweb", "minecraft:tall_grass",
                "minecraft:fern", "minecraft:dead_bush", "minecraft:piston", "minecraft:white_wool", "minecraft:orange_wool",
                "minecraft:magenta_wool", "minecraft:light_blue_wool", "minecraft:yellow_wool", "minecraft:lime_wool",
                "minecraft:pink_wool", "minecraft:gray_wool", "minecraft:light_gray_wool", "minecraft:cyan_wool",
                "minecraft:purple_wool", "minecraft:blue_wool", "minecraft:brown_wool", "minecraft:green_wool",
                "minecraft:red_wool", "minecraft:black_wool", "minecraft:dandelion", "minecraft:poppy", "minecraft:blue_orchid",
                "minecraft:allium", "minecraft:azure_bluet", "minecraft:red_tulip", "minecraft:orange_tulip",
                "minecraft:white_tulip", "minecraft:pink_tulip", "minecraft:oxeye_daisy", "minecraft:brown_mushroom",
                "minecraft:red_mushroom", "minecraft:gold_block", "minecraft:iron_block", "minecraft:diamond_block",
                "minecraft:emerald_block", "minecraft:redstone_block", "minecraft:coal_block", "minecraft:stone_slab",
                "minecraft:sandstone_slab", "minecraft:wooden_slab", "minecraft:cobblestone_slab", "minecraft:brick_slab",
                "minecraft:stone_brick_slab", "minecraft:nether_brick_slab", "minecraft:quartz_slab", "minecraft:bricks",
                "minecraft:tnt", "minecraft:bookshelf", "minecraft:mossy_cobblestone", "minecraft:obsidian", "minecraft:torch",
                "minecraft:oak_stairs", "minecraft:chest", "minecraft:redstone_wire", "minecraft:diamond_ore",
                "minecraft:crafting_table", "minecraft:wheat_seeds", "minecraft:farmland", "minecraft:furnace",
                "minecraft:ladder", "minecraft:rail", "minecraft:cobblestone_stairs", "minecraft:lever",
                "minecraft:stone_pressure_plate", "minecraft:iron_door", "minecraft:wooden_door", "minecraft:redstone_ore",
                "minecraft:redstone_torch", "minecraft:stone_button", "minecraft:snow", "minecraft:ice", "minecraft:snow_block",
                "minecraft:cactus", "minecraft:clay", "minecraft:sugar_cane", "minecraft:jukebox", "minecraft:oak_fence",
                "minecraft:pumpkin", "minecraft:netherrack", "minecraft:soul_sand", "minecraft:glowstone",
                "minecraft:jack_o_lantern", "minecraft:cake", "minecraft:redstone_repeater", "minecraft:trapdoor",
                "minecraft:stone_bricks", "minecraft:mossy_stone_bricks", "minecraft:cracked_stone_bricks",
                "minecraft:chiseled_stone_bricks", "minecraft:brown_mushroom_block", "minecraft:red_mushroom_block",
                "minecraft:iron_bars", "minecraft:glass_pane", "minecraft:melon_block", "minecraft:vines",
                "minecraft:oak_fence_gate", "minecraft:brick_stairs", "minecraft:stone_brick_stairs", "minecraft:mycelium",
                "minecraft:lily_pad", "minecraft:nether_brick", "minecraft:nether_brick_fence", "minecraft:nether_brick_stairs",
                "minecraft:nether_wart", "minecraft:enchanting_table", "minecraft:brewing_stand", "minecraft:cauldron",
                "minecraft:end_portal_frame", "minecraft:end_stone", "minecraft:redstone_lamp", "minecraft:emerald_ore",
                "minecraft:ender_chest", "minecraft:tripwire_hook", "minecraft:emerald_block", "minecraft:beacon",
                "minecraft:cobblestone_wall", "minecraft:flower_pot", "minecraft:carrots", "minecraft:potatoes",
                "minecraft:anvil", "minecraft:trapped_chest", "minecraft:redstone_comparator", "minecraft:daylight_sensor",
                "minecraft:hopper", "minecraft:quartz_block", "minecraft:chiseled_quartz_block", "minecraft:pillar_quartz_block",
                "minecraft:quartz_stairs", "minecraft:dropper", "minecraft:iron_trapdoor", "minecraft:slime_block",
                "minecraft:hay_block"
            ];
            return items[Math.floor(Math.random() * items.length)];
        },

        getRandomQuantity: function () {
            return Math.floor(Math.random() * 65); // Random quantity from 0 to 64
        }
    };

    ModAPI.addEventListener("playerdigging", (event) => {
        let player = ModAPI.player;
        let pos = event.pos;
        let world = player.world;

        if (event.status === 2) { // Ensures it's a block break action
            let randomItem = RandomDropPlugin.getRandomItem();
            let quantity = RandomDropPlugin.getRandomQuantity();

            if (quantity > 0) {
                world.dropItem(randomItem, pos.x + 0.5, pos.y + 0.5, pos.z + 0.5, quantity);
            }
        }
    });
})();
