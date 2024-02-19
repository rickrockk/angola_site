import { createFileRoute} from "@tanstack/react-router";
import './appointment.scss'

export const Route = createFileRoute("/appointment")({
    component: Appoit,
});

function Appoit() {
    return (
        <div className="box">
           <div className="service">
            <h2>Запись на прием к врачу</h2>
            <p>Отправитель:Университетская клиническая больница № 1 Клинического центра Первого Московского государственного медицинского университета имени И.М. Сеченова, вчера в 18:23 </p>
           <h3>Сигалев Георгий,</h3>
           <h3>Вы записаны на прием к врачу на завтра в 20.00, необходимо оплатить визит.</h3>
           </div>
           <div className="cost">
            <h3>Запись на прием к врачу</h3>
            <h2>500 ₽</h2>
            <p>Оплатите до 16 сентября</p>
            <button>Оплатить</button>
           </div>
        </div>
    )
}