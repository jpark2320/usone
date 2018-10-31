## How to make a component (Refer to src/views/App)
```
Every component has 4 files. 
index.tsx - Dispatch using Redux and pass states from Redux store through props to container.tsx
container.tsx - Handle logics (calling API or hadling data)
presenter.tsx - Handle views (showing data)
styles.scss - Where to write Scss codes
```

## How to make className and Scss code convention
```
1. You can't use dash(`-`) in .scss, so use double underscores (`__`) instead.
.Nav-bar {    <---- This is wrong
  ...       
}

.Nav__bar {    <---- This is correct
  ...       
}

and then connect the class name by doing the following

import styles from "./styles.scss";

<div className={styles.Nav__bar}> ... </div>
```
Use the benefits of Scss as much as possible ! (variables and nesting blocks)

## Where to put components either in views or in components
Components in "views" folder are responsible for views, which means each component will be assigned to each route. Whereas, componenets in "components" are just sub-components which are placed inside view components.

ex) `Search` component is a view component. `Post` is a ordinary component. When user search something in the search view, `Post` component will be shown as the search result.
