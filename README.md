[![CircleCI](https://circleci.com/bb/betaquickdevelopers/grace-tree-constants/tree/master.svg?style=svg&circle-token=f668ed272ad86a44be59914db425581366506238)](https://circleci.com/bb/betaquickdevelopers/grace-tree-constants/tree/master)
[![NPM Version](https://img.shields.io/npm/v/bookshelf.svg?style=flat)](https://www.npmjs.com/package/@betaquick/grace-tree-constants)

# fccc-constants
a module to manage constants across grace tree projects

## Installation 
```sh
npm i @betaquick/grace-tree-constants
```
## Usage

### Javascript

```javascript
const constants = require('@betaquick/grace-tree-constants');
const general = constants.UserTypes.General;
console.log(admin);

// Output should be 'General'
```

### TypeScript

```typescript
import { constants } from '@betaquick/grace-tree-constants';
console.log(constants.UserTypes.General);

// Output should be 'General'
```

## Test 

```sh
npm run test
```
