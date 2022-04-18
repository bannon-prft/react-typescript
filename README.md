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
