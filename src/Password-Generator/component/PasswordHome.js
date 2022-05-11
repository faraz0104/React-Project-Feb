import React, { useState } from 'react'
import  "./Password.css";
import {numbers,lowerCaseLetters,specialCharacters,upperCaseLetters} from "./Characters.js"
import { CopyToClipboard } from "react-copy-to-clipboard"

function PasswordHome() {


const[password,setPassword]=useState("")
const[passwordLength,setPasswordLength]=useState(20)
const[includeUppercase,setIncludeUppercase]=useState(false)
const[includeLowercase,setIncludeLowercase]=useState(false)
const[includeNumber,setIncludeNumber]=useState(false)
const[includeSymbol,setIncludeSymbol]=useState(false)
const [copied, setCopied] = useState(false)

const handleGeneratePassword =(e) =>{
    let characterList=""

    if(includeLowercase){
        characterList=characterList+lowerCaseLetters;
    }
    if(includeUppercase){
        characterList=characterList+upperCaseLetters;
    }
    if(includeNumber){
        characterList=characterList+numbers;
    }
    if(includeSymbol){
        characterList=characterList+specialCharacters;
    }

    setPassword(createPassword(characterList));     
             
}

const createPassword=(characterList)=>{
            let password ="";
            //To indentify length of character list
            const characterListLength= characterList.length;
            for(let i=0 ; i<passwordLength;i++){
                const characterIndex= Math.round(Math.random() * characterListLength)
                password= password +characterList.charAt(characterIndex)
            }
            return password;
}

  return (
      <div className='app'>
    <div className='container'>
        <div className='generator'>
            <h2 className='generator-header'>
                Password Generator
            </h2>
            <div className='generator_password'>
                <h3 >{password}</h3>
                <button className='copy-btn'>
                    <i className='far fa-clipboard'></i>
                </button>
            </div>
            <div className='form-group'>
                <label htmlFor='password-length'>Password Length</label>
                <input value={passwordLength} onChange={(e)=>setPasswordLength(e.target.value)} type="number" id="password-length" name="password-length" max="20" min="10"/>
            </div>
            <div className='form-group'>
                <label htmlFor='uppercase-letter'>Include Uppercase Letter</label>
                <input checked={includeUppercase} onChange={(e)=>setIncludeUppercase(e.target.checked)} type="checkbox" id="uppercase-letter" name="uppercase-letter" />
            </div>
            <div className='form-group'>
                <label htmlFor='lowercase-letter'>Include Lowercase Letter</label>
                <input checked={includeLowercase} onChange={(e)=>setIncludeLowercase(e.target.checked)} type="checkbox" id="lowercase-letter" name="lowercase-letter" />
            </div>
            <div className='form-group'>
                <label htmlFor='number'>Include Number</label>
                <input checked={includeNumber} onChange={(e)=>setIncludeNumber(e.target.checked)} type="checkbox" id="number" name="number" />
            </div>
            <div className='form-group'>
                <label htmlFor='symbol'>Include Symbol</label>
                <input checked={includeSymbol} onChange={(e)=>setIncludeSymbol(e.target.checked)} type="checkbox" id="symbol" name="symbol" />
            </div>
            
            <CopyToClipboard
                        text={password}
                        onCopy={() => setCopied(true)}>
                        <button className='generator-btn' onClick={handleGeneratePassword}>Generate Password</button>
   
                    </CopyToClipboard>
        </div>

    </div>
    </div>
  )
}

export default PasswordHome;