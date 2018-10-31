import * as React from "react";
import styles from "./styles.scss";

import Button from "@material-ui/core/Button";
import logo from "logo.svg";

class App extends React.Component {
  public render() {
    return (
      <div className={styles.App}>
        <header className={styles.App__header}>
          <img src={logo} className={styles.App__logo} alt="logo" />
          <h1 className={styles.App__title}>Welcome to React</h1>
        </header>
        <p className={styles.App__intro}>
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>
          <Button variant="contained" color="primary">
            Hello Worldasdfd
          </Button>
        </p>
      </div>
    );
  }
}

export default App;
