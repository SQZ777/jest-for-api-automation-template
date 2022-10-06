## Jest for API automation template
API automation in Jest framework

## Environment setup
```
brew install pre-commit
npm install
npm run setup
```

### Setup .env
dotenv should contains keys like below.
```
BASE_URL={{value}}
```

## Execute
Run target case:
```
npm test ./transactionApi.test.js -t="${your target case}"
```
Run all cases:
```
npm test
```
