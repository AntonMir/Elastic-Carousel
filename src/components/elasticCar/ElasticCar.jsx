import React from 'react';
// carousel elements
import Carousel, { consts } from 'react-elastic-carousel'
import Item from "./Item";
// img
import oksanaZ from '../../assets/img/oksanaZ.jpg'
// styles
import './elasticCar.scss';

// кол-во слайдов в зависимости от ширины вьюпорта
const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 600, itemsToShow: 2 },
    { width: 968, itemsToShow: 3 },
];


export default function ElasticCar() {

    // настройка формы стрелок (брать элементы юникода)
    function myArrow({ type, onClick, isEdge }) {
        const pointer = type === consts.PREV ? '❮' : '❯'
        return (
          <button onClick={onClick} disabled={isEdge} className="pointer">
            {pointer}
          </button>
        )
    }

    return (
        <Carousel 
            renderArrow={myArrow}
            breakPoints={breakPoints}
        >

            <Item className="car-el">
                <img className="logo" src={oksanaZ} alt=""/>
                <h1>Оксана Вячеславовна Засыпкина</h1>
                <p>Тренер по детской спортивной аэробике и по оздоровительной аэробике для взрослых и детей.</p>
                <a href="/">подробнее</a>
            </Item>

            <Item className="car-el">
                <img className="logo" src={oksanaZ} alt=""/>
                <h1>Оксана Вячеславовна Засыпкина</h1>
                <p>Тренер по детской спортивной аэробике и по оздоровительной аэробике для взрослых и детей.</p>
                <a href="/">подробнее</a>
            </Item>

            <Item className="car-el">
                <img className="logo" src={oksanaZ} alt=""/>
                <h1>Оксана Вячеславовна Засыпкина</h1>
                <p>Тренер по детской спортивной аэробике и по оздоровительной аэробике для взрослых и детей.</p>
                <a href="/">подробнее</a>
            </Item>

            <Item className="car-el">
                <img className="logo" src={oksanaZ} alt=""/>
                <h1>Оксана Вячеславовна Засыпкина</h1>
                <p>Тренер по детской спортивной аэробике и по оздоровительной аэробике для взрослых и детей.</p>
                <a href="/">подробнее</a>
            </Item>

            <Item className="car-el">
                <img className="logo" src={oksanaZ} alt=""/>
                <h1>Оксана Вячеславовна Засыпкина</h1>
                <p>Тренер по детской спортивной аэробике и по оздоровительной аэробике для взрослых и детей.</p>
                <a href="/">подробнее</a>
            </Item>
                            
        </Carousel>
    );
}

