import { useState } from "react";
import "./App.css";

function Header() {
  return (
    <div className="container">
      <h1>Data Siswa</h1>
      <p>Card React Sederhana</p>
    </div>
  );
}

function Biodata({ nama, nisn, kelas }) {
  return (
    <div className="card">
      <div className="card-line"></div>

      <h3>{nama}</h3>
      <br />

      <p>
        <strong>NISN:</strong> {nisn}
      </p>
      <p>
        <strong>Kelas:</strong> {kelas}
      </p>

      <div className="card-btn">
        <button className="btn-edit">Edit</button>
        <button className="btn-delete">Hapus</button>
      </div>
    </div>
  );
}

function App() {
  const [showModal, setShowModal] = useState(false);

  const [siswa, setSiswa] = useState([
    { nama: "Ezzar Poseidon", nisn: "1234", kelas: "pplg" },
    { nama: "Ezzar Poseidon", nisn: "1234", kelas: "pplg" },
    
    
  ]);


const [form, setForm] = useState({
  nama:"",
  nisn:"",
  kelas:""

});



  return (
    <>
      <Header />

      <div className="container">
        <button onClick={() => setShowModal(true)}className="btn-add" >
          + Tambah Siswa
        </button>

        <div className="card-wrapper">
          {siswa.map((item, index) => (
            <Biodata
              key={index}
              nama={item.nama}
              nisn={item.nisn}
              kelas={item.kelas}
            />
          ))}
        </div>
      </div>


      {showModal && (
        <div className="modal">
          <h3>Form Tambah</h3>
          <input type="text" name="nama" id="nama"
          placeholder="Nama Murid" onChange={(x)=>setForm({...form, nama: x.target.value})} />
          <input type="text" name="nisn" id="nisn" 
          placeholder="NISN" onChange={(x)=>setForm({...form, nisn: x.target.value})}/>


          <select name="kelas" id="kelas" onChange={(x)=>setForm({...form, kelas: x.target.value})}>
            <option value="X PPLG 1">X PPLG 1</option>
            <option value="X PPLG 1">X PPLG 2</option>
            <option value="X PPLG 1">X PPLG 3</option>
            <option value="X PPLG 1">XI PPLG 1</option>
            <option value="X PPLG 1">XI PPLG 1</option>
            <option value="X PPLG 1">XI PPLG 1</option>
          </select>
          <button>Simpan</button>
          <button onClick={() => setShowModal(false)}>Tutup</button>
        </div>
      )}

      <footer style={{ textAlign: "center", marginTop: "30px" }}>
        © 2026
      </footer>
    </>
  );
}

export default App;
