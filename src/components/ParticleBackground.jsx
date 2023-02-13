import React from 'react'
import Particles from 'react-tsparticles'

function ParticleBackground() {
  return (
    <div>
      <Particles
      options={{
        background:{
            color:"#000000",
        },
        fpslimit:60,
        interactivity:{
            detectsOn:"canvas",
            events:{
                resize:true,
            },
        },
        particles:{
            color:{
                value:"7018af"
            },
            number:{
                density:{
                    enable:true,
                    area:1080
                },
                limit:0,
                value:400
            },
            opacity:{
                animation:{
                    enable:true,
                    minimumValue:0.05,
                    speed:1,
                    sync:false
                },
                random:{
                    enable:true,
                    minimumValue:0.05,
                },
                value:1
            },
            shape:{
                type:"star"
            },
            size:{
                random:{
                    enable:true,
                    minimumValue:0.5
                },
                value:1
            }
        }
      }}
      />
    </div>
  )
}

export default ParticleBackground
