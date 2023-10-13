'use client'
import { useEffect } from 'react'
import dynamic from 'next/dynamic'
const Herosection= dynamic(() => import('../components/home/herosection'));
const Whyourquiz= dynamic(() => import('../components/home/whyourquiz'));
export default function Home() {
  useEffect(()=>{
  localStorage.clear();
  },[])
  return (
    <>
      <Herosection/>
      <Whyourquiz/>   
    </>
  )
}
