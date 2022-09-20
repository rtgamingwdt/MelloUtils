# MelloUtils
 A multipurpose NodeJS package

---
 # Classes
###**TextFormat** - Example
JavaScript
```js
const { TextFormat } = require("mello-utils");
console.log(TextFormat.GREEN + "Hello World!" + TextFormat.RESET);
```
TypeScript
```ts
import { TextFormat } from "mello-utils";
console.log(TextFormat.GREEN + "Hello World" + TextFormat.RESET);
```
Cool Feature! You can define your own symbols to easily create colored text. It also automatically resets the color so you don't need to do it!
```ts
import { TextFormat } from "mello-utils";
console.log(TextFormat.translateAlternateColorCodes("&", "&aHello World!"));
```
`I probably be adding some documentation for this later this week so that it is easier to use and learn`