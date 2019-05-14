(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{205:function(e,t,n){"use strict";n.r(t);var r=n(2),s=Object(r.a)({},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"getting-started"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#getting-started","aria-hidden":"true"}},[e._v("#")]),e._v(" Getting Started")]),e._v(" "),n("p",[e._v("OneFx is a full-stack framework for building web apps. Here are the features you’ll find in Onefx.js:")]),e._v(" "),n("ul",[n("li",[e._v("Server-side rendering and universal rendering with React and Redux")]),e._v(" "),n("li",[e._v("Apollo GraphQL (docs + playground), ES2017, TypeScript, TSX support out of the box")]),e._v(" "),n("li",[e._v("Server-side development via Koa.js")])]),e._v(" "),n("h2",{attrs:{id:"create-a-project"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#create-a-project","aria-hidden":"true"}},[e._v("#")]),e._v(" Create a project")]),e._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone git@github.com:puncsky/web-onefx-boilerplate.git my-awesome-project\n")])])]),n("h2",{attrs:{id:"run-your-project"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#run-your-project","aria-hidden":"true"}},[e._v("#")]),e._v(" Run your project")]),e._v(" "),n("p",[e._v("This is intended for *nix users. If you use Windows, go to "),n("router-link",{attrs:{to:"/onefx/guides.html#run-on-windows"}},[e._v("Run on Windows")]),e._v(". Let’s first prepare the environment.")],1),e._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[e._v("cd")]),e._v(" my-awesome-project\n\nnvm use 10.15.0\n"),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# prepare environment variable")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("cp")]),e._v(" ./.env.tmpl ./.env\n")])])]),n("h3",{attrs:{id:"development-mode"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#development-mode","aria-hidden":"true"}},[e._v("#")]),e._v(" Development mode")]),e._v(" "),n("p",[e._v("To run your project in development mode, run:")]),e._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" run "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("watch")]),e._v("\n")])])]),n("p",[e._v("The development site will be available at "),n("a",{attrs:{href:"http://localhost:4000",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://localhost:4000"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("h3",{attrs:{id:"production-mode"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#production-mode","aria-hidden":"true"}},[e._v("#")]),e._v(" Production Mode")]),e._v(" "),n("p",[e._v("It’s sometimes useful to run a project in production mode, for example, to check bundle size or to debug a production-only issue. To run your project in production mode locally, run:")]),e._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" run build-production\nNODE_ENV"),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("production "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" run start\n")])])]),n("h3",{attrs:{id:"npm-scripts"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#npm-scripts","aria-hidden":"true"}},[e._v("#")]),e._v(" NPM scripts")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("npm run test")]),e._v(": test the whole project and generate a test coverage")]),e._v(" "),n("li",[n("code",[e._v("npm run ava ./path/to/test-file.js")]),e._v(": run a specific test file")]),e._v(" "),n("li",[n("code",[e._v("npm run build")]),e._v(": build source code from "),n("code",[e._v("src")]),e._v(" to "),n("code",[e._v("dist")])]),e._v(" "),n("li",[n("code",[e._v("npm run lint")]),e._v(": run the linter")]),e._v(" "),n("li",[n("code",[e._v("npm run flow")]),e._v(": run the flow type check")]),e._v(" "),n("li",[n("code",[e._v("npm run kill")]),e._v(": kill the node server occupying the port 4100.")])]),e._v(" "),n("h2",{attrs:{id:"architecture"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#architecture","aria-hidden":"true"}},[e._v("#")]),e._v(" Architecture")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://res.cloudinary.com/dohtidfqh/image/upload/v1546379050/web-guiguio/onefx-architecture.png",alt:""}}),e._v("Onefx Architecture")]),e._v(" "),n("div",{staticClass:"language-txt extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v(".\n├── README.md\n├── ava.config.js           // ava test util configuration\n├── babel.config.js         // babel compiler/transpiler configuration\n├── babel-register.js      // babel register options\n├── config                  // project configuration\n│   ├── default.js          // base config to be extended in all env\n│   ├── development.js      // config in NODE_ENV=development\n│   ├── production.js       // config in NODE_ENV=production\n│   └── test.js             // config in NODE_ENV=test\n├── coverage                // test coverage\n├── dist                    // destination for src build result\n├── gulpfile.babel.js       // gulp task runner config\n├── package.json\n├── renovate.json           // renovate bot to automate dependency bumps\n├── server.ts               // project entry\n├── src                               // source code\n│   ├── client                        // browser-side source code\n│   │   ├── javascripts\n│   │   │   └── main.tsx\n│   │   ├── static\n│   │   │   ├── favicon.png\n│   │   │   ├── manifest.json\n│   │   │   └── robots.txt\n│   │   └── stylesheets\n│   │       └── main.scss\n│   ├── model                         // data models\n│   │   ├── index.ts\n│   │   └── model.ts\n│   ├── server                        // onefx server\n│   │   ├── index.ts\n│   │   ├── middleware                // koa middleware\n│   │   │   ├── index.ts\n│   │   │   ├── manifest-middleware.ts\n│   │   │   └── set-middleware.ts\n│   │   ├── server-routes.tsx          // server-side routes\n│   │   └── start-server.tsx           // server initialization\n│   └── shared                        // js code shared by both the server and the client\n│       ├── app-container.ts\n│       ├── app.ts\n│       ├── common\n│       ├── home\n│       │   └── home.ts\n│       └── register-service-worker.js\n├── translations          // translations supported in this website\n│   ├── en.yaml\n│   └── zh-cn.yaml\n├── Procfile                // heroku Procfile\n└── webpack.js            // webpack bundler config\n")])])])])},[],!1,null,null,null);t.default=s.exports}}]);