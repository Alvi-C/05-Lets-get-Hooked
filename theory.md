1. What is difference between Named export, Default export and \*as export?
   A. In JavaScript, the "export" keyword is used to make variables, functions, and classes available to other parts of the code, or to other files. When a variable, function, or class is exported, it can be imported and used in other parts of the application.

   The "named export" is a way to export multiple values from a file and give them specific names. For example, you can export multiple functions or variables from a file and give them specific names.
   export syntax : export function header ( some code here )
   import {header} from "./container/header"

   The "default export" is a way to export a single value as the default export from a file. Only one value can be exported as the default.
   export syntax : export default Footer
   import Footer from "./cantainer/footer"

   The \_ as syntax is used to import all the exports from a file as a single object, and give that object a specific name.
   export syntax : export function header ( some code here ),
   export function footer ( some code here )
   import \* as container from "./conatiners"

   The \* as syntax is useful when you have multiple exports from a file, and you want to import them all and access them through a single object, rather than importing each one individually. It also allows you to give a clear name to the imported object, making it easier to access the exports and making your code more readable.

2. What is importance of confiq.js file?
   A. confiq.js file holds all the absolute data into some variable which can be further used by our application into multiple place. This is done to reduce the effort of maintaing the application. If some data has to be changed then we can make the change into confiq.js file and that would update the data wherever it is being used.

3. What is React Hooks?
   A. Hook is a javascript function.

4. Why do we need useState hook?
   A. useState() is named as React hook in react but it is actually a function. And what is this useState() function used for? The useState() function is used for making React variable and make that variable insync with UI when the variable changes. useState returns array of [state varaible , state function].
   Way of writing:
   const [variable, setVariable] = useState()
