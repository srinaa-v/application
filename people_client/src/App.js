import React,{useEffect,useState} from "react";
import axios from "axios";
const API ="http://localhost:4000";
export default function App(){
  const[people,setPeople]=useState([]);
  const[form,setForm]=useState({name:"",age:" "});
  async function load() {
    const res=await axios.get(`${API}/`);
    setPeople(res.data);
    
  }
  useEffect(()=>{
    load();
  },[])

  async function addPerson(e) {
    if(!form.name||!form.age)
      return alert("enter name& age& course& email& phone")

    const res=await axios.post(`${API}/`,{
      name: form.name,
      age:Number(form.age)
    });
  }
return(
  <div style={{fontFamily:"sans-serif",maxWidth:520,margin:'auto'}}>
    <h1>list of students</h1>
    <form>
      <input type="text" placeholder="enter name" value={form.name}
      onChange={e=> setForm({...form,name:e.target.value})} required/>

      <input type="text" placeholder="enter name" value={form.name}
      onChange={e=> setForm({...form,age:e.target.value})} required/>

      <input type="text" placeholder="enter name" value={form.name}
      onChange={e=> setForm({...form,name:e.target.value})} required/>

      <input type="text" placeholder="enter name" value={form.name}
      onChange={e=> setForm({...form,name:e.target.value})} required/>

      <input type="text" placeholder="enter name" value={form.name}
      onChange={e=> setForm({...form,name:e.target.value})} required/>
    </form>
    {people.length ===0?(
      <p>no students found.</p>
    ):(
      <ul>
        {people.map(p=>(
          <li key={p.id}>
            <strong>{p.name}</strong>-age{p.age}-course{p.course}-email{p.email}-phone{p.phone}
          </li>
        ))}
      </ul>
    )}

  </div>
)
}
