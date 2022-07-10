import React, { Component, } from 'react'
import { Button } from "react-bootstrap";

import "./credit.style.css";

class Doverenost extends Component {
  constructor(props) {
    super(props)
    this.state = {
      arr: [
        {
          id: 1,
          date: '16.05.2019',
          srok: '22.07.2022',
          To: 'Sagandykov Salauat',
          Post: 'TOO Artse',
          Rost: '',
          NumDate: ''
        },
        {
          id: 2,
          date: '16.05.2019',
          srok: '22.07.2022',
          To: 'Sagandykov Salauat',
          Post: 'TOO Artse',
          Rost: '',
          NumDate: ''
        },
        {
          id: 3,
          date: '16.05.2019',
          srok: '22.07.2022',
          To: 'Sagandykov Salauat',
          Post: 'TOO Artse',
          Rost: '',
          NumDate: ''
        },
        {
          id: 4,
          date: '16.05.2019',
          srok: '22.07.2022',
          To: 'Sagandykov Salauat',
          Post: 'TOO Artse',
          Rost: '',
          NumDate: ''
        },
        {
          id: 5,
          date: '16.05.2019',
          srok: '22.07.2022',
          To: 'Sagandykov Salauat',
          Post: 'TOO Artse',
          Rost: '',
          NumDate: ''
        },
        {
          id: 6,
          date: '16.05.2019',
          srok: '22.07.2022',
          To: 'Sagandykov Salauat',
          Post: 'TOO Artse',
          Rost: '',
          NumDate: ''
        },
      ]
    }
  }

  renderTableData() {
    return this.state.arr.map((arr, index) => {
      const { id, date, srok, To, Post, Rost, NumDate } = arr //destructuring
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{date}</td>
          <td>{srok}</td>
          <td>{To}</td>
          <td>{Post}</td>
          <td>{Rost}</td>
          <td>{NumDate}</td>
        </tr>
      )
    })
  }

  render() {
    return (
      <div>
        <h1 id='title'>Доверенность</h1>
        <Button variant="dark" href="/proxy" >Создать</Button>
        <table id='students'>
          <thead>
            <tr>
              <th scope="col">Номер доверенности</th>
              <th scope="col">Дата выдачи</th>
              <th scope="col">Срок действия</th>
              <th scope="col">Kому выдана доверенность</th>
              <th scope="col">Поставщик</th>
              <th scope="col">Роспись лица, получившего доверенность</th>
              <th scope="col">Номер, дата документа, подтверждающего выполнение поручения</th>
            </tr>
          </thead>
          <tbody>
            {this.renderTableData()}
          </tbody>
        </table>
      </div>
    )
  }
}


export default Doverenost;