# FTR Platform Developer Coding Test

## Project setup

```
yarn install
```

### Running test

```
npm test
```

### Compiles and hot-reloads for development web application

```
yarn serve
```

### Executes cli.

```
npm run cli
```

### Questions

#### You have a new requirement to implement for your application: its logic should stay exactly the same but it will need to have a different user interface (e.g. if you wrote a web app, a different UI may be a REPL). Please describe how you would go about implementing this new UI in your application? Would you need to restructure your solution in any way?

I created my application using tests, which forced me to modulate my code and separate the view code from the model code - implementing the FibonacciFinder class in the most logical way.
So having created a vue application, CLI application and a test application using the FibonacciFinder class, if I am to change the UI I would only need to develop within the view environment.

#### You now need to make your application “production ready”, and deploy it so that it can be used by customers. Please describe the steps you’d need to take for this to happen.

For the web interface, we could utilise s3 to provide a static web server (for this proposal, I merely made use of Github). For the cli app, we should employ a package repository system like npm, linux repository, etc.

#### What did you think about this coding test - is there anything you’d suggest in order to improve it?

I thought it was great! I think this type of test can effectively discern a developer's practical problem solving skills without being extreme in difficulty.
