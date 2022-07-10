import React, { Component, } from 'react'
import { Dropdown} from "react-bootstrap";

import "./credit.style.css";

class Credit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arr: [
                { id: 1, name: 'TOO Artse', bin: 10203, date: '16.05.2019', idNum: 301, doc: 'doc' },
                { id: 1, name: 'TOO Artse', bin: 10203, date: '16.05.2019', idNum: 301, doc: 'doc' },
                { id: 1, name: 'TOO Artse', bin: 10203, date: '16.05.2019', idNum: 301, doc: 'doc' },
                { id: 1, name: 'TOO Artse', bin: 10203, date: '16.05.2019', idNum: 301, doc: 'doc' },
                { id: 1, name: 'TOO Artse', bin: 10203, date: '16.05.2019', idNum: 301, doc: 'doc' },
                { id: 1, name: 'TOO Artse', bin: 10203, date: '16.05.2019', idNum: 301, doc: 'doc' }

            ]
        }
    }

    renderTableData() {
        return this.state.arr.map((arr, index) => {
            const { id, name, bin, date, idNum, doc } = arr //destructuring
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{bin}</td>
                    <td>{date}</td>
                    <td>{idNum}</td>
                    <td>{doc}</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div>
                <h1 id='title'>Счет на оплату</h1>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Button
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="/invoice">Создать</Dropdown.Item>
                        <Dropdown.Item href="#">Изменить</Dropdown.Item>
                        <Dropdown.Item href="#">Удалить</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <table id='students'>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Наименование</th>
                            <th scope="col">БИН</th>
                            <th scope="col">Дата</th>
                            <th scope="col">Уникальный номер</th>
                            <th scope="col">Документ</th>
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


export default Credit