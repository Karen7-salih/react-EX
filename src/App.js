import logo from './logo.svg';
import './App.css';


function UserList(props){
  console.log(props.userList)
  return <ul style={{backgroundColor: "pink" , listStyleType:"none"}}>
    {props.userList.map((item , index) => { 
      return <li key={index} > {item.name} {item.email} </li>
    })}
  </ul>
}

function App() {

  const myList = [{id : 1 , name : "kareen" , email : "salihkaren345@gmail.com"} ,
    {id : 2 , name : "kareenS" , email : "salihakfsn345@gmail.com"}
  ]

  return (
    <div className="App">
      <UserList userList={myList}/>

    </div>
  );
}

export default App;
