export default {
  global: {
    componenteFormativo:
      'Criterios técnicos para la validación de perfiles de cargo',
    descripcionCurso:
      'El manual de funciones es el documento que contempla toda la información que se produjo en la recolección de los datos del contenido del cargo. Contiene, además, el perfil del cargo con sus competencias, los riesgos a los cuales se ve expuesto el trabajador, así como los indicadores de gestión del cargo; la validación precede a la socialización del documento.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Valoración de cargos y competencias',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Procedimiento',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Instrumentos',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Documentación y su estructura',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Indicadores y análisis',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Análisis para la evaluación de resultados',
            hash: 't_2_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Sintesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Alles, M. (2007). <i>Dirección estratégica de recursos humanos.</i> Granica.',
      link: '',
    },
    {
      referencia:
        'Agüero, P., M., y De Peralta, Á., R. M. (2012).<i>La función de la organización y el análisis y descripción, las especificaciones, la matriz para elaborar el perfil de las competencias de los cargos u ocupaciones. EUMED-Universidad de Málaga.</i>',
      link: '',
    },
    {
      referencia:
        'Chiavenato, I. (2003). <i>Gestión del talento humano. McGraw Hill.</i>',
      link: '',
    },
    {
      referencia:
        'Cuestas, A. (2017). <i>Gestión del talento humano y del conocimiento.</i> Ecoe Ediciones.',
      link: '',
    },
    {
      referencia:
        'Fernández, R., M. (1995). <i>Análisis y descripción de puestos de trabajo: teoría, métodos y ejercicios. Ediciones Díaz de Santos.</i>',
      link: '',
    },
    {
      referencia:
        'Gómez, D., G. (2017). <i>Estructura organizacional</i>. Universidad de Salamanca.',
      link: '',
    },
    {
      referencia:
        'Mejía, M. L. (2004). Estructuras y cargos por procesos, orientados a resultados. <i>Scientia et technica</i>, 10(25), 2003-208',
      link: '',
    },
    {
      referencia:
        'Weller, J. (2020). <i>La pandemia del COVID-19 y su efecto en las tendencias de los mercados laborales. Cepal.</i>',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Competitividad',
      significado:
        'capacidad de una nación, empresa, institución u organización para participar y permanecer en el mercado con rentabilidad atractiva y, al mismo tiempo, incrementar los niveles de bienestar de sus habitantes, socios o colaboradores. ',
    },
    {
      termino: 'Conocimiento',
      significado:
        'conjunto de saberes ordenados sobre un tema en particular, materia o disciplina.',
    },
    {
      termino: 'Clasificación nacional de ocupaciones',
      significado:
        'organización sistemática de las ocupaciones existentes en el mercado laboral colombiano, atendiendo a dos criterios: el área de desempeño y el nivel de competencia. ',
    },
    {
      termino: 'Destreza',
      significado:
        'habilidades de tipo físico, ejemplo, motricidad, agudeza visual, reparación de objetos, etc.',
    },
    {
      termino: 'Efectividad ',
      significado:
        'mide el impacto del indicador frente al cumplimiento del objetivo o también se puede ver como la combinación entre la eficiencia y la eficacia.',
    },
    {
      termino: 'Eficacia',
      significado:
        'mide los recursos utilizados frente a resultados obtenidos, o también la  relación entre los resultados alcanzados frente a los recursos disponibles.',
    },
    {
      termino: 'Eficiencia',
      significado:
        'mide los resultados alcanzados frente a los resultados esperados.',
    },
    {
      termino: 'Evaluación y certificación de competencia laboral',
      significado:
        'proceso por medio del cual un organismo debidamente acreditado reconoce y certifica que una persona ha demostrado ser competente para desempeñar una función laboral determinada, con base en una norma de competencia laboral colombiana. El proceso se centra en los resultados, sobre los cuales el evaluador emite juicios de competente o aún no competente. ',
    },
    {
      termino: 'Evidencias',
      significado:
        'pruebas claras y manifiestas de los conocimientos, habilidades, destrezas y actitudes que una persona posee y que determinan su competencia (metodología para evaluar y certificar competencias laborales). ',
    },
    {
      termino: 'Modelo de competencia',
      significado:
        'modelo de gestión que soporta las características personales, destrezas, actitudes de los ocupantes más exitosos de ciertos cargos, para establecer los elementos requeridos y cumplir con la demanda de una empresa.',
    },
    {
      termino: 'Ocupación',
      significado:
        'conjunto de puestos de trabajo, con funciones productivas afines, cuyo desempeño requiere competencias comunes relacionadas con los resultados que requiere el sistema productivo.',
    },
    {
      termino: 'Selección',
      significado:
        'actividad de clasificación donde se escoge a aquellos que tengan mayores posibilidades de adaptarse al cargo ofrecido y satisfacer las necesidades de la organización y del perfil.',
    },
  ],
  complementario: [
    {
      texto: 'Rodríguez, J. (2021). <i>Método AMOD y SClD.</i>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=86whkhE_Dwo',
    },
    {
      texto: 'Virtual Training Lteam. (2016). <i>Indicadores de gestión.</i>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=91b3REuGMTs',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Alexis Viloria Guerrero',
        cargo: 'Experto temático',
        centro: 'Centro Gestión Administrativa - Distrito Capital',
      },
      {
        nombre: 'Adriana López',
        cargo: 'Diseñadora instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica. - Regional Distrito Capital ',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Asesora Metodológica',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Asesora Metodológica',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Anllelo Andrés Reina Montañez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Magdi Khalifah',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: '---',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: '---',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
