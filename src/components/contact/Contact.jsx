import React from 'react'
import './Contact.css'
import { MapPin, Envelope, Phone, WhatsappLogo, ArrowCircleUp} from 'phosphor-react'

function Contact() {
  return (
    <div className='contact' id='contact'>
        <div className="contact1">
          <h1>Contact Me &#128231;</h1>
            <div className="contact2">
                <div className="contact-text">
                    <p>Let's make something new, different and more meaningful or make something visually pleasing. <span id='sp'>Just Say Hello!</span>.</p>
                    <div className='con-icon'>
                    <MapPin size={30} color="#ffffff" weight="light" />
                    <span>Abuja, Nigeria</span>
                    </div>
                    <div className='con-icon'>
                    <Envelope size={30} color="#ffffff" weight="light" />
                    <span><a href='mailto:khoinom2018@gmail.com'>khoinom2018@gmail.com</a></span>
                    </div>
                    <div className='con-icon'>
                    <Phone size={30} color="#ffffff" weight="light" />
                    <span><a href="tel:+2347062422735">07062422735</a></span>
                    </div>
                    <div className='con-icon'>
                    <WhatsappLogo size={30} color="#ffffff" weight="light" />
                    <span><a href="https://wa.me/+2348174341196">08174341196</a></span>
                    </div>
                </div>
                <div className="contact-inp">
                  <form action="https://formsubmit.co/khoinom2018@gmail.com" method="POST" className='conform'>
                    <ul>
                      <div className="contact-list">
                        <li>
                          <input type="text" placeholder='Your name*' name='name' className='inp' required />
                        </li>
                        <li>
                          <input type="email" placeholder='Email*' name='email' className='inp' required />
                        </li>
                      </div>
                      <li>
                        <input type="text" placeholder='subject' name='_subject' className='txt' />
                        <input type="hidden" name="_subject" value="New Friendly Message!"></input>
                        <input type="hidden" name="_autoresponse" value="Hi there! Thanks for reaching out, I'm happy to have you here. You'll get a reply shortly from now."></input>
                      </li>
                      <li>
                        <textarea type="text" name="message" id="context" cols="30" rows="10" placeholder='Message...' required />
                      </li>
                      <li>
                        <button type='submit'>Send</button>
                      </li>
                    </ul>
                  </form>
                </div>
            </div>
            
        </div>
        <footer>
          <div className="foot">
            <span>&copy; 2022 | Made with &#128150; by Gabbie</span>&nbsp; <span id='arrow'><a href="#home"><ArrowCircleUp size={40} color="#ffffff" weight="thin" /></a></span>
          </div>
        </footer>
    </div>
  )
}

export default Contact