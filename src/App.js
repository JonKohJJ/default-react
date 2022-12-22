import './App.css';

function App() {
  return (
    <div className="App">
        <h1>React App Hosted on Github Pages</h1>
        <a href="https://blog.logrocket.com/deploying-react-apps-github-pages/">https://blog.logrocket.com/deploying-react-apps-github-pages/</a>
        <p>Everytime a change is made, you need to run these commands</p>
        <ul>
          <li>git add .</li>
          <li>git commit -m "setup gh-pages"</li>
          <li>git push</li>
          <li>npm run deploy</li>
        </ul>
        <p>and it will make its changes on github pages</p>
    </div>
  );
}

export default App;
