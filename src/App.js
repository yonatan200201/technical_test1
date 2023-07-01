import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [penilaian, setPenilaian] = useState({});

  const handlePenilaianChange = (aspek, mahasiswa, nilai) => {
    setPenilaian((prevPenilaian) => ({
      ...prevPenilaian,
      [aspek]: {
        ...prevPenilaian[aspek],
        [mahasiswa]: nilai,
      },
    }));
  };

  const handleSimpanClick = () => {
    const jsonOutput = JSON.stringify(penilaian, null, 2);
    console.log(jsonOutput);
    // Lakukan sesuatu dengan jsonOutput, seperti mengirimkan ke server atau menampilkan di UI
  };

  return (
    <div className='container'>
      <center>
        <h2>Aplikasi Penilaian Mahasiswa</h2>
      </center>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Aspek Penilaian 1</th>
            <th>Aspek Penilaian 2</th>
            <th>Aspek Penilaian 3</th>
            <th>Aspek Penilaian 4</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 10 }, (_, index) => (
            <tr key={`mahasiswa_${index + 1}`}>
              <td><img src='blankprofile.png' className='image'></img> Mahasiswa {index + 1}</td>
              <td>
                <input
                  type="number"
                  min="1"
                  max="10"
                  onChange={(e) =>
                    handlePenilaianChange('aspek_penilaian_1', `mahasiswa_${index + 1}`, Number(e.target.value))
                  }
                />
              </td>
              <td>
                <input
                  type="number"
                  min="1"
                  max="10"
                  onChange={(e) =>
                    handlePenilaianChange('aspek_penilaian_2', `mahasiswa_${index + 1}`, Number(e.target.value))
                  }
                />
              </td>
              <td>
                <input
                  type="number"
                  min="1"
                  max="10"
                  onChange={(e) =>
                    handlePenilaianChange('aspek_penilaian_3', `mahasiswa_${index + 1}`, Number(e.target.value))
                  }
                />
              </td>
              <td>
                <input
                  type="number"
                  min="1"
                  max="10"
                  onChange={(e) =>
                    handlePenilaianChange('aspek_penilaian_4', `mahasiswa_${index + 1}`, Number(e.target.value))
                  }
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleSimpanClick} className="simpan">
        Simpan
      </button>
    </div>
  );
};

export default App;
