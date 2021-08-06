var ghpages = require('gh-pages');

ghpages.publish(
    '__sapper__/export/status',// <-- replace yourproject with your repo name
    {
        branch: 'gh-pages',
        repo: 'https://github.com/nahmii-community/status.git',
        user: {
            name: 'Kyle Sangster',
            email: 'kyle@nahmii.io'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)