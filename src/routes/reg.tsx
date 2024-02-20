import {Link, createFileRoute} from "@tanstack/react-router";
import './reg.scss'

export const Route = createFileRoute("/reg")({
    component: Reg,
});

function Reg() {
    return (
       <div className="container">
         <div className="main">
            <div className="name">  
            <h1>гос<span>услуги</span></h1>
            <h3>Регистарция</h3>
            <p className="gray">Зарегистрируйтесь онлайн через банк или <br/>посетив центры обслуживания</p>
            <button className="first">Онлайн через интернет-банк</button>
            <button className="second">Через центр обслуживания</button>
            <Link to="/">Другой способ регистрации</Link>
            </div>
            <p>Уже зарегестрировались? <Link to="/"><span>Войти</span></Link></p>
        </div>
       </div>
    )
}