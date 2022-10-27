import React from 'react'
import { useState } from "react";
import styled from 'styled-components'
import Link from "next/link";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import distance from "euclidean-distance";



export async function getStaticProps() {
    const res = await
    fetch("https://jyuz1t0v.directus.app/items/ctdelay2")
    const allPostsData = await res.json();

    var data = allPostsData.data;
    return {
        props: {
            data,
        },
    };
}

export function refresh(event, age, injection_rate, data) {
    console.log(age)
    console.log(injection_rate)
    //console.log(Object.keys(data).length);
    var newTop10 = getTop10(data, age, injection_rate);

    return newTop10;

}

export function getTop10(data, age, injection_rate) {
        var top10 = data.sort(function(a, b) { return distance([age, injection_rate], [a.age, a.injection_rate]) > distance([age, injection_rate], [b.age, b.injection_rate]) ? 1 : -1; })
                    .slice(0, 10);
        console.log('getTop10:'+Object.keys(top10).length);
        return top10;
}

function App({data}) {
    const [age, setAge] = useState('');
    const [injection_rate, setInjectionRate] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    const [top10, setTop10] = useState(getTop10(data, 0, 0));

    console.log('top10:'+top10);
    return (
        <>
          Age
          <input type="text" id="age"
              value={age}
              onChange={e => { setAge(e.currentTarget.value); }}
              onKeyUp={(event) => {setTop10(refresh(event, age, injection_rate, data))}}>
          </input>
          Contrast Volume
          <input type="text" id="injection_rate"
              value={injection_rate}
              onChange={e => { setInjectionRate(e.currentTarget.value); }}
              onKeyUp={(event) => {setTop10(refresh(event, age, injection_rate, data))}}>
          </input>
          <Button
            color="primary"
            type="button"
            onClick={() => setModalOpen(!modalOpen)}
          >
              Top 10 Similar Cases
            </Button>
            <Modal toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen}>
              <div className=" modal-header">
                <h5 className=" modal-title" id="exampleModalLabel">
                  Top 10 similar cases
                </h5>
                <button
                  aria-label="Close"
                  className=" close"
                  type="button"
                  onClick={() => setModalOpen(!modalOpen)}
                >
                  <span aria-hidden={true}>×</span>
                </button>
              </div>
              <ModalBody>
                   <div id="content">
                   <table>
                   <tr>
                       <th>Age</th>
                       <th>Contrast Volume</th>
                       <th>Injection Rate</th>
                       <th>Triggered Time</th>
                   </tr>
                     {top10.map(({age, contrast_vol, injection_rate, triggered_time})=>(
                     <tr>
                       <td>{age}</td>
                       <td>{contrast_vol}</td>
                       <td>{injection_rate}</td>
                       <td>{triggered_time}</td>
                       </tr>
                     ))}
                   </table>
                   </div>
              </ModalBody>
              <ModalFooter>
                <Button
                  color="secondary"
                  type="button"
                  onClick={() => setModalOpen(!modalOpen)}
                >
                  Close
                </Button>
              </ModalFooter>
            </Modal>
        </>
    )
}

export default App
