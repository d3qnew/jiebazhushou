const db = {"vt1": {"Standing LP": {"Move": "LP", "Startup": "5", "Active": "4", "Recovery": "8(*11)", "OnHit": "5", "OnBlock": "3", "VOnHit": "11", "VOnBlock": "9", "CancelInfo": "SCAV", "Damage": "30", "Stun": "70", "MeterGain": "0 / 20", "Properties": "High", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "*On whiff", "type": "Normal Moves"}, "Standing MP": {"Move": "MP", "Startup": "6", "Active": "6", "Recovery": "20", "OnHit": "-3", "OnBlock": "-8", "VOnHit": "17", "VOnBlock": "12", "CancelInfo": "V", "Damage": "60", "Stun": "100", "MeterGain": "0 / 30", "Properties": "High", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "", "type": "Normal Moves"}, "Standing HP": {"Move": "HP", "Startup": "12", "Active": "9", "Recovery": "19", "OnHit": "-6", "OnBlock": "-10", "VOnHit": "16", "VOnBlock": "12", "CancelInfo": "V", "Damage": "80", "Stun": "150", "MeterGain": "0 / 50", "Properties": "High", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "Triggers Crush Counter (D)", "type": "Normal Moves"}, "Standing LK": {"Move": "LK", "Startup": "3", "Active": "3", "Recovery": "10", "OnHit": "4", "OnBlock": "1", "VOnHit": "9", "VOnBlock": "6", "CancelInfo": "SCAV", "Damage": "30", "Stun": "70", "MeterGain": "0 / 20", "Properties": "High", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "", "type": "Normal Moves"}, "Standing MK": {"Move": "MK", "Startup": "8", "Active": "3", "Recovery": "16", "OnHit": "2", "OnBlock": "-2", "VOnHit": "14", "VOnBlock": "10", "CancelInfo": "S*V", "Damage": "60", "Stun": "100", "MeterGain": "0 / 30", "Properties": "High", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "S*Can only be canceled into Soul Sphere - Ankh and Soul Spark", "type": "Normal Moves"}, "Standing HK": {"Move": "HK", "Startup": "11", "Active": "6", "Recovery": "23", "OnHit": "-4", "OnBlock": "-8", "VOnHit": "18", "VOnBlock": "14", "CancelInfo": "V", "Damage": "90", "Stun": "150", "MeterGain": "0 / 50", "Properties": "High", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "Triggers Crush Counter (crumple)\nForces stand", "type": "Normal Moves"}, "Crouching LP": {"Move": "(WHILE CROUCHING) LP", "Startup": "4", "Active": "4", "Recovery": "8(*11)", "OnHit": "4", "OnBlock": "2", "VOnHit": "10", "VOnBlock": "8", "CancelInfo": "SCAV", "Damage": "30", "Stun": "70", "MeterGain": "0 / 20", "Properties": "High", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "*On whiff", "type": "Normal Moves"}, "Crouching MP": {"Move": "(WHILE CROUCHING) MP", "Startup": "7", "Active": "6", "Recovery": "13", "OnHit": "2", "OnBlock": "-3", "VOnHit": "15", "VOnBlock": "10", "CancelInfo": "SCAV", "Damage": "60", "Stun": "100", "MeterGain": "0 / 30", "Properties": "High", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "", "type": "Normal Moves"}, "Crouching HP": {"Move": "(WHILE CROUCHING) HP", "Startup": "9", "Active": "5", "Recovery": "19", "OnHit": "-1", "OnBlock": "-5", "VOnHit": "17", "VOnBlock": "13", "CancelInfo": "SCAV", "Damage": "80\n(*70)", "Stun": "150", "MeterGain": "0 / 50", "Properties": "High", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "Triggers Crush Counter (D)\nForces stand\n*From active frame 2F", "type": "Normal Moves"}, "Crouching LK": {"Move": "(WHILE CROUCHING) LK", "Startup": "4", "Active": "2", "Recovery": "9", "OnHit": "4", "OnBlock": "1", "VOnHit": "9", "VOnBlock": "6", "CancelInfo": "S*V", "Damage": "20", "Stun": "70", "MeterGain": "0 / 20", "Properties": "Low", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "S*Can only be canceled into Soul Sphere - Ankh and Soul Spark\nStanding/Crouching LP can be rapid canceled", "type": "Normal Moves"}, "Crouching MK": {"Move": "(WHILE CROUCHING) MK", "Startup": "7", "Active": "3", "Recovery": "14", "OnHit": "3", "OnBlock": "2", "VOnHit": "14", "VOnBlock": "13", "CancelInfo": "SCAV", "Damage": "50", "Stun": "100", "MeterGain": "0 / 30", "Properties": "Low", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "", "type": "Normal Moves"}, "Crouching HK": {"Move": "(WHILE CROUCHING) HK", "Startup": "11", "Active": "3", "Recovery": "33", "OnHit": "D", "OnBlock": "-16", "VOnHit": "D", "VOnBlock": "14", "CancelInfo": "V", "Damage": "90", "Stun": "150", "MeterGain": "0 / 50", "Properties": "Low", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "Triggers Crush Counter (D)", "type": "Normal Moves"}, "Jumping LP": {"Move": "(DURING JUMP) LP", "Startup": "4", "Active": "5", "Recovery": "", "OnHit": "", "OnBlock": "", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "40", "Stun": "70", "MeterGain": "0 / 20", "Properties": "Mid", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "", "type": "Normal Moves"}, "Jumping MP": {"Move": "(DURING JUMP) MP", "Startup": "8", "Active": "4", "Recovery": "", "OnHit": "", "OnBlock": "", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "70", "Stun": "100", "MeterGain": "0 / 30", "Properties": "Mid", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "", "type": "Normal Moves"}, "Jumping HP": {"Move": "(DURING JUMP) HP", "Startup": "13", "Active": "4", "Recovery": "", "OnHit": "", "OnBlock": "", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "90", "Stun": "150", "MeterGain": "0 / 50", "Properties": "Mid", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "", "type": "Normal Moves"}, "Jumping LK": {"Move": "(DURING JUMP) LK", "Startup": "4", "Active": "6", "Recovery": "", "OnHit": "", "OnBlock": "", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "40", "Stun": "70", "MeterGain": "0 / 20", "Properties": "Mid", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "", "type": "Normal Moves"}, "Jumping MK": {"Move": "(DURING JUMP) MK", "Startup": "7", "Active": "4", "Recovery": "", "OnHit": "", "OnBlock": "", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "60", "Stun": "100", "MeterGain": "0 / 30", "Properties": "Mid", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "", "type": "Normal Moves"}, "Jumping HK": {"Move": "(DURING JUMP) HK", "Startup": "9", "Active": "4", "Recovery": "", "OnHit": "", "OnBlock": "", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "90", "Stun": "150", "MeterGain": "0 / 50", "Properties": "Mid", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "", "type": "Normal Moves"}, "Divine Retribution": {"Move": "6 + MK", "Startup": "27", "Active": "2", "Recovery": "23", "OnHit": "1", "OnBlock": "-7", "VOnHit": "", "VOnBlock": "", "CancelInfo": "S*", "Damage": "60", "Stun": "100", "MeterGain": "0 / 30", "Properties": "Mid/Mid", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "S*The first hit only can only be canceled into Soul Sphere - Ankh and Soul Spark", "type": "Unique Attacks"}, "Judgment Of Anubis": {"Move": "3 + MK", "Startup": "11", "Active": "11", "Recovery": "18", "OnHit": "-6", "OnBlock": "-10", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "50", "Stun": "100", "MeterGain": "0 / 30", "Properties": "Low", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "Area around her head is projectile invincible from 11F - 35F", "type": "Unique Attacks"}, "Khamun Kick": {"Move": "(DURING JUMP) 2 + K", "Startup": "12", "Active": "Until landing", "Recovery": "9 frame(s) after landing", "OnHit": "", "OnBlock": "", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "60", "Stun": "70", "MeterGain": "0 / 30", "Properties": "High", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "", "type": "Unique Attacks"}, "Overflowing Nile": {"Move": "(CLOSE TO OPPONENT) 6 OR 5 + LP LK", "Startup": "5", "Active": "3", "Recovery": "17", "OnHit": "D", "OnBlock": "", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "120", "Stun": "170", "MeterGain": "0 / 80", "Properties": "Throw", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "", "type": "Normal Throws"}, "Pyramid Hopscotch": {"Move": "(CLOSE TO OPPONENT) 4 + LP LK", "Startup": "5", "Active": "3", "Recovery": "17", "OnHit": "D", "OnBlock": "", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "140", "Stun": "200", "MeterGain": "0 / 100", "Properties": "Throw", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "", "type": "Normal Throws"}, "Soul Reflect: Kamal": {"Move": "MP MK", "Startup": "9", "Active": "3(*8)", "Recovery": "37", "OnHit": "D", "OnBlock": "-18", "VOnHit": "D", "VOnBlock": "16", "CancelInfo": "CAV", "Damage": "80", "Stun": "150", "MeterGain": "V-Gauge 0 / 100", "Properties": "High", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "*Value while refrection projectile\nCan reflect projectiles. Cannot reflect EX or stronger projectiles", "type": "V-System"}, "Soul Reflect: Stella": {"Move": "2 + MP MK", "Startup": "14", "Active": "3(*15)", "Recovery": "35", "OnHit": "D", "OnBlock": "-16", "VOnHit": "D", "VOnBlock": "16", "CancelInfo": "CAV", "Damage": "80", "Stun": "150", "MeterGain": "V-Gauge 0 / 100", "Properties": "High", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "*Value while refrection projectile\nCan reflect projectiles. Cannot reflect EX or stronger projectiles", "type": "V-System"}, "Wisdom Of Thoth": {"Move": "HP HK", "Startup": "1", "Active": "", "Recovery": "4", "OnHit": "", "OnBlock": "", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "", "Stun": "", "MeterGain": "V-Gauge -900 / 0", "Properties": "", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "V-Gauge Timer + 1000F", "type": "V-System"}, "Wisdom Of Thoth (Projectile)": {"Move": "", "Startup": "10", "Active": "", "Recovery": "", "OnHit": "", "OnBlock": "", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "20", "Stun": "20", "MeterGain": "0 / 10", "Properties": "High", "ProjectileNullification": "\u25cb", "AirborneHurtbox": "", "Comments": "Press and release a button to fire the projectile. Each button corresponds to a projectile\nStanding/crouching/airborne states change the projectile's trajectory\nProjectiles cannot be fired while blocking, during hit stun, while knocked down, at the beginning of a normal move, and during certain conditions", "type": "V-System"}, "Left Eye Of The Lion": {"Move": "(DURING GUARD) 6 + LMHP", "Startup": "", "Active": "", "Recovery": "43 total frames", "OnHit": "", "OnBlock": "", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "", "Stun": "", "MeterGain": "V-Gauge -300 / 0", "Properties": "", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "1F - 22F attack & projectile invincibility\n23F - 39F full invincibility\nTeleports to the other side of the opponent regardless of distance\nRecover 200 stun upon activation", "type": "V-System"}, "L Soul Sphere": {"Move": "(WITH THE CRYSTAL BALL) 236 + LP", "Startup": "14", "Active": "26", "Recovery": "38 total frames", "OnHit": "2", "OnBlock": "-8", "VOnHit": "", "VOnBlock": "", "CancelInfo": "CA", "Damage": "40", "Stun": "70", "MeterGain": "5 / 20", "Properties": "High", "ProjectileNullification": "\u25cb", "AirborneHurtbox": "", "Comments": "CA cancel can only be performed in close range on base hit", "type": "Special Moves"}, "M Soul Sphere": {"Move": "(WITH THE CRYSTAL BALL) 236 + MP", "Startup": "14", "Active": "33", "Recovery": "43 total frames", "OnHit": "1", "OnBlock": "-11", "VOnHit": "", "VOnBlock": "", "CancelInfo": "CA", "Damage": "40", "Stun": "70", "MeterGain": "5 / 20", "Properties": "High", "ProjectileNullification": "\u25cb", "AirborneHurtbox": "", "Comments": "CA cancel can only be performed in close range on base hit", "type": "Special Moves"}, "H Soul Sphere": {"Move": "(WITH THE CRYSTAL BALL) 236 + HP", "Startup": "14", "Active": "33", "Recovery": "36 total frames", "OnHit": "4", "OnBlock": "-4", "VOnHit": "", "VOnBlock": "", "CancelInfo": "CA", "Damage": "40", "Stun": "70", "MeterGain": "5 / 20", "Properties": "High", "ProjectileNullification": "\u25cb", "AirborneHurtbox": "", "Comments": "Will not hit crouching opponents", "type": "Special Moves"}, "EX L Soul Sphere": {"Move": "(WITH THE CRYSTAL BALL) 236 + LP MP", "Startup": "19", "Active": "21", "Recovery": "47 total frames", "OnHit": "7", "OnBlock": "3", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "60", "Stun": "0", "MeterGain": "-300 / 0", "Properties": "High", "ProjectileNullification": "\u25cb", "AirborneHurtbox": "", "Comments": "", "type": "Special Moves"}, "EX M Soul Sphere": {"Move": "(WITH THE CRYSTAL BALL) 236 + LP HP", "Startup": "10", "Active": "21", "Recovery": "51 total frames", "OnHit": "D", "OnBlock": "-10", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "150", "Stun": "200", "MeterGain": "-300 / 0", "Properties": "High", "ProjectileNullification": "\u25cb", "AirborneHurtbox": "", "Comments": "", "type": "Special Moves"}, "EX H Soul Sphere": {"Move": "(WITH THE CRYSTAL BALL) 236 + MP HP", "Startup": "10", "Active": "21", "Recovery": "40 total frames", "OnHit": "0", "OnBlock": "-9", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "150\n(*40)", "Stun": "200\n(*70)", "MeterGain": "-300 / 0", "Properties": "High", "ProjectileNullification": "\u25cb", "AirborneHurtbox": "", "Comments": "Locks if it hits an airborne opponent\n*On grounded hit", "type": "Special Moves"}, "L Guardian Of The Sun": {"Move": "(WITH THE CRYSTAL BALL) 623 + LK", "Startup": "6", "Active": "15", "Recovery": "21+30 frame(s) after landing", "OnHit": "D", "OnBlock": "", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "100", "Stun": "150", "MeterGain": "10 / 50", "Properties": "High", "ProjectileNullification": "", "AirborneHurtbox": "6F - 41F", "Comments": "", "type": "Special Moves"}, "M Guardian Of The Sun": {"Move": "(WITH THE CRYSTAL BALL) 623 + MK", "Startup": "8", "Active": "15", "Recovery": "21+30 frame(s) after landing", "OnHit": "D", "OnBlock": "", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "120", "Stun": "150", "MeterGain": "10 / 50", "Properties": "High", "ProjectileNullification": "", "AirborneHurtbox": "8F - 43F", "Comments": "", "type": "Special Moves"}, "H Guardian Of The Sun": {"Move": "(WITH THE CRYSTAL BALL) 623 + HK", "Startup": "10", "Active": "15", "Recovery": "21+30 frame(s) after landing", "OnHit": "D", "OnBlock": "", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "140", "Stun": "200", "MeterGain": "10 / 50", "Properties": "High", "ProjectileNullification": "", "AirborneHurtbox": "10F - 45F", "Comments": "", "type": "Special Moves"}, "EX Guardian Of The Sun": {"Move": "(WITH THE CRYSTAL BALL) 623 + K K", "Startup": "6", "Active": "15", "Recovery": "21+30 frame(s) after landing", "OnHit": "D", "OnBlock": "", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "150", "Stun": "200", "MeterGain": "-300 / 0", "Properties": "High", "ProjectileNullification": "", "AirborneHurtbox": "6F - 41F", "Comments": "5F - 20F full invincibility", "type": "Special Moves"}, "The Nefertem": {"Move": "236 236 + P", "Startup": "1+3", "Active": "16", "Recovery": "65", "OnHit": "D", "OnBlock": "-46", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "330", "Stun": "0", "MeterGain": "-900 / 0", "Properties": "High", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "1F - 20F full invincibility", "type": "Critical Art"}}, "vt2": {"Standing LP": {"Move": "LP", "Startup": "5", "Active": "4", "Recovery": "8(*11)", "OnHit": "5", "OnBlock": "3", "VOnHit": "11", "VOnBlock": "9", "CancelInfo": "SCAV", "Damage": "30", "Stun": "70", "MeterGain": "0 / 20", "Properties": "High", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "*On whiff", "type": "Normal Moves"}, "Standing MP": {"Move": "MP", "Startup": "6", "Active": "6", "Recovery": "20", "OnHit": "-3", "OnBlock": "-8", "VOnHit": "17", "VOnBlock": "12", "CancelInfo": "V", "Damage": "60", "Stun": "100", "MeterGain": "0 / 30", "Properties": "High", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "", "type": "Normal Moves"}, "Standing HP": {"Move": "HP", "Startup": "12", "Active": "9", "Recovery": "19", "OnHit": "-6", "OnBlock": "-10", "VOnHit": "16", "VOnBlock": "12", "CancelInfo": "V", "Damage": "80", "Stun": "150", "MeterGain": "0 / 50", "Properties": "High", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "Triggers Crush Counter (D)", "type": "Normal Moves"}, "Standing LK": {"Move": "LK", "Startup": "3", "Active": "3", "Recovery": "10", "OnHit": "4", "OnBlock": "1", "VOnHit": "9", "VOnBlock": "6", "CancelInfo": "SCAV", "Damage": "30", "Stun": "70", "MeterGain": "0 / 20", "Properties": "High", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "", "type": "Normal Moves"}, "Standing MK": {"Move": "MK", "Startup": "8", "Active": "3", "Recovery": "16", "OnHit": "2", "OnBlock": "-2", "VOnHit": "14", "VOnBlock": "10", "CancelInfo": "S*V", "Damage": "60", "Stun": "100", "MeterGain": "0 / 30", "Properties": "High", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "S*Can only be canceled into Soul Sphere - Ankh and Soul Spark", "type": "Normal Moves"}, "Standing HK": {"Move": "HK", "Startup": "11", "Active": "6", "Recovery": "23", "OnHit": "-4", "OnBlock": "-8", "VOnHit": "18", "VOnBlock": "14", "CancelInfo": "V", "Damage": "90", "Stun": "150", "MeterGain": "0 / 50", "Properties": "High", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "Triggers Crush Counter (crumple)\nForces stand", "type": "Normal Moves"}, "Crouching LP": {"Move": "(WHILE CROUCHING) LP", "Startup": "4", "Active": "4", "Recovery": "8(*11)", "OnHit": "4", "OnBlock": "2", "VOnHit": "10", "VOnBlock": "8", "CancelInfo": "SCAV", "Damage": "30", "Stun": "70", "MeterGain": "0 / 20", "Properties": "High", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "*On whiff", "type": "Normal Moves"}, "Crouching MP": {"Move": "(WHILE CROUCHING) MP", "Startup": "7", "Active": "6", "Recovery": "13", "OnHit": "2", "OnBlock": "-3", "VOnHit": "15", "VOnBlock": "10", "CancelInfo": "SCAV", "Damage": "60", "Stun": "100", "MeterGain": "0 / 30", "Properties": "High", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "", "type": "Normal Moves"}, "Crouching HP": {"Move": "(WHILE CROUCHING) HP", "Startup": "9", "Active": "5", "Recovery": "19", "OnHit": "-1", "OnBlock": "-5", "VOnHit": "17", "VOnBlock": "13", "CancelInfo": "SCAV", "Damage": "80\n(*70)", "Stun": "150", "MeterGain": "0 / 50", "Properties": "High", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "Triggers Crush Counter (D)\nForces stand\n*From active frame 2F", "type": "Normal Moves"}, "Crouching LK": {"Move": "(WHILE CROUCHING) LK", "Startup": "4", "Active": "2", "Recovery": "9", "OnHit": "4", "OnBlock": "1", "VOnHit": "9", "VOnBlock": "6", "CancelInfo": "S*V", "Damage": "20", "Stun": "70", "MeterGain": "0 / 20", "Properties": "Low", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "S*Can only be canceled into Soul Sphere - Ankh and Soul Spark\nStanding/Crouching LP can be rapid canceled", "type": "Normal Moves"}, "Crouching MK": {"Move": "(WHILE CROUCHING) MK", "Startup": "7", "Active": "3", "Recovery": "14", "OnHit": "3", "OnBlock": "2", "VOnHit": "14", "VOnBlock": "13", "CancelInfo": "SCAV", "Damage": "50", "Stun": "100", "MeterGain": "0 / 30", "Properties": "Low", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "", "type": "Normal Moves"}, "Crouching HK": {"Move": "(WHILE CROUCHING) HK", "Startup": "11", "Active": "3", "Recovery": "33", "OnHit": "D", "OnBlock": "-16", "VOnHit": "D", "VOnBlock": "14", "CancelInfo": "V", "Damage": "90", "Stun": "150", "MeterGain": "0 / 50", "Properties": "Low", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "Triggers Crush Counter (D)", "type": "Normal Moves"}, "Jumping LP": {"Move": "(DURING JUMP) LP", "Startup": "4", "Active": "5", "Recovery": "", "OnHit": "", "OnBlock": "", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "40", "Stun": "70", "MeterGain": "0 / 20", "Properties": "Mid", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "", "type": "Normal Moves"}, "Jumping MP": {"Move": "(DURING JUMP) MP", "Startup": "8", "Active": "4", "Recovery": "", "OnHit": "", "OnBlock": "", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "70", "Stun": "100", "MeterGain": "0 / 30", "Properties": "Mid", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "", "type": "Normal Moves"}, "Jumping HP": {"Move": "(DURING JUMP) HP", "Startup": "13", "Active": "4", "Recovery": "", "OnHit": "", "OnBlock": "", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "90", "Stun": "150", "MeterGain": "0 / 50", "Properties": "Mid", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "", "type": "Normal Moves"}, "Jumping LK": {"Move": "(DURING JUMP) LK", "Startup": "4", "Active": "6", "Recovery": "", "OnHit": "", "OnBlock": "", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "40", "Stun": "70", "MeterGain": "0 / 20", "Properties": "Mid", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "", "type": "Normal Moves"}, "Jumping MK": {"Move": "(DURING JUMP) MK", "Startup": "7", "Active": "4", "Recovery": "", "OnHit": "", "OnBlock": "", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "60", "Stun": "100", "MeterGain": "0 / 30", "Properties": "Mid", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "", "type": "Normal Moves"}, "Jumping HK": {"Move": "(DURING JUMP) HK", "Startup": "9", "Active": "4", "Recovery": "", "OnHit": "", "OnBlock": "", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "90", "Stun": "150", "MeterGain": "0 / 50", "Properties": "Mid", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "", "type": "Normal Moves"}, "Divine Retribution": {"Move": "6 + MK", "Startup": "27", "Active": "2", "Recovery": "23", "OnHit": "1", "OnBlock": "-7", "VOnHit": "", "VOnBlock": "", "CancelInfo": "S*", "Damage": "60", "Stun": "100", "MeterGain": "0 / 30", "Properties": "Mid/Mid", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "S*The first hit only can only be canceled into Soul Sphere - Ankh and Soul Spark", "type": "Unique Attacks"}, "Judgment Of Anubis": {"Move": "3 + MK", "Startup": "11", "Active": "11", "Recovery": "18", "OnHit": "-6", "OnBlock": "-10", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "50", "Stun": "100", "MeterGain": "0 / 30", "Properties": "Low", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "Area around her head is projectile invincible from 11F - 35F", "type": "Unique Attacks"}, "Khamun Kick": {"Move": "(DURING JUMP) 2 + K", "Startup": "12", "Active": "Until landing", "Recovery": "9 frame(s) after landing", "OnHit": "", "OnBlock": "", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "60", "Stun": "70", "MeterGain": "0 / 30", "Properties": "High", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "", "type": "Unique Attacks"}, "Overflowing Nile": {"Move": "(CLOSE TO OPPONENT) 6 OR 5 + LP LK", "Startup": "5", "Active": "3", "Recovery": "17", "OnHit": "D", "OnBlock": "", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "120", "Stun": "170", "MeterGain": "0 / 80", "Properties": "Throw", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "", "type": "Normal Throws"}, "Pyramid Hopscotch": {"Move": "(CLOSE TO OPPONENT) 4 + LP LK", "Startup": "5", "Active": "3", "Recovery": "17", "OnHit": "D", "OnBlock": "", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "140", "Stun": "200", "MeterGain": "0 / 100", "Properties": "Throw", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "", "type": "Normal Throws"}, "Soul Reflect: Kamal": {"Move": "MP MK", "Startup": "9", "Active": "3(*8)", "Recovery": "37", "OnHit": "D", "OnBlock": "-18", "VOnHit": "D", "VOnBlock": "16", "CancelInfo": "S*CAV", "Damage": "80", "Stun": "150", "MeterGain": "V-Gauge 0 / 100", "Properties": "High", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "*Value while refrection projectile\nCan reflect projectiles. Cannot reflect EX or stronger projectiles\nS*Can canceled into Judgement of Thoth, Prophecy of Thoth", "type": "V-System"}, "Soul Reflect: Stella": {"Move": "2 + MP MK", "Startup": "14", "Active": "3(*15)", "Recovery": "35", "OnHit": "D", "OnBlock": "-16", "VOnHit": "D", "VOnBlock": "16", "CancelInfo": "S*CAV", "Damage": "80", "Stun": "150", "MeterGain": "V-Gauge 0 / 100", "Properties": "High", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "*Value while refrection projectile\nCan reflect projectiles. Cannot reflect EX or stronger projectiles\nS*Can canceled into Judgement of Thoth, Prophecy of Thoth", "type": "V-System"}, "Prophecy Of Thoth": {"Move": "(DURING V-TRIGGER II) HP HK", "Startup": "", "Active": "", "Recovery": "42 total frames", "OnHit": "", "OnBlock": "", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "", "Stun": "", "MeterGain": "", "Properties": "", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "Can be canceled from normal moves that are V-Trigger cancelable", "type": "Special Moves"}, "Left Eye Of The Lion": {"Move": "(DURING GUARD) 6 + LMHP", "Startup": "", "Active": "", "Recovery": "43 total frames", "OnHit": "", "OnBlock": "", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "", "Stun": "", "MeterGain": "V-Gauge -300 / 0", "Properties": "", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "1F - 22F attack & projectile invincibility\n23F - 39F full invincibility\nTeleports to the other side of the opponent regardless of distance\nRecover 200 stun upon activation", "type": "V-System"}, "L Soul Sphere": {"Move": "(WITH THE CRYSTAL BALL) 236 + LP", "Startup": "14", "Active": "26", "Recovery": "38 total frames", "OnHit": "2", "OnBlock": "-8", "VOnHit": "", "VOnBlock": "", "CancelInfo": "CA", "Damage": "40", "Stun": "70", "MeterGain": "5 / 20", "Properties": "High", "ProjectileNullification": "\u25cb", "AirborneHurtbox": "", "Comments": "CA cancel can only be performed in close range on base hit", "type": "Special Moves"}, "M Soul Sphere": {"Move": "(WITH THE CRYSTAL BALL) 236 + MP", "Startup": "14", "Active": "33", "Recovery": "43 total frames", "OnHit": "1", "OnBlock": "-11", "VOnHit": "", "VOnBlock": "", "CancelInfo": "CA", "Damage": "40", "Stun": "70", "MeterGain": "5 / 20", "Properties": "High", "ProjectileNullification": "\u25cb", "AirborneHurtbox": "", "Comments": "CA cancel can only be performed in close range on base hit", "type": "Special Moves"}, "H Soul Sphere": {"Move": "(WITH THE CRYSTAL BALL) 236 + HP", "Startup": "14", "Active": "33", "Recovery": "36 total frames", "OnHit": "4", "OnBlock": "-4", "VOnHit": "", "VOnBlock": "", "CancelInfo": "CA", "Damage": "40", "Stun": "70", "MeterGain": "5 / 20", "Properties": "High", "ProjectileNullification": "\u25cb", "AirborneHurtbox": "", "Comments": "Will not hit crouching opponents", "type": "Special Moves"}, "EX L Soul Sphere": {"Move": "(WITH THE CRYSTAL BALL) 236 + LP MP", "Startup": "19", "Active": "21", "Recovery": "47 total frames", "OnHit": "7", "OnBlock": "3", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "60", "Stun": "0", "MeterGain": "-300 / 0", "Properties": "High", "ProjectileNullification": "\u25cb", "AirborneHurtbox": "", "Comments": "", "type": "Special Moves"}, "EX M Soul Sphere": {"Move": "(WITH THE CRYSTAL BALL) 236 + LP HP", "Startup": "10", "Active": "21", "Recovery": "51 total frames", "OnHit": "D", "OnBlock": "-10", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "150", "Stun": "200", "MeterGain": "-300 / 0", "Properties": "High", "ProjectileNullification": "\u25cb", "AirborneHurtbox": "", "Comments": "", "type": "Special Moves"}, "EX H Soul Sphere": {"Move": "(WITH THE CRYSTAL BALL) 236 + MP HP", "Startup": "10", "Active": "21", "Recovery": "40 total frames", "OnHit": "0", "OnBlock": "-9", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "150\n(*40)", "Stun": "200\n(*70)", "MeterGain": "-300 / 0", "Properties": "High", "ProjectileNullification": "\u25cb", "AirborneHurtbox": "", "Comments": "Locks if it hits an airborne opponent\n*On grounded hit", "type": "Special Moves"}, "L Guardian Of The Sun": {"Move": "(WITH THE CRYSTAL BALL) 623 + LK", "Startup": "6", "Active": "15", "Recovery": "21+30 frame(s) after landing", "OnHit": "D", "OnBlock": "", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "100", "Stun": "150", "MeterGain": "10 / 50", "Properties": "High", "ProjectileNullification": "", "AirborneHurtbox": "6F - 41F", "Comments": "", "type": "Special Moves"}, "M Guardian Of The Sun": {"Move": "(WITH THE CRYSTAL BALL) 623 + MK", "Startup": "8", "Active": "15", "Recovery": "21+30 frame(s) after landing", "OnHit": "D", "OnBlock": "", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "120", "Stun": "150", "MeterGain": "10 / 50", "Properties": "High", "ProjectileNullification": "", "AirborneHurtbox": "8F - 43F", "Comments": "", "type": "Special Moves"}, "H Guardian Of The Sun": {"Move": "(WITH THE CRYSTAL BALL) 623 + HK", "Startup": "10", "Active": "15", "Recovery": "21+30 frame(s) after landing", "OnHit": "D", "OnBlock": "", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "140", "Stun": "200", "MeterGain": "10 / 50", "Properties": "High", "ProjectileNullification": "", "AirborneHurtbox": "10F - 45F", "Comments": "", "type": "Special Moves"}, "EX Guardian Of The Sun": {"Move": "(WITH THE CRYSTAL BALL) 623 + K K", "Startup": "6", "Active": "15", "Recovery": "21+30 frame(s) after landing", "OnHit": "D", "OnBlock": "", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "150", "Stun": "200", "MeterGain": "-300 / 0", "Properties": "High", "ProjectileNullification": "", "AirborneHurtbox": "6F - 41F", "Comments": "5F - 20F full invincibility", "type": "Special Moves"}, "L Judgement Of Thoth": {"Move": "(DURING V-TRIGGER II) 214 + LP", "Startup": "11", "Active": "", "Recovery": "37 total frames", "OnHit": "23", "OnBlock": "12", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "120", "Stun": "120", "MeterGain": "0 / 120", "Properties": "High", "ProjectileNullification": "\u25cb", "AirborneHurtbox": "", "Comments": "Uses 1000F V-Gauge Timer\nRecovery value is based on contact with a standing Ryu\nCan be canceled from normal moves that are V-Trigger cancelable", "type": "Special Moves"}, "M Judgement Of Thoth": {"Move": "(DURING V-TRIGGER II) 214 + MP", "Startup": "11", "Active": "", "Recovery": "37 total frames", "OnHit": "11", "OnBlock": "8", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "120", "Stun": "120", "MeterGain": "0 / 120", "Properties": "High", "ProjectileNullification": "\u25cb", "AirborneHurtbox": "", "Comments": "Uses 1000F V-Gauge Timer\nRecovery value is based on contact with a standing Ryu\nCan be canceled from normal moves that are V-Trigger cancelable", "type": "Special Moves"}, "H Judgement Of Thoth": {"Move": "(DURING V-TRIGGER II) 214 + HP", "Startup": "11", "Active": "", "Recovery": "37 total frames", "OnHit": "8", "OnBlock": "2", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "120", "Stun": "120", "MeterGain": "0 / 120", "Properties": "High", "ProjectileNullification": "\u25cb", "AirborneHurtbox": "", "Comments": "Uses 1000F V-Gauge Timer\nRecovery value is based on contact with a standing Ryu\nCan be canceled from normal moves that are V-Trigger cancelable", "type": "Special Moves"}, "The Nefertem": {"Move": "236 236 + P", "Startup": "1+3", "Active": "16", "Recovery": "65", "OnHit": "D", "OnBlock": "-46", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "330", "Stun": "0", "MeterGain": "-900 / 0", "Properties": "High", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "1F - 20F full invincibility", "type": "Critical Art"}}};  module.exports = { db : db }