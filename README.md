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

### Compiles and executes cli.

```
npm run cli
```

### Questions

> You have a new requirement to implement for your application: its logic should stay exactly the same but it will need to have a different user interface (e.g. if you wrote a web app, a different UI may be a REPL). Please describe how you would go about implementing this new UI in your application? Would you need to restructure your solution in any way?
>
> > I created my application using tests and it force me to modulate my code separating the view code from the model code. I implemented the FibonacciFinder class where has all the logic. So I create a vue application, CLI application and a test applicatin both using the FibonacciFinder class. If it will necessary create a new interface I only need to develop the particularities of the view environment.

> You now need to make your application “production ready”, and deploy it so that it can be used by customers. Please describe the steps you’d need to take for this to happen.
>
> > For web interface, we could provice in a static web server using s3 to do it. In my case I had provided in github pages. For the cli app, we should use some package repository like npm, linux repository or others.

> What did you think about this coding test - is there anything you’d suggest in order to improve it?
>
> > I thought it was great. I think it is possible to know if the developer has skill to solve the real problems and the challange isn't so big.
