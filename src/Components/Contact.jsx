import React from 'react'

function Contact() {
    return (
        <div className='text-2xl p-4'>
            <h1>Contact me:</h1>
            <p>I'm Available in well Known social media Platforms</p>
            <ul>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Whatsapp</li>
            </ul>
            <br />
            <form action="submit" className='p-6'>
                <h1 className='text-2xl'>Stay in touch for more:</h1>
                <input type="text" placeholder='Your name'/>
                <input type="email" placeholder='Your email'/>
                <button onClick={()=>(alert('Thanks for Subscribing'))}>Submit</button>
            </form>
        </div>
    )
}

export default Contact