import React from 'react'
import {useEffect,useState} from 'react'

const Practice = () => {
  const [name,setName]=useState("Ram");
  const changeName=()=>{
    setName("Shyam");
  }
  return (
   <div class="flex flex-col items-center justify-center gap-4 p-4 bg-gray-100 rounded-xl shadow-md">
  <button class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition" onClick={changeName}>
    Change name
  </button>
  <h1 class="text-2xl font-semibold text-gray-800">{name}</h1>
</div>
  )
}

export default Practice
