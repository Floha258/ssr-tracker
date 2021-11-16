var dungeon_text = ["unknowntext", "dekutext", "dctext", "jabutext", "foresttext", "firetext", "watertext", "shadowtext", "spirittext", "freetext"];

var items = {
    "gomode": {
        "type": "toggle",
        "size": "majoritem",
    },
    "forest_med_text": {
        "type": "cycle",
        "size": "med_rewardtext",
        "opts": dungeon_text,
        "loop": true,
        "disable_zero": true,
    },
    "fire_med_text": {
        "type": "cycle",
        "size": "med_rewardtext",
        "opts": dungeon_text,
        "loop": true,
        "disable_zero": true,
    },
    "water_med_text": {
        "type": "cycle",
        "size": "med_rewardtext",
        "opts": dungeon_text,
        "loop": true,
        "disable_zero": true,
    },
    "shadow_med_text": {
        "type": "cycle",
        "size": "med_rewardtext",
        "opts": dungeon_text,
        "loop": true,
        "disable_zero": true,
    },
    "spirit_med_text": {
        "type": "cycle",
        "size": "med_rewardtext",
        "opts": dungeon_text,
        "loop": true,
        "disable_zero": true,
    },
    "light_med_text": {
        "type": "cycle",
        "size": "med_rewardtext",
        "opts": dungeon_text,
        "loop": true,
        "disable_zero": true,
    },
    "kokiri_emerald_text": {
        "type": "cycle",
        "size": "stone_rewardtext",
        "opts": dungeon_text,
        "loop": true,
        "disable_zero": true,
    },
    "kokiri_emerald_text_full": {
        "type": "cycle",
        "size": "med_rewardtext",
        "opts": dungeon_text,
        "loop": true,
        "disable_zero": true,
    },
    "goron_ruby_text": {
        "type": "cycle",
        "size": "stone_rewardtext",
        "opts": dungeon_text,
        "loop": true,
        "disable_zero": true,
    },
    "goron_ruby_text_full": {
        "type": "cycle",
        "size": "med_rewardtext",
        "opts": dungeon_text,
        "loop": true,
        "disable_zero": true,
    },
    "zora_sapphire_text": {
        "type": "cycle",
        "size": "stone_rewardtext",
        "opts": dungeon_text,
        "loop": true,
        "disable_zero": true,
    },
    "zora_sapphire_text_full": {
        "type": "cycle",
        "size": "med_rewardtext",
        "opts": dungeon_text,
        "loop": true,
        "disable_zero": true,
    },
    "skyview": {
        "type": "toggle",
        "size": "majoritem medallion",
    },
    "skyview_compact": {
        "type": "cycletoggle",
        "size": "block-element",
        "cycle_obj": "forest_med_text",
        "toggle_obj": "skyview",
    },
    "earthtemple": {
        "type": "toggle",
        "size": "majoritem medallion",
    },
    "earthtemple_compact": {
        "type": "cycletoggle",
        "size": "block-element",
        "cycle_obj": "fire_med_text",
        "toggle_obj": "earthtemple",
    },
    "lmf": {
        "type": "toggle",
        "size": "majoritem medallion",
    },
    "lmf_compact": {
        "type": "cycletoggle",
        "size": "block-element",
        "cycle_obj": "water_med_text",
        "toggle_obj": "lmf",
    },
    "ancientcistern": {
        "type": "toggle",
        "size": "majoritem medallion",
    },
    "ancientcistern_compact": {
        "type": "cycletoggle",
        "size": "block-element",
        "cycle_obj": "shadow_med_text",
        "toggle_obj": "ancientcistern",
    },
    "sandship": {
        "type": "toggle",
        "size": "majoritem medallion",
    },
    "sandship_compact": {
        "type": "cycletoggle",
        "size": "block-element",
        "cycle_obj": "spirit_med_text",
        "toggle_obj": "sandship",
    },
    "firesanctuary": {
        "type": "toggle",
        "size": "majoritem medallion",
    },
    "firesanctuary_compact": {
        "type": "cycletoggle",
        "size": "block-element",
        "cycle_obj": "light_med_text",
        "toggle_obj": "firesanctuary",
    },
    "sword": {
        "type": "cycle",
        "size": "majoritem",
        "opts": ["sword0", "sword1", "sword2", "sword3", "sword4", "sword5", "sword6"],
        "loop": true,
        "disable_zero": true,
    },
    "crystals": {
        "type": "counter",
        "size": "majoritem",
        "minimum": 0,
        "maximum": 80,
    },
    "mitts": {
        "type": "cycle",
        "size": "majoritem",
        "opts": ["mitts0", "mitts1", "mitts2"],
        "loop": true,
        "disable_zero": true,
    },
    "goron_ruby": {
        "type": "toggle",
        "size": "stones",
    },
    "goron_ruby_full": {
        "type": "toggle",
        "size": "majoritem",
    },
    "goron_ruby_compact": {
        "type": "cycletoggle",
        "size": "block-element",
        "cycle_obj": "goron_ruby_text",
        "toggle_obj": "goron_ruby",
    },
    "goron_ruby_compact_full": {
        "type": "cycletoggle",
        "size": "block-element",
        "cycle_obj": "goron_ruby_text_full",
        "toggle_obj": "goron_ruby_full",
    },
    "zora_sapphire": {
        "type": "toggle",
        "size": "stones",
    },
    "zora_sapphire_full": {
        "type": "toggle",
        "size": "majoritem",
    },
    "zora_sapphire_compact": {
        "type": "cycletoggle",
        "size": "block-element",
        "cycle_obj": "zora_sapphire_text",
        "toggle_obj": "zora_sapphire",
    },
    "zora_sapphire_compact_full": {
        "type": "cycletoggle",
        "size": "block-element",
        "cycle_obj": "zora_sapphire_text_full",
        "toggle_obj": "zora_sapphire_full",
    },
    "bottles": {
        "type": "counter",
        "size": "majoritem",
        "minimum": 0,
        "maximum": 5,
    },
    "scale": {
        "type": "toggle",
        "size": "majoritem",
    },
    "earrings": {
        "type": "toggle",
        "size": "majoritem",
    },
    "bugnet": {
        "type": "toggle",
        "size": "majoritem",
    },
    "slingshot": {
        "type": "toggle",
        "size": "majoritem",
    },
    "beetle": {
        "type": "cycle",
        "size": "majoritem",
        "opts": ["nobeetle", "beetle", "hookbeetle"],
        "loop": true,
        "disable_zero": true,
    },
    "bombs": {
        "type": "toggle",
        "size": "majoritem",
    },
    "bellows": {
        "type": "toggle",
        "size": "majoritem",
    },
    "whip": {
        "type": "toggle",
        "size": "majoritem",
    },
    "clawshots": {
        "type": "toggle",
        "size": "majoritem",
    },
    "bow": {
        "type": "toggle",
        "size": "majoritem",
    },
    "seachart": {
        "type": "toggle",
        "size": "majoritem",
    },
    "spiralcharge": {
        "type": "toggle",
        "size": "majoritem",
    },
    "pouch": {
        "type": "counter",
        "size": "majoritem",
        "minimum": 0,
        "maximum": 8,
    },
    "caveskey": {
        "type": "toggle",
        "size": "majoritem",
    },
    "letter": {
        "type": "toggle",
        "size": "majoritem",
    },
    "rattle": {
        "type": "toggle",
        "size": "majoritem",
    },
    "cage": {
        "type": "toggle",
        "size": "majoritem",
    },
    "sot": {
        "type": "toggle",
        "size": "majoritem"
    },
    "wallet": {
        "type": "cycle",
        "size": "majoritem",
        "opts": ["wallet1", "wallet2", "wallet3", "wallet4", "wallet5"],
        "disable_zero": false,
    },
    "triforce": {
        "type": "counter",
        "size": "majoritem",
        "minimum": 0,
        "maximum": 999,
    },
    "fcsong": {
        "type": "toggle",
        "size": "majoritem",
    },
    "nwsong": {
        "type": "toggle",
        "size": "majoritem",
    },
    "dpsong": {
        "type": "toggle",
        "size": "majoritem",
    },
    "sothsong": {
        "type": "cycle",
        "opts": ["soth0", "soth1", "soth2", "soth3"],
        "size": "majoritem",
        "disable_zero": true,
    },
    "botgsong": {
        "type": "toggle",
        "size": "majoritem",
    },
    "harp": {
        "type": "toggle",
        "size": "majoritem",
    },
    "minuetsong": {
        "type": "badge",
        "size": "majoritem",
        "opts": ["minuet", "checkmark"]
    },
    "bolerosong": {
        "type": "badge",
        "size": "majoritem",
        "opts": ["bolero", "checkmark"]
    },
    "serenadesong": {
        "type": "badge",
        "size": "majoritem",
        "opts": ["serenade", "checkmark"]
    },
    "nocturnesong": {
        "type": "badge",
        "size": "majoritem",
        "opts": ["nocturne", "checkmark"]
    },
    "requiemsong": {
        "type": "badge",
        "size": "majoritem",
        "opts": ["requiem", "checkmark"]
    },
    "preludesong": {
        "type": "badge",
        "size": "majoritem",
        "opts": ["prelude", "checkmark"]
    },
    "dekutype": {
        "type": "cycle",
        "size": "simpletype",
        "opts": ["dekun", "dekumq"],
        "loop": false,
        "disable_zero": false,
    },
    "dctype": {
        "type": "cycle",
        "size": "simpletype",
        "opts": ["dcn", "dcmq"],
        "loop": false,
        "disable_zero": false,
    },
    "jabutype": {
        "type": "cycle",
        "size": "simpletype",
        "opts": ["jabun", "jabumq"],
        "loop": false,
        "disable_zero": false,
    },
    "foresttype": {
        "type": "cycle",
        "size": "dungname-col1",
        "opts": ["forestn", "forestmq"],
        "loop": false,
        "disable_zero": false,
    },
    "svname": {
        "type": "cycle",
        "size": "dungname-col1",
        "opts": ["svname"],
        "loop": false,
        "disable_zero": false,
    },
    "forestsk": {
        "type": "counter",
        "size": "keys",
        "minimum": 0,
        "maximum": 6,
    },
    "forestbk": {
        "type": "toggle",
        "size": "keys",
    },
    "shadowtype": {
        "type": "cycle",
        "size": "dungname-col2",
        "opts": ["shadown", "shadowmq"],
        "loop": false,
        "disable_zero": false,
    },
    "acname": {
        "type": "cycle",
        "size": "dungname-col1",
        "opts": ["acname"],
        "loop": false,
        "disable_zero": false,
    },
    "shadowsk": {
        "type": "counter",
        "size": "keys",
        "minimum": 0,
        "maximum": 6,
    },
    "shadowbk": {
        "type": "toggle",
        "size": "keys",
    },
    "welltype": {
        "type": "cycle",
        "size": "dungname-col3",
        "opts": ["welln", "wellmq"],
        "loop": false,
        "disable_zero": false,
    },
    "wellsk": {
        "type": "counter",
        "size": "keys",
        "minimum": 0,
        "maximum": 3,
    },
    "firetype": {
        "type": "cycle",
        "size": "dungname-col1",
        "opts": ["firen", "firemq"],
        "loop": false,
        "disable_zero": false,
    },
    "etname": {
        "type": "cycle",
        "size": "dungname-col1",
        "opts": ["etname"],
        "loop": false,
        "disable_zero": false,
    },
    "firesk": {
        "type": "counter",
        "size": "keys",
        "minimum": 0,
        "maximum": 8,
    },
    "firebk": {
        "type": "toggle",
        "size": "keys",
    },
    "spirittype": {
        "type": "cycle",
        "size": "dungname-col2",
        "opts": ["spiritn", "spiritmq"],
        "loop": false,
        "disable_zero": false,
    },
    "sshname": {
        "type": "cycle",
        "size": "dungname-col1",
        "opts": ["sshname"],
        "loop": false,
        "disable_zero": false,
    },
    "spiritsk": {
        "type": "counter",
        "size": "keys",
        "minimum": 0,
        "maximum": 7,
    },
    "spiritbk": {
        "type": "toggle",
        "size": "keys",
    },
    "forttype": {
        "type": "cycle",
        "size": "dungname-col3",
        "opts": ["fort1", "fort4"],
        "loop": false,
        "disable_zero": false,
    },
    "fortsk": {
        "type": "counter",
        "size": "keys",
        "minimum": 0,
        "maximum": 4,
    },
    "watertype": {
        "type": "cycle",
        "size": "dungname-col1",
        "opts": ["watern", "watermq"],
        "loop": false,
        "disable_zero": false,
    },
    "lmfname": {
        "type": "cycle",
        "size": "dungname-col1",
        "opts": ["lmfname"],
        "loop": false,
        "disable_zero": false,
    },
    "watersk": {
        "type": "counter",
        "size": "keys",
        "minimum": 0,
        "maximum": 6,
    },
    "waterbk": {
        "type": "toggle",
        "size": "keys",
    },
    "ganontype": {
        "type": "cycle",
        "size": "dungname-col2",
        "opts": ["ganonn", "ganonmq"],
        "loop": false,
        "disable_zero": false,
    },
    "fsname": {
        "type": "cycle",
        "size": "dungname-col1",
        "opts": ["fsname"],
        "loop": false,
        "disable_zero": false,
    },
    "ganonsk": {
        "type": "counter",
        "size": "keys",
        "minimum": 0,
        "maximum": 3,
    },
    "ganonbk": {
        "type": "toggle",
        "size": "keys",
    },
    "gtgtype": {
        "type": "cycle",
        "size": "dungname-col3",
        "opts": ["gtgn", "gtgmq"],
        "loop": false,
        "disable_zero": false,
    },
    "gtgsk": {
        "type": "counter",
        "size": "keys",
        "minimum": 0,
        "maximum": 9,
    },
}

/* templates
Badge Template:
"magic_lens": {
        "type": "badge",
        "size": "majoritem",
        "opts": ["magic", "lensbadge"],
},
Split Template:
"spells": {
        "type": "split",
        "size": "majoritem",
        "opts": ["nospells", "dins", "farores", "dinsfarores"],
        "disable_zero": true,
        "loop": false,
    },
 */