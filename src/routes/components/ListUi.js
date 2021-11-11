import React from 'react'
import './assets/ListUi.scss';
import 'antd/dist/antd.css';
import {
  ShoppingCartOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons';

export default function ListUi() {
  return (
    <div className="listUi">
      <h2 className="list__fontSize">Report overview</h2>
      <div className="listUi__total">
        <div className="listUi__total-flex">
          <div>
            <span className="listUi__total-icon"><ShoppingCartOutlined /></span>
            <span className="listUi__total-text">Total order</span>
            <span><ExclamationCircleOutlined /></span>
          </div>
          <span>1</span>
        </div>
        <div className="listUi__total-flex">
          <div>
            <span className="listUi__total-icon"><ShoppingCartOutlined /></span>
            <span className="listUi__total-text">Total product</span>
            <span><ExclamationCircleOutlined /></span>
          </div>
          <span>44</span>
        </div>
        <div className="listUi__total-flex">
          <div>
            <span className="listUi__total-icon"><ShoppingCartOutlined /></span>
            <span className="listUi__total-text">Revenue</span>
            <span><ExclamationCircleOutlined /></span>
          </div>
          <span>0</span>
        </div>
        <div className="listUi__total-flex">
          <div>
            <span className="listUi__total-icon"><ShoppingCartOutlined /></span>
            <span className="listUi__total-text">Profit</span>
            <span><ExclamationCircleOutlined /></span>
          </div>
          <span>0</span>
        </div>
      </div>
    </div>
  )
}
