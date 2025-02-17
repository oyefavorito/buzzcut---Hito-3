-- 📌 Insertar Usuarios
INSERT INTO USUARIOS (nombre_apellido, correo, clave, telefono, direccion, ciudad)
VALUES ('Juan Perez', 'juan@example.com', 'password123', '1234567890', 'Calle 123', 'Ciudad A'),
('Flavia Rivera', 'flavia-rivera@example.com', 'flaviaflavia', '56968420139', 'Robinson Rojas #3322, Comuna Arica', 'Arica'),
('Yerko Andres Rojas Rivera', 'yerko.rojas@hotmail.es', 'h6via3xs', '968420138', 'Guayaquil 527, depto 10, comuna Santiago Centro', 'Santiago');

-- 📌 Insertar Categorías de Productos
INSERT INTO CATEGORIAS (nombre_categoria)
VALUES 
('Tornamesas'),
('Vinilos'),
('Audio'),
('Colaboraciones');

-- 📌 Insertar Productos
INSERT INTO PRODUCTOS (img_url, nombre, precio, descripcion, id_categoria) 
VALUES ('https://needle.cl/cdn/shop/files/PL3_Nd3_black_offside_no_lid_playing_7f593a6f-f1d2-4bcf-8f18-b65db449958c.jpg?v=1730900783&width=900', 'Tornamesa Planar 3', 899910, 'Rega es pionera en el uso de bases rigidas y ligeras. El uso inteligente de un nucleo de particulas ligero con un revestimiento de resina fenolica de gran rigidez se convirtio en el pilar del rendimiento de alto nivel conseguido por la ahora iconica gama Planar original.', 1), 
('https://needle.cl/cdn/shop/files/637984-at-lp60x_01.png?v=1723613297&width=1950', 'Tornamesa AT-LP60X', 179900, 'Si estas pensando entrar en el mundo del vinilo o si quieres reproducir esporadicamente tus discos, esta es tu tornamesa. Si tuvieramos que hacer una analogia en pocas palabras, esta tornamesa es el clasico auto bueno bonito y barato que si lo cuidas bien te durara anos. Si bien en internet puedes encontrar usuarios que la aman tambien hay otras personas que la miran con recelo dado su bajo costo y su brazo. Para nosotros es una tornamesa que apana bastante y que recomendamos si buscas una automatica que reproduzca discos de 33-1/3 como de 45 rpm, las dos velocidades mas comunes en el mundo del vinilo.', 1), 
('https://needle.cl/cdn/shop/files/929123-A5__Wireless.png?v=1719615758&width=500', 'Tornamesa Debut S', 454300, 'La primera tornamesa Debut, presentado a finales de la decada de 1990, fue una revolucion para la industria del hi-fi. Por primera vez despues de la llegada del Compact Disc y la supuesta desaparicion de los discos de vinilo, surgio un producto analogico en el mercado masivo, algo que todos los amantes de la musica podian permitirse. Ahora Pro-Ject se complace en distribuir su nueva Debut con brazo en forma de S y la capsula de alta calidad Sumiko Rainier MM.', 1), 
('https://needle.cl/cdn/shop/files/869686-rega-planar6-hvid-1.jpg?v=1719615934&width=540', 'Tornamesa Planar 6', 1399920, 'La Planar 6 tiene un objetivo claro: reproducir su vinilo con la mayor precision posible. Rega ha disenado todos los aspectos de esta tornamesa para extraer la mayor cantidad posible de detalles de la superficie del vinilo. Se han utilizado materiales avanzados y soluciones de ingenieria en todo el diseno para garantizar el mayor nivel de rendimiento. La PSU Neo ofrece control antivibraciones avanzado y ajuste de velocidad electronico ajustable por el usuario que solo se encontraba en el RP10, hasta ahora.', 1), 
('https://needle.cl/cdn/shop/files/637187-2.jpg?v=1737735728&width=1950','Tornamesa Planar 1 Matt', 332910, 'La nueva Planar 1 es la tornamesa mas amigable para todos. El nuevo brazo RB110 viene con el control de bias (antiskating) calibrado de fabrica, por lo que la tornamesa queda lista para su uso apenas la sacas de la caja. Simplemente deslice el contrapeso en la parte trasera del brazo hasta el tope, quite el protector de la aguja y empieza a escuchar tu musica favorita.', 1), 
('https://needle.cl/cdn/shop/files/OC05OTM0LmpwZWc.jpg?v=1724176268&width=600','Mac Demarco - Vinilo LP 2', 31900, 'McBriare Samuel Lanyon Mac DeMarco, de nacimiento Vernor Winfield McBriare Smith IV, es un cantautor, multinstrumentista y productor discografico canadiense. Se le considera una de las principales figuras de la escena del bedroom pop de los 2010.', 2), 
('https://needle.cl/cdn/shop/files/Mi00NzAzLmpwZWc.jpg?v=1724184578&width=600','King Krule - Vinilo 6 feeth beneath the moon', 34900, 'Archy Ivan Marshall, conocido como King Krule, es un cantante, rapero, compositor, productor musical y musico ingles. Comenzo grabando musica en 2010 bajo el apodo de Zoo Kid. Al ano siguiente adopto su nombre actual.', 2), 
('https://needle.cl/cdn/shop/files/438480-R-3433715-1330218195_png.jpg?v=1719617094&width=600','Lana del Rey - Vinilo Born to Die', 42900, 'Elizabeth Woolridge Grant, conocida artisticamente como Lana Del Rey, es una cantante, compositora, modelo, actriz, escritora, productora y poetisa estadounidense. Su musica se distingue por su calidad cinematografica, su estilo retro y su exploracion del romance tragico, el glamur y la melancolia', 2), 
('https://needle.cl/cdn/shop/files/395610-AM.jpg?v=1719616834&width=600','Arctic Monkeys - Vinilo AM', 36900, 'Arctic Monkeys es una banda britanica de indie rock, formada en Sheffield, Reino Unido. El grupo esta compuesto por el guitarrista principal y vocalista Alex Turner, el guitarrista Jamie Cook, el baterista Matt Helders y el bajista Nick OMalley.', 2), 
('https://needle.cl/cdn/shop/files/OS0zMDQ4LmpwZWc.jpg?v=1724184704&width=599','Tame Impala - Vinilo Lonerism', 51900, 'Tame Impala es el proyecto de musica psicodelica del multiinstrumentista australiano Kevin Parker. En el estudio de grabacion, Parker compone, graba, interpreta y produce toda la musica del proyecto. En sus giras, Tame Impala esta formado por Parker, Dominic Simper, Jay Watson, Cam Avery y Julien Barbagallo', 2), 
('https://needle.cl/cdn/shop/files/481497-71Y55FU5VGL._SL1000.jpg?v=1719617215&width=600','Amy Winehouse - Vinilo Back to Black', 60900, 'Amy Jade Winehouse fue una cantante, compositora y multiinstrumentista britanica. Conocida por su poderosa y profunda voz de contralto y su eclectica mezcla de generos musicales, que incluyen soul, jazz, R&B y ritmos caribenos como el ska.', 2), 
('https://needle.cl/cdn/shop/files/MjktNjg5NC5qcGVn.jpg?v=1724103660&width=600','Boy Harsher - Vinilo Careful', 29900, 'Boy Harsher es un grupo estadounidense de musica electronica formado en 2013 en Savannah, Georgia. Actualmente con sede en Northampton, Massachusetts, la banda esta formada por el vocalista Jae Matthews y el productor Augustus Muller.', 2), 
('https://needle.cl/cdn/shop/files/MzQtNzQxMy5qcGVn.jpg?v=1724184561&width=600','Iggy Pop- Vinilo Lust for life', 41900, 'James Newell Osterberg, Jr., mas conocido por su nombre artistico Iggy Pop, es un cantante, musico, compositor, actor y locutor de radio estadounidense.', 2), 
('https://needle.cl/cdn/shop/files/178358-rumours.jpg?v=1719616869&width=600','Fleetwood Mac- Vinilo Rumours', 16900, 'Fleetwood Mac fue una legendaria banda de rock anglonorteamericana. Fleetwood Mac se formo en julio de 1967 en Londres, a partir de una banda previa de blus, los Bluesbreakers, donde habia tocado inicialmente Eric Clapton.', 2), 
('https://needle.cl/cdn/shop/files/407265-R-8957729-1477237326-8787_jpeg.jpg?v=1719616878&width=600','Pink Floyd - Vinilo The Wall', 61900, 'Pink Floyd es una banda de rock britanica, fundada en Londres en 1965. Considerada un icono cultural del siglo XX y una de las bandas mas influyentes, exitosas y aclamadas en la historia de la musica.', 2), 
('https://needle.cl/cdn/shop/files/NDYtNDU5Mi5qcGVn.jpg?v=1724184677&width=591', 'Smashing Pumpkins - Vinilo Siamese Dreams', 70900, 'The Smashing Pumpkins es una banda estadounidense de rock alternativo formada en Chicago en 1988. Fundada en un inicio por el vocalista Billy Corgan y James Iha, poco despues incluyeron a Jimmy Chamberlin y D''arcy Wretzky, completando su formacion original.', 2), 
('https://needle.cl/cdn/shop/files/438484-R-667892-1249548979_jpeg.jpg?v=1719617040&width=600', 'The Strokes - Vinilo Is this it', 30900, 'The Strokes es una banda de rock estadounidense de la ciudad de Nueva York. Formada en 1998, la banda esta compuesta por el cantante Julian Casablancas, los guitarristas Nick Valensi y Albert Hammond, Jr., el bajista Nikolai Fraiture y el baterista Fabrizio Moretti.', 2), 
('https://needle.cl/cdn/shop/files/505647-oberon_vokal_3.png?v=1719614672&width=500', 'Parlante Oberon Vokal', 224950, 'El parlante DALI OBERON VOKAL ha sido disenado para ser la union perfecta con cualquier altavoz de la serie OBEORN como forma de completar un sistema surround, ofreciendo un sonido detallado, preciso y claro tanto para peliculas como para conciertos. La posicion del puerto de bajos en el frente permite diferentes opciones de posicionamiento en el mueble. Hemos unido los mejores componentes de nuestros altavoces en OBERON VOKAL que ofrece audio de calidad, apariencia y versatilidad. Los OBERON VOKAL incorporan un tweeter de cupula blanda sobredimensionado de 29mm junto con un woofer SMC de fibra de madera - apoyado por el puerto de bajos frontal, lo cual hace que sea facil de situar. Por esta razon, es la perfecta opcion para configuraciones surround.', 3), 
('https://needle.cl/cdn/shop/files/789481-1.png?v=1719615484&width=540', 'Subwoofer S6', 263920, 'El Audioengine S6 establece un nuevo estandar en cuanto a rendimiento y tamano. Con 210 vatios de potencia en un pequeno paquete que cabe en casi cualquier lugar, el S6 es la extension de graves definitiva para su escritorio, cine en casa o configuracion de juegos. Con un woofer de disparo frontal en una caja sellada, el S6 ofrece unos graves profundos, suaves y contundentes que desafian las expectativas.', 3), 
('https://needle.cl/cdn/shop/files/656265-spektor1-2.png?v=1719615020&width=540', 'Parlantes Spektor 1', 206706, 'El DALI SPEKTOR 1 ofrece un diseno basado en los principios acusticos DALI a una nueva franja de precio, abriendo la posibilidad a nuevos melomanos y cinefilos de dejarse seducir por la verdadera Alta Fidelidad. Lograr una reproduccion tan HiFi de una caja acustica a este precio no solo ha requerido de toda nuestra experiencia y saber hacer, sino tambien de horas y horas en la sala de escucha, mejorando los disenos de driver y crossover para lograr la reproduccion de audio perfecta.', 3), 
('https://needle.cl/cdn/shop/files/540847-spektor-2.jpg?v=1719615030&width=1200', 'Parlantes Spektor 2', 281906, 'Los DALI SPEKTOR 2 son parlantes compactos de alta fidelidad que, gracias a su mayor volumen interno comparado con el SPEKTOR 1, ofrecen un rendimiento superior en los bajos. Son ideales para ser montados en un mueble, pared o soporte, adaptandose perfectamente a cualquier sistema de sonido Hi-Fi.', 3), 
('https://vinilospormayor.cl/cdn/shop/files/R-23510150-1662834272-6633_720x.jpg?v=1683323553', 'Babasonicos - Vinilo Trinchera', 12500, 'Iconica banda de rock argentina que ha roto el statu quo del rock latinoamericano, empujando los limites establecidos en repetidas ocasiones durante los anos 90 y 2000. Consiguieron desestabilizar la musica rock y crear nuevas tendencias, sin conformarse nunca con la norma.', 4), 
('https://http2.mlstatic.com/D_NQ_NP_2X_698317-MLU77522260375_072024-F.webp', 'Lykke Li - Vinilo So Sad So Sexy', 30000, 'Cantante y compositora sueca. Ganadora de dos premios Grammis, debuto en 2008, con su primer album de estudio, Youth Novels. Sus canciones a menudo mezclan elementos del indie pop, dream pop y electronica.', 4),
('https://i.blogs.es/3f5cde/sony-mdr-1rbt/450_1000.jpg', 'Audifonos Bluetooth Sonos Sony Over Ear Headphone', 50000, 'Los Sony Sonos Ace te permiten sumergirte completamente en tu musica favorita. Gracias a su cancelacion activa de ruido, puedes aislarte del mundo exterior y disfrutar de cada matiz y detalle de tus canciones, creando una sensacion de inmersion total.', 4),
('https://http2.mlstatic.com/D_NQ_NP_2X_711611-MLA79463688110_102024-F.webp', 'Beyonce - Vinilo Lemonade', 55000, 'Es el segundo album visual de Beyonce, luego de su quinto album de estudio homonimo (2013), y un album conceptual con un ciclo de canciones que relata el viaje emocional de Beyonce despues de la infidelidad de su esposo en un contexto generacional y racial.', 4), 
('https://http2.mlstatic.com/D_NQ_NP_2X_611155-MLU79154897319_092024-F.webp', 'Christina y los Subterraneos - Vinilo Que me parta un rayo', 12500, 'Christina y Los Subterraneos fue una banda espanola de indie pop, liderada por Christina Rosenvinge, autora de todas las canciones. La formacion nunca llego a ser fija, por lo que gran numero de musicos tocaron en ella hasta que Christina se deshizo del nombre de banda y continuo con su propio nombre.', 4), 
('https://musicland.cl/wp-content/uploads/2020/12/KHRUANGBINMORDECHAI-800x800.jpg', 'Khruangbin - Vinilo Mordechai', 25600, 'El trio Khruangbin, con base en Texas, comenzo a explorar el funk tailandes, el gospel, el R&B, el surf, el rock psicodelico y el dub de los anos 60 y 70, creando instrumentales relajantes que parecian hechos a medida para los beatmakers en busca de ritmo y los felices bailarines de los festivales al aire libre.', 4), 
('https://http2.mlstatic.com/D_NQ_NP_2X_726997-MLU72857774923_112023-F.webp', 'Madonna - Vinilo Confessions of the Dance Floor', 29500, 'Confessions on a Dance Floor fusiono elementos de la musica disco de los anos 70, el electropop de los 80 y la musica de club de los 2000. Madonna decidio incorporar elementos con influencia disco en sus canciones mientras intentaba no rehacer su musica del pasado, sino que eligio rendir homenaje a artistas como los Bee Gees y Giorgio Moroder.', 4), 
('https://dojiw2m9tvv09.cloudfront.net/36300/product/X_taupe3110.jpg?29&time=1739077500', 'Crosley Cruiser Deluxe BT Taupe', 67000, 'Tocadiscos de 3 velocidades (33 , 45 y 78 RPM), receptor Bluetooth integrado, altavoces estereo integrados de rango completo, control de tono ajustable, palanca de senalizacion, entrada auxiliar, salida RCA y toma de auriculares.', 4);


