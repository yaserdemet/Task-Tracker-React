# Getting Started with Create React App

![Animation](https://user-images.githubusercontent.com/99739515/177800147-0c1c69d5-44d9-4c7f-a560-cc3f7c7a572c.gif)

📍 [Click here to see React Task Tracker](https://task-tracker-react-djmdf739g-yaserdemet.vercel.app)

## Available Scripts

### In this project, i have practiced;

👉 React Props

👉 React State Logic

👉 React useEffect Hooks

👉 Destrucring Methods

👉 Javascript Iteration Methods

👉 Bootstrap's Template

👉 3rd party libraries (Toastify , AutoAnimate)


#### What is AutoAnimate and Why we use it 

    - AutoAnimate is fundamentally a single function — autoAnimate — that accepts a parent element. Automatic animations will be applied to the parent element and its immediate children. Animations are specifically triggered when one of three events occurs:

    A child is added in the DOM.
    A child is removed in the DOM.
    A child is moved in the DOM.
    Let’s see what this looks like in practice. For now we'll use the autoAnimate function directly. React and Vue users — you’ll get some additional syntactic sugar later on — but for now let's learn the fundamentals:

```
    import { useState, useRef, useEffect } from 'react'
    import autoAnimate from '@formkit/auto-animate'

const Dropdown = () => {
  const [show, setShow] = useState(false)
  const parent = useRef(null)

  useEffect(() => {
    parent.current && autoAnimate(parent.current)
  }, [parent])

  const reveal = () => setShow(!show)

  return <div ref={parent}>
    <strong className="dropdown-label" onClick={reveal}>Click me to open!</strong>
    { show && <p className="dropdown-content" >Lorum ipsum...</p> }
  </div>
}

export default Dropdown

```

### At the end of the project, i will be able to;

✅ improve coding skills within React and Javascript

✅ use git commands (push, pull, commit, add etc.) and Github as Version Control System.

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
