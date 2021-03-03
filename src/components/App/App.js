import React from 'react';
import styles from './App.scss';
import List from '../List/List.js';
import Column from '../Column/Column.js';

class App extends React.Component {
  render() {
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>My first React app</h1>
        <h2 className={styles.subtitle}>A simple to-do app, with lists, columns and cards</h2>
        <List img={'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png'} title={['Things to do', <sup key='1'>soon!</sup>]} titleColumn1={'Animals'} titleColumn2={'Plants'} titleColumn3={'Minerals'}>
          <p>Interesting things I want to check out!</p>
        </List>
      </main>
    )
  }
}

export default App;