-- 📌 Insertar Colaboraciones (Usuarios que han participado en colaboraciones)
INSERT INTO COLABORACIONES (id_usuario, id_producto) VALUES (3, 28); -- Yerko colabora con vinilo madonna 
INSERT INTO COLABORACIONES (id_usuario, id_producto) VALUES (3, 23); -- Yerko colabora con vinilo madonna 

INSERT INTO COLABORACIONES (id_usuario, id_producto) VALUES (6, 23), (6, 23);

-- 📌 Insertar Compras realizadas por Usuarios
INSERT INTO COMPRAS (id_usuario) VALUES (3); -- Yerko compra 

INSERT INTO COMPRAS (id_usuario) VALUES (6); -- Registro X compra 

-- 📌 Insertar Detalles de las Compras (Relación "Muchos a Muchos")
INSERT INTO COMPRAS_PRODUCTOS (id_compra, id_producto) VALUES (2, 2); -- Yerko (id 2) compró tornamesa
INSERT INTO COMPRAS_PRODUCTOS (id_compra, id_producto) VALUES (2, 6); -- Yerko (id 2) compró vinilo mac demarco
INSERT INTO COMPRAS_PRODUCTOS (id_compra, id_producto) VALUES (2, 11); -- Yerko (id 2) compró vinilo amy winehouse
INSERT INTO COMPRAS_PRODUCTOS (id_compra, id_producto) VALUES (2, 20); -- Yerko (id 2) compró parlantes

