export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '5f2aac49b1f2d4b8a3b17a4a',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-mzctbp2s',
                  apiId: '87504320-ff94-4a3a-9bf3-1cfa89dd8246'
                },
                {
                  buildHookId: '5f2aac4a8c12c7ec74aff016',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-bi46ei1n',
                  apiId: 'bbec2e81-e7c6-4258-a5d0-d877c7ba0b46'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/daianicoelho/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-bi46ei1n.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
