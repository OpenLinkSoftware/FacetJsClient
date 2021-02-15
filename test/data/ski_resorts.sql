-- Test data includes some properties not declared in the oplski:SkiResort class & property definitions
-- e.g. geonames:countryCode

sparql clear graph <http://pivot_test_data/ski_resorts> ;

create procedure DB.DBA.load_ski_resort_data()
{
  declare ttl varchar;
  declare host varchar;

  host := registry_get ('URIQADefaultHost');
  if (not isstring (host))
    host := 'localhost';

  ttl := '
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> 
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> 
@prefix oplski: <http://www.openlinksw.com/ski_resorts/schema#> 
@prefix geonames: <http://www.geonames.org/ontology#> 
@prefix foaf: <http://xmlns.com/foaf/0.1/>
@prefix : <http://pivot_test_data/ski_resorts#> 

:La_Plagne a oplski:SkiResort .
:La_Plagne oplski:resort_name "La Plagne" .
:La_Plagne oplski:category "tourism" .
:La_Plagne oplski:resort_type "ski resort" .
:La_Plagne geonames:countryCode "FR" .
:La_Plagne oplski:altitude_m "1800"^^xsd:integer .
:La_Plagne oplski:total_piste_km "225"^^xsd:integer .
:La_Plagne oplski:longest_run_km "15"^^xsd:integer .
:La_Plagne oplski:total_runs "130"^^xsd:integer .
:La_Plagne oplski:beginner_slopes "10"^^xsd:integer .
:La_Plagne oplski:intermediate_slopes "69"^^xsd:integer .
:La_Plagne oplski:advanced_slopes "33"^^xsd:integer .
:La_Plagne oplski:expert_slopes "18"^^xsd:integer .
:La_Plagne oplski:description "One of the first purpose built resorts in France, La Plagne comprises ten ski centres, each virtually self-contained with shops, restaurants, ski schools and children\'s villages. Each village has direct access to the slopes and are well connected by buses and gondolas." .
:La_Plagne foaf:depiction <http://{HOST}/DAV/VAD/sparql_cxml/test_data/la_plagne.jpg> .
:Les_Arcs a oplski:SkiResort .
:Les_Arcs oplski:resort_name "Les Arcs" .
:Les_Arcs oplski:category "tourism" .
:Les_Arcs oplski:resort_type "ski resort" .
:Les_Arcs geonames:countryCode "FR" .
:Les_Arcs oplski:altitude_m "1600"^^xsd:integer .
:Les_Arcs oplski:total_piste_km "200"^^xsd:integer .
:Les_Arcs oplski:longest_run_km "7"^^xsd:integer .
:Les_Arcs oplski:total_runs "118"^^xsd:integer .
:Les_Arcs oplski:beginner_slopes "0"^^xsd:integer .
:Les_Arcs oplski:intermediate_slopes "9"^^xsd:integer .
:Les_Arcs oplski:advanced_slopes "42"^^xsd:integer .
:Les_Arcs oplski:expert_slopes "49"^^xsd:integer .
:Les_Arcs oplski:description "The resort of Les Arcs is made up of four villages. Arc 2000 is popular, due to its elevation and guaranteed snow. Arc 1950 is the newest village and is becoming more and more popular because of the high quality self catering units available. Arc 1800 has a lively atmosphere and excellent access to the skiing. Act 1600 has a real village atmosphere." .
:La_Rosiere a oplski:SkiResort .
:La_Rosiere oplski:resort_name "La Rosiere" .
:La_Rosiere oplski:category "tourism" .
:La_Rosiere oplski:resort_type "ski resort" .
:La_Rosiere geonames:countryCode "FR" .
:La_Rosiere oplski:altitude_m "1850"^^xsd:integer .
:La_Rosiere oplski:total_piste_km "140"^^xsd:integer .
:La_Rosiere oplski:longest_run_km "3"^^xsd:integer .
:La_Rosiere oplski:total_runs "73"^^xsd:integer .
:La_Rosiere oplski:beginner_slopes "0"^^xsd:integer .
:La_Rosiere oplski:intermediate_slopes "45"^^xsd:integer .
:La_Rosiere oplski:advanced_slopes "40"^^xsd:integer .
:La_Rosiere oplski:expert_slopes "15"^^xsd:integer .
:La_Rosiere oplski:description "La Rosiere is right on the French border with Italy, on the Petit St Bernard pass (used, it is said, by Hannibal en-route from Spain to Rome) and linked with the Italian resort of La Thuile. The two resorts, although unlikely stable mates, form a substantial ski area. La Rosiere ski holidays offer plenty for beginners, intermediates and advanced skiers, along with a big helping of sunshine." .
:La_Rosiere foaf:depiction <http://{HOST}/DAV/VAD/sparql_cxml/test_data/la_rosiere.jpg> .
:La_Thuile a oplski:SkiResort .
:La_Thuile oplski:resort_name "La Thuile" .
:La_Thuile oplski:category "tourism" .
:La_Thuile oplski:resort_type "ski resort" .
:La_Thuile geonames:countryCode "FR" .
:La_Thuile oplski:altitude_m "1450"^^xsd:integer .
:La_Thuile oplski:total_piste_km "146"^^xsd:integer .
:La_Thuile oplski:longest_run_km "11"^^xsd:integer .
:La_Thuile oplski:total_runs "68"^^xsd:integer .
:La_Thuile oplski:beginner_slopes "0"^^xsd:integer .
:La_Thuile oplski:intermediate_slopes "40"^^xsd:integer .
:La_Thuile oplski:advanced_slopes "44"^^xsd:integer .
:La_Thuile oplski:expert_slopes "16"^^xsd:integer .
:La_Thuile oplski:description "A traditional unspoilt resort with a good lift system, uncrowded extensive slopes linked to La Rosiere in France and a relaxed apres ski scene. Suitable for all standards of skiing, La Thuile\'s wide open slopes and long runs back to the village provide magnificent views of Mont Blanc, the Matterhorn and Monte Rosa. Most of the better skiing is to be found on the Italian side where crowds are minimal, pistes are quiet and lift queues almost non-existent thanks to the resort\'s modern, fast and efficient lift system." .
:Courmayeur a oplski:SkiResort .
:Courmayeur oplski:resort_name "Courmayeur" .
:Courmayeur oplski:category "tourism" .
:Courmayeur oplski:resort_type "ski resort" .
:Courmayeur geonames:countryCode "IT" .
:Courmayeur oplski:altitude_m "1225"^^xsd:integer .
:Courmayeur oplski:total_piste_km "50"^^xsd:integer .
:Courmayeur oplski:longest_run_km "6"^^xsd:integer .
:Courmayeur oplski:total_runs "23"^^xsd:integer .
:Courmayeur oplski:beginner_slopes "3"^^xsd:integer .
:Courmayeur oplski:intermediate_slopes "6"^^xsd:integer .
:Courmayeur oplski:advanced_slopes "14"^^xsd:integer .
:Courmayeur oplski:expert_slopes "4"^^xsd:integer .
:Courmayeur oplski:description "This charming, traditional mountain village, with its cobbled streets and stylish shops, is one place not to be missed. Next to Europe\'s highest mountain, Mont Blanc, Courmayeur also opens the door to a wide range of ski away-days, including the nearby Italian resorts of La Thuile and Pila, and Chamonix in France." .
:Bardonecchia a oplski:SkiResort .
:Bardonecchia oplski:resort_name "Bardonecchia" .
:Bardonecchia oplski:category "tourism" .
:Bardonecchia oplski:resort_type "ski resort" .
:Bardonecchia geonames:countryCode "IT" .
:Bardonecchia oplski:altitude_m "1300"^^xsd:integer .
:Bardonecchia oplski:total_piste_km "140"^^xsd:integer .
:Bardonecchia oplski:longest_run_km "6"^^xsd:integer .
:Bardonecchia oplski:total_runs "52"^^xsd:integer .
:Bardonecchia oplski:beginner_slopes "8"^^xsd:integer .
:Bardonecchia oplski:intermediate_slopes "8"^^xsd:integer .
:Bardonecchia oplski:advanced_slopes "20"^^xsd:integer .
:Bardonecchia oplski:expert_slopes "16"^^xsd:integer .
:Bardonecchia oplski:description "Comprising of six villages nestled in a sunny corner of the Susa valley, Bardonecchia\'s slopes suit all levels, ranging from wide nursery slopes to challenging black runs. A ski bus service links the lifts at both sides of the resort, which has seen investment following the 2006 Winter Olympics" .
:Bardonecchia foaf:depiction <http://{HOST}/DAV/VAD/sparql_cxml/test_data/bardonnechia.jpg> .
:Sauze_d_Oulx a oplski:SkiResort .
:Sauze_d_Oulx oplski:resort_name "Sauze d\'Oulx" .
:Sauze_d_Oulx oplski:category "tourism" .
:Sauze_d_Oulx oplski:resort_type "ski resort" .
:Sauze_d_Oulx geonames:countryCode "IT" .
:Sauze_d_Oulx oplski:altitude_m "1510"^^xsd:integer .
:Sauze_d_Oulx oplski:total_piste_km "400"^^xsd:integer .
:Sauze_d_Oulx oplski:total_runs "146"^^xsd:integer .
:Sauze_d_Oulx oplski:beginner_slopes "0"^^xsd:integer .
:Sauze_d_Oulx oplski:intermediate_slopes "29"^^xsd:integer .
:Sauze_d_Oulx oplski:advanced_slopes "50"^^xsd:integer .
:Sauze_d_Oulx oplski:expert_slopes "21"^^xsd:integer .
:Sauze_d_Oulx oplski:description "Having benefited from the investment of hosting the successful 2006 Winter Olympic Games, the resorts making up the Milky Way ski area are superb destinations for fun and fulfilling skiing. The extensive slopes and uncrowded runs offer perfect conditions to ski and board at your own pace. Sauze d\'Oulx offers varied skiing for all, matched with lively night-life." .
:Kitzbuhel a oplski:SkiResort .
:Kitzbuhel oplski:resort_name "Kitzbuhel" .
:Kitzbuhel oplski:category "tourism" .
:Kitzbuhel oplski:resort_type "ski resort" .
:Kitzbuhel geonames:countryCode "AT" .
:Kitzbuhel oplski:altitude_m "780"^^xsd:integer .
:Kitzbuhel oplski:total_piste_km "168"^^xsd:integer .
:Kitzbuhel oplski:longest_run_km "7"^^xsd:integer .
:Kitzbuhel oplski:total_runs "70"^^xsd:integer .
:Kitzbuhel oplski:beginner_slopes "5"^^xsd:integer .
:Kitzbuhel oplski:intermediate_slopes "21"^^xsd:integer .
:Kitzbuhel oplski:advanced_slopes "23"^^xsd:integer .
:Kitzbuhel oplski:expert_slopes "9"^^xsd:integer .
:Kitzbuhel oplski:description "The world famous ski resort of Kitzbuhel has a unique ambience, buzzing with atmosphere. This fashionable ski town boasts stylish shops, restaurants and sophisticated nightlife alongside medieval archways, and cobbled streets. The Kitzbuhelerhorn and Hahnenkamm ski areas are easily accessible by gondola from either side of the town making this an excellent choice for experiencing Austrian skiing at its best." .
:Obergurgl a oplski:SkiResort .
:Obergurgl oplski:resort_name "Obergurgl" .
:Obergurgl oplski:category "tourism" .
:Obergurgl oplski:resort_type "ski resort" .
:Obergurgl geonames:countryCode "AT" .
:Obergurgl oplski:altitude_m "1800"^^xsd:integer .
:Obergurgl oplski:total_piste_km "110"^^xsd:integer .
:Obergurgl oplski:longest_run_km "8"^^xsd:integer .
:Obergurgl oplski:total_runs "39"^^xsd:integer .
:Obergurgl oplski:beginner_slopes "4"^^xsd:integer .
:Obergurgl oplski:intermediate_slopes "10"^^xsd:integer .
:Obergurgl oplski:advanced_slopes "16"^^xsd:integer .
:Obergurgl oplski:expert_slopes "9"^^xsd:integer .
:Obergurgl oplski:description "Situated high up in the stunning Otz Valley, the superb Obergurgl-Hochgurgl ski area offers a wide range of uncrowded pistes, easily accessible from both villages and linked by the Top Express gondola. Many guests return to the area year after year to enjoy the excellent snow cover, high-class hotels and queue-free skiing of these highest resorts in Austria." .
:Soll a oplski:SkiResort .
:Soll oplski:resort_name "Soll" .
:Soll oplski:category "tourism" .
:Soll oplski:resort_type "ski resort" .
:Soll geonames:countryCode "AT" .
:Soll oplski:altitude_m "700"^^xsd:integer .
:Soll oplski:total_piste_km "250"^^xsd:integer .
:Soll oplski:longest_run_km "10"^^xsd:integer .
:Soll oplski:total_runs "91"^^xsd:integer .
:Soll oplski:beginner_slopes "0"^^xsd:integer .
:Soll oplski:intermediate_slopes "40"^^xsd:integer .
:Soll oplski:advanced_slopes "43"^^xsd:integer .
:Soll oplski:expert_slopes "7"^^xsd:integer .
:Soll oplski:description "The main resort of the Ski Welt circuit, Soll is a firm favourite with the British offering an attractive village centre with vibrant nightlife and lots of activities off the slopes. Gentle nursery slopes lie on the edge of the village and here you can also take the gondola up to the famous Hohe Salve mountain in the heart of the Ski Welt area." .
:Soll rdfs:seeAlso <http://www.freebase.com/view/en/soll> .
:Mayhofen a oplski:SkiResort .
:Mayhofen oplski:resort_name "Mayhofen" .
:Mayhofen oplski:category "tourism" .
:Mayhofen oplski:resort_type "ski resort" .
:Mayhofen geonames:countryCode "AT" .
:Mayhofen oplski:altitude_m "630"^^xsd:integer .
:Mayhofen oplski:total_piste_km "157"^^xsd:integer .
:Mayhofen oplski:longest_run_km "5"^^xsd:integer .
:Mayhofen oplski:total_runs "50"^^xsd:integer .
:Mayhofen oplski:beginner_slopes "0"^^xsd:integer .
:Mayhofen oplski:intermediate_slopes "22"^^xsd:integer .
:Mayhofen oplski:advanced_slopes "27"^^xsd:integer .
:Mayhofen oplski:expert_slopes "3"^^xsd:integer .
:Mayhofen oplski:description "Set in the beautiful Ziller valley, Mayrhofen offers fantastic skiing and excellent apres ski and is a huge favourite with families too. The wonderful skiing in Maytrhofen takes place on the two separate, sunny plateaux of the Penken and the Ahorn, easily accessible by the two village centre lifts while the free bus service opens up the huge Zillertal ski area including the Hintertux Glacier. " .
:Innsbruck a oplski:SkiResort .
:Innsbruck oplski:resort_name "Innsbruck" .
:Innsbruck oplski:category "tourism" .
:Innsbruck oplski:resort_type "ski resort" .
:Innsbruck geonames:countryCode "AT" .
:Innsbruck oplski:altitude_m "570"^^xsd:integer .
:Innsbruck oplski:total_piste_km "15"^^xsd:integer .
:Innsbruck oplski:longest_run_km "5"^^xsd:integer .
:Innsbruck oplski:total_runs "9"^^xsd:integer .
:Innsbruck oplski:beginner_slopes "0"^^xsd:integer .
:Innsbruck oplski:intermediate_slopes "1"^^xsd:integer .
:Innsbruck oplski:advanced_slopes "7"^^xsd:integer .
:Innsbruck oplski:expert_slopes "1"^^xsd:integer .
:Innsbruck oplski:description "With towering peaks on all sides, Innsbruck is dominated by mountain sports. An underground train links the historic Old Town of Innsbruck with the Nordpark ski area, whilst there are ski resorts on all sides of the city. There can be few more alpine dominated places in the world and Innsbruck is rightly known as the capital and heart of the Alps. With an international airport and train hub, St Anton and Kitzbuhel are an hour away, Italy is just to the south and the biggest glacier skiing in the Alps is close by." .
:Arabba a oplski:SkiResort .
:Arabba oplski:resort_name "Arabba" .
:Arabba oplski:category "tourism" .
:Arabba oplski:resort_type "ski resort" .
:Arabba geonames:countryCode "IT" .
:Arabba oplski:altitude_m "1600"^^xsd:integer .
:Arabba oplski:total_piste_km "52"^^xsd:integer .
:Arabba oplski:longest_run_km "9"^^xsd:integer .
:Arabba oplski:total_runs "50"^^xsd:integer .
:Arabba oplski:beginner_slopes "0"^^xsd:integer .
:Arabba oplski:intermediate_slopes "20"^^xsd:integer .
:Arabba oplski:advanced_slopes "23"^^xsd:integer .
:Arabba oplski:expert_slopes "7"^^xsd:integer .
:Arabba oplski:description "The Arabba ski area is in the heart of the \'SuperSki Dolomiti\' region, boasting 1,040 kms of piste and 465 lifts. From the massive rock outcrop of the Gruppo del Sella, the four valleys of Val Gardena, Val di Fassa, Val di Alta Badia and Val di Livinallongo, wind their way through the extensive Dolomite range and provide some spectacular scenery. The Sella Ronda circuit represents the largest interconnected ski area in the Dolomites and links all four of the valleys, plus the resorts of Campitello, Canazei, Selva, Ortisei, Colfosco, Corvara, La Villa and Arabba, with modern, efficient lift systems, exceptionally well-groomed pistes and Arabba\'s very own extensive artificial snow-making equipment. Arabba is one of the most famous resorts on the circuit - a small, traditional village perched at the top of Val Livinallongo, occupying one of the best positions for keen skiers, with the pistes in Arabba leading right back to the village. " .
:Arabba foaf:depiction <http://{HOST}/DAV/VAD/sparql_cxml/test_data/arabba.jpg> .
:Canazei_di_Fassa a oplski:SkiResort .
:Canazei_di_Fassa oplski:resort_name "Canazei di Fassa" .
:Canazei_di_Fassa oplski:category "tourism" .
:Canazei_di_Fassa oplski:resort_type "ski resort" .
:Canazei_di_Fassa geonames:countryCode "IT" .
:Canazei_di_Fassa oplski:altitude_m "1460"^^xsd:integer .
:Canazei_di_Fassa oplski:longest_run_km "6"^^xsd:integer .
:Canazei_di_Fassa oplski:total_runs "18"^^xsd:integer .
:Canazei_di_Fassa oplski:beginner_slopes "0"^^xsd:integer .
:Canazei_di_Fassa oplski:intermediate_slopes "7"^^xsd:integer .
:Canazei_di_Fassa oplski:advanced_slopes "9"^^xsd:integer .
:Canazei_di_Fassa oplski:expert_slopes "2"^^xsd:integer .
:Canazei_di_Fassa oplski:description "Canazei is situated at the head of the wonderfully picturesque Fassa Valley. It enjoys a scenic position right in the heart of the famous Dolomiti Superski area. Skiing holidays in Canazei deliver over 1000km of breathtaking interconnected pistes. Skiers take the central Belvedere gondola, which links directly to the superb Sella Ronda circuit. Ski in Canazei for excellent skiing at all levels, from complete beginner to expert. Apres-ski involves several lively bars including the Husky Bar where you can dance the night away." .
';

  ttl := replace(ttl, '{HOST}', host);
  DB.DBA.TTLP (ttl, '', 'http://pivot_test_data/ski_resorts', 0);
}
;

DB.DBA.load_ski_resort_data();

drop procedure DB.DBA.load_ski_resort_data;
