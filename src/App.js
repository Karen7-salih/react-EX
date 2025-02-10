import logo from './logo.svg';
import './App.css';

function MyComponent(){
  return<h1>React Learning Center</h1>
}

function Title(props){
  return (
    <div>
      <h1>{props.text}</h1>
      <hr />
    </div>
  );


}

function Button(){
  return <button>easy button</button>
}

function P(){
  return <p>זהו תרגול קומפוננטות ב-React</p>
}

function Ul(){
  return (
    <ul>
  <li> 1 </li>
  <li> 2 </li>
  <li> 3 </li>
  <li> 4 </li>
  <li> 5 </li>
  </ul>);
  
}


function Component(props , subtitle){
  return(
      <div>
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
      </div>
    );
}

function UserImage(props) {
  return <img src={props.src} alt={props.alt} style={{ width: '250px'}} />;
}

function ItemsComp({ items }) {
  return <ol>{items.map((item, i) => <li key={i}>{item}</li>)}</ol>;
}


function Para(props) {
  return <p>{props.content}</p>;
}

function Label({ label, href }) {
  return <a href={href}>{label}</a>;
}

function BgColor({prop}){
  return(
    <div style={{ backgroundColor: prop, padding: '20px', color: 'white' }}>
       </div>);
}


function App() {

  const itemsArray = ["eyeliner" , "mascara" , "shein" , "delta"]
  return (
    <div className="App">
      <MyComponent></MyComponent>
      <MyComponent></MyComponent>
      <Title text="this is my first app yay" />
      <Button></Button>
      <P></P>
      <Title text="this is the second text" />
      <Ul></Ul>
      <Component title="React Learning" subtitle="React Component Props" />   
      <UserImage src = "https://www.cairngormreindeer.co.uk/wp-content/uploads/2024/08/IMG_0201.jpg" alt="User profile picture"/>
      <ItemsComp items={itemsArray} />
      <Para content= "this is the para" />
      <Para content= "not the cow" />
      <Label label="go get your self some cheap clothes" href="https://us.shein.com/" />
      <BgColor prop="pink" />






    </div>
  );
}

export default App;
