import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Ardent Collaboration</h1>
      <p>4/69A, Manik Bandyopadhyay Sarani, Near Pushpa Apartments, Regent Park, Kolkata, West Bengal 700040</p><hr/>
      <div className='info-left'>
        <p><b>Name == </b>Swapnadeep Pal</p>
        <p><b>Father's Name == </b>Subir Kumar Pal</p>
        <p><b>Roll No == </b>380117011053</p>
        <p><b>Registration No == </b>171230110107</p>
        <p><b>College Name == </b>JIS College of Engineering</p>
      </div>
      <div className='info-right'>
        <img src='student-logo.jpg' alt='Student_Logo'></img>
      </div>
      <div className='database'>
        <table>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Full Marks</th>
              <th>Obtained Marks</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mathematices</td>
              <td>90 + 10</td>
              <td>88 + 10</td>
              <td>98</td>
            </tr>
            <tr>
              <td>Physical Science</td>
              <td>90 + 10</td>
              <td>85 + 10</td>
              <td>95</td>
            </tr>
            <tr>
              <td>Life Science</td>
              <td>90 + 10</td>
              <td>80 + 10</td>
              <td>90</td>
            </tr>
            <tr>
              <td>History</td>
              <td>90 + 10</td>
              <td>70 + 10</td>
              <td>80</td>
            </tr>
            <tr>
              <td>Geography</td>
              <td>90 + 10</td>
              <td>67 + 10</td>
              <td>77</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>Grand Total</td>
              <td>450 + 50</td>
              <td>390 + 50</td>
              <td>440</td>
            </tr>
            <tr>
              <td>Percentage</td>
              <td></td>
              <td></td>
              <td className='percentage'>88%</td>
            </tr>
            <tr>
              <td>Division</td>
              <td></td>
              <td></td>
              <td className='division'>A+ ( Excellent )</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

export default App;
