import React from 'react'
import './Page-2.css'
import { useState , useEffect} from "react";
import {useNavigate} from 'react-router-dom'


function Taabel() {


  
    const [nama, settittle] = useState("");
    const [jeniskamar, setprice] = useState("");
    const [tanggal, settanggal] = useState(new Date());
    const [listkamar, setlistkamar] = useState([])
    
    
    const navigate = useNavigate();

    useEffect(() => {
      fetchdata();
    }, []);




    const fetchdata = async () => {
      const response = await fetch("http://localhost:3000/kamar");
      const data = await response.json();
      setlistkamar(data);
    };


    function addOneYear(date) {
      
      const dateCopy = new Date(date);
    
      dateCopy.setFullYear(dateCopy.getFullYear() + 1);
    
      return dateCopy;
    }
    
    const saveproduct = async (e) => {
      e.preventDefault();
      const tanggalSelesai = addOneYear(tanggal);
      const product = { nama,jeniskamar,tanggal,tanggalSelesai};
      await fetch("http://localhost:8080/kamar", {
        method: "POST",
        body: JSON.stringify(product),
        headers: {
          "Content-type": "application/json",
        },
      });
      navigate('/umar')
    };








  return (
    <div>


    
    
    
    
<section class="second u-align-center second u-clearfix second u-section-1" id="sec-f04a">
      <div class="second u-clearfix second u-sheet second u-sheet-1">
        <div class="second u-expanded-width second u-table second u-table-responsive second u-table-1">
          <table class="second u-table-entity second u-table-entity-1">
            <colgroup>
              <col width="25%"/>
              <col width="25%"/>
              <col width="25%"/>
              <col width="25%"/>
            </colgroup>
            <thead class="second u-black second u-table-header second u-table-header-1">
              <tr >
                <th class="second u-border-1 second u-border-black second u-table-cell">Nama</th>
                <th class="second u-border-1 second u-border-black second u-table-cell">Jenis Kamar</th>
                <th class="second u-border-1 second u-border-black second u-table-cell">Tanggal Masuk</th>
                <th class="second u-border-1 second u-border-black second u-table-cell">Tanggal Keluar</th>
              </tr>
            </thead>
            <tbody class="second u-table-alt-grey-5 second u-table-body" > {listkamar.map((listk,index) =>    (     
              <tr key={listk.id}>
                <td class="second u-border-1 second u-border-grey-30 second u-first-column second u-grey-50 second u-table-cell second u-table-cell-5">{listk.nama}</td>
                <td class="second u-border-1 second u-border-grey-30 second u-table-cell">{listk.jeniskamar}</td>
                <td class="second u-border-1 second u-border-grey-30 second u-table-cell">{listk.tanggal}</td>
                <td class="second u-border-1 second u-border-grey-30 second u-table-cell">{listk.tanggalSelesai}</td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>


    <section class="second u-align-center second u-clearfix second u-section-2" id="sec-1889">
      <div class="second u-clearfix second u-sheet second u-sheet-1">
        <h2 class="second u-text second u-text-default second u-text-1">INPUT</h2>
        <div class="second u-form second u-form-1">
          <form action="#" class="second u-clearfix second u-form-spacing-15 second u-form-vertical second u-inner-form"  source="custom" onSubmit={saveproduct}>
            <div class="second u-form-group second u-form-name second u-label-top">
              <label for="name-ef64" class="second u-label second u-label-1">Nama</label>
              <input type="text" id="name-ef64" name="name"  class="second u-border-1 second u-border-grey-30 second u-input second u-input-rectangle"  
              required=""  onChange={(e) => settittle(e.target.value)}/>
            </div>
            <div class="second u-form-group second u-form-radiobutton second u-label-top second u-form-group-2">
              <div class="second u-form-radio-button-wrapper">
                <div class="second u-input-row">
                  <input type="radio" name="radiobutton" value="Kamar Non-Ac" required="required"  onChange={(e) => setprice(e.target.value)} />
                  <label class="second u-label second u-label-2" for="radiobutton">Kamar Non-Ac</label>
                </div>
                <div class="second u-input-row">
                  <input type="radio" name="radiobutton" value="Kamar Ac" required="required" onChange={(e) => setprice(e.target.value)}/>
                  <label class="second u-label second u-label-3" for="radiobutton">Kamar Ac</label>
                </div>
                <div class="second u-input-row">
                  <input type="radio" name="radiobutton" value="Kamar Extra Large" required="required" onChange={(e) => setprice(e.target.value)}/>
                  <label class="second u-label second u-label-4" for="radiobutton">Kamar Extra Large</label>
                </div>
              </div>
            </div>
            <div class="second u-form-date second u-form-group second u-label-top second u-form-group-3">
              <label for="date-102d" class="second u-label second u-label-5">Tanggal Masuk</label>
              <input type="date" placeholder="MM/DD/YYYY" id="date-102d" name="date"    class="second u-border-1 second u-border-grey-30 second u-input second u-input-rectangle" required="" onChange={(e) => settanggal(e.target.value)}/>
            </div>
            <div class="second u-form-group second u-form-submit second u-label-top">
              <button type='submit'>submit</button>
              
            </div>
            
            
          </form>
        </div>
      </div>
    </section>



        
    </div>
  )
}

export default Taabel