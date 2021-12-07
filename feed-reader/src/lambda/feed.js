const Parser = require('rss-parser')

//handler function
export function handler(event, context, callback){
  //setup array of feeds
  const FEEDS = [
    //giantbeastcast
    // 'https://www.giantbomb.com/podcast-xml/beastcast/',
    //cumtown
    'https://cum-town.blubrry.net/feed/podcast/',
  ]

  let parser = new Parser()

  const feedRequests = FEEDS.map(feed => {
    return parser.parseURL(feed)
  })

  Promise.all(feedRequests).then(response => {
    callback(null, {
      statusCode: 200,

      body: JSON.stringify(response)
    })
  })
  
}