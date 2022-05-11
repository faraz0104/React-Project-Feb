import React, { useEffect, useState } from 'react'
import { CopyToClipboard } from "react-copy-to-clipboard"
import axios from "axios"

const LinkResult = ({ inputValue }) => {
//shrtcode api is used
    const [shortenLink, setShortenLink] = useState("")
    const [copied, setCopied] = useState(false)
     const [error, setError] = useState(false)

    const fetchData = async () => {
        try {
          
            const res = await axios.get(`https://api.shrtco.de/v2/shorten?url=${inputValue}`);
            setShortenLink(res.data.result.full_short_link)

        } catch (err) {
            setError(err)
        } 
    }
    // this use Effecet run everytime input value change
    useEffect(() => {
        if (inputValue.length) {
            fetchData();
        }
    }, [inputValue])
 
    //this useEffect will run whenever the copied file change 
    useEffect(() => {
        const timer = setTimeout(() => {
            setCopied(false)
        }, 1000);

        return () => clearTimeout(timer)
    }, [copied]);

    

    
    if (error) {
        return <p className='noData'>Something went wrong</p>
    }

    return (
        <>
            {shortenLink && (
                <div className='result'>
                    <p>{shortenLink}</p>

                    <CopyToClipboard
                        text={shortenLink}
                        onCopy={() => setCopied(true)}>
                        <button className={copied ? "copied" : ""}>Copy to clipboard</button>
                    </CopyToClipboard>

                </div>
            )}
        </>

    )
}

export default LinkResult