// 200 frases de amor
const passages = [
 // 200 frases de amor profundas y poéticas
    const passages = [
      { text: "Tu sonrisa es el único código que mi corazón sabe ejecutar sin errores.", keywords: ["sonrisa", "corazón", "código"] },
      { text: "Amarte es como respirar: si dejo de hacerlo por un instante, siento que el mundo se detiene.", keywords: ["amar", "respirar", "mundo"] },
      { text: "En el mapa de mi vida, eres el norte que siempre busco cuando me pierdo.", keywords: ["mapa", "vida", "norte"] },
      { text: "Cada célula de mi cuerpo reconoce la tuya como su patria perdida.", keywords: ["célula", "cuerpo", "patria"] },
      { text: "Tu mente es un jardín donde mis pensamientos más oscuros florecen en colores.", keywords: ["mente", "jardín", "pensamientos"] },
      { text: "Si el amor fuera tiempo, contigo viviría en un eterno mediodía.", keywords: ["amor", "tiempo", "mediodía"] },
      { text: "Besarte es como leer el mismo libro infinitas veces y encontrar siempre un nuevo significado.", keywords: ["besar", "libro", "significado"] },
      { text: "Tu voz tiene la textura de la lluvia sobre mis heridas antiguas.", keywords: ["voz", "lluvia", "heridas"] },
      { text: "Cuando te miro, veo todos los atardeceres que valieron la pena en mi vida.", keywords: ["mirar", "atardeceres", "vida"] },
      { text: "Eres el silencio entre mis notas favoritas, el espacio donde descansa mi melodía.", keywords: ["silencio", "notas", "melodía"] },
      { text: "Amar tu cuerpo es como recorrer un museo donde cada curva es una obra maestra.", keywords: ["cuerpo", "museo", "obra"] },
      { text: "Tu risa es el único idioma extranjero que entiendo perfectamente.", keywords: ["risa", "idioma", "entender"] },
      { text: "Si pudiera elegir cómo morir, sería ahogado en el océano de tu mirada.", keywords: ["morir", "océano", "mirada"] },
      { text: "Eres el error de ortografía en mi poema perfecto que lo hace único.", keywords: ["error", "poema", "único"] },
      { text: "Tus manos escriben en mi piel poemas que mi alma memoriza.", keywords: ["manos", "piel", "poemas"] },
      { text: "Cuando duermes a mi lado, el universo suspira contigo.", keywords: ["dormir", "universo", "suspirar"] },
      { text: "Tu inteligencia es el faro que ilumina mis mares más tormentosos.", keywords: ["inteligencia", "faro", "mares"] },
      { text: "Amar es dejar que tu nombre me habite como si fuera mi propia sangre.", keywords: ["amar", "nombre", "sangre"] },
      { text: "Eres la página en blanco donde escribo mis mejores versos y mis peores confesiones.", keywords: ["página", "versos", "confesiones"] },
      { text: "Tus ojos son espejos donde me reflejo mejor de lo que realmente soy.", keywords: ["ojos", "espejos", "reflejo"] },
      { text: "Si el amor fuera una enfermedad, querría contagiarme de ti eternamente.", keywords: ["amor", "enfermedad", "eternamente"] },
      { text: "Tu piel guarda la memoria del agua antes de que aprendiera a ser mar.", keywords: ["piel", "memoria", "mar"] },
      { text: "Cuando hablas, las palabras se visten de gala para salir de tu boca.", keywords: ["hablar", "palabras", "boca"] },
      { text: "Eres la melodía que mi corazón tararea cuando cree que nadie escucha.", keywords: ["melodía", "corazón", "escuchar"] },
      { text: "Amar es aprender a deletrear tu nombre con los latidos de mi corazón.", keywords: ["amar", "nombre", "latidos"] },
      { text: "Tu ausencia es el único vacío que pesa más que tu presencia.", keywords: ["ausencia", "vacío", "presencia"] },
      { text: "Eres el sueño que tuve antes de saber que soñaba contigo.", keywords: ["sueño", "soñar", "contigo"] },
      { text: "Tus labios son la frontera donde termina mi cordura y empieza el paraíso.", keywords: ["labios", "frontera", "paraíso"] },
      { text: "Cuando te abrazo, el tiempo olvida cómo pasar.", keywords: ["abrazo", "tiempo", "olvidar"] },
      { text: "Eres el verbo irregular que conjugo perfectamente en todos mis tiempos.", keywords: ["verbo", "conjugar", "tiempos"] },
      { text: "Tu pelo guarda los secretos del viento que no se atreve a soplar lejos de ti.", keywords: ["pelo", "secretos", "viento"] },
      { text: "Amar es encontrar en tu rostro el paisaje que mis ojos buscaban sin saberlo.", keywords: ["amar", "rostro", "paisaje"] },
      { text: "Eres la nota al margen que explica todo el sentido de mi libro.", keywords: ["nota", "libro", "sentido"] },
      { text: "Tus silencios son poemas que mi corazón lee en voz alta.", keywords: ["silencios", "poemas", "corazón"] },
      { text: "Cuando lloras, las lágrimas dibujan mapas de países donde quiero vivir.", keywords: ["llorar", "lágrimas", "mapas"] },
      { text: "Eres la única patria donde mi bandera no necesita asta para ondear.", keywords: ["patria", "bandera", "ondear"] },
      { text: "Tu nombre escrito en mi piel es el único tatuaje que no necesita tinta.", keywords: ["nombre", "piel", "tatuaje"] },
      { text: "Amar es descubrir que tu risa es mi sonido favorito en el universo.", keywords: ["amar", "risa", "universo"] },
      { text: "Eres el espejo donde me gusta más el reflejo que la realidad.", keywords: ["espejo", "reflejo", "realidad"] },
      { text: "Tus palabras son semillas que planto en el jardín de mi memoria.", keywords: ["palabras", "semillas", "memoria"] },
      { text: "Cuando te miro, veo todos los futuros posibles y en todos estás conmigo.", keywords: ["mirar", "futuros", "contigo"] },
      { text: "Eres la melodía que mi corazón repite cuando cree que nadie escucha.", keywords: ["melodía", "corazón", "escuchar"] },
      { text: "Amar es encontrar en tu piel el mapa de todos mis viajes interiores.", keywords: ["amar", "piel", "viajes"] },
      { text: "Tu sonrisa es el único idioma que hablo sin acento y sin errores.", keywords: ["sonrisa", "idioma", "acento"] },
      { text: "Eres la página que siempre releo cuando el libro de mi vida me confunde.", keywords: ["página", "libro", "vida"] },
      { text: "Tus besos son cartas de amor que mi boca recibe y mi alma contesta.", keywords: ["besos", "cartas", "alma"] },
      { text: "Cuando duermes, tu respiración escribe poemas en el aire que respiro.", keywords: ["dormir", "respiración", "poemas"] },
      { text: "Eres la única lluvia en la que quiero mojarme hasta los huesos.", keywords: ["lluvia", "mojarse", "huesos"] },
      { text: "Amar es descubrir que tu nombre cabe perfectamente entre mis costillas.", keywords: ["amar", "nombre", "costillas"] },
      { text: "Tu mirada es el único espejo donde me gusta verme.", keywords: ["mirada", "espejo", "verse"] },
      { text: "Eres el error gramatical que hace perfecta la oración de mi vida.", keywords: ["error", "gramática", "vida"] },
      { text: "Tus manos son mapas que mis dedos recorren para encontrar el norte.", keywords: ["manos", "mapas", "norte"] },
      { text: "Cuando hablas, las palabras se inclinan ante la sabiduría de tu boca.", keywords: ["hablar", "palabras", "sabiduría"] },
      { text: "Eres el único océano donde no temo ahogarme.", keywords: ["océano", "ahogarse", "miedo"] },
      { text: "Amar es aprender a escribir tu nombre con todas las estrellas del cielo.", keywords: ["amar", "nombre", "estrellas"] },
      { text: "Tu pelo guarda los secretos del viento que no se atreve a dejarte.", keywords: ["pelo", "secretos", "viento"] },
      { text: "Eres la melodía que mi corazón tararea cuando cree estar solo.", keywords: ["melodía", "corazón", "solo"] },
      { text: "Tus labios son la frontera donde termina mi cordura y empieza la magia.", keywords: ["labios", "frontera", "magia"] },
      { text: "Cuando te abrazo, el universo suspira con nosotros.", keywords: ["abrazo", "universo", "suspirar"] },
      { text: "Eres el verbo que conjugo en todos los tiempos de mi vida.", keywords: ["verbo", "conjugar", "vida"] },
      { text: "Tu piel es el pergamino donde escribo mis mejores poemas.", keywords: ["piel", "pergamino", "poemas"] },
      { text: "Amar es encontrar en tu rostro el paisaje que mis ojos anhelaban.", keywords: ["amar", "rostro", "paisaje"] },
      { text: "Eres la nota que explica todo el sentido de mi existencia.", keywords: ["nota", "existencia", "sentido"] },
      { text: "Tus silencios son canciones que mi corazón memoriza.", keywords: ["silencios", "canciones", "corazón"] },
      { text: "Cuando lloras, el mundo entero aprende el significado de la belleza triste.", keywords: ["llorar", "mundo", "belleza"] },
      { text: "Eres la única patria donde mi corazón no es extranjero.", keywords: ["patria", "corazón", "extranjero"] },
      { text: "Tu nombre escrito en mi piel es el único tatuaje que necesito.", keywords: ["nombre", "piel", "tatuaje"] },
      { text: "Amar es descubrir que tu risa es mi música favorita.", keywords: ["amar", "risa", "música"] },
      { text: "Eres el espejo donde prefiero mi reflejo.", keywords: ["espejo", "reflejo", "preferir"] },
      { text: "Tus palabras son semillas que florecen en el jardín de mi alma.", keywords: ["palabras", "semillas", "alma"] },
      { text: "Cuando te miro, veo todos los futuros posibles y en todos estás.", keywords: ["mirar", "futuros", "posibles"] },
      { text: "Eres la melodía que mi corazón repite en silencio.", keywords: ["melodía", "corazón", "silencio"] },
      { text: "Amar es encontrar en tu piel el mapa de mi universo.", keywords: ["amar", "piel", "universo"] },
      { text: "Tu sonrisa es el único idioma que hablo con fluidez.", keywords: ["sonrisa", "idioma", "fluidez"] },
      { text: "Eres la página que siempre vuelvo a leer.", keywords: ["página", "leer", "volver"] },
      { text: "Tus besos son cartas de amor que mi alma colecciona.", keywords: ["besos", "cartas", "alma"] },
      { text: "Cuando duermes, tu respiración escribe poesía.", keywords: ["dormir", "respiración", "poesía"] },
      { text: "Eres la única lluvia que disfruto.", keywords: ["lluvia", "disfrutar", "única"] },
      { text: "Amar es descubrir que tu nombre cabe en mi pecho.", keywords: ["amar", "nombre", "pecho"] },
      { text: "Tu mirada es el único espejo que necesito.", keywords: ["mirada", "espejo", "necesitar"] },
      { text: "Eres el error que hace perfecta mi vida.", keywords: ["error", "perfecto", "vida"] },
      { text: "Tus manos son mapas que guían mi corazón.", keywords: ["manos", "mapas", "corazón"] },
      { text: "Cuando hablas, las palabras brillan.", keywords: ["hablar", "palabras", "brillar"] },
      { text: "Eres el único océano donde nado sin miedo.", keywords: ["océano", "nadar", "miedo"] },
      { text: "Amar es escribir tu nombre en las estrellas.", keywords: ["amar", "nombre", "estrellas"] },
      { text: "Tu pelo guarda los secretos del universo.", keywords: ["pelo", "secretos", "universo"] },
      { text: "Eres la melodía que mi corazón canta.", keywords: ["melodía", "corazón", "cantar"] },
      { text: "Tus labios son la frontera de mi felicidad.", keywords: ["labios", "frontera", "felicidad"] },
      { text: "Cuando te abrazo, el tiempo se detiene.", keywords: ["abrazo", "tiempo", "detenerse"] },
      { text: "Eres el verbo que da sentido a mi vida.", keywords: ["verbo", "sentido", "vida"] },
      { text: "Tu piel es el lienzo de mis sueños.", keywords: ["piel", "lienzo", "sueños"] },
      { text: "Amar es verte en todos mis futuros.", keywords: ["amar", "ver", "futuros"] },
      { text: "Eres la nota que completa mi sinfonía.", keywords: ["nota", "completar", "sinfonía"] },
      { text: "Tus silencios son mi música favorita.", keywords: ["silencios", "música", "favorita"] },
      { text: "Cuando lloras, el mundo llora contigo.", keywords: ["llorar", "mundo", "contigo"] },
      { text: "Eres la patria de mi corazón.", keywords: ["patria", "corazón", "pertenecer"] },
      { text: "Tu nombre es mi palabra favorita.", keywords: ["nombre", "palabra", "favorita"] },
      { text: "Amar es reír con tu risa.", keywords: ["amar", "reír", "risa"] },
      { text: "Eres el espejo de mi alma.", keywords: ["espejo", "alma", "reflejo"] },
      { text: "Tus palabras son mi Biblia personal.", keywords: ["palabras", "Biblia", "personal"] },
      { text: "Cuando te miro, veo el futuro.", keywords: ["mirar", "ver", "futuro"] },
      { text: "Eres la melodía de mi existencia.", keywords: ["melodía", "existencia", "armonía"] },
      { text: "Amar es perderme en tu piel.", keywords: ["amar", "perderse", "piel"] },
      { text: "Tu sonrisa es mi lenguaje.", keywords: ["sonrisa", "lenguaje", "comunicación"] },
      { text: "Eres la página más bella de mi historia.", keywords: ["página", "historia", "bella"] },
      { text: "Tus besos son mi religión.", keywords: ["besos", "religión", "fe"] },
      { text: "Cuando duermes, sueño despierto.", keywords: ["dormir", "soñar", "despierto"] },
      { text: "Eres la lluvia que nutre mi tierra.", keywords: ["lluvia", "nutrir", "tierra"] },
      { text: "Amar es llevar tu nombre tatuado en el alma.", keywords: ["amar", "nombre", "alma"] },
      { text: "Tu mirada es mi faro.", keywords: ["mirada", "faro", "guía"] },
      { text: "Eres el error perfecto.", keywords: ["error", "perfecto", "belleza"] },
      { text: "Tus manos son mi brújula.", keywords: ["manos", "brújula", "dirección"] },
      { text: "Cuando hablas, escucho poesía.", keywords: ["hablar", "escuchar", "poesía"] },
      { text: "Eres mi océano infinito.", keywords: ["océano", "infinito", "profundidad"] },
      { text: "Amar es escribirte en las estrellas.", keywords: ["amar", "escribir", "estrellas"] },
      { text: "Tu pelo es mi seda favorita.", keywords: ["pelo", "seda", "favorito"] },
      { text: "Eres la canción de mi corazón.", keywords: ["canción", "corazón", "melodía"] },
      { text: "Tus labios son mi adicción.", keywords: ["labios", "adicción", "deseo"] },
      { text: "Cuando te abrazo, encuentro mi hogar.", keywords: ["abrazo", "hogar", "pertenencia"] },
      { text: "Eres el verbo que me define.", keywords: ["verbo", "definir", "esencia"] },
      { text: "Tu piel es mi territorio sagrado.", keywords: ["piel", "territorio", "sagrado"] },
      { text: "Amar es verte en cada amanecer.", keywords: ["amar", "ver", "amanecer"] },
      { text: "Eres la nota que da sentido a mi canción.", keywords: ["nota", "sentido", "canción"] },
      { text: "Tus silencios son elocuentes.", keywords: ["silencios", "elocuentes", "comunicación"] },
      { text: "Cuando lloras, lloro contigo.", keywords: ["llorar", "compañía", "empatía"] },
      { text: "Eres mi patria emocional.", keywords: ["patria", "emocional", "pertenencia"] },
      { text: "Tu nombre es mi mantra.", keywords: ["nombre", "mantra", "repetición"] },
      { text: "Amar es reír contigo.", keywords: ["amar", "reír", "compartir"] },
      { text: "Eres el reflejo de mis sueños.", keywords: ["reflejo", "sueños", "proyección"] },
      { text: "Tus palabras son mi ley.", keywords: ["palabras", "ley", "mandamiento"] },
      { text: "Cuando te miro, veo la eternidad.", keywords: ["mirar", "ver", "eternidad"] },
      { text: "Eres la melodía de mi silencio.", keywords: ["melodía", "silencio", "contrapunto"] },
      { text: "Amar es perderme en tus ojos.", keywords: ["amar", "perderse", "ojos"] },
      { text: "Tu sonrisa es mi idioma nativo.", keywords: ["sonrisa", "idioma", "nativo"] },
      { text: "Eres el capítulo favorito de mi vida.", keywords: ["capítulo", "vida", "favorito"] },
      { text: "Tus besos son mi droga.", keywords: ["besos", "droga", "adicción"] },
      { text: "Cuando duermes, vigilo tus sueños.", keywords: ["dormir", "vigilar", "sueños"] },
      { text: "Eres la lluvia que lava mis penas.", keywords: ["lluvia", "lavar", "penas"] },
      { text: "Amar es llevar tu huella en el alma.", keywords: ["amar", "huella", "alma"] },
      { text: "Tu mirada es mi GPS emocional.", keywords: ["mirada", "GPS", "emocional"] },
      { text: "Eres el fallo perfecto de la naturaleza.", keywords: ["fallo", "perfecto", "naturaleza"] },
      { text: "Tus manos son mi mapa del tesoro.", keywords: ["manos", "mapa", "tesoro"] },
      { text: "Cuando hablas, callo para escucharte.", keywords: ["hablar", "callar", "escuchar"] },
      { text: "Eres mi mar sin orillas.", keywords: ["mar", "orillas", "infinito"] },
      { text: "Amar es grabar tu nombre en las estrellas.", keywords: ["amar", "grabar", "estrellas"] },
      { text: "Tu pelo es mi madeja favorita.", keywords: ["pelo", "madeja", "favorito"] },
      { text: "Eres la canción que nunca termino.", keywords: ["canción", "inacabada", "eterna"] },
      { text: "Tus labios son mi postal favorita.", keywords: ["labios", "postal", "favorito"] },
      { text: "Cuando te abrazo, encuentro el centro.", keywords: ["abrazo", "centro", "equilibrio"] },
      { text: "Eres el verbo que conjugo todos los días.", keywords: ["verbo", "conjugar", "días"] },
      { text: "Tu piel es mi pergamino sagrado.", keywords: ["piel", "pergamino", "sagrado"] },
      { text: "Amar es verte en cada esquina del tiempo.", keywords: ["amar", "ver", "tiempo"] },
      { text: "Eres la nota que nunca desafina.", keywords: ["nota", "afinación", "perfecta"] },
      { text: "Tus silencios son mi sonata favorita.", keywords: ["silencios", "sonata", "favorita"] },
      { text: "Cuando lloras, el universo se detiene.", keywords: ["llorar", "universo", "detenerse"] },
      { text: "Eres mi país de origen.", keywords: ["país", "origen", "raíces"] },
      { text: "Tu nombre es mi contraseña universal.", keywords: ["nombre", "contraseña", "universal"] },
      { text: "Amar es reír hasta que duela el alma.", keywords: ["amar", "reír", "alma"] },
      { text: "Eres el espejo donde me reconozco.", keywords: ["espejo", "reconocerse", "identidad"] },
      { text: "Tus palabras son mi algoritmo de vida.", keywords: ["palabras", "algoritmo", "vida"] },
      { text: "Cuando te miro, veo todas las respuestas.", keywords: ["mirar", "ver", "respuestas"] },
      { text: "Eres la melodía que baila en mi sangre.", keywords: ["melodía", "bailar", "sangre"] },
      { text: "Amar es perderme en tu geografía.", keywords: ["amar", "perderse", "geografía"] },
      { text: "Tu sonrisa es mi dialecto materno.", keywords: ["sonrisa", "dialecto", "materno"] },
      { text: "Eres el libro que siempre estoy leyendo.", keywords: ["libro", "leer", "siempre"] },
      { text: "Tus besos son mi dosis diaria de vida.", keywords: ["besos", "dosis", "vida"] },
      { text: "Cuando duermes, cuento tus pestañas como estrellas.", keywords: ["dormir", "contar", "estrellas"] },
      { text: "Eres la lluvia que hace crecer mi jardín.", keywords: ["lluvia", "crecer", "jardín"] },
      { text: "Amar es tatuar tu esencia en mi memoria.", keywords: ["amar", "tatuar", "memoria"] },
      { text: "Tu mirada es mi brújula interna.", keywords: ["mirada", "brújula", "interna"] },
      { text: "Eres el error que corregiría mil veces.", keywords: ["error", "corregir", "mil"] },
      { text: "Tus manos son mi atlas personal.", keywords: ["manos", "atlas", "personal"] },
      { text: "Cuando hablas, aprendo el lenguaje del alma.", keywords: ["hablar", "aprender", "alma"] },
      { text: "Eres mi océano de posibilidades.", keywords: ["océano", "posibilidades", "infinito"] },
      { text: "Amar es constelar tu nombre en mi cielo.", keywords: ["amar", "constelar", "cielo"] },
      { text: "Tu pelo es mi madeja de sueños.", keywords: ["pelo", "madeja", "sueños"] },
      { text: "Eres la canción que repito en bucle.", keywords: ["canción", "bucle", "repetir"] },
      { text: "Tus labios son mi frontera favorita.", keywords: ["labios", "frontera", "favorito"] },
      { text: "Cuando te abrazo, encuentro mi centro de gravedad.", keywords: ["abrazo", "centro", "gravedad"] },
      { text: "Eres el verbo que da ritmo a mis días.", keywords: ["verbo", "ritmo", "días"] },
      { text: "Tu piel es mi mapa de constelaciones.", keywords: ["piel", "mapa", "constelaciones"] },
      { text: "Amar es verte en todos los espejos del tiempo.", keywords: ["amar", "ver", "tiempo"] },
      { text: "Eres la nota que da nombre a mi silencio.", keywords: ["nota", "nombre", "silencio"] },
      { text: "Tus silencios son mi partitura favorita.", keywords: ["silencios", "partitura", "favorita"] },
      { text: "Cuando lloras, aprendo el significado del amor.", keywords: ["llorar", "aprender", "amor"] },
      { text: "Eres mi lugar en el universo.", keywords: ["lugar", "universo", "pertenencia"] },
      { text: "Tu nombre es mi código de acceso al mundo.", keywords: ["nombre", "código", "mundo"] },
      { text: "Amar es reír hasta que el alma se ilumine.", keywords: ["amar", "reír", "alma"] },
      { text: "Eres el espejo donde me encuentro.", keywords: ["espejo", "encontrarse", "reflejo"] },
      { text: "Tus palabras son mi manual de supervivencia.", keywords: ["palabras", "manual", "supervivencia"] },
      { text: "Cuando te miro, veo todos los caminos.", keywords: ["mirar", "ver", "caminos"] },
      { text: "Eres la melodía que baila en mis venas.", keywords: ["melodía", "bailar", "venas"] },
      { text: "Amar es navegar tu geografía sin mapa.", keywords: ["amar", "navegar", "geografía"] },
      { text: "Tu sonrisa es mi primer lenguaje.", keywords: ["sonrisa", "primer", "lenguaje"] },
      { text: "Eres el libro que nunca termino de leer.", keywords: ["libro", "leer", "siempre"] },
      { text: "Tus besos son mi medicina diaria.", keywords: ["besos", "medicina", "diaria"] },
      { text: "Cuando duermes, cuento tus respiraciones como versos.", keywords: ["dormir", "contar", "versos"] },
      { text: "Eres la lluvia que nutre mis raíces.", keywords: ["lluvia", "nutrir", "raíces"] },
      { text: "Amar es grabar tu esencia en mi ADN.", keywords: ["amar", "grabar", "ADN"] },
      { text: "Tu mirada es mi sistema de navegación.", keywords: ["mirada", "navegación", "sistema"] },
      { text: "Eres el fallo que prefiero no corregir.", keywords: ["fallo", "corregir", "preferir"] },
      { text: "Tus manos son mi guía en la oscuridad.", keywords: ["manos", "guía", "oscuridad"] },
      { text: "Cuando hablas, el universo hace silencio.", keywords: ["hablar", "universo", "silencio"] },
      { text: "Eres mi mar sin cartografía.", keywords: ["mar", "cartografía", "desconocido"] },
      { text: "Amar es constelar tu nombre en mi piel.", keywords: ["amar", "constelar", "piel"] },
      { text: "Tu pelo es mi seda de sueños.", keywords: ["pelo", "seda", "sueños"] },
      { text: "Eres la canción que nunca canso de escuchar.", keywords: ["canción", "escuchar", "siempre"] },
      { text: "Tus labios son mi territorio favorito.", keywords: ["labios", "territorio", "favorito"] },
      { text: "Cuando te abrazo, encuentro mi eje.", keywords: ["abrazo", "eje", "equilibrio"] },
      { text: "Eres el verbo que da sentido a mi existencia.", keywords: ["verbo", "sentido", "existencia"] },
      { text: "Tu piel es mi mapa estelar.", keywords: ["piel", "mapa", "estelar"] },
      { text: "Amar es verte en todos los reflejos del tiempo.", keywords: ["amar", "ver", "tiempo"] },
      { text: "Eres la nota que nombra mi silencio.", keywords: ["nota", "nombrar", "silencio"] },
      { text: "Tus silencios son mi sinfonía preferida.", keywords: ["silencios", "sinfonía", "preferida"] },
      { text: "Cuando lloras, comprendo la profundidad del amor.", keywords: ["llorar", "comprender", "amor"] },
      { text: "Eres mi coordenada en el cosmos.", keywords: ["coordenada", "cosmos", "ubicación"] },
      { text: "Tu nombre es mi contraseña existencial.", keywords: ["nombre", "contraseña", "existencial"] },
      { text: "Amar es reír hasta iluminar el alma.", keywords: ["amar", "reír", "alma"] },
      { text: "Eres el espejo donde me reconozco completo.", keywords: ["espejo", "reconocerse", "completo"] },
      { text: "Tus palabras son mi algoritmo existencial.", keywords: ["palabras", "algoritmo", "existencial"] },
      { text: "Cuando te miro, veo todos los destinos.", keywords: ["mirar", "ver", "destinos"] },
      { text: "Eres la melodía que fluye en mi torrente sanguíneo.", keywords: ["melodía", "fluir", "sangre"] },
      { text: "Amar es explorar tu geografía sin brújula.", keywords: ["amar", "explorar", "geografía"] },
      { text: "Tu sonrisa es mi lengua materna.", keywords: ["sonrisa", "lengua", "materna"] },
      { text: "Eres el libro que siempre llevo conmigo.", keywords: ["libro", "llevar", "siempre"] },
      { text: "Tus besos son mi tratamiento médico.", keywords: ["besos", "tratamiento", "médico"] },
      { text: "Cuando duermes, cuento tus pestañas como constelaciones.", keywords: ["dormir", "contar", "constelaciones"] },
      { text: "Eres la lluvia que hace florecer mi ser.", keywords: ["lluvia", "florecer", "ser"] },
      { text: "Amar es inscribir tu esencia en mi código genético.", keywords: ["amar", "inscribir", "genético"] },
      { text: "Tu mirada es mi GPS existencial.", keywords: ["mirada", "GPS", "existencial"] },
      { text: "Eres el error que prefiero no rectificar.", keywords: ["error", "rectificar", "preferir"] },
      { text: "Tus manos son mi guía en el laberinto.", keywords: ["manos", "guía", "laberinto"] },
      { text: "Cuando hablas, el tiempo hace pausa.", keywords: ["hablar", "tiempo", "pausa"] },
      { text: "Eres mi océano sin coordenadas.", keywords: ["océano", "coordenadas", "infinito"] },
      { text: "Amar es tatuar tu nombre en las estrellas.", keywords: ["amar", "tatuar", "estrellas"] },
      { text: "Tu pelo es mi madeja de fantasías.", keywords: ["pelo", "madeja", "fantasías"] },
      { text: "Eres la canción que mi corazón repite.", keywords: ["canción", "corazón", "repetir"] },
      { text: "Tus labios son mi frontera predilecta.", keywords: ["labios", "frontera", "predilecta"] },
      { text: "Cuando te abrazo, encuentro mi punto cardinal.", keywords: ["abrazo", "punto", "cardinal"] },
      { text: "Eres el verbo que da ritmo a mi existencia.", keywords: ["verbo", "ritmo", "existencia"] },
      { text: "Tu piel es mi carta estelar.", keywords: ["piel", "carta", "estelar"] },
      { text: "Amar es verte en todos los espejos del universo.", keywords: ["amar", "ver", "universo"] },
      { text: "Eres la nota que da nombre a mi vacío.", keywords: ["nota", "nombre", "vacío"] },
      { text: "Tus silencios son mi ópera favorita.", keywords: ["silencios", "ópera", "favorita"] },
      { text: "Cuando lloras, comprendo la geografía del amor.", keywords: ["llorar", "comprender", "amor"] },
      { text: "Eres mi dirección en el cosmos.", keywords: ["dirección", "cosmos", "pertenencia"] },
      { text: "Tu nombre es mi clave secreta.", keywords: ["nombre", "clave", "secreta"] },
      { text: "Amar es reír hasta que el alma cante.", keywords: ["amar", "reír", "alma"] }
    ];

// Sistema de memoria
const memory = {
  usedIndices: [],
  lastKeywords: [],
  favorites: [],
  MAX_HISTORY: 20,
  MAX_KEYWORDS: 30
};

function getUniquePassage() {
  let availableIndices = [];
  
  passages.forEach((_, index) => {
    if (!memory.usedIndices.includes(index)) {
      availableIndices.push(index);
    }
  });
  
  if (availableIndices.length === 0) {
    memory.usedIndices = [];
    availableIndices = Array.from({length: passages.length}, (_, i) => i);
  }
  
  const filteredIndices = availableIndices.filter(index => {
    const passage = passages[index];
    return !passage.keywords.some(kw => memory.lastKeywords.includes(kw));
  });
  
  const finalIndices = filteredIndices.length > 0 ? filteredIndices : availableIndices;
  const randomIndex = finalIndices[Math.floor(Math.random() * finalIndices.length)];
  const passage = passages[randomIndex];
  
  memory.usedIndices.push(randomIndex);
  if (memory.usedIndices.length > memory.MAX_HISTORY) {
    memory.usedIndices.shift();
  }
  
  passage.keywords.forEach(kw => {
    if (!memory.lastKeywords.includes(kw)) {
      memory.lastKeywords.push(kw);
    }
  });
  
  if (memory.lastKeywords.length > memory.MAX_KEYWORDS) {
    memory.lastKeywords.splice(0, memory.lastKeywords.length - memory.MAX_KEYWORDS);
  }
  
  return passage;
}

function displayPassage(text) {
  const element = document.getElementById('passageText');
  element.classList.remove('fade-in');
  
  const stamp = document.getElementById('stamp');
  stamp.style.animation = 'none';
  stamp.style.opacity = '0';
  
  setTimeout(() => {
    element.textContent = text;
    element.classList.add('fade-in');
  }, 10);
}

function generatePassage() {
  const passage = getUniquePassage();
  displayPassage(passage.text);
  document.getElementById('toast').style.opacity = '0';
}

function captureAndSave() {
  const carta = document.getElementById('carta');
  const stamp = document.getElementById('stamp');
  const toast = document.getElementById('toast');
  
  toast.textContent = "Guardado en tu corazón";
  toast.style.opacity = '1';
  
  stamp.style.animation = 'none';
  void stamp.offsetWidth;
  stamp.style.opacity = '1';
  stamp.style.animation = 'stamp 0.7s ease-out forwards';
  
  html2canvas(carta, {
    scale: 2,
    logging: false,
    useCORS: true,
    allowTaint: true,
    backgroundColor: '#f9f5f0'
  }).then(canvas => {
    const link = document.createElement('a');
    link.download = 'Carta-para-Brenda-' + new Date().toISOString().slice(0, 10) + '.png';
    link.href = canvas.toDataURL('image/png');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    const currentText = document.getElementById('passageText').textContent;
    if (!memory.favorites.includes(currentText)) {
      memory.favorites.push(currentText);
    }
  }).catch(err => {
    console.error('Error al capturar:', err);
    toast.textContent = 'Error al guardar';
  });
  
  setTimeout(() => {
    toast.style.opacity = '0';
  }, 2000);
}

// Eventos
document.getElementById('nextBtn').addEventListener('click', function(e) {
  e.preventDefault();
  generatePassage();
});

document.getElementById('saveBtn').addEventListener('click', function(e) {
  e.preventDefault();
  captureAndSave();
});

// Iniciar
generatePassage();