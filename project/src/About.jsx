import React from 'react'
import aboutimage from './about.png'
import Banner from './components/Banner'
const About = () => {
  return (
    <div>
      
      <Banner
      head1='wasteless'
      head2='harvest'
      content={'ghyujokiytreresdwxcvvbnm'}
      image={aboutimage}
      data={<button className='mt-2'>About more</button>}
      />

      </div>
  )
}

export default About