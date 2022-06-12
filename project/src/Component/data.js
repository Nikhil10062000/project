const reviews = [
    {
      id: 1,
      name: ' The Message is Medium Rare',
     
      image:'data:image/png;base64,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',
      text:
        'A blog about trying out different burgers and using them for design lessons and inspiration (really).',
    },
    {
      id: 2,
      name: 'WELL/AWARE',
      
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl-GdODzs0x2UpaQR5cROH9hRPKUGox4JAFg&usqp=CAU',
      text:
        'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
      id: 3,
      name: ' Sketchplanations',
      
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc7wgUbmXlkrQF1nINZAmYplLxiHSmN2G0sA&usqp=CAU',
      text:
        'Content strategist Lindsay Mueller’s thoughts on living well, living simply, and living mindfully',
    },
    {
      id: 4,
      name: 'The Next Question',
      
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyQ-rlsK0mncCFfzuVhdjAprJhGbvlIdFPiw&usqp=CAU',
      text:
        'A podcast that covers topics surrounding racial justice in America, created by Austin Channing Brown, speaker and author of I’m Still Here: Black Dignity in a World Made for Whiteness'

        
    },
    {
        id: 5,
        name: 'The Process',
        
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM74vMpvmbgXCVwL1brXXD8NiOL43axxbQHQ&usqp=CAU',
        text:
          'A podcast where creatives and entrepreneurs discuss their creative processes and the process of surviving as a creative.'
  
          
      },
      {
        id: 6,
        name: 'The Process',
        
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbNWWL49Ib8puY38G_D912io2QVI3yxQx0YA&usqp=CAU',
        text:
          'A podcast where creatives and entrepreneurs discuss their creative processes and the process of surviving as a creative.'
  
          
      },{
        id: 7,
        name: 'Valerie & Valise',
        
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI5VhkBciKlXPCPSWXopirx3xICTjwgKDWqw&usqp=CAU',
        text:
          'A blog featuring the advice and adventures of a seasoned traveler.'
  
          
      },{
        id: 8,
        name: 'Clumps of Mascara',
        
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHQelpc9abPWMW54ldmlPKjfqtoO_HmPecfg&usqp=CAU',
        text:
          'A lifestyle blog for the imperfectly perfect women and men of the world.'
  
          
      },{
        id: 9,
        name: 'The Process',
        
        image:
          'https://pilbox.themuse.com/image.png?filter=antialias&h=316&opt=1&pos=top-left&prog=1&q=keep&url=https%3A%2F%2Fcms-assets.themuse.com%2Fmedia%2Fside-projects-entry-16.png%3Fv%3Dcd03bf7e9dcaa0645bc4c98bd01d674f871196aa&w=780',
        text:
          'A newsletter encouraging people to turn off from their digital lives more often, along with an ecommerce store selling paper goods and clothing.'
  
          
      },
  ];
  
  export default reviews;