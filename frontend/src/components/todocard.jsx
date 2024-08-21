export function Todocard({todo}){
    return <div className="bg-black p-2">
        <h1 className="text-white">{todo.title}</h1>
        <p className="text-cyan-300">{todo.description}</p>
    </div>
}