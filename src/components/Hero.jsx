import React from 'react'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
function Hero() {
  return (
    <>
      <div className='hero-container'>

        <div className='hero-left'>
          <h1>VRM Foundation</h1>
          <p>POWERED BY GEEKSTER</p>
          <h3>India's best technical school <br /> Discover, Learn & Grow with our resources</h3>
          <p>
            VMR Foundation provides the best technical and theory classes by providing the best mentroship sessions with Industry exprerts
          </p>
          <button>Learn More</button>
        </div>
        <div className='hero-right'>
          <form className='book-demo-form'>
            <h3>Book a <span>  FREE </span>Demo</h3>
            <div>
              <input type='text' placeholder='Your Name' />
            </div>
            <div>
              <input type='email' placeholder='Your Email' />
            </div>
            <div>
              <div className='phone-input'>
                <span className='phone-prefix'>+91</span>
                <input type='tel' placeholder='Your Phone Number' />
              </div>
            </div>
            <button type='submit'>Register <KeyboardDoubleArrowRightIcon /></button>
            <p className='terms'>
              By continuing, you agree to the <a href='#'>VRM’s Terms</a> and <a href='#'>Privacy Policy</a>.
            </p>
          </form>
        </div>
      </div>
    </>
  )
}

export default Hero