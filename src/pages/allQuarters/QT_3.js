import React from 'react'
import QuarterTemplate from './QuarterTemplate'

const QT_1 = () => {
    let courseDesc = `
    We will start the program by learning the fundamentals of Object-Oriented programming using JavaScript and TypeScript. We will also understand the latest Web trends i.e. Web 3.0 and Metaverse concepts and try to understand their working from the perspective of the users. `
    return (
    <div>
      <QuarterTemplate 
      title="Quarter I (core)" 
      TitleContent={`${courseDesc}`}
      
      
      
      />
    </div>
  )
}

export default QT_1
