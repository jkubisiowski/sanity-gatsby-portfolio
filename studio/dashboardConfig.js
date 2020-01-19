export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5e248fbae6ddb6c3d0fff5d9',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-96h9s9ib',
                  apiId: 'a761bbe2-efb5-49bb-9644-7c2f645d505c'
                },
                {
                  buildHookId: '5e248fbafbe80581efc9f798',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-f2iy7jr5',
                  apiId: '6407bc55-dbd5-430c-bfb5-0c028ba73b95'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jkubisiowski/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-f2iy7jr5.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
