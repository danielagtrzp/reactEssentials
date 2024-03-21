//this way is the correct way to import images
import reactImage from "./assets/react-core-concepts.png";

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}


function Header() {
  const description = reactDescriptions[genRandomInt(2)];
  //you can also do it like this, but when build this image will be ignored
  // <img src="/src/assets/react-core-concepts.png" alt="Stylized atom" />
  //so this is setting an atribute dynamically
  return (
    <header>
      <img src={reactImage} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  )
}
function App() {
  return (
    <div>
      <Header/>
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
