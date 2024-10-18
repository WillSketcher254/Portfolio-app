import React from 'react'

function Skills() {
  return (
    <div className='text-2xl p-4'>
      <table>
        <tr>
          <td>
            <div>
              <h1>Skills:</h1>
              <p>I have an above average ammout of skill.</p>
              <p>From code, art and film industry professions.</p>
              <p>I can do art in different fields, code in multiple languages and more  for hobbies</p>
            </div>
          </td>
          <td className='bg-purple-100'>
            <div>
              <h1 className='text-2xl text-center'>Coding:</h1>
              <ul className='bg-white p-4 m-5'>
                <li>Python</li>
                <li>Javascript</li>
                <li>C</li>
                <li>React.js</li>
              </ul>
              <h1 className='text-2xl text-center'>Art:</h1>
              <ul className='bg-white p-4 m-5'>
                <li>Animation</li>
                <li>Pencil, light and shade</li>
                <li>Film camera works</li>
              </ul>
            </div>
          </td>
        </tr>
      </table>

    </div>
  )
}

export default Skills