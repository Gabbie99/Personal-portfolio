import React from 'react'
import './Contact.css'
import { MapPin, Envelope, Phone} from 'phosphor-react'

function Contact() {
  return (
    <div className='contact'>
        <div className="contact1">
          <h1>Contact Me &#128231;</h1>
            <div className="contact2">
                <div className="contact-text">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sed voluptates aperiam dolores voluptas velit perspiciatis, quo, quod accusamus neque culpa. Est excepturi officia voluptate molestiae. Sunt, quos quibusdam. Molestias.</p>
                    <div>
                    <MapPin size={20} color="#ffffff" weight="fill" />
                    <span></span>
                    </div>
                    <div>
                    <Envelope size={20} color="#ffffff" weight="fill" />
                    <span></span>
                    </div>
                    <div>
                    <Phone size={20} color="#ffffff" weight="fill" />
                    <span></span>
                    </div>
                </div>
                <div className="contact-inp">
                  <form action="">

                  </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact