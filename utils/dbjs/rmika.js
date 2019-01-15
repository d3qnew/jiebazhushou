const db = {"vt1": {"Standing LP": {"Move": "LP", "Startup": "4", "Active": "2", "Recovery": "7", "OnHit": "4", "OnBlock": "2", "VOnHit": "1", "VOnBlock": "-1", "CancelInfo": "SCAV", "Damage": "30", "Stun": "70", "MeterGain": "0 / 20", "Properties": "High", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "", "type": "Normal Moves"}, "Standing MP": {"Move": "MP", "Startup": "5", "Active": "2", "Recovery": "13", "OnHit": "8", "OnBlock": "-2", "VOnHit": "11", "VOnBlock": "1", "CancelInfo": "SCAV", "Damage": "60", "Stun": "100", "MeterGain": "0 / 30", "Properties": "High", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "", "type": "Normal Moves"}, "Standing HP": {"Move": "HP", "Startup": "7", "Active": "3", "Recovery": "18", "OnHit": "2", "OnBlock": "-6", "VOnHit": "11", "VOnBlock": "6", "CancelInfo": "SCAV", "Damage": "90", "Stun": "150", "MeterGain": "0 / 50", "Properties": "High", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "", "type": "Normal Moves"}, "Standing LK": {"Move": "LK", "Startup": "4", "Active": "3", "Recovery": "8", "OnHit": "2", "OnBlock": "1", "VOnHit": "1", "VOnBlock": "0", "CancelInfo": "V", "Damage": "30", "Stun": "70", "MeterGain": "0 / 20", "Properties": "High", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "", "type": "Normal Moves"}, "Standing MK": {"Move": "MK", "Startup": "8", "Active": "4", "Recovery": "15", "OnHit": "2", "OnBlock": "-3", "VOnHit": "-1", "VOnBlock": "-6", "CancelInfo": "V", "Damage": "60", "Stun": "100", "MeterGain": "0 / 30", "Properties": "High", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "8F - 17F throw invincibility\nCan move forward with directional input", "type": "Normal Moves"}, "Standing HK": {"Move": "HK", "Startup": "13", "Active": "2", "Recovery": "20", "OnHit": "2", "OnBlock": "-4", "VOnHit": "-2", "VOnBlock": "-8", "CancelInfo": "V", "Damage": "90", "Stun": "150", "MeterGain": "0 / 50", "Properties": "High", "ProjectileNullification": "", "AirborneHurtbox": "7F - 12F", "Comments": "Triggers Crush Counter (D)", "type": "Normal Moves"}, "Standing HK (Hold Button)": {"Move": "HK (HOLD BUTTONS)", "Startup": "35", "Active": "1", "Recovery": "3+20 frame(s) after landing", "OnHit": "4", "OnBlock": "2", "VOnHit": "-3", "VOnBlock": "-5", "CancelInfo": "V", "Damage": "100", "Stun": "150", "MeterGain": "0 / 50", "Properties": "High", "ProjectileNullification": "", "AirborneHurtbox": "23F - 38F", "Comments": "Triggers Crush Counter (+26F)", "type": "Normal Moves"}, "Crouching LP": {"Move": "(WHILE CROUCHING) LP", "Startup": "3", "Active": "2", "Recovery": "6", "OnHit": "3", "OnBlock": "1", "VOnHit": "-1", "VOnBlock": "-3", "CancelInfo": "SCAV", "Damage": "20", "Stun": "70", "MeterGain": "0 / 20", "Properties": "High", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "", "type": "Normal Moves"}, "Crouching MP": {"Move": "(WHILE CROUCHING) MP", "Startup": "7", "Active": "4", "Recovery": "16", "OnHit": "1", "OnBlock": "-1", "VOnHit": "9", "VOnBlock": "7", "CancelInfo": "V", "Damage": "60", "Stun": "100", "MeterGain": "0 / 30", "Properties": "High", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "Will not hit crouching opponents", "type": "Normal Moves"}, "Crouching HP": {"Move": "(WHILE CROUCHING) HP", "Startup": "11", "Active": "6", "Recovery": "17", "OnHit": "-2", "OnBlock": "-6", "VOnHit": "9", "VOnBlock": "5", "CancelInfo": "CAV", "Damage": "80", "Stun": "150", "MeterGain": "0 / 50", "Properties": "High", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "", "type": "Normal Moves"}, "Crouching LK": {"Move": "(WHILE CROUCHING) LK", "Startup": "4", "Active": "2", "Recovery": "8", "OnHit": "3", "OnBlock": "1", "VOnHit": "1", "VOnBlock": "-1", "CancelInfo": "V", "Damage": "20", "Stun": "70", "MeterGain": "0 / 20", "Properties": "Low", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "", "type": "Normal Moves"}, "Crouching MK": {"Move": "(WHILE CROUCHING) MK", "Startup": "7", "Active": "3", "Recovery": "15", "OnHit": "3", "OnBlock": "-2", "VOnHit": "9", "VOnBlock": "4", "CancelInfo": "V", "Damage": "60", "Stun": "100", "MeterGain": "0 / 30", "Properties": "High", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "", "type": "Normal Moves"}, "Crouching HK": {"Move": "(WHILE CROUCHING) HK", "Startup": "12", "Active": "8", "Recovery": "21", "OnHit": "D", "OnBlock": "-12", "VOnHit": "D", "VOnBlock": "5", "CancelInfo": "V", "Damage": "90", "Stun": "150", "MeterGain": "0 / 50", "Properties": "Low", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "Triggers Crush Counter (D)", "type": "Normal Moves"}, "Jumping LP": {"Move": "(DURING JUMP) LP", "Startup": "3", "Active": "5", "Recovery": "", "OnHit": "", "OnBlock": "", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "40", "Stun": "70", "MeterGain": "0 / 20", "Properties": "Mid", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "", "type": "Normal Moves"}, "Jumping MP": {"Move": "(DURING JUMP) MP", "Startup": "7", "Active": "5", "Recovery": "", "OnHit": "", "OnBlock": "", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "60", "Stun": "100", "MeterGain": "0 / 30", "Properties": "Mid", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "", "type": "Normal Moves"}, "Jumping HP": {"Move": "(DURING JUMP) HP", "Startup": "8", "Active": "5", "Recovery": "", "OnHit": "", "OnBlock": "", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "90", "Stun": "150", "MeterGain": "0 / 50", "Properties": "Mid", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "", "type": "Normal Moves"}, "Jumping LK": {"Move": "(DURING JUMP) LK", "Startup": "4", "Active": "8", "Recovery": "", "OnHit": "", "OnBlock": "", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "40", "Stun": "70", "MeterGain": "0 / 20", "Properties": "Mid", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "Can cross-up", "type": "Normal Moves"}, "Jumping MK": {"Move": "(DURING JUMP) MK", "Startup": "6", "Active": "5", "Recovery": "", "OnHit": "", "OnBlock": "", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "70", "Stun": "100", "MeterGain": "0 / 30", "Properties": "Mid", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "", "type": "Normal Moves"}, "Jumping HK": {"Move": "(DURING JUMP) HK", "Startup": "7", "Active": "7", "Recovery": "", "OnHit": "", "OnBlock": "", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "90", "Stun": "150", "MeterGain": "0 / 50", "Properties": "Mid", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "", "type": "Normal Moves"}, "Dive Bomb": {"Move": "(DURING FORWARD JUMP) 2 + MP", "Startup": "16", "Active": "Until landing", "Recovery": "27 frame(s) after landing", "OnHit": "D", "OnBlock": "", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "70", "Stun": "100", "MeterGain": "0 / 50", "Properties": "Mid", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "Can cross-up", "type": "Unique Attacks"}, "Lady Mika": {"Move": "6 + HP", "Startup": "10", "Active": "3", "Recovery": "12", "OnHit": "D", "OnBlock": "3", "VOnHit": "D", "VOnBlock": "6", "CancelInfo": "SCAVVS", "Damage": "80", "Stun": "150", "MeterGain": "0 / 50", "Properties": "High", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "Triggers Crush Counter (D)", "type": "Unique Attacks"}, "Passion Press": {"Move": "4 OR 6 + MP", "Startup": "8", "Active": "2", "Recovery": "20", "OnHit": "0", "OnBlock": "-8", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "50", "Stun": "100", "MeterGain": "0 / 30", "Properties": "High", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "", "type": "Unique Attacks"}, "Passion Rope Throw": {"Move": "4 OR 6 + MP > 4 OR 6 + MP", "Startup": "2", "Active": "2", "Recovery": "50", "OnHit": "", "OnBlock": "", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "30", "Stun": "0", "MeterGain": "", "Properties": "Throw", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "Opponent takes damage upon hitting the wall", "type": "Unique Attacks"}, "Stomp Chop": {"Move": "LK > MP", "Startup": "4", "Active": "2", "Recovery": "14", "OnHit": "1", "OnBlock": "-5", "VOnHit": "5", "VOnBlock": "-1", "CancelInfo": "SCAV", "Damage": "50", "Stun": "100", "MeterGain": "0 / 30", "Properties": "High", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "", "type": "Unique Attacks"}, "Shooting Start Combo": {"Move": "(DURING JUMP) MP > HP", "Startup": "8", "Active": "5", "Recovery": "", "OnHit": "", "OnBlock": "", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "60", "Stun": "100", "MeterGain": "0 / 50", "Properties": "Mid", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "", "type": "Unique Attacks"}, "Daydream Headlock": {"Move": "(CLOSE TO OPPONENT) 6 OR 5 + LP LK", "Startup": "5", "Active": "3", "Recovery": "17", "OnHit": "", "OnBlock": "", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "140", "Stun": "200", "MeterGain": "0 / 100", "Properties": "Throw", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "", "type": "Normal Throws"}, "Sell Down": {"Move": "(CLOSE TO OPPONENT) 4 + LP LK", "Startup": "5", "Active": "3", "Recovery": "17", "OnHit": "", "OnBlock": "", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "140", "Stun": "200", "MeterGain": "0 / 100", "Properties": "Throw", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "", "type": "Normal Throws"}, "Dream Driver": {"Move": "(WHILE OPPONENT IS CROUCHING) (CLOSE TO OPPONENT) 6 OR 5 + LP LK", "Startup": "5", "Active": "3", "Recovery": "17", "OnHit": "", "OnBlock": "", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "100", "Stun": "120", "MeterGain": "0 / 70", "Properties": "Throw", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "", "type": "Normal Throws"}, "Mic Performance": {"Move": "MP MK", "Startup": "75", "Active": "25", "Recovery": "90 total frames", "OnHit": "11", "OnBlock": "4", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "40", "Stun": "70", "MeterGain": "V-Gauge 50 / 50", "Properties": "High", "ProjectileNullification": "\u25cb", "AirborneHurtbox": "", "Comments": "Armor from 5F to 79F\nIncreased command throw damage + V-Gauge meter gain based on the length of the button hold\n1F - 186F: 1.2x (V-Gauge + 50)\n187F - 395F: 1.5x (V-Gauge + 100)\n396F - 559F: 2x (V-Gauge + 100)\n560F - 707F: 3x (V-Gauge + 100)\n708F - 764F: 5x (V-Gauge + 100)\n765F - 940F: 9x (V-Gauge + 150)", "type": "V-System"}, "Nadeshiko (above)": {"Move": "HP HK", "Startup": "1+25", "Active": "8", "Recovery": "6 total frames", "OnHit": "", "OnBlock": "", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "100", "Stun": "100", "MeterGain": "V-Gauge -600 / 0", "Properties": "High", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "", "type": "V-System"}, "Nadeshiko (above) (Hold Button)": {"Move": "HP HK (HOLD BUTTONS)", "Startup": "1+120", "Active": "8", "Recovery": "10 total frames", "OnHit": "", "OnBlock": "", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "100", "Stun": "100", "MeterGain": "V-Gauge -600 / 0", "Properties": "High", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "", "type": "V-System"}, "Nadeshiko (front)": {"Move": "4 + HP HK", "Startup": "1+35", "Active": "4", "Recovery": "3 total frames", "OnHit": "", "OnBlock": "", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "100", "Stun": "100", "MeterGain": "V-Gauge -600 / 0", "Properties": "High", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "", "type": "V-System"}, "Nadeshiko (front) (Hold Button)": {"Move": "4 + HP HK (HOLD BUTTONS)", "Startup": "1+116", "Active": "4", "Recovery": "10 total frames", "OnHit": "", "OnBlock": "", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "100", "Stun": "100", "MeterGain": "V-Gauge -600 / 0", "Properties": "High", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "", "type": "V-System"}, "Nadeshiko (behind)": {"Move": "6 + HP HK", "Startup": "1+35", "Active": "4", "Recovery": "3 total frames", "OnHit": "", "OnBlock": "", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "100", "Stun": "100", "MeterGain": "V-Gauge -600 / 0", "Properties": "High", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "", "type": "V-System"}, "Nadeshiko (behind) (Hold Button)": {"Move": "6 + HP HK (HOLD BUTTONS)", "Startup": "1+116", "Active": "4", "Recovery": "10 total frames", "OnHit": "", "OnBlock": "", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "100", "Stun": "100", "MeterGain": "V-Gauge -600 / 0", "Properties": "High", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "", "type": "V-System"}, "Peach Gator": {"Move": "(DURING GUARD) 6 + LMHK", "Startup": "17", "Active": "2", "Recovery": "24", "OnHit": "D", "OnBlock": "-2", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "60", "Stun": "0", "MeterGain": "V-Gauge -300 / 0", "Properties": "High", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "1F - 30F attack & projectile invincibility\nRecover 200 stun upon activation", "type": "V-System"}, "L Shooting Peach": {"Move": "236 + LP", "Startup": "10", "Active": "6", "Recovery": "25", "OnHit": "D", "OnBlock": "-7", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "80", "Stun": "150", "MeterGain": "20 / 40", "Properties": "High", "ProjectileNullification": "", "AirborneHurtbox": "8F - 24F", "Comments": "", "type": "Special Moves"}, "M Shooting Peach": {"Move": "236 + MP", "Startup": "13", "Active": "8", "Recovery": "25", "OnHit": "D", "OnBlock": "-10", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "90", "Stun": "150", "MeterGain": "20 / 40", "Properties": "High", "ProjectileNullification": "", "AirborneHurtbox": "12F - 28F", "Comments": "", "type": "Special Moves"}, "H Shooting Peach": {"Move": "236 + HP", "Startup": "20", "Active": "13", "Recovery": "17", "OnHit": "D", "OnBlock": "-12", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "100", "Stun": "150", "MeterGain": "20 / 40", "Properties": "High", "ProjectileNullification": "", "AirborneHurtbox": "15F - 35F", "Comments": "", "type": "Special Moves"}, "EX Shooting Peach": {"Move": "236 + P P", "Startup": "5", "Active": "10", "Recovery": "28", "OnHit": "D", "OnBlock": "-15", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "130", "Stun": "200", "MeterGain": "-300 / 0", "Properties": "High", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "Armor from 3F to 9F", "type": "Special Moves"}, "L Rainbow Typhoon": {"Move": "63214 + LP", "Startup": "5", "Active": "2", "Recovery": "60", "OnHit": "D", "OnBlock": "", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "180", "Stun": "200", "MeterGain": "20 / 100", "Properties": "Throw", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "", "type": "Special Moves"}, "M Rainbow Typhoon": {"Move": "63214 + MP", "Startup": "5", "Active": "2", "Recovery": "60", "OnHit": "D", "OnBlock": "", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "190", "Stun": "200", "MeterGain": "20 / 100", "Properties": "Throw", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "", "type": "Special Moves"}, "H Rainbow Typhoon": {"Move": "63214 + HP", "Startup": "5", "Active": "2", "Recovery": "60", "OnHit": "D", "OnBlock": "", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "200", "Stun": "200", "MeterGain": "20 / 100", "Properties": "Throw", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "", "type": "Special Moves"}, "EX Rainbow Typhoon": {"Move": "63214 + P P", "Startup": "5", "Active": "2", "Recovery": "60", "OnHit": "D", "OnBlock": "", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "240", "Stun": "250", "MeterGain": "-300 / 0", "Properties": "Throw", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "", "type": "Special Moves"}, "L Brimstone": {"Move": "63214 + LK", "Startup": "5", "Active": "2", "Recovery": "60", "OnHit": "D", "OnBlock": "", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "120", "Stun": "150", "MeterGain": "20 / 80", "Properties": "Throw", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "", "type": "Special Moves"}, "M Brimstone": {"Move": "63214 + MK", "Startup": "5", "Active": "2", "Recovery": "60", "OnHit": "D", "OnBlock": "", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "130", "Stun": "150", "MeterGain": "20 / 80", "Properties": "Throw", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "", "type": "Special Moves"}, "H Brimstone": {"Move": "63214 + HK", "Startup": "5", "Active": "2", "Recovery": "60", "OnHit": "D", "OnBlock": "", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "140", "Stun": "150", "MeterGain": "20 / 80", "Properties": "Throw", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "", "type": "Special Moves"}, "EX Brimstone": {"Move": "63214 + K K", "Startup": "5", "Active": "2", "Recovery": "60", "OnHit": "D", "OnBlock": "", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "180", "Stun": "200", "MeterGain": "-300 / 0", "Properties": "Throw", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "", "type": "Special Moves"}, "L Wingless Airplane": {"Move": "236 + LK", "Startup": "5", "Active": "5", "Recovery": "23+20 frame(s) after landing", "OnHit": "D", "OnBlock": "", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "130", "Stun": "200", "MeterGain": "0 / 60", "Properties": "High", "ProjectileNullification": "", "AirborneHurtbox": "4F -", "Comments": "", "type": "Special Moves"}, "M Wingless Airplane": {"Move": "236 + MK", "Startup": "7", "Active": "8", "Recovery": "20+20 frame(s) after landing", "OnHit": "D", "OnBlock": "", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "130", "Stun": "200", "MeterGain": "0 / 60", "Properties": "High", "ProjectileNullification": "", "AirborneHurtbox": "6F -", "Comments": "", "type": "Special Moves"}, "H Wingless Airplane": {"Move": "236 + HK", "Startup": "10", "Active": "11", "Recovery": "17+20 frame(s) after landing", "OnHit": "D", "OnBlock": "", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "130", "Stun": "200", "MeterGain": "0 / 60", "Properties": "High", "ProjectileNullification": "", "AirborneHurtbox": "9F -", "Comments": "", "type": "Special Moves"}, "EX Wingless Airplane": {"Move": "236 + K K", "Startup": "5", "Active": "11", "Recovery": "17+20 frame(s) after landing", "OnHit": "D", "OnBlock": "", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "160", "Stun": "200", "MeterGain": "-300 / 0", "Properties": "High", "ProjectileNullification": "", "AirborneHurtbox": "4F -", "Comments": "5F - 15F full invincibility", "type": "Special Moves"}, "Peach Assault": {"Move": "214 214 + P", "Startup": "1+2", "Active": "2", "Recovery": "51", "OnHit": "D", "OnBlock": "", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "360", "Stun": "0", "MeterGain": "-900 / 0", "Properties": "Throw", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "1F - 4F full invincibility", "type": "Critical Art"}}, "vt2": {"Standing LP": {"Move": "LP", "Startup": "4", "Active": "2", "Recovery": "7", "OnHit": "4", "OnBlock": "2", "VOnHit": "5|1", "VOnBlock": "3|-1", "CancelInfo": "SCAV", "Damage": "30", "Stun": "70", "MeterGain": "0 / 20", "Properties": "High", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "", "type": "Normal Moves"}, "Standing MP": {"Move": "MP", "Startup": "5", "Active": "2", "Recovery": "13", "OnHit": "8", "OnBlock": "-2", "VOnHit": "15|11", "VOnBlock": "5|1", "CancelInfo": "SCAV", "Damage": "60", "Stun": "100", "MeterGain": "0 / 30", "Properties": "High", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "", "type": "Normal Moves"}, "Standing HP": {"Move": "HP", "Startup": "7", "Active": "3", "Recovery": "18", "OnHit": "2", "OnBlock": "-6", "VOnHit": "15|11", "VOnBlock": "10|6", "CancelInfo": "SCAV", "Damage": "90", "Stun": "150", "MeterGain": "0 / 50", "Properties": "High", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "", "type": "Normal Moves"}, "Standing LK": {"Move": "LK", "Startup": "4", "Active": "3", "Recovery": "8", "OnHit": "2", "OnBlock": "1", "VOnHit": "5|1", "VOnBlock": "4|0", "CancelInfo": "V", "Damage": "30", "Stun": "70", "MeterGain": "0 / 20", "Properties": "High", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "", "type": "Normal Moves"}, "Standing MK": {"Move": "MK", "Startup": "8", "Active": "4", "Recovery": "15", "OnHit": "2", "OnBlock": "-3", "VOnHit": "3|-1", "VOnBlock": "-2|-6", "CancelInfo": "V", "Damage": "60", "Stun": "100", "MeterGain": "0 / 30", "Properties": "High", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "8F - 17F throw invincibility\nCan move forward with directional input", "type": "Normal Moves"}, "Standing HK": {"Move": "HK", "Startup": "13", "Active": "2", "Recovery": "20", "OnHit": "2", "OnBlock": "-4", "VOnHit": "2|-2", "VOnBlock": "-4|-8", "CancelInfo": "V", "Damage": "90", "Stun": "150", "MeterGain": "0 / 50", "Properties": "High", "ProjectileNullification": "", "AirborneHurtbox": "7F - 12F", "Comments": "Triggers Crush Counter (D)", "type": "Normal Moves"}, "Standing HK (Hold Button)": {"Move": "HK (HOLD BUTTONS)", "Startup": "35", "Active": "1", "Recovery": "3+20 frame(s) after landing", "OnHit": "4", "OnBlock": "2", "VOnHit": "1|-3", "VOnBlock": "-1|-5", "CancelInfo": "V", "Damage": "100", "Stun": "150", "MeterGain": "0 / 50", "Properties": "High", "ProjectileNullification": "", "AirborneHurtbox": "23F - 38F", "Comments": "Triggers Crush Counter (+26F)", "type": "Normal Moves"}, "Crouching LP": {"Move": "(WHILE CROUCHING) LP", "Startup": "3", "Active": "2", "Recovery": "6", "OnHit": "3", "OnBlock": "1", "VOnHit": "3|1", "VOnBlock": "1|-1", "CancelInfo": "SCAV", "Damage": "20", "Stun": "70", "MeterGain": "0 / 20", "Properties": "High", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "", "type": "Normal Moves"}, "Crouching MP": {"Move": "(WHILE CROUCHING) MP", "Startup": "7", "Active": "4", "Recovery": "16", "OnHit": "1", "OnBlock": "-1", "VOnHit": "13|9", "VOnBlock": "11|-7", "CancelInfo": "V", "Damage": "60", "Stun": "100", "MeterGain": "0 / 30", "Properties": "High", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "Will not hit crouching opponents", "type": "Normal Moves"}, "Crouching HP": {"Move": "(WHILE CROUCHING) HP", "Startup": "11", "Active": "6", "Recovery": "17", "OnHit": "-2", "OnBlock": "-6", "VOnHit": "13|9", "VOnBlock": "9|5", "CancelInfo": "CAV", "Damage": "80", "Stun": "150", "MeterGain": "0 / 50", "Properties": "High", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "", "type": "Normal Moves"}, "Crouching LK": {"Move": "(WHILE CROUCHING) LK", "Startup": "4", "Active": "2", "Recovery": "8", "OnHit": "3", "OnBlock": "1", "VOnHit": "5|1", "VOnBlock": "3|0", "CancelInfo": "V", "Damage": "20", "Stun": "70", "MeterGain": "0 / 20", "Properties": "Low", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "", "type": "Normal Moves"}, "Crouching MK": {"Move": "(WHILE CROUCHING) MK", "Startup": "7", "Active": "3", "Recovery": "15", "OnHit": "3", "OnBlock": "-2", "VOnHit": "13|9", "VOnBlock": "8|4", "CancelInfo": "V", "Damage": "60", "Stun": "100", "MeterGain": "0 / 30", "Properties": "High", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "", "type": "Normal Moves"}, "Crouching HK": {"Move": "(WHILE CROUCHING) HK", "Startup": "12", "Active": "8", "Recovery": "21", "OnHit": "D", "OnBlock": "-12", "VOnHit": "D", "VOnBlock": "9|5", "CancelInfo": "V", "Damage": "90", "Stun": "150", "MeterGain": "0 / 50", "Properties": "Low", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "Triggers Crush Counter (D)", "type": "Normal Moves"}, "Jumping LP": {"Move": "(DURING JUMP) LP", "Startup": "3", "Active": "5", "Recovery": "", "OnHit": "", "OnBlock": "", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "40", "Stun": "70", "MeterGain": "0 / 20", "Properties": "Mid", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "", "type": "Normal Moves"}, "Jumping MP": {"Move": "(DURING JUMP) MP", "Startup": "7", "Active": "5", "Recovery": "", "OnHit": "", "OnBlock": "", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "60", "Stun": "100", "MeterGain": "0 / 30", "Properties": "Mid", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "", "type": "Normal Moves"}, "Jumping HP": {"Move": "(DURING JUMP) HP", "Startup": "8", "Active": "5", "Recovery": "", "OnHit": "", "OnBlock": "", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "90", "Stun": "150", "MeterGain": "0 / 50", "Properties": "Mid", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "", "type": "Normal Moves"}, "Jumping LK": {"Move": "(DURING JUMP) LK", "Startup": "4", "Active": "8", "Recovery": "", "OnHit": "", "OnBlock": "", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "40", "Stun": "70", "MeterGain": "0 / 20", "Properties": "Mid", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "Can cross-up", "type": "Normal Moves"}, "Jumping MK": {"Move": "(DURING JUMP) MK", "Startup": "6", "Active": "5", "Recovery": "", "OnHit": "", "OnBlock": "", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "70", "Stun": "100", "MeterGain": "0 / 30", "Properties": "Mid", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "", "type": "Normal Moves"}, "Jumping HK": {"Move": "(DURING JUMP) HK", "Startup": "7", "Active": "7", "Recovery": "", "OnHit": "", "OnBlock": "", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "90", "Stun": "150", "MeterGain": "0 / 50", "Properties": "Mid", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "", "type": "Normal Moves"}, "Dive Bomb": {"Move": "(DURING FORWARD JUMP) 2 + MP", "Startup": "16", "Active": "Until landing", "Recovery": "27 frame(s) after landing", "OnHit": "D", "OnBlock": "", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "70", "Stun": "100", "MeterGain": "0 / 50", "Properties": "Mid", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "Can cross-up", "type": "Unique Attacks"}, "Lady Mika": {"Move": "6 + HP", "Startup": "10", "Active": "3", "Recovery": "12", "OnHit": "D", "OnBlock": "3", "VOnHit": "D", "VOnBlock": "10|6", "CancelInfo": "SCAVVS", "Damage": "80", "Stun": "150", "MeterGain": "0 / 50", "Properties": "High", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "Triggers Crush Counter (D)", "type": "Unique Attacks"}, "Passion Press": {"Move": "4 OR 6 + MP", "Startup": "8", "Active": "2", "Recovery": "20", "OnHit": "0", "OnBlock": "-8", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "50", "Stun": "100", "MeterGain": "0 / 30", "Properties": "High", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "", "type": "Unique Attacks"}, "Passion Rope Throw": {"Move": "4 OR 6 + MP > 4 OR 6 + MP", "Startup": "2", "Active": "2", "Recovery": "50", "OnHit": "", "OnBlock": "", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "30", "Stun": "0", "MeterGain": "", "Properties": "Throw", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "Opponent takes damage upon hitting the wall", "type": "Unique Attacks"}, "Stomp Chop": {"Move": "LK > MP", "Startup": "4", "Active": "2", "Recovery": "14", "OnHit": "1", "OnBlock": "-5", "VOnHit": "9|5", "VOnBlock": "3|-1", "CancelInfo": "SCAV", "Damage": "50", "Stun": "100", "MeterGain": "0 / 30", "Properties": "High", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "", "type": "Unique Attacks"}, "Shooting Start Combo": {"Move": "(DURING JUMP) MP > HP", "Startup": "8", "Active": "5", "Recovery": "", "OnHit": "", "OnBlock": "", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "60", "Stun": "100", "MeterGain": "0 / 50", "Properties": "Mid", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "", "type": "Unique Attacks"}, "Daydream Headlock": {"Move": "(CLOSE TO OPPONENT) 6 OR 5 + LP LK", "Startup": "5", "Active": "3", "Recovery": "17", "OnHit": "", "OnBlock": "", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "140", "Stun": "200", "MeterGain": "0 / 100", "Properties": "Throw", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "", "type": "Normal Throws"}, "Sell Down": {"Move": "(CLOSE TO OPPONENT) 4 + LP LK", "Startup": "5", "Active": "3", "Recovery": "17", "OnHit": "", "OnBlock": "", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "140", "Stun": "200", "MeterGain": "0 / 100", "Properties": "Throw", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "", "type": "Normal Throws"}, "Dream Driver": {"Move": "(WHILE OPPONENT IS CROUCHING) (CLOSE TO OPPONENT) 6 OR 5 + LP LK", "Startup": "5", "Active": "3", "Recovery": "17", "OnHit": "", "OnBlock": "", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "100", "Stun": "120", "MeterGain": "0 / 70", "Properties": "Throw", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "", "type": "Normal Throws"}, "Mic Performance": {"Move": "MP MK", "Startup": "75", "Active": "25", "Recovery": "90 total frames", "OnHit": "11", "OnBlock": "4", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "40", "Stun": "70", "MeterGain": "V-Gauge 50 / 50", "Properties": "High", "ProjectileNullification": "\u25cb", "AirborneHurtbox": "", "Comments": "Armor from 5F to 79F\nIncreased command throw damage + V-Gauge meter gain based on the length of the button hold\n1F - 186F: 1.2x (V-Gauge + 50)\n187F - 395F: 1.5x (V-Gauge + 100)\n396F - 559F: 2x (V-Gauge + 100)\n560F - 707F: 3x (V-Gauge + 100)\n708F - 764F: 5x (V-Gauge + 100)\n765F - 940F: 9x (V-Gauge + 150)", "type": "V-System"}, "Steel Chair": {"Move": "(DURING V-TRIGGER II) HP HK", "Startup": "104", "Active": "25", "Recovery": "46 total frames", "OnHit": "", "OnBlock": "", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "60", "Stun": "150", "MeterGain": "", "Properties": "High", "ProjectileNullification": "\u25cb", "AirborneHurtbox": "", "Comments": "Uses all of the V-Gauge Timer", "type": "Special Moves"}, "Fightin' Dirty": {"Move": "(DURING V-TRIGGER II) HP HK (HOLD BUTTONS)", "Startup": "17 at close range to opponent", "Active": "28", "Recovery": "58 total frames", "OnHit": "", "OnBlock": "", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "100+60", "Stun": "100+100", "MeterGain": "", "Properties": "High", "ProjectileNullification": "\u25cb", "AirborneHurtbox": "", "Comments": "Uses all of the V-Gauge Timer", "type": "Special Moves"}, "Peach Gator": {"Move": "(DURING GUARD) 6 + LMHK", "Startup": "17", "Active": "2", "Recovery": "24", "OnHit": "D", "OnBlock": "-2", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "60", "Stun": "0", "MeterGain": "V-Gauge -300 / 0", "Properties": "High", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "1F - 30F attack & projectile invincibility\nRecover 200 stun upon activation", "type": "V-System"}, "L Shooting Peach": {"Move": "236 + LP", "Startup": "10", "Active": "6", "Recovery": "25", "OnHit": "D", "OnBlock": "-7", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "80", "Stun": "150", "MeterGain": "20 / 40", "Properties": "High", "ProjectileNullification": "", "AirborneHurtbox": "8F - 24F", "Comments": "", "type": "Special Moves"}, "M Shooting Peach": {"Move": "236 + MP", "Startup": "13", "Active": "8", "Recovery": "25", "OnHit": "D", "OnBlock": "-10", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "90", "Stun": "150", "MeterGain": "20 / 40", "Properties": "High", "ProjectileNullification": "", "AirborneHurtbox": "12F - 28F", "Comments": "", "type": "Special Moves"}, "H Shooting Peach": {"Move": "236 + HP", "Startup": "20", "Active": "13", "Recovery": "17", "OnHit": "D", "OnBlock": "-12", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "100", "Stun": "150", "MeterGain": "20 / 40", "Properties": "High", "ProjectileNullification": "", "AirborneHurtbox": "15F - 35F", "Comments": "", "type": "Special Moves"}, "EX Shooting Peach": {"Move": "236 + P P", "Startup": "5", "Active": "10", "Recovery": "28", "OnHit": "D", "OnBlock": "-15", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "130", "Stun": "200", "MeterGain": "-300 / 0", "Properties": "High", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "Armor from 3F to 9F", "type": "Special Moves"}, "L Rainbow Typhoon": {"Move": "63214 + LP", "Startup": "5", "Active": "2", "Recovery": "60", "OnHit": "D", "OnBlock": "", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "180", "Stun": "200", "MeterGain": "20 / 100", "Properties": "Throw", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "", "type": "Special Moves"}, "M Rainbow Typhoon": {"Move": "63214 + MP", "Startup": "5", "Active": "2", "Recovery": "60", "OnHit": "D", "OnBlock": "", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "190", "Stun": "200", "MeterGain": "20 / 100", "Properties": "Throw", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "", "type": "Special Moves"}, "H Rainbow Typhoon": {"Move": "63214 + HP", "Startup": "5", "Active": "2", "Recovery": "60", "OnHit": "D", "OnBlock": "", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "200", "Stun": "200", "MeterGain": "20 / 100", "Properties": "Throw", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "", "type": "Special Moves"}, "EX Rainbow Typhoon": {"Move": "63214 + P P", "Startup": "5", "Active": "2", "Recovery": "60", "OnHit": "D", "OnBlock": "", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "240", "Stun": "250", "MeterGain": "-300 / 0", "Properties": "Throw", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "", "type": "Special Moves"}, "L Brimstone": {"Move": "63214 + LK", "Startup": "5", "Active": "2", "Recovery": "60", "OnHit": "D", "OnBlock": "", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "120", "Stun": "150", "MeterGain": "20 / 80", "Properties": "Throw", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "", "type": "Special Moves"}, "M Brimstone": {"Move": "63214 + MK", "Startup": "5", "Active": "2", "Recovery": "60", "OnHit": "D", "OnBlock": "", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "130", "Stun": "150", "MeterGain": "20 / 80", "Properties": "Throw", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "", "type": "Special Moves"}, "H Brimstone": {"Move": "63214 + HK", "Startup": "5", "Active": "2", "Recovery": "60", "OnHit": "D", "OnBlock": "", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "140", "Stun": "150", "MeterGain": "20 / 80", "Properties": "Throw", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "", "type": "Special Moves"}, "EX Brimstone": {"Move": "63214 + K K", "Startup": "5", "Active": "2", "Recovery": "60", "OnHit": "D", "OnBlock": "", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "180", "Stun": "200", "MeterGain": "-300 / 0", "Properties": "Throw", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "", "type": "Special Moves"}, "L Wingless Airplane": {"Move": "236 + LK", "Startup": "5", "Active": "5", "Recovery": "23+20 frame(s) after landing", "OnHit": "D", "OnBlock": "", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "130", "Stun": "200", "MeterGain": "0 / 60", "Properties": "High", "ProjectileNullification": "", "AirborneHurtbox": "4F -", "Comments": "", "type": "Special Moves"}, "M Wingless Airplane": {"Move": "236 + MK", "Startup": "7", "Active": "8", "Recovery": "20+20 frame(s) after landing", "OnHit": "D", "OnBlock": "", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "130", "Stun": "200", "MeterGain": "0 / 60", "Properties": "High", "ProjectileNullification": "", "AirborneHurtbox": "6F -", "Comments": "", "type": "Special Moves"}, "H Wingless Airplane": {"Move": "236 + HK", "Startup": "10", "Active": "11", "Recovery": "17+20 frame(s) after landing", "OnHit": "D", "OnBlock": "", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "130", "Stun": "200", "MeterGain": "0 / 60", "Properties": "High", "ProjectileNullification": "", "AirborneHurtbox": "9F -", "Comments": "", "type": "Special Moves"}, "EX Wingless Airplane": {"Move": "236 + K K", "Startup": "5", "Active": "11", "Recovery": "17+20 frame(s) after landing", "OnHit": "D", "OnBlock": "", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "160", "Stun": "200", "MeterGain": "-300 / 0", "Properties": "High", "ProjectileNullification": "", "AirborneHurtbox": "4F -", "Comments": "5F - 15F full invincibility", "type": "Special Moves"}, "Peach Assault": {"Move": "214 214 + P", "Startup": "1+2", "Active": "2", "Recovery": "51", "OnHit": "D", "OnBlock": "", "VOnHit": "", "VOnBlock": "", "CancelInfo": "", "Damage": "360", "Stun": "0", "MeterGain": "-900 / 0", "Properties": "Throw", "ProjectileNullification": "", "AirborneHurtbox": "", "Comments": "1F - 4F full invincibility", "type": "Critical Art"}}};  module.exports = { db : db }