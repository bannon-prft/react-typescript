# TypeScript with React

This project is a practice project from [React - The Complete Guide (incl Hooks, React Router, Redux)](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)

## Key Concepts

functional components can be converted into a generic component
- make them type: `React.FC`
  - add `<{customProp: customPropType}>` to add custom prop types to component

allows React to understand when components are/are not being used in the correct way (i.e. missing props)

if making a type file that defines a type, can use class based and define the properties outside of the constructor
- use the constructor to set the defaults
- the types of the properties are needed ahead of time before the constructor

class names can be used as types

```js
const submitHandler = (event: React.FormEvent) => {
  event.preventDefault()

  const enteredText = inputRef.current?.value // not sure if input will be connected to anything
  const enteredText = inputRef.current!.value // positive there will be a non-null value attached to the element
}
```
must supply the type for events

```js
const inputRef = useRef<HTMLInputElement>(null)
```
for refs, must tell TS that the ref will be eventually connected to an input element
- by default, ref can work with many different types
- must set a default value to the useRef hook

```js
const Component: React.FC<{ onHandler: (text: string) => void }> = (props) { 
  //... 
}
```
pass arrow function with return type and parameters typed when using as custom props to the component

