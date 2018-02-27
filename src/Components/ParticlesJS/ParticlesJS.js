import React, { Component } from 'react';
import Particles from 'react-particles-js';

class ParticlesJS extends Component {
    render() {
        return (
                <Particles
                    params={{
                        particles: {
                            number: {
                                value: 50,
                            },
                            color: {
                                value: "#000000"
                            },
                            shape: {
                                type: "circle",
                                stroke: {
                                    width: 1,
                                    color: "#00000"
                                },
                                polygon: {
                                    nb_sides: 5
                                }
                            },
                            opacity: {
                                value: 0.6,
                                random: false,
                                anim: {
                                    enable: false,
                                    speed: 1,
                                    opacity_min: 0.1,
                                    sync: false
                                }
                            },
                            size: {
                                value: 1.5,
                                random: false,
                                anim: {
                                    enable: false,
                                    speed: 30,
                                    size_min: 30,
                                    sync: false
                                }
                            },
                            line_linked: {
                                enable: true,
                                distance: 150,
                                color: "#000000",
                                opacity: 0.6,
                                width: 1
                            },
                        },
                        retina_detect: true
                    }}
                    style={{
                        width: '100%',
                        position: "fixed"
                    }}
                />
        );
    }
}

export default ParticlesJS;
