'use client'

import CountUp from 'react-countup';
const Counter = ({ count, name }) => {
    return (
        <div className="text-center uppercase">
            <span className="text-secondary text-xl lg:text-4xl">
                <CountUp delay={1} duration={2} end={count || 0} enableScrollSpy={true} scrollSpyOnce={true} /> <span> +</span>
            </span>
            <p className="text-muted text-lg lg:text-3xl"> {name}</p>
        </div>
    );
};

export default Counter;