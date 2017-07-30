# socmed-aggregator
Latihan oauth dengan twitter dan facebook.

## Info & Dependencies

### Client Side
Menggunakan JQuery, Bootstrap, Axios, dan FB SDK JavaScript

### Server Side
Menggunakan framework express.js

```json
{
  "name": "server",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "scripts": {
    "start": "node ./bin/www",
    "dev": "nodemon ./bin/www"
  },
  "dependencies": {
    "axios": "^0.16.2",
    "body-parser": "^1.17.2",
    "cors": "^2.8.4",
    "dotenv": "^4.0.0",
    "express": "^4.15.3",
    "favicon": "0.0.2",
    "fb": "^2.0.0",
    "jsonwebtoken": "^7.4.1",
    "oauth": "^0.9.15"
  }
}
```

## File and Folder
```bash
.
├── README.md
├── client
│   ├── js
│   │   ├── ajxtwit.js
|   |   └── fblogin.js
│   ├── fb-page.html
|   ├── index.html
|   └── twitter-page.html
└── server
    ├── controllers
    |   ├── ngetweetController.js
    |   └── searchController.js
    |   └── timelineController.js
    ├── helpers
    |   └── forGetContent.js
    ├── routers
    |   ├── fb.js
    |   └── post.js
    |   └── search.js
    |   └── timeline.js
    ├── app.js
    └── package.json
```

### Menjalankan server
```bash
cd server
npm i
npm run dev
```

### Menjalankan client
```bash
cd client
live-server or serve
```
