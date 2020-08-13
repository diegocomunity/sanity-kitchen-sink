export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f356d64fbb7f7680a841341',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-f9a1h78x',
                  apiId: 'aaac9c0f-2245-448c-97ec-e16032e2e22c'
                },
                {
                  buildHookId: '5f356d64c00e0972778aa7db',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-owkdgizx',
                  apiId: '2584cfbc-8461-4bd3-b131-0f0b9caf7a6d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/diegocomunity/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-owkdgizx.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
