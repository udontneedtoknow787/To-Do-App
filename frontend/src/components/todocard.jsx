export function Todocard({todo}){
    if (todo.completed) {
        return <div className="bg-green-300 rounded-md p-2">
            {/* {todo.completed ? <span className="text-xl lg:text-2xl cursor-pointer">&#x2611;</span> :
                <span className="text-xl lg:text-2xl cursor-pointer">&#x2610;</span>} */}

            <span className="text-xl lg:text-2xl cursor-pointer">&#x2611;</span>
            <h1 className="font-bold text-lg">{todo.title}</h1>
            <p className="text-slate-800">{todo.description}</p>
        </div>
    }
    else {
        return <div className="bg-slate-300 rounded-md p-2">
            {/* {todo.completed ? <span className="text-xl lg:text-2xl cursor-pointer">&#x2611;</span> :
                <span className="text-xl lg:text-2xl cursor-pointer">&#x2610;</span>} */}

            <span className="text-xl lg:text-2xl cursor-pointer">&#x2610;</span>
            <h1 className="font-bold text-lg">{todo.title}</h1>
            <p className="text-slate-800">{todo.description}</p>
        </div>
    }
}