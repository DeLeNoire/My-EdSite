
import React, { useState } from 'react';
// import { Underlay, Overlay } from './YourComponents'; // Import your Underlay and Overlay components


export function Underlay({page}) {
    const pages = [
        // Define content for each page
        (
            <div style={{
                fontFamily: "'Antonio', sans-serif",
                flex: "1 1 0%",
                height: 40,
                padding: 40,
                fontSize: 25,
                fontWeight: "700",
                lineHeight: "40px",
                color: "black",
                letterSpacing: 1.2,
                left: '10px',

            }}>

                <h1> School: </h1>
                <p style={{ flex: "1 1 0%", height: "100%", fontSize: 30, lineHeight: "1.5em", color: "black" }}>
                    Sri Siddhi Vinayaka Residential School Hattiangadi
                    <br />
                    ICSE --> (2012-2017)
                    <br/>
                    <b>—</b>
                </p>
                {/*<p style={{ flex: "1 1 0%", fontSize: 250, lineHeight: "100%", textAlign: "right", color: "black", margin: 0, letterSpacing: -10 }}>_01</p>*/}
                <p
                    style={{
                        position: 'absolute',
                        bottom: 100,
                        right: 40,
                        fontSize: 250,
                        lineHeight: '100%',
                        textAlign: 'right',
                        color: 'black',
                        margin: 0,
                        letterSpacing: -10,
                    }}
                >
                    _01
                </p>
            </div>
        ),
        (
            <div style={{
                fontFamily: "'Antonio', sans-serif",
                flex: "1 1 0%",
                height: 40,
                padding: 40,
                fontSize: 25,
                fontWeight: "700",
                lineHeight: "40px",
                color: "black",
                letterSpacing: 1.2,
                left: '10px',
            }}>

                <h1> Preparatory school: </h1>
                <p style={{ flex: "1 1 0%", height: "100%", fontSize: 30, lineHeight: "1.5em", color: "black" }}>

                    Bansal Public School
                    <br />
                    Motion / Vibrant
                    <br/>
                    CBSE --> (2017-2020)
                    <br/>
                    <b>—</b>
                </p>
                {/*<p style={{ flex: "1 1 0%", fontSize: 250, lineHeight: "100%", textAlign: "right", color: "black", margin: 0, letterSpacing: -10 }}>_02</p>*/}
                <p
                    style={{
                        position: 'absolute',
                        bottom: 100,
                        right: 40,
                        fontSize: 250,
                        lineHeight: '100%',
                        textAlign: 'right',
                        color: 'black',
                        margin: 0,
                        letterSpacing: -10,
                    }}
                >
                    _02
                </p>

            </div>
        ),
        (
            <div style={{
                fontFamily: "'Antonio', sans-serif",
                flex: "1 1 0%",
                height: 40,
                padding: 40,
                fontSize: 25,
                fontWeight: "700",
                lineHeight: "40px",
                color: "black",
                letterSpacing: 1.2,
                left: '10px',
            }}>

                <h1> College: </h1>
                <p style={{ flex: "1 1 0%", height: "100%", fontSize: 30, lineHeight: "1.5em", color: "black" }}>

                    Motilal Nehru National Institute of Technology
                    <br />
                    B.Tech --> (2020-2024)
                    <br/>

                    <b>—</b>
                </p>
                {/*<p style={{ flex: "1 1 0%", fontSize: 250, lineHeight: "100%", textAlign: "right", color: "black", margin: 0, letterSpacing: -10 }}>_03</p>*/}
                <p
                    style={{
                        position: 'absolute',
                        bottom: 100,
                        right: 40,
                        fontSize: 250,
                        lineHeight: '100%',
                        textAlign: 'right',
                        color: 'black',
                        margin: 0,
                        letterSpacing: -10,
                    }}
                >
                    _03
                </p>
            </div>
        ),
        (
            <div style={{
                fontFamily: "'Antonio', sans-serif",
                flex: "1 1 0%",
                height: 40,
                padding: 40,
                fontSize: 25,
                fontWeight: "700",
                lineHeight: "40px",
                color: "black",
                letterSpacing: 1.2,
                left: '10px',
            }}>

                <h1> Online: </h1>
                <p style={{ flex: "1 1 0%", height: "100%", fontSize: 30, lineHeight: "1.5em", color: "black" }}>

                    <a href='https://drive.google.com/file/d/1C3xiR0ql9tiIPgRkONOvmx_TqAiE4-OC/view?pli=1'>Google KickStart 2022 round-E 🔗</a>
                    <br />
                    <a href='https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Goldman%20Sachs/NPdeQ43o8P9HJmJzg_Goldman%20Sachs_RSPfTuCQWdD6DsfGa_1670748354244_completion_certificate.pdf'> Goldman Sachs Virtual InternShip 🔗</a>
                    <br/>
                    <b>—</b>
                </p>
                {/*<p style={{ flex: "1 1 0%", fontSize: 250, lineHeight: "100%", textAlign: "right", color: "black", margin: 0, letterSpacing: -10 }}>_04</p>*/}
                <p
                    style={{
                        position: 'absolute',
                        bottom: 100,
                        right: 40,
                        fontSize: 250,
                        lineHeight: '100%',
                        textAlign: 'right',
                        color: 'black',
                        margin: 0,
                        letterSpacing: -10,
                    }}
                >
                    _04
                </p>
            </div>
        ),
    ];


  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        padding: 60,
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        pointerEvents: "none",
      }}>
      <div style={{ width: "100%", padding: 0, display: "inline-flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
        <p
          style={{
            fontFamily: "'Antonio', sans-serif",
            flex: "1 1 0%",
            height: 30,
            fontSize: 35,
            fontWeight: "700",
            lineHeight: "30px",
            color: "black",
            letterSpacing: 1.2,
          }}>

        </p>
        <div style={{ flex: "1 1 0%", display: "flex", gap: "2em" }}></div>
        <p style={{ flex: "1 1 0%", height: 30, fontSize: 30, lineHeight: "30px", textAlign: "right", color: "black" }}>⎑</p>
      </div>
      <div style={{ height: 60 }} />
      <div style={{ width: "100%", padding: 0, display: "inline-flex", flexDirection: "row", alignItems: "flex-start", justifyContent: "center" }}>
        <p style={{ flex: "1 1 0%", height: "100%", fontSize: 20, lineHeight: "1.5em", color: "black" }}>

        </p>
        <div style={{ width: 10 }} />
        <p
          style={{
            transform: "rotate3d(0, 0, 1, 90deg) translate3d(100%,10px,0)",
            transformOrigin: "right",
            fontSize: 24,
            fontWeight: "700",
            lineHeight: "100%",
            textAlign: "right",
            color: "black",
            whiteSpace: "nowrap",
          }}>
          DRAG POINTER &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ●
        </p>
      </div>
      <div style={{ height: 10 }} />
      <div
        className="full"
        style={{
          fontFamily: "'Antonio', sans-serif",
          width: "100%",
          flex: "1 1 0%",
          padding: 0,

          display: "inline-flex",
          flexDirection: "row",
          alignItems: "flex-end",
          justifyContent: "center",
        }}>
          {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}

        <p style={{ flex: "1 1 0%", fontSize: 10, lineHeight: "1em", color: "green", margin: 0,bottom:100, letterSpacing: 10 }}>
        </p>
        <div style={{ width: 10 }} />
        {/*<p style={{ flex: "1 1 0%", fontSize: 250, lineHeight: "100%", textAlign: "right", color: "black", margin: 0, letterSpacing: -10 }}>_01</p>*/}
      </div>
      <div style={{ height: 60 }} />
      <div
        style={{
          pointerEvents: "all",
          pointer: "auto",
          width: "100%",
          padding: 0,
          display: "inline-flex",
          flexDirection: "row",
          alignItems: "flex-end",
          justifyContent: "center",
        }}>
        <p className="full" style={{ whiteSpace: "nowrap", flex: "1 1 0%", fontSize: 20, lineHeight: "1.5em", color: "black" }}>
          {/*<b>Curiosity Fuels Wisdom</b>*/}
          {/*<br />*/}
          {/*  Ignition to  the Flame of Learning...*/}
        </p>
        <div style={{ width: 10 }} />
        <p
          className="full"
          style={{
            fontFamily: "'Antonio', sans-serif",
            flex: "1 1 0%",
            fontSize: 36,
            fontWeight: "700",
            lineHeight: "1em",
            textAlign: "center",
            color: "black",
            letterSpacing: 0.5,
            whiteSpace: "nowrap",
          }}>
          MY ED JOURNEY
        </p>
        <div style={{ width: 10 }} />
        <p className="full" style={{ flex: "1 1 0%", fontSize: 12, lineHeight: "1em", textAlign: "right", color: "black" }}></p>
      </div>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden' }}>{pages[page]}</div>

    </div>
  )
}

export function Overlay({page , onNext , onPrev}) {
  return (
      <div style={{ position: 'absolute', bottom: 40, right: 40  }}>

              <p style={{
                  fontSize:22,
              }}>

                  <a href="https://github.com/DeLeNoire">git</a>
                  <button onClick={onPrev} style={{
                      fontSize:"50px",
                      marginRight: "10px",
                  }}>&lt;</button>

                  <button onClick={onNext} style={{
                      fontSize:"50px",
                  }}>&gt;</button>
              </p>


      </div>
  )
}
