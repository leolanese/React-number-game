## The React-kid-game App:

> Created based on a previous skeleton 'react-seed' by @laneseleoltd (https://github.com/leolanese/react-seed.git) out of the box 
using TypeScript, Jest, Prettier and SASS (opt-out bootstrap and router) parent created based on 'create-react-app' and taking also few dependencies from the original package.json provided like: 'style-loaded' and 'css-loader'.

---

### Screenshots App:

#### Small size or SmartPhone screen:
![Small/SmartPhone](https://i.ibb.co/p2bCFVp/small.png)

#### Medium size or Tablet screen:
![Medium/Tablets](https://i.ibb.co/thrPVDM/medium.png)

#### Large size or Laptop screen:
![Large/Laptop](https://i.ibb.co/JHMHHLL/large.png)

---

### 1. Deploying App: 

#### 1. Deploy seed. Moving part of this seed:
```javascript
    git clone https://github.com/leolanese/react-kid-game.git
    cd react-kid-game
    npm i
```

> At this point it will work only as a React app skeleton

#### 2. Deploy App dependencies:
```html
    // get Jest supports TypeScript via Babel
    yarn add --dev babel-jest @babel/core @babel/preset-env

    yarn add node-sass
    // later on renamed .css to .scss
    
    yarn add --dev @babel/preset-typescript
    
    yarn add typescript @types/node @types/react @types/react-dom @types/jest
    yarn add prettier
    
    // jest -> moduleNameMapper will be set to babel-jest
    yarn add --dev babel-jest
    
    // add a light utility functions on top of usual 'react-dom' and 'react-dom/test-utils'
    yarn add --dev @testing-library/react
```

> At this point we can use typeScript in our app, files are renamed as .TSX


#### Test architecture

```html
|- /src
|  |- App.tsx
|  |- ...
|- /test
|  |- /__mocks__
|  |  |- fileMock.js
|  |  |- styleMock.js
|  |-App.test.tsx
|  |- ...
```

#### 3. Production code ready:

> This is intended to be a  Here are some final step I did to cover this AC

```html
 -Patterns: Follow a Declaration Code Pattern Style.
 -Mutability: React is on "React.StrictMode" leaving StrictMode to avoid mutation based on the concept of purity in 
 functional programming paradigms in order to produce a predictable code.
 -Future-proof and old-legacy browsers support: '[browserslist]' establish as default on development and '[>0.2%)' on production.
 -Code format: Prettier is a formatter by standard.
 -Hard-Type: Typescript is in place. Hardly-type as 'any' are not allow and type are encouraged.
 -Best practices: DRY and Single Responsibility in place: Functions have unique goals, are short and they doing one and only one thing)
 -Test oriented code implemented: Functions are simple. I created in that way to be simple to test.
```


#### 4. Final Notes: 

> Including just a few suggestion (in any specific order of importance) to include, for an even better, production code (a TODO:)

```html
-Quicky UI creation: StoryBook for isolated creation of and mocking the environment.
-TSLInt: quality are a great way to agreed about code practices to follow by a team to help optimize our JavaScript algorithms.
-Enforce pre-stablish guideline: Implement Git Hooks (pre-commit and pre-push will enforced the implementation of the guideline)
-Quality of the code: SonarQube can be created in the pipes (bug, vulnerability, best practices, smell code, and nice charts.)
-Security: Inspect 'npm' packages for security: npm audit, [snyk] Vulnerability alert, etc.
-Live Documentation: Documentation is great and if produced automatically even better.
```


### 5. Run

```javascript
  yarn start
```

---  
  
### 6. Run Test

```javascript
  yarn test --watch
  // Note: if you have issues try: 'npx jest --watch' 
```
  
---

### 7. Problems deploying or running the App:

```html
To fix the dependency tree, try following the steps below in the exact order:

  1. Delete package-lock.json (not package.json!) and/or yarn.lock in your project folder.
  2. Delete node_modules in your project folder.
  3. Remove "babel-jest" from dependencies and/or devDependencies in the package.json file in your project folder.
  4. Run npm install or yarn, depending on the package manager you use.  
  
In most cases, this should be enough to fix the problem.  
```
  
---
### <i>Thanks!</i>

>  { 'Leo Lanese',<br>
     'Building Inspiring Responsive Reactive Solutions',<br>
     'London, UK' }<br>

##### Twitter <a href="https://twitter.com/LeoLaneseltd" target="_blank">@LeoLaneseltd</a>
##### Portfolio <a href="https://www.leolanese.com" target="_blank">www.leolanese.com</a>
##### DEV.to <a href="https://www.dev.to/leolanese" target="_blank">dev.to/leolanese</a>
##### Blog: <a href="https://www.leolanese.com/blog" target="_blank">leolanese.com/blog</a>
##### Questions / Suggestion / Recommendation: developer@leolanese.com

