const missingSources: { [key: string]: number[] } = {
  adventure: [
    1589569998, // Gearhead Gauntlets
    1886391431, // Gearhead Gloves
    2290569618, // Gearhead Grips
  ],
  blackarmory: [
    78664642, // Annealed Shaper Gloves
    133093143, // Forged Machinist Greaves
    563606995, // Woven Firesmith Boots
    1117243014, // Woven Firesmith Cape
    1497164220, // Forged Machinist Helm
    1512129090, // Forged Machinist Mark
    2119727155, // Annealed Shaper Crown
    2122810492, // Annealed Shaper Boots
    2851938357, // Forged Machinist Gauntlets
    3155412907, // Forged Machinist Plate
    3283890999, // Woven Firesmith Vest
    3322192806, // Annealed Shaper Robes
    3363625697, // Woven Firesmith Grips
    3607521808, // Woven Firesmith Mask
    4064641551, // Annealed Shaper Bond
  ],
  calus: [
    784492908, // Hive Armaments
    2249025553, // Hive Invigoration
    3425422485, // Hive Repurposing
    3888848980, // Hive Barrier
  ],
  crownofsorrow: [
    784492908, // Hive Armaments
    2249025553, // Hive Invigoration
    3425422485, // Hive Repurposing
    3888848980, // Hive Barrier
  ],
  crucible: [
    85800627, // Ankaa Seeker IV
    87665893, // Binary Phoenix Cloak
    98331691, // Binary Phoenix Mark
    215768941, // Ankaa Seeker IV
    252414402, // Swordflight 4.1
    283188616, // Wing Contender
    290136582, // Wing Theorem
    328902054, // Swordflight 4.1
    356269375, // Wing Theorem
    388771599, // Phoenix Strife Type 0
    419812559, // Ankaa Seeker IV
    438224459, // Wing Discipline
    449878234, // Phoenix Strife Type 0
    468899627, // Binary Phoenix Mark
    530558102, // Phoenix Strife Type 0
    670877864, // Binary Phoenix Mark
    727838174, // Swordflight 4.1
    744199039, // Wing Contender
    761953100, // Ankaa Seeker IV
    820446170, // Phoenix Strife Type 0
    852430165, // Ankaa Seeker IV
    874101646, // Wing Theorem
    876608500, // Ankaa Seeker IV
    920187221, // Wing Discipline
    1036467370, // Wing Theorem
    1062166003, // Wing Contender
    1071350799, // Binary Phoenix Cloak
    1245115841, // Wing Theorem
    1299272338, // Ankaa Seeker IV
    1467590642, // Binary Phoenix Bond
    1548928853, // Phoenix Strife Type 0
    1571781304, // Swordflight 4.1
    1654427223, // Swordflight 4.1
    1658896287, // Binary Phoenix Cloak
    1673285051, // Wing Theorem
    1716643851, // Wing Contender
    1722623780, // Wing Discipline
    1727248109, // Phoenix Strife Type 0
    1742940528, // Phoenix Strife Type 0
    1765728763, // Ankaa Seeker IV
    1801625827, // Swordflight 4.1
    1807196134, // Phoenix Strife Type 0
    1830829330, // Swordflight 4.1
    1838158578, // Binary Phoenix Bond
    1838273186, // Wing Contender
    1852468615, // Ankaa Seeker IV
    1904811766, // Swordflight 4.1
    1929596421, // Ankaa Seeker IV
    2070517134, // Wing Contender
    2094233929, // Swordflight 4.1
    2231762285, // Phoenix Strife Type 0
    2291226602, // Binary Phoenix Bond
    2293476915, // Swordflight 4.1
    2296560252, // Swordflight 4.1
    2323865727, // Wing Theorem
    2415711886, // Wing Contender
    2426070307, // Binary Phoenix Cloak
    2466453881, // Wing Discipline
    2473130418, // Swordflight 4.1
    2492669178, // Swordflight 4.1
    2496309431, // Wing Discipline
    2525395257, // Wing Theorem
    2543903638, // Phoenix Strife Type 0
    2670393359, // Phoenix Strife Type 0
    2674680132, // Phoenix Strife Type 0
    2680535688, // Swordflight 4.1
    2727890395, // Ankaa Seeker IV
    2775298636, // Ankaa Seeker IV
    2845947996, // Phoenix Strife Type 0
    3089908066, // Wing Discipline
    3098458331, // Ankaa Seeker IV
    3119528729, // Wing Contender
    3298826188, // Swordflight 4.1
    3315265682, // Phoenix Strife Type 0
    3483546829, // Wing Discipline
    3522021318, // Wing Discipline
    3756286064, // Phoenix Strife Type 0
    3772194440, // Wing Contender
    3781722107, // Phoenix Strife Type 0
    3797729472, // Swordflight 4.1
    3818803676, // Wing Discipline
    3839561204, // Wing Theorem
    3884544409, // Binary Phoenix Mark
    4043980813, // Ankaa Seeker IV
    4123918087, // Wing Contender
    4134090375, // Ankaa Seeker IV
    4136212668, // Wing Discipline
    4144133120, // Wing Theorem
    4211218181, // Ankaa Seeker IV
    4269346472, // Binary Phoenix Bond
  ],
  do: [
    102368695, // Anti-Extinction Mask
    245450812, // Anti-Extinction Hood
    248161012, // Anti-Extinction Greaves
    669535051, // Anti-Extinction Helm
    1557512974, // Anti-Extinction Plate
    1600224949, // Anti-Extinction Gloves
    1730282946, // Stella Incognita Bond
    1875607511, // Stella Incognita Mark
    2862198970, // Anti-Extinction Gauntlets
    3176347031, // Anti-Extinction Boots
    3304105970, // Anti-Extinction Vest
    3373566763, // Anti-Extinction Robes
    3470850110, // Anti-Extinction Grasps
    3890232472, // Anti-Extinction Legs
    3940923523, // Stella Incognita Cloak
  ],
  dreaming: [
    99549082, // Reverie Dawn Helm
    934704429, // Reverie Dawn Plate
    998096007, // Reverie Dawn Hood
    1452333832, // Reverie Dawn Boots
    1903023095, // Reverie Dawn Grasps
    1928769139, // Reverie Dawn Bond
    2336820707, // Reverie Dawn Gauntlets
    2467635521, // Reverie Dawn Hauberk
    2704876322, // Reverie Dawn Tabard
    2889063206, // Reverie Dawn Casque
    3239662350, // Reverie Dawn Gloves
    3250140572, // Reverie Dawn Cloak
    3343583008, // Reverie Dawn Mark
    3711557785, // Reverie Dawn Strides
    4257800469, // Reverie Dawn Greaves
  ],
  drifter: [
    9767416, // Ancient Apocalypse Bond
    94425673, // Ancient Apocalypse Gloves
    127018032, // Ancient Apocalypse Grips
    191247558, // Ancient Apocalypse Plate
    191535001, // Ancient Apocalypse Greaves
    230878649, // Ancient Apocalypse Mask
    386367515, // Ancient Apocalypse Boots
    392058749, // Ancient Apocalypse Boots
    485653258, // Ancient Apocalypse Strides
    509238959, // Ancient Apocalypse Mark
    759348512, // Ancient Apocalypse Mask
    787909455, // Ancient Apocalypse Robes
    887818405, // Ancient Apocalypse Robes
    1013137701, // Ancient Apocalypse Hood
    1188039652, // Ancient Apocalypse Gauntlets
    1237661249, // Ancient Apocalypse Plate
    1356064950, // Ancient Apocalypse Grips
    1359908066, // Ancient Apocalypse Gauntlets
    1488486721, // Ancient Apocalypse Bond
    1548620661, // Ancient Apocalypse Cloak
    1741396519, // Ancient Apocalypse Vest
    1752237812, // Ancient Apocalypse Gloves
    2020166300, // Ancient Apocalypse Mark
    2039976446, // Ancient Apocalypse Boots
    2451538755, // Ancient Apocalypse Strides
    2459422430, // Ancient Apocalypse Bond
    2506514251, // Ancient Apocalypse Cloak
    2512196373, // Ancient Apocalypse Helm
    2518527196, // Ancient Apocalypse Plate
    2568447248, // Ancient Apocalypse Strides
    2620389105, // Ancient Apocalypse Grips
    2677967607, // Ancient Apocalypse Gauntlets
    2694124942, // Ancient Apocalypse Greaves
    2728668760, // Ancient Apocalypse Vest
    2858060922, // Ancient Apocalypse Vest
    2881248566, // Ancient Apocalypse Cloak
    3404053788, // Ancient Apocalypse Greaves
    3537476911, // Ancient Apocalypse Mask
    3550729740, // Ancient Apocalypse Robes
    3595268459, // Ancient Apocalypse Gloves
    3664007718, // Ancient Apocalypse Helm
    3804360785, // Ancient Apocalypse Mark
    3825427923, // Ancient Apocalypse Helm
    3925589496, // Ancient Apocalypse Hood
    4255727106, // Ancient Apocalypse Hood
  ],
  edz: [
    1589569998, // Gearhead Gauntlets
    1886391431, // Gearhead Gloves
    2290569618, // Gearhead Grips
  ],
  eow: [
    75025442, // Boots of Feltroc
    88873628, // Gauntlets of Nohr
    161336786, // Mask of Sekris
    574916072, // Bond of Sekris
    627690043, // Wraps of Sekris
    781488881, // Mask of Feltroc
    1877424533, // Robes of Sekris
    2938125956, // Plate of Nohr
    3168014845, // Cloak of Feltroc
    3331120813, // Boots of Sekris
    3386768934, // Greaves of Nohr
    3681852889, // Mark of Nohr
    3693007688, // Grips of Feltroc
    3731175213, // Mask of Nohr
    4240859456, // Vest of Feltroc
  ],
  ep: [
    425390008, // Midnight Exigent Greaves
    508035927, // Midnight Exigent Helm
    720656969, // Yuga Sundown Robes
    2034926084, // Yuga Sundown Bond
    2114894938, // Abhorrent Imperative Grasps
    2320951982, // Abhorrent Imperative Vest
    2395959535, // Yuga Sundown Gloves
    2639046519, // Abhorrent Imperative Cloak
    2970562833, // Yuga Sundown Boots
    3126089918, // Yuga Sundown Helmet
    3371366804, // Abhorrent Imperative Strides
    3691605010, // Midnight Exigent Plate
    3792637803, // Abhorrent Imperative Mask
    3876414174, // Midnight Exigent Gauntlets
    4286845987, // Midnight Exigent Mark
  ],
  eververse: [
    138961800, // Helm of Optimacy
    163660481, // Bond of Optimacy
    167651268, // Crimson Passion
    269339124, // Dawning Hope
    599687980, // Purple Dawning Lanterns
    691914261, // Silver Dawning Lanterns
    706111909, // Hood of Optimacy
    710937567, // Legs of Optimacy
    921357268, // Winterhart Plate
    989291706, // Cloak of Optimacy
    1051903593, // Dawning Bauble Shell
    1135293055, // Plate of Optimacy
    1290784012, // Winterhart Gauntlets
    1397284432, // Jasper Dawn Shell
    1445212020, // Arms of Optimacy
    1602334068, // Regent Redeemer
    1706764073, // Winterhart Mark
    1707587907, // Vest of Optimacy
    1732950654, // Legs of Optimacy
    1812385586, // Winterhart Bond
    1816495538, // Sweet Memories Shell
    1844125034, // Dawning Festiveness
    1936516278, // Winterhart Greaves
    1956273477, // Winterhart Gloves
    1984190529, // Magikon
    2112889975, // Crimson Valor
    2225903500, // Robes of Optimacy
    2303499975, // Winterhart Boots
    2378378507, // Legs of Optimacy
    2623660327, // Dawning Brilliance
    2640279229, // Arms of Optimacy
    2693084644, // Mask of Optimacy
    2717158440, // Winterhart Grips
    2760398988, // Winterhart Cover
    2777913565, // Winterhart Cloak
    2806805902, // Mark of Optimacy
    2828252061, // Winterhart Helm
    2998296658, // Ice Ball Effects
    3161524490, // Rupture
    3168164098, // Yellow Dawning Lanterns
    3177119978, // Carmina Commencing
    3352566658, // Winterhart Strides
    3455566107, // Winterhart Robes
    3569791559, // Shimmering Iris
    3729709035, // Joyfire
    3781263385, // Arms of Optimacy
    3850655136, // Winterhart Vest
    3866715933, // Dawning Warmth
    3947596543, // Green Dawning Lanterns
    4059030097, // Winterhart Mask
  ],
  fwc: [
    79417130, // Simulator Grips
    248302381, // Simulator Robes
    480714723, // Simulator Gloves
    680132464, // Simulator Greaves
    883514983, // Entanglement Cloak
    1512311134, // Simulator Vest
    1607585295, // Simulator Helm
    1653979435, // Entanglement Mark
    2005525978, // Simulator Plate
    2401694485, // Simulator Legs
    2538410394, // Simulator Hood
    2657180960, // Entanglement Bond
    2915206011, // Simulator Mask
    3030715588, // Simulator Boots
    3762717334, // Simulator Gauntlets
  ],
  gambit: [
    9767416, // Ancient Apocalypse Bond
    94425673, // Ancient Apocalypse Gloves
    127018032, // Ancient Apocalypse Grips
    191247558, // Ancient Apocalypse Plate
    191535001, // Ancient Apocalypse Greaves
    230878649, // Ancient Apocalypse Mask
    386367515, // Ancient Apocalypse Boots
    392058749, // Ancient Apocalypse Boots
    485653258, // Ancient Apocalypse Strides
    509238959, // Ancient Apocalypse Mark
    759348512, // Ancient Apocalypse Mask
    787909455, // Ancient Apocalypse Robes
    887818405, // Ancient Apocalypse Robes
    1013137701, // Ancient Apocalypse Hood
    1188039652, // Ancient Apocalypse Gauntlets
    1237661249, // Ancient Apocalypse Plate
    1356064950, // Ancient Apocalypse Grips
    1359908066, // Ancient Apocalypse Gauntlets
    1488486721, // Ancient Apocalypse Bond
    1548620661, // Ancient Apocalypse Cloak
    1741396519, // Ancient Apocalypse Vest
    1752237812, // Ancient Apocalypse Gloves
    2020166300, // Ancient Apocalypse Mark
    2039976446, // Ancient Apocalypse Boots
    2451538755, // Ancient Apocalypse Strides
    2459422430, // Ancient Apocalypse Bond
    2506514251, // Ancient Apocalypse Cloak
    2512196373, // Ancient Apocalypse Helm
    2518527196, // Ancient Apocalypse Plate
    2568447248, // Ancient Apocalypse Strides
    2620389105, // Ancient Apocalypse Grips
    2677967607, // Ancient Apocalypse Gauntlets
    2694124942, // Ancient Apocalypse Greaves
    2728668760, // Ancient Apocalypse Vest
    2858060922, // Ancient Apocalypse Vest
    2881248566, // Ancient Apocalypse Cloak
    3404053788, // Ancient Apocalypse Greaves
    3537476911, // Ancient Apocalypse Mask
    3550729740, // Ancient Apocalypse Robes
    3595268459, // Ancient Apocalypse Gloves
    3664007718, // Ancient Apocalypse Helm
    3804360785, // Ancient Apocalypse Mark
    3825427923, // Ancient Apocalypse Helm
    3925589496, // Ancient Apocalypse Hood
    4255727106, // Ancient Apocalypse Hood
  ],
  gambitprime: [
    95332289, // Notorious Collector Strides
    95332290, // Outlawed Collector Strides
    95332291, // Illicit Collector Strides
    98700832, // Illicit Reaper Cloak
    98700833, // Outlawed Reaper Cloak
    98700834, // Notorious Reaper Cloak
    130287073, // Notorious Sentry Gauntlets
    130287074, // Outlawed Sentry Gauntlets
    130287075, // Illicit Sentry Gauntlets
    154180148, // Illicit Sentry Cloak
    154180149, // Outlawed Sentry Cloak
    154180150, // Notorious Sentry Cloak
    223681332, // Notorious Reaper Helm
    223681334, // Illicit Reaper Helm
    223681335, // Outlawed Reaper Helm
    234582860, // Illicit Reaper Mark
    234582861, // Outlawed Reaper Mark
    234582862, // Notorious Reaper Mark
    264182640, // Outlawed Collector Grips
    264182641, // Illicit Collector Grips
    264182643, // Notorious Collector Grips
    370332340, // Notorious Collector Cloak
    370332342, // Illicit Collector Cloak
    370332343, // Outlawed Collector Cloak
    420625860, // Outlawed Invader Plate
    420625861, // Illicit Invader Plate
    420625863, // Notorious Invader Plate
    432797516, // Outlawed Collector Bond
    432797517, // Illicit Collector Bond
    432797519, // Notorious Collector Bond
    563461320, // Outlawed Reaper Greaves
    563461321, // Illicit Reaper Greaves
    563461323, // Notorious Reaper Greaves
    722344176, // Illicit Reaper Gloves
    722344177, // Outlawed Reaper Gloves
    722344178, // Notorious Reaper Gloves
    759881004, // Outlawed Sentry Plate
    759881005, // Illicit Sentry Plate
    759881007, // Notorious Sentry Plate
    893169980, // Illicit Invader Cloak
    893169981, // Outlawed Invader Cloak
    893169982, // Notorious Invader Cloak
    975478396, // Illicit Collector Helm
    975478397, // Outlawed Collector Helm
    975478398, // Notorious Collector Helm
    1039402696, // Notorious Reaper Boots
    1039402698, // Illicit Reaper Boots
    1039402699, // Outlawed Reaper Boots
    1159077396, // Outlawed Reaper Strides
    1159077397, // Illicit Reaper Strides
    1159077399, // Notorious Reaper Strides
    1208982392, // Outlawed Reaper Hood
    1208982393, // Illicit Reaper Hood
    1208982395, // Notorious Reaper Hood
    1295793304, // Notorious Reaper Mask
    1295793306, // Illicit Reaper Mask
    1295793307, // Outlawed Reaper Mask
    1386198149, // Notorious Reaper Gauntlets
    1386198150, // Outlawed Reaper Gauntlets
    1386198151, // Illicit Reaper Gauntlets
    1438999856, // Notorious Collector Boots
    1438999858, // Illicit Collector Boots
    1438999859, // Outlawed Collector Boots
    1477025072, // Outlawed Sentry Bond
    1477025073, // Illicit Sentry Bond
    1477025075, // Notorious Sentry Bond
    1505642256, // Illicit Collector Robes
    1505642257, // Outlawed Collector Robes
    1505642258, // Notorious Collector Robes
    1920676413, // Notorious Invader Bond
    1920676414, // Outlawed Invader Bond
    1920676415, // Illicit Invader Bond
    1951201409, // Notorious Invader Hood
    1951201410, // Outlawed Invader Hood
    1951201411, // Illicit Invader Hood
    1979001652, // Outlawed Reaper Bond
    1979001653, // Illicit Reaper Bond
    1979001655, // Notorious Reaper Bond
    1984789548, // Outlawed Reaper Vest
    1984789549, // Illicit Reaper Vest
    1984789551, // Notorious Reaper Vest
    1989814421, // Notorious Invader Grips
    1989814422, // Outlawed Invader Grips
    1989814423, // Illicit Invader Grips
    2051266836, // Outlawed Sentry Greaves
    2051266837, // Illicit Sentry Greaves
    2051266839, // Notorious Sentry Greaves
    2187982744, // Notorious Sentry Helm
    2187982746, // Illicit Sentry Helm
    2187982747, // Outlawed Sentry Helm
    2334120368, // Outlawed Reaper Plate
    2334120369, // Illicit Reaper Plate
    2334120371, // Notorious Reaper Plate
    2336344260, // Illicit Sentry Gloves
    2336344261, // Outlawed Sentry Gloves
    2336344262, // Notorious Sentry Gloves
    2371932404, // Outlawed Collector Gauntlets
    2371932405, // Illicit Collector Gauntlets
    2371932407, // Notorious Collector Gauntlets
    2565812704, // Outlawed Collector Hood
    2565812705, // Illicit Collector Hood
    2565812707, // Notorious Collector Hood
    2591049236, // Notorious Invader Robes
    2591049238, // Illicit Invader Robes
    2591049239, // Outlawed Invader Robes
    2593076932, // Notorious Invader Mask
    2593076934, // Illicit Invader Mask
    2593076935, // Outlawed Invader Mask
    2698109344, // Illicit Collector Mask
    2698109345, // Outlawed Collector Mask
    2698109346, // Notorious Collector Mask
    2710420856, // Outlawed Sentry Vest
    2710420857, // Illicit Sentry Vest
    2710420859, // Notorious Sentry Vest
    2799932928, // Notorious Collector Mark
    2799932930, // Illicit Collector Mark
    2799932931, // Outlawed Collector Mark
    2976484617, // Notorious Invader Gauntlets
    2976484618, // Outlawed Invader Gauntlets
    2976484619, // Illicit Invader Gauntlets
    3088740176, // Notorious Invader Gloves
    3088740178, // Illicit Invader Gloves
    3088740179, // Outlawed Invader Gloves
    3166483968, // Outlawed Sentry Strides
    3166483969, // Illicit Sentry Strides
    3166483971, // Notorious Sentry Strides
    3168759584, // Illicit Sentry Mark
    3168759585, // Outlawed Sentry Mark
    3168759586, // Notorious Sentry Mark
    3220030412, // Notorious Sentry Mask
    3220030414, // Illicit Sentry Mask
    3220030415, // Outlawed Sentry Mask
    3373994936, // Outlawed Invader Strides
    3373994937, // Illicit Invader Strides
    3373994939, // Notorious Invader Strides
    3403732216, // Illicit Collector Gloves
    3403732217, // Outlawed Collector Gloves
    3403732218, // Notorious Collector Gloves
    3489978604, // Illicit Invader Boots
    3489978605, // Outlawed Invader Boots
    3489978606, // Notorious Invader Boots
    3525447589, // Notorious Collector Vest
    3525447590, // Outlawed Collector Vest
    3525447591, // Illicit Collector Vest
    3533064929, // Notorious Reaper Grips
    3533064930, // Outlawed Reaper Grips
    3533064931, // Illicit Reaper Grips
    3583507224, // Illicit Reaper Robes
    3583507225, // Outlawed Reaper Robes
    3583507226, // Notorious Reaper Robes
    3636943392, // Notorious Invader Helm
    3636943394, // Illicit Invader Helm
    3636943395, // Outlawed Invader Helm
    3660501108, // Outlawed Sentry Hood
    3660501109, // Illicit Sentry Hood
    3660501111, // Notorious Sentry Hood
    3837542168, // Illicit Invader Mark
    3837542169, // Outlawed Invader Mark
    3837542170, // Notorious Invader Mark
    3948054485, // Notorious Collector Greaves
    3948054486, // Outlawed Collector Greaves
    3948054487, // Illicit Collector Greaves
    3981071584, // Outlawed Invader Vest
    3981071585, // Illicit Invader Vest
    3981071587, // Notorious Invader Vest
    4020124604, // Illicit Sentry Robes
    4020124605, // Outlawed Sentry Robes
    4020124606, // Notorious Sentry Robes
    4026665500, // Outlawed Invader Greaves
    4026665501, // Illicit Invader Greaves
    4026665503, // Notorious Invader Greaves
    4060232809, // Notorious Collector Plate
    4060232810, // Outlawed Collector Plate
    4060232811, // Illicit Collector Plate
    4245233853, // Notorious Sentry Grips
    4245233854, // Outlawed Sentry Grips
    4245233855, // Illicit Sentry Grips
    4266990316, // Notorious Sentry Boots
    4266990318, // Illicit Sentry Boots
    4266990319, // Outlawed Sentry Boots
  ],
  garden: [],
  gunsmith: [],
  ikora: [
    558125905, // Frumious Mask
    662797277, // Frumious Cloak
    1698434490, // Ego Talon Bond
    1735538848, // Frumious Vest
    1842727357, // Ego Talon IV
    1895532772, // Ego Talon IV
    1940451444, // Noble Constant Type 2
    2416730691, // Ego Talon IV
    2684281417, // Noble Constant Mark
    2688111404, // Noble Constant Type 2
    3511221544, // Frumious Grips
    3758301014, // Noble Constant Type 2
    4146629762, // Frumious Strides
    4208352991, // Ego Talon IV
    4225579453, // Noble Constant Type 2
  ],
  io: [
    1445420672, // Mindbreaker Boots
    2025523685, // Mindbreaker Boots
    2164070257, // Mindbreaker Boots
  ],
  ironbanner: [
    21320325, // Bond of Remembrance
    63725907, // Iron Remembrance Plate
    75550387, // Iron Truage Legs
    92135663, // Iron Remembrance Vest
    130221063, // Iron Truage Vestments
    131359121, // Iron Fellowship Casque
    167461728, // Iron Remembrance Gloves
    197164672, // Iron Truage Hood
    198946996, // Iron Symmachy Helm
    228784708, // Iron Symmachy Robes
    423204919, // Iron Truage Hood
    425007249, // Iron Remembrance Plate
    473526496, // Iron Fellowship Vest
    500363457, // Iron Symmachy Grips
    559176540, // Iron Symmachy Gloves
    561808153, // Mantle of Efrideet
    706104224, // Iron Truage Gauntlets
    713182381, // Iron Remembrance Gauntlets
    738836759, // Iron Truage Vestments
    739655237, // Iron Truage Helm
    744156528, // Iron Symmachy Mask
    808693674, // Iron Symmachy Mark
    892360677, // Iron Fellowship Helm
    935677805, // Iron Truage Casque
    1015625830, // Iron Truage Boots
    1027482647, // Iron Fellowship Boots
    1105558158, // Iron Truage Helm
    1173846338, // Iron Fellowship Bond
    1181560527, // Iron Truage Vest
    1233689371, // Iron Remembrance Hood
    1311649814, // Timur's Iron Bond
    1313089081, // Iron Truage Plate
    1313767877, // Radegast's Iron Sash
    1339294334, // Cloak of Remembrance
    1342036510, // Iron Truage Greaves
    1349302244, // Iron Remembrance Legs
    1425558127, // Iron Remembrance Greaves
    1438648985, // Iron Symmachy Bond
    1452894389, // Mantle of Efrideet
    1476572353, // Iron Truage Greaves
    1478755348, // Iron Truage Gauntlets
    1570751539, // Iron Symmachy Strides
    1604601714, // Iron Truage Vestments
    1631733639, // Bond of Remembrance
    1631922345, // Iron Remembrance Greaves
    1673037492, // Iron Fellowship Gauntlets
    1675022998, // Iron Remembrance Helm
    1876007169, // Iron Fellowship Mark
    1882457108, // Iron Remembrance Helm
    1889355043, // Iron Truage Legs
    1960776126, // Iron Fellowship Greaves
    1990315366, // Iron Symmachy Cloak
    2054377692, // Iron Truage Grips
    2058205265, // Iron Truage Gloves
    2241419267, // Timur's Iron Bond
    2302106622, // Iron Remembrance Vestments
    2310625418, // Mark of Remembrance
    2391553724, // Iron Fellowship Hood
    2500327265, // Radegast's Iron Sash
    2555322239, // Iron Truage Gauntlets
    2614190248, // Iron Remembrance Vestments
    2620437164, // Mark of Remembrance
    2627255028, // Radegast's Iron Sash
    2692970954, // Iron Remembrance Gloves
    2758933481, // Iron Remembrance Hood
    2817130155, // Iron Fellowship Robes
    2845071512, // Iron Remembrance Casque
    2853073502, // Mantle of Efrideet
    2867156198, // Timur's Iron Bond
    2879116647, // Iron Remembrance Gauntlets
    2885394189, // Iron Remembrance Strides
    2898234995, // Iron Symmachy Plate
    2900181965, // Iron Symmachy Gauntlets
    2914695209, // Iron Truage Helm
    3042878056, // Iron Fellowship Grips
    3057399960, // Iron Truage Vest
    3115791898, // Iron Remembrance Legs
    3292445816, // Iron Truage Casque
    3300129601, // Iron Truage Gloves
    3308875113, // Iron Remembrance Grips
    3329206472, // Cloak of Remembrance
    3369424240, // Iron Truage Grips
    3472216012, // Iron Fellowship Plate
    3543922672, // Iron Truage Hood
    3544440242, // Iron Remembrance Casque
    3570981007, // Iron Symmachy Greaves
    3600816955, // Iron Remembrance Strides
    3646911172, // Iron Truage Vest
    3686482762, // Iron Truage Boots
    3696011098, // Iron Truage Greaves
    3735443949, // Iron Symmachy Hood
    3746327861, // Iron Fellowship Gloves
    3756249289, // Iron Truage Grips
    3791686334, // Iron Truage Gloves
    3815391974, // Iron Symmachy Boots
    3856062457, // Iron Truage Casque
    3906637800, // Iron Truage Plate
    4010793371, // Iron Remembrance Grips
    4048191131, // Iron Truage Boots
    4078529821, // Iron Fellowship Cloak
    4096639276, // Iron Truage Plate
    4144217282, // Iron Fellowship Strides
    4156963223, // Iron Symmachy Vest
    4211068696, // Iron Truage Legs
    4248834293, // Iron Remembrance Vest
  ],
  lastwish: [
    16387641, // Mark of the Great Hunt
    576683388, // Gauntlets of the Great Hunt
    776723133, // Robes of the Great Hunt
    1127835600, // Grips of the Great Hunt
    1190016345, // Mask of the Great Hunt
    1444894250, // Strides of the Great Hunt
    1646520469, // Cloak of the Great Hunt
    2280287728, // Bond of the Great Hunt
    2868042232, // Vest of the Great Hunt
    3143067364, // Plate of the Great Hunt
    3227674085, // Boots of the Great Hunt
    3445582154, // Hood of the Great Hunt
    3492720019, // Gloves of the Great Hunt
    3874578566, // Greaves of the Great Hunt
    4219088013, // Helm of the Great Hunt
  ],
  legendaryengram: [
    24598504, // Red Moon Phantom Vest
    73720713, // High-Minded Complex
    107232578, // Tangled Web Gauntlets
    130772858, // Tangled Web Vest
    133227345, // Kerak Type 2
    144651852, // Prodigal Mask
    339438127, // High-Minded Complex
    432525353, // Red Moon Phantom Mask
    433294875, // Devastation Complex
    474076509, // Errant Knight 1.0
    489480785, // High-Minded Complex
    489743173, // Insight Unyielding Gauntlets
    494682309, // Massyrian's Draw
    532728591, // Thorium Holt Gloves
    545134223, // Tangled Web Mark
    548907748, // Devastation Complex
    553373026, // Tangled Web Hood
    629469344, // Heiro Camo
    629482101, // Dead End Cure 2.1
    633160551, // Insight Rover Vest
    635809934, // Terra Concord Helm
    639670612, // Mimetic Savior Plate
    655964556, // Mimetic Savior Gauntlets
    737010724, // Thorium Holt Bond
    836969671, // Insight Unyielding Greaves
    854373147, // Insight Unyielding Plate
    875215126, // Prodigal Mark
    880368054, // Tangled Web Grips
    983115833, // Terra Concord Plate
    1006824129, // Terra Concord Greaves
    1028913028, // Tesseract Trace IV
    1088960547, // Prodigal Greaves
    1111042046, // High-Minded Complex
    1127029635, // Insight Rover Boots
    1148805553, // Thorium Holt Boots
    1195298951, // Be Thy Champion
    1213841242, // Red Moon Phantom Steps
    1257810769, // Prodigal Gauntlets
    1293868684, // Insight Unyielding Helm
    1295776817, // Insight Rover Grips
    1301696822, // Mimetic Savior Greaves
    1330542168, // Tangled Web Bond
    1348658294, // Clandestine Maneuvers
    1367655773, // Tangled Web Boots
    1425077417, // Mimetic Savior Bond
    1513486336, // Road Complex AA1
    1548943654, // Tesseract Trace IV
    1598372079, // Retro-Grade TG2
    1726695877, // Cloak of Five Full Moons
    1728789982, // Thorium Holt Hood
    1740873035, // Icarus Drifter Grips
    1742735530, // Road Complex AA1
    1761136389, // Errant Knight 1.0
    1772639961, // Hodiocentrist Bond
    1810399711, // Philomath Bond
    1854024004, // Be Thy Cipher
    1865671934, // Devastation Complex
    1892576458, // Devastation Complex
    1893349933, // Tesseract Trace IV
    1904199788, // Mark of the Unassailable
    1954457094, // Road Complex AA1
    2020589887, // Road Complex AA1
    2026285619, // Errant Knight 1.0
    2085574015, // Terra Concord Fists
    2092750352, // Tangled Web Strides
    2148295091, // Tangled Web Helm
    2151378428, // Tangled Web Greaves
    2173858802, // Prodigal Cloak
    2193432605, // Mimetic Savior Helm
    2205604183, // Dead End Cure 2.1
    2297281780, // Terra Concord Mark
    2332398934, // Kerak Type 2
    2360521872, // A Cloak Called Home
    2379553211, // Be Thy Guide
    2402435619, // Philomath Cover
    2439195958, // Philomath Robes
    2442805346, // Icarus Drifter Mask
    2445181930, // Errant Knight 1.0
    2454861732, // Prodigal Robes
    2478301019, // Insight Vikti Hood
    2518901664, // Red Moon Phantom Grips
    2546015644, // Tesseract Trace IV
    2561056920, // Retro-Grade TG2
    2562555736, // Icarus Drifter Cape
    2674524165, // Tangled Web Robes
    2713755753, // Kerak Type 2
    2734010957, // Prodigal Hood
    2772485446, // Prodigal Steps
    2819613314, // Far Gone Hood
    2838060329, // Heiro Camo
    2845530750, // Retro-Grade Mark
    3018268196, // Insight Vikti Boots
    3024860521, // Retro-Grade TG2
    3061780015, // Tangled Web Mask
    3087552232, // Heiro Camo
    3198691833, // Prodigal Bond
    3257088093, // Icarus Drifter Legs
    3316802363, // Retro-Grade TG2
    3386676796, // Prodigal Gloves
    3434158555, // Prodigal Vest
    3498500850, // Philomath Gloves
    3506159922, // Anti-Hero Victory
    3516789127, // Prodigal Strides
    3527995388, // Dead End Cure 2.1
    3536492583, // Kerak Type 2
    3593916933, // Prodigal Grasps
    3619376218, // Heiro Camo
    3688229984, // Insight Rover Mask
    3691737472, // Prodigal Helm
    3717812073, // Thorium Holt Robes
    3899739148, // Philomath Boots
    3906537733, // Icarus Drifter Vest
    3920228039, // Synaptic Construct
    3979056138, // Insight Vikti Gloves
    3988753671, // Prodigal Cuirass
    4074193483, // Tangled Web Cloak
    4079913195, // Dead End Cure 2.1
    4097652774, // Tangled Web Plate
    4146408011, // Tangled Web Gloves
    4166246718, // Insight Vikti Robes
  ],
  leviathan: [
    311429764, // Shadow's Mark
    311429765, // Mark of the Emperor's Champion
    336656482, // Boots of the Fulminator
    336656483, // Boots of the Emperor's Minister
    581908796, // Bond of the Emperor's Minister
    581908797, // Shadow's Bond
    618662448, // Headpiece of the Emperor's Minister
    618662449, // Mask of the Fulminator
    641933202, // Helm of the Ace-Defiant
    641933203, // Mask of the Emperor's Agent
    1108389626, // Gloves of the Emperor's Agent
    1108389627, // Grips of the Ace-Defiant
    1230192768, // Robes of the Fulminator
    1230192769, // Robes of the Emperor's Minister
    1354679720, // Shadow's Cloak
    1354679721, // Cloak of the Emperor's Agent
    2183861870, // Gauntlets of the Emperor's Champion
    2183861871, // Gauntlets of Rull
    2232730708, // Vest of the Emperor's Agent
    2232730709, // Vest of the Ace-Defiant
    2758465168, // Greaves of the Emperor's Champion
    2758465169, // Greaves of Rull
    2913992254, // Mask of Rull
    2913992255, // Helm of the Emperor's Champion
    3292127944, // Cuirass of the Emperor's Champion
    3292127945, // Chassis of Rull
    3530284424, // Wraps of the Fulminator
    3530284425, // Wraps of the Emperor's Minister
    3853397100, // Boots of the Emperor's Agent
    3853397101, // Boots of the Ace-Defiant
  ],
  mars: [
    425390008, // Midnight Exigent Greaves
    508035927, // Midnight Exigent Helm
    720656969, // Yuga Sundown Robes
    2034926084, // Yuga Sundown Bond
    2114894938, // Abhorrent Imperative Grasps
    2320951982, // Abhorrent Imperative Vest
    2395959535, // Yuga Sundown Gloves
    2639046519, // Abhorrent Imperative Cloak
    2970562833, // Yuga Sundown Boots
    3126089918, // Yuga Sundown Helmet
    3371366804, // Abhorrent Imperative Strides
    3691605010, // Midnight Exigent Plate
    3792637803, // Abhorrent Imperative Mask
    3876414174, // Midnight Exigent Gauntlets
    4286845987, // Midnight Exigent Mark
  ],
  menagerie: [
    56157064, // Exodus Down Gauntlets
    192377242, // Exodus Down Strides
    472691604, // Exodus Down Vest
    569251271, // Exodus Down Gloves
    569678873, // Exodus Down Mark
    667921213, // Exodus Down Mark
    853736709, // Exodus Down Cloak
    1157496418, // Exodus Down Greaves
    1316205184, // Exodus Down Plate
    1439502385, // Exodus Down Helm
    1539014368, // Exodus Down Grips
    1640979177, // Exodus Down Cloak
    1810569868, // Exodus Down Bond
    2032811197, // Exodus Down Robes
    2736812653, // Exodus Down Helm
    2816760678, // Exodus Down Greaves
    2947629004, // Exodus Down Grips
    3446606632, // Exodus Down Vest
    3536375792, // Exodus Down Bond
    3593464438, // Exodus Down Strides
    3617024265, // Exodus Down Boots
    3654781892, // Exodus Down Plate
    3660228214, // Exodus Down Hood
    3742350309, // Exodus Down Boots
    3855512540, // Exodus Down Gauntlets
    3951684081, // Exodus Down Robes
    3960258378, // Exodus Down Hood
    4007396243, // Exodus Down Gloves
    4060742749, // Exodus Down Mask
    4130486121, // Exodus Down Mask
  ],
  mercury: [
    61987238, // Kairos Function Mask
    452177303, // Kairos Function Crown
    884481817, // Kairos Function Boots
    2529023928, // Kairos Function Mark
    2673599019, // Kairos Function Gauntlets
    2748513874, // Kairos Function Robes
    3333954498, // Kairos Function Helm
    3370914423, // Kairos Function Grips
    3385331555, // Kairos Function Bond
    3469837505, // Kairos Function Vest
    3820658718, // Kairos Function Wraps
    3873109093, // Kairos Function Plate
    4148237373, // Kairos Function Greaves
    4240041208, // Kairos Function Boots
    4252342556, // Kairos Function Cloak
  ],
  moon: [],
  nessus: [
    2866378042, // Unethical Experiments Bond
    2940586725, // Unethical Experiments Mark
    3144980977, // Unethical Experiments Cloak
  ],
  nightfall: [],
  nightmare: [],
  nm: [
    198912077, // Sovereign Grips
    446438979, // Sovereign Hood
    869711119, // Sovereign Boots
    908447143, // Sovereign Plate
    971138346, // Coronation Cloak
    1117943570, // Sovereign Gloves
    1516941763, // Sovereign Greaves
    1519285164, // Sovereign Legs
    1685792113, // Sovereign Gauntlets
    1792644404, // Sovereign Mask
    2048299190, // Coronation Mark
    2165598463, // Coronation Bond
    2835971286, // Sovereign Robes
    3060679667, // Sovereign Vest
    4119718816, // Sovereign Helm
  ],
  prestige: [],
  prophecy: [],
  raid: [
    96643258, // Bladesmith's Memory Mask
    300528205, // Bladesmith's Memory Vest
    384384821, // Bladesmith's Memory Strides
    583145321, // Gunsmith's Devotion Crown
    940003738, // Gunsmith's Devotion Boots
    977326564, // Bulletsmith's Ire Mark
    1499503877, // Gunsmith's Devotion Bond
    1989682895, // Bulletsmith's Ire Gauntlets
    2286640864, // Gunsmith's Devotion Gloves
    2334017923, // Bladesmith's Memory Grips
    2564183153, // Bulletsmith's Ire Greaves
    2719710110, // Bulletsmith's Ire Helm
    2750983488, // Bladesmith's Memory Cloak
    3491990569, // Bulletsmith's Ire Plate
    4092373800, // Gunsmith's Devotion Robes
  ],
  scourge: [
    96643258, // Bladesmith's Memory Mask
    300528205, // Bladesmith's Memory Vest
    384384821, // Bladesmith's Memory Strides
    583145321, // Gunsmith's Devotion Crown
    940003738, // Gunsmith's Devotion Boots
    977326564, // Bulletsmith's Ire Mark
    1499503877, // Gunsmith's Devotion Bond
    1989682895, // Bulletsmith's Ire Gauntlets
    2286640864, // Gunsmith's Devotion Gloves
    2334017923, // Bladesmith's Memory Grips
    2564183153, // Bulletsmith's Ire Greaves
    2719710110, // Bulletsmith's Ire Helm
    2750983488, // Bladesmith's Memory Cloak
    3491990569, // Bulletsmith's Ire Plate
    4092373800, // Gunsmith's Devotion Robes
  ],
  seasonpass: [
    238618944, // Righteous Helm
    238618947, // Righteous Helm
    299852985, // Righteous Strides
    299852986, // Righteous Strides
    344824592, // Righteous Vest
    344824595, // Righteous Vest
    382498901, // Righteous Mask
    382498902, // Righteous Mask
    445618860, // Righteous Mark
    445618863, // Righteous Mark
    509561140, // Substitutional Alloy Gloves
    509561143, // Substitutional Alloy Gloves
    785967405, // Righteous Gloves
    785967406, // Righteous Gloves
    936010064, // Righteous Boots
    936010067, // Righteous Boots
    940065569, // Righteous Cloak
    940065570, // Righteous Cloak
    1076538457, // Righteous Gauntlets
    1076538458, // Righteous Gauntlets
    1137424312, // Substitutional Alloy Cloak
    1137424315, // Substitutional Alloy Cloak
    1387688628, // The Gate Lord's Eye
    1416697413, // Righteous Bond
    1416697414, // Righteous Bond
    1557571324, // Righteous Hood
    1557571327, // Righteous Hood
    1560040305, // Righteous Plate
    1560040306, // Righteous Plate
    1721943441, // Substitutional Alloy Boots
    1721943442, // Substitutional Alloy Boots
    1855720513, // Substitutional Alloy Vest
    1855720514, // Substitutional Alloy Vest
    2096778461, // Substitutional Alloy Strides
    2096778462, // Substitutional Alloy Strides
    2468603405, // Substitutional Alloy Plate
    2468603406, // Substitutional Alloy Plate
    2690973101, // Substitutional Alloy Hood
    2690973102, // Substitutional Alloy Hood
    2815379657, // Substitutional Alloy Bond
    2815379658, // Substitutional Alloy Bond
    2903026873, // Substitutional Alloy Helm
    2903026874, // Substitutional Alloy Helm
    2942269704, // Substitutional Alloy Gauntlets
    2942269707, // Substitutional Alloy Gauntlets
    3166926328, // Substitutional Alloy Robes
    3166926331, // Substitutional Alloy Robes
    3192738009, // Substitutional Alloy Greaves
    3192738010, // Substitutional Alloy Greaves
    3406670224, // Righteous Greaves
    3406670227, // Righteous Greaves
    3750877148, // Righteous Grips
    3750877151, // Righteous Grips
    3757338780, // Substitutional Alloy Mark
    3757338783, // Substitutional Alloy Mark
    3931361416, // Righteous Robes
    3931361419, // Righteous Robes
    4026120124, // Substitutional Alloy Grips
    4026120127, // Substitutional Alloy Grips
    4078925541, // Substitutional Alloy Mask
    4078925542, // Substitutional Alloy Mask
  ],
  shaxx: [
    85800627, // Ankaa Seeker IV
    87665893, // Binary Phoenix Cloak
    98331691, // Binary Phoenix Mark
    215768941, // Ankaa Seeker IV
    252414402, // Swordflight 4.1
    283188616, // Wing Contender
    290136582, // Wing Theorem
    328902054, // Swordflight 4.1
    356269375, // Wing Theorem
    388771599, // Phoenix Strife Type 0
    419812559, // Ankaa Seeker IV
    438224459, // Wing Discipline
    449878234, // Phoenix Strife Type 0
    468899627, // Binary Phoenix Mark
    530558102, // Phoenix Strife Type 0
    670877864, // Binary Phoenix Mark
    727838174, // Swordflight 4.1
    744199039, // Wing Contender
    761953100, // Ankaa Seeker IV
    820446170, // Phoenix Strife Type 0
    852430165, // Ankaa Seeker IV
    874101646, // Wing Theorem
    876608500, // Ankaa Seeker IV
    920187221, // Wing Discipline
    1036467370, // Wing Theorem
    1062166003, // Wing Contender
    1071350799, // Binary Phoenix Cloak
    1245115841, // Wing Theorem
    1299272338, // Ankaa Seeker IV
    1467590642, // Binary Phoenix Bond
    1548928853, // Phoenix Strife Type 0
    1571781304, // Swordflight 4.1
    1654427223, // Swordflight 4.1
    1658896287, // Binary Phoenix Cloak
    1673285051, // Wing Theorem
    1716643851, // Wing Contender
    1722623780, // Wing Discipline
    1727248109, // Phoenix Strife Type 0
    1742940528, // Phoenix Strife Type 0
    1765728763, // Ankaa Seeker IV
    1801625827, // Swordflight 4.1
    1807196134, // Phoenix Strife Type 0
    1830829330, // Swordflight 4.1
    1838158578, // Binary Phoenix Bond
    1838273186, // Wing Contender
    1852468615, // Ankaa Seeker IV
    1904811766, // Swordflight 4.1
    1929596421, // Ankaa Seeker IV
    2070517134, // Wing Contender
    2094233929, // Swordflight 4.1
    2231762285, // Phoenix Strife Type 0
    2291226602, // Binary Phoenix Bond
    2293476915, // Swordflight 4.1
    2296560252, // Swordflight 4.1
    2323865727, // Wing Theorem
    2415711886, // Wing Contender
    2426070307, // Binary Phoenix Cloak
    2466453881, // Wing Discipline
    2473130418, // Swordflight 4.1
    2492669178, // Swordflight 4.1
    2496309431, // Wing Discipline
    2525395257, // Wing Theorem
    2543903638, // Phoenix Strife Type 0
    2670393359, // Phoenix Strife Type 0
    2674680132, // Phoenix Strife Type 0
    2680535688, // Swordflight 4.1
    2727890395, // Ankaa Seeker IV
    2775298636, // Ankaa Seeker IV
    2845947996, // Phoenix Strife Type 0
    3089908066, // Wing Discipline
    3098458331, // Ankaa Seeker IV
    3119528729, // Wing Contender
    3298826188, // Swordflight 4.1
    3315265682, // Phoenix Strife Type 0
    3483546829, // Wing Discipline
    3522021318, // Wing Discipline
    3756286064, // Phoenix Strife Type 0
    3772194440, // Wing Contender
    3781722107, // Phoenix Strife Type 0
    3797729472, // Swordflight 4.1
    3818803676, // Wing Discipline
    3839561204, // Wing Theorem
    3884544409, // Binary Phoenix Mark
    4043980813, // Ankaa Seeker IV
    4123918087, // Wing Contender
    4134090375, // Ankaa Seeker IV
    4136212668, // Wing Discipline
    4144133120, // Wing Theorem
    4211218181, // Ankaa Seeker IV
    4269346472, // Binary Phoenix Bond
  ],
  shipwright: [],
  sos: [
    91896851, // Equitis Shade Boots
    165966230, // Insigne Shade Gloves
    813277303, // Equitis Shade Rig
    1035112834, // Turris Shade Mark
    1178920188, // Turris Shade Helm
    1378348656, // Insigne Shade Boots
    2295412715, // Turris Shade Plate
    2305801487, // Insigne Shade Cover
    2475562438, // Equitis Shade Cloak
    2575374197, // Turris Shade Gauntlets
    3316476193, // Equitis Shade Grips
    3518692432, // Equitis Shade Cowl
    3862230571, // Insigne Shade Bond
    4151496279, // Turris Shade Greaves
    4213777114, // Insigne Shade Robes
  ],
  strikes: [
    358599471, // Vigil of Heroes
    417061387, // Xenos Vale IV
    420247988, // Xenos Vale IV
    432360904, // Vigil of Heroes
    508642129, // Vigil of Heroes
    533855986, // Xenos Vale IV
    758026143, // Vigil of Heroes
    768769183, // The Shelter in Place
    799187478, // Vigil of Heroes
    946526461, // The Took Offense
    986111044, // Vigil of Heroes
    1003941622, // Vigil of Heroes
    1130203390, // Vigil of Heroes
    1188816597, // The Took Offense
    1269679141, // The Took Offense
    1276048857, // The Shelter in Place
    1320081419, // The Shelter in Place
    1405063395, // Vigil of Heroes
    1514841742, // Mark of Shelter
    1538362007, // Vigil of Heroes
    1699493316, // The Last Dance
    1702245537, // Xenos Vale IV
    1805830669, // Xenos Vale Bond
    1825880546, // The Took Offense
    1953621386, // The Took Offense
    1959285715, // The Took Offense
    2011569904, // Vigil of Heroes
    2060516289, // Vigil of Heroes
    2076567986, // Vigil of Heroes
    2304309360, // Vigil of Heroes
    2337221567, // Vigil of Heroes
    2408514352, // The Took Offense
    2422319309, // Vigil of Heroes
    2454114768, // Xenos Vale IV
    2460793798, // Vigil of Heroes
    2498588344, // Xenos Vale IV
    2671880779, // Vigil of Heroes
    2722966297, // The Shelter in Place
    2764938807, // The Took Offense
    2902263756, // Vigil of Heroes
    2939022735, // Vigil of Heroes
    3014775444, // Mark of Shelter
    3034285946, // Xenos Vale IV
    3074985148, // Vigil of Heroes
    3130904371, // Vigil of Heroes
    3221304270, // Xenos Vale IV
    3375632008, // The Shelter in Place
    3469164235, // The Took Offense
    3499839403, // Vigil of Heroes
    3500775049, // Vigil of Heroes
    3544662820, // Vigil of Heroes
    3584380110, // Vigil of Heroes
    3666681446, // Vigil of Heroes
    3851385946, // Vigil of Heroes
    3963753111, // Xenos Vale Bond
    3984883553, // The Shelter in Place
    4024037919, // Origin Story
    4038429998, // The Shelter in Place
    4074662489, // Vigil of Heroes
    4087433052, // The Took Offense
    4138296191, // The Shelter in Place
    4288492921, // Vigil of Heroes
  ],
  sundial: [],
  tangled: [
    902989307, // Scorned Baron Vest
    1407026808, // Torobatl Celebration Mask
    1566911695, // Scorned Baron Plate
    2944336620, // Nea-Thonis Breather
    3523809305, // Eimin-Tin Ritual Mask
    4245441464, // Scorned Baron Robes
  ],
  titan: [
    66047450, // Lost Pacific Gloves
    688564517, // Lost Pacific Vest
    727401524, // Lost Pacific Mark
    1322519316, // Lost Pacific Boots
    1505338369, // Lost Pacific Greaves
    1511235307, // Lost Pacific Grips
    1558884814, // Lost Pacific Helm
    1743790315, // Lost Pacific Helmet
    2171693954, // Lost Pacific Mask
    2584088255, // Lost Pacific Gauntlets
    2602992893, // Lost Pacific Strides
    3283642233, // Lost Pacific Plate
    3416618798, // Lost Pacific Robes
    3734713335, // Lost Pacific Bond
    4105480824, // Lost Pacific Cape
  ],
  trials: [
    72827962, // Focusing Robes
    72827963, // Channeling Robes
    155955678, // Mark Relentless
    155955679, // Mark Judgment
    421771594, // Cloak Relentless
    421771595, // Cloak Judgment
    686607148, // Channeling Cowl
    686607149, // Focusing Cowl
    773318266, // Flowing Vest
    773318267, // Floating Vest
    784751926, // Crushing Plate
    784751927, // Annihilating Plate
    945907382, // Flowing Grips
    945907383, // Floating Grips
    1929400866, // Annihilating Helm
    1929400867, // Crushing Helm
    2158289680, // Flowing Boots
    2158289681, // Floating Boots
    3025466098, // Crushing Guard
    3025466099, // Annihilating Guard
    3127319342, // Floating Cowl
    3127319343, // Flowing Cowl
    3149072082, // Judgement's Wrap
    3149072083, // Bond Relentless
    3426704396, // Crushing Greaves
    3426704397, // Annihilating Greaves
    4100217958, // Focusing Boots
    4100217959, // Flowing Treads
    4177448932, // Focusing Wraps
    4177448933, // Channeling Wraps
  ],
  vexoffensive: [],
  zavala: [
    358599471, // Vigil of Heroes
    417061387, // Xenos Vale IV
    420247988, // Xenos Vale IV
    432360904, // Vigil of Heroes
    508642129, // Vigil of Heroes
    533855986, // Xenos Vale IV
    758026143, // Vigil of Heroes
    768769183, // The Shelter in Place
    799187478, // Vigil of Heroes
    946526461, // The Took Offense
    986111044, // Vigil of Heroes
    1003941622, // Vigil of Heroes
    1130203390, // Vigil of Heroes
    1188816597, // The Took Offense
    1269679141, // The Took Offense
    1276048857, // The Shelter in Place
    1320081419, // The Shelter in Place
    1405063395, // Vigil of Heroes
    1514841742, // Mark of Shelter
    1538362007, // Vigil of Heroes
    1699493316, // The Last Dance
    1702245537, // Xenos Vale IV
    1805830669, // Xenos Vale Bond
    1825880546, // The Took Offense
    1953621386, // The Took Offense
    1959285715, // The Took Offense
    2011569904, // Vigil of Heroes
    2060516289, // Vigil of Heroes
    2076567986, // Vigil of Heroes
    2304309360, // Vigil of Heroes
    2337221567, // Vigil of Heroes
    2408514352, // The Took Offense
    2422319309, // Vigil of Heroes
    2454114768, // Xenos Vale IV
    2460793798, // Vigil of Heroes
    2498588344, // Xenos Vale IV
    2671880779, // Vigil of Heroes
    2722966297, // The Shelter in Place
    2764938807, // The Took Offense
    2902263756, // Vigil of Heroes
    2939022735, // Vigil of Heroes
    3014775444, // Mark of Shelter
    3034285946, // Xenos Vale IV
    3074985148, // Vigil of Heroes
    3130904371, // Vigil of Heroes
    3221304270, // Xenos Vale IV
    3375632008, // The Shelter in Place
    3469164235, // The Took Offense
    3499839403, // Vigil of Heroes
    3500775049, // Vigil of Heroes
    3544662820, // Vigil of Heroes
    3584380110, // Vigil of Heroes
    3666681446, // Vigil of Heroes
    3851385946, // Vigil of Heroes
    3963753111, // Xenos Vale Bond
    3984883553, // The Shelter in Place
    4024037919, // Origin Story
    4038429998, // The Shelter in Place
    4074662489, // Vigil of Heroes
    4087433052, // The Took Offense
    4138296191, // The Shelter in Place
    4288492921, // Vigil of Heroes
  ],
};

export default missingSources;