INSERT INTO COMPRAS_PRODUCTOS (id_compra, id_producto) VALUES (3, 2); -- Yerko (id 2) compró tornamesa
INSERT INTO COMPRAS_PRODUCTOS (id_compra, id_producto) VALUES (3, 6); -- Yerko (id 2) compró vinilo mac demarco
INSERT INTO COMPRAS_PRODUCTOS (id_compra, id_producto) VALUES (3, 11); -- Yerko (id 2) compró vinilo amy winehouse
INSERT INTO COMPRAS_PRODUCTOS (id_compra, id_producto) VALUES (3, 20); -- Yerko (id 2) compró parlantes


-- Ver todos los usuarios
SELECT * FROM USUARIOS;

-- Ver todas las categorías
SELECT * FROM CATEGORIAS;

-- Ver todas los productos
SELECT * FROM PRODUCTOS;

-- Ver compras de usuario yerko
SELECT u.nombre_apellido, p.nombre AS producto, p.descripcion, cp.id_compra
FROM COMPRAS_PRODUCTOS cp
JOIN COMPRAS c ON cp.id_compra = c.id_compra
JOIN USUARIOS u ON c.id_usuario = u.id_usuario
JOIN PRODUCTOS p ON cp.id_producto = p.id_producto
WHERE u.nombre_apellido = 'Yerko Andres Rojas Rivera';


-- Ver colaboraciones de usuario yerko
SELECT u.nombre_apellido, p.nombre AS producto, p.descripcion, c.id_colaboracion
FROM COLABORACIONES c
JOIN USUARIOS u ON c.id_usuario = u.id_usuario
JOIN PRODUCTOS p ON c.id_producto = p.id_producto
WHERE u.nombre_apellido = 'Yerko Andres Rojas Rivera';
