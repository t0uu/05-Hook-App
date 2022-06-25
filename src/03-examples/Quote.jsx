import React from 'react'
import { useState } from 'react';
import { useRef } from 'react'
import { useLayoutEffect } from 'react'

export const Quote = ({quote,author}) => {

  const pRef = useRef();
  const [boxSize, setboxSize] = useState({width: 0,height: 0})
  // useLayourEffect es async, es igual que el useEffect pero la diferencia es que una vez que se cumple dicha condición se ejecuta.
  useLayoutEffect(() => {
    // console.log(pRef.current.getBoundingClientRect());
    const {height,width} = pRef.current.getBoundingClientRect();
    setboxSize({height,width})
  }, [quote])



  return (
    <>
    <blockquote className="blockquote text-end" style={{display: 'flex'}}>
    <p className="mb-1" ref={pRef}>{quote}</p>
    <footer className="blockquote-footer">{author}</footer>
   </blockquote>
    <code>{JSON.stringify(boxSize)}</code>
    </>
  )
}
