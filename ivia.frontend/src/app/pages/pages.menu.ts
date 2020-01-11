export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        id: 'home',
        path: 'dashboard',
        data: {
          menu: {
            title: 'Painel Principal',
            icon: 'ion-ios-speedometer',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        id: 'basico',
        path: '',
        data: {
          menu: {
            title: 'Cadastro Básico',
            icon: 'ion-android-clipboard',
            selected: false,
            expanded: false,
            order: 100,
          }
        },
        children: [
          {
            id: 'cor',
            path: ['/pages/cores'],
            data: {
              menu: {
                title: 'Cor',
                icon: 'ion-android-color-palette'
              }
            }
          }
        ]
      }
    ]
  }
];


