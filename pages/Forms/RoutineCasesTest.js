import React from 'react'
import { useState } from "react";
import styled from 'styled-components'
import Link from "next/link";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import distance from "euclidean-distance";



export async function getStaticProps() {
    const res = await
    fetch("https://jyuz1t0v.directus.app/items/ctdelay")
    const allPostsData = await res.json();

    var data = allPostsData.data;
    return {
        props: {
            data,
        },
    };
}

export function refresh(event, age, contrast_vol, data) {
    console.log(age)
    console.log(contrast_vol)
    //console.log(Object.keys(data).length);
    var newTop10 = getTop10(data, age, contrast_vol);

    return newTop10;

}

export function getTop10(data, age, contrast_vol) {
        var top10 = data.sort(function(a, b) { return distance([age, contrast_vol], [a.age, a.contrast_vol]) > distance([age, contrast_vol], [b.age, b.contrast_vol]) ? 1 : -1; })
                    .slice(0, 10);
        console.log('getTop10:'+Object.keys(top10).length);
        return top10;
}

function App({data}) {
    const [age, setAge] = useState('');
    const [contrast_vol, setContrastVol] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    const [top10, setTop10] = useState(getTop10(data, 0, 0));

    console.log('top10:'+top10);
    return (
        <>
          Age
          <input type="text" id="age"
              value={age}
              onChange={e => { setAge(e.currentTarget.value); }}
              onKeyUp={(event) => {setTop10(refresh(event, age, contrast_vol, data))}}>
          </input>
          Contrast Volume
          <input type="text" id="contrast_vol"
              value={contrast_vol}
              onChange={e => { setContrastVol(e.currentTarget.value); }}
              onKeyUp={(event) => {setTop10(refresh(event, age, contrast_vol, data))}}>
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
                       <th>Weight</th>
                       <th>Contrast Volume</th>
                       <th>Triggered Time</th>
                   </tr>
                     {top10.map(({age, weight, contrast_vol, triggered_time})=>(
                     <tr>
                       <td>{age}</td>
                       <td>{weight}</td>
                       <td>{contrast_vol}</td>
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
