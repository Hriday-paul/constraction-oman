'use client'

import CountUp from 'react-countup';
const Counter = ({ count}) => {
    return (
        <>
            <CountUp delay={1} duration={2} end={count || 0} enableScrollSpy={true} scrollSpyOnce={true} /> <span> +</span>
        </>
    )
};

export default Counter;