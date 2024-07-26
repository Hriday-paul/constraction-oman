'use client'
// import aos styles
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import AOS from 'aos'

export default function ScrollAnim({children}) {
    useEffect(() => {
        AOS.init({});
    }, []);
  return (
    <div>
        {children}
    </div>
  )
}
