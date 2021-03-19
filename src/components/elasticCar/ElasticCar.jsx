import React from 'react';
import Carousel from 'react-elastic-carousel'
import Item from "./Item";

import oksanaZ from '../../assets/img/oksanaZ.jpg'
// styles
import './elasticCar.scss';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];


export default function ElasticCar() {


    return (
        <>
            <h1>ElasticCar</h1>
            <div className="elastic-car"> 

                <Carousel 
                    itemsToShow={1}
                    breakPoints={breakPoints}>
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

            </div>
        </>
    );
}

