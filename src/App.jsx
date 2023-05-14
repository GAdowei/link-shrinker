import { useState, useRef } from 'react'
import { FaCopy, FaLink } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import Button from './assets/components/Button';
import Input from './assets/components/Input';
import './App.css'
import "react-toastify/dist/ReactToastify.css";

function App() {
  const longLink = useRef(null)
  const [shortLink, setShortLink] = useState('')
  const [error, setError] = useState('')

  const shrinkLink = async (url) => {
    setError('')
      const result = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
      const data = await result.json();
      data.ok
       ? setShortLink(data.result.short_link2)
       : setError(`Invalid URL provided. For more info see: shrtco.de/docs`);
  }

  const notify = () => {
    toast.success("Copied to clipboard!");
  }

  return (
   <div className='h-screen w-full flex flex-col justify-center bg-purple-100'>
    <form
     className='flex flex-col min-w-max border border-slate-600 h-fit w-3/5 sm:w-2/5 mx-auto bg-white px-10 py-20 rounded-lg space-y-12'
     onSubmit={(e) => e.preventDefault()}>
     <div className='flex space-x-4 items-center justify-center'>
      <h2 className='text-center text-3xl font-bold'>Shrink-A-Link</h2>
      <FaLink className='text-2xl' />
     </div>
     <div className='flex'>
      <Input
       placeholder={"Enter URL"}
       onChange={(e) => {
        longLink.current = e.target.value;
       }}
      />
      <Button
       text={"Shrink"}
       onClick={() => {
        shrinkLink(longLink.current);
       }}
      />
     </div>
     {error && (
      <p className='text-xs/[2px] sm:text-sm/[2px] text-red-500 text-center font-bold'>
       {error}
      </p>
     )}
     <div className='flex'>
      <Input
       placeholder={"New URL"}
       value={error ? "" : shortLink}
       readOnly={true}
      />
      <Button
       text={"Copy"}
       icon={<FaCopy className='ml-2' />}
       onClick={() => {
        navigator.clipboard.writeText(shortLink);
        notify();
       }}
      />
     </div>
    </form>
    <ToastContainer autoClose={1000} />
   </div>
  );
}

export default App;