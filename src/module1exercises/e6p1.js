import styles from './Sidenote.module.css';

function Sidenote({ type, title, children }) {
  let className = `${styles[type]} ${styles.wrapper}`;
  return (
    <aside class={className}>
      <h3 className={styles.title}>{title}</h3>
      <p>{children}</p>
    </aside>
  );
}

export default Sidenote;

// import Sidenote from './Sidenote';

// function App() {
//   return (
//     <>
//       <Sidenote type="notice" title="This is a notice">
//         Hello World
//       </Sidenote>
//       <Sidenote type="success" title="This is success!">
//         Yay!
//       </Sidenote>
//     </>
//   )
// }

// export default App;