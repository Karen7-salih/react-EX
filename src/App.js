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

function ProductList(props){
  console.log(props.productList)
  return <ul style={{backgroundColor: "green" , listStyleType:"none"}}>
    {props.productList.map((item , index) => { 
      return <li key={index} > {item.name} {item.price} </li>
    })}
  </ul>




}

function App() {

  const myList = [{id : 1 , name : "kareen" , email : "salihkaren345@gmail.com"} ,
    {id : 2 , name : "kareenS" , email : "salihakfsn345@gmail.com"}
  ]

  const myList2 = [{id : 1 , name : "mascar" , price : 250} ,
    {id : 2 , name : "concealer" , price : 500}
  ]

  return (
    <div className="App">
      <UserList userList={myList}/>
      <ProductList productList={myList2}/>



    </div>
  );
}

export default App;
