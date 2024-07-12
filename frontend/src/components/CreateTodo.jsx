export function CreateTodo(){
    return(
        <div>
            <input style={{padding : 10,
                            margin : 10
            }} type="text" placeholder="Enter the title" />
            <input style={{padding : 10,
                            margin : 10   
            }} type="text" placeholder="Enter description"/>

            <button style={{padding : 10,
                            margin : 10 
            }}>add todo</button>
        </div>
    )
}