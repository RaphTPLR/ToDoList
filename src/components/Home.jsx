import '../style/Home.scss';
import { useState } from 'react';
import Trash from '../assets/trash.png';

export default function Home() {
    const [input, setInput] = useState();
    const [todo, setTodo] = useState(Object.keys(localStorage).map(key => localStorage.getItem(key)));

    let compteur = 1;

    const Add = () => {
        compteur += 1;
        localStorage.setItem(compteur.toString(), input);
        setTodo([...todo, input]);
        setInput('');
    };

    const ClearAll = () => {
        localStorage.clear();
        setTodo([])
    }

    const Suppr = (index) => {
        localStorage.removeItem(index.toString());

        const newTodo = [...todo];
        newTodo.splice(index, 1);
        setTodo(newTodo);
    }

    return (
        <div className="content">
            <div className="container">
                <div className="top-bar">
                    <div className="input">
                        <input type="text" placeholder='Ajouter...' value={input} onChange={e => setInput(e.target.value)} required/>
                    </div>
                    <div className="add-btn" onClick={Add}>
                        <span>Add</span>
                    </div>
                </div>
                <div className="main">
                    <div className="row">
                        <div className="text">
                            <p>CLEAR ALL</p>
                        </div>
                        <div className="del-btn" onClick={ClearAll}>
                            <img src={Trash} alt="" />
                        </div>
                    </div>
                    {todo.map((item, index) => 
                        <div className="row" key={index}>
                            <div className="text">
                                <p>{item}</p>
                            </div>
                            <div className="del-btn" onClick={() => Suppr(index)}>
                                <img src={Trash} alt="" />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}