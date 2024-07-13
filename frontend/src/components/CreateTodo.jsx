import { useState } from "react"

export function CreateTodo(){
    const[title,setTitle] = useState("")
    const[description,setDescription] = useState("")
    return(
        <div>
            <input style={{padding : 10,
                            margin : 10
            }} type="text" placeholder="Enter the title" onChange={function(e){
                const value = e.target.value
                setTitle(e.target.value)
            }} />
            <input style={{padding : 10,
                            margin : 10   
            }} type="text" placeholder="Enter description" onChange={function(e){
                const value = e.target.value
                setDescription(e.target.value)
            }} />

            <button style={{padding : 10,
                            margin : 10 
            }} onClick={
                fetch("http://localhost:3000/todo",{
                    method : "POST",
                    body : JSON.stringify({
                        title : title,
                        description : description
                    }),
                    headers:{"Content-type" : "application/json "}
                }).then(async (res)=>{
                    const msg = await res.json()
                    alert("added")
                })
            }>add todo</button>
        </div>
    )
}