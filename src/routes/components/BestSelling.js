import React from 'react'
import './assets/BestSelling.scss'
import 'antd/dist/antd.css';
import { Divider } from 'antd';
import pic2 from './assets/img/hinh2.png'
import pic3 from './assets/img/hinh3.png'
import pic4 from './assets/img/hinh4.png'
import pic5 from './assets/img/hinh5.png'
import pic6 from './assets/img/hinh6.png'
import pic7 from './assets/img/hinh7.png'
import pic8 from './assets/img/hinh8.png'
import pic9 from './assets/img/hinh9.png'
import pic10 from './assets/img/hinh10.png'

export default function BestSelling() {
  return (
    <div className="bestSelling">
      <h2 className="bestSelling__fontSize">Best selling products</h2>
      <div className="bestSelling__format">
        <img className="bestSelling__format-img" src={pic2} />
        <div className="bestSelling__format-text">
          <p><span>$61.9</span></p>
          <p>Aiersi full 21 inch ukulele</p>
          <p>Quantity: <b>1126</b></p>
        </div>
      </div>
      <div className="bestSelling__format">
        <img className="bestSelling__format-img" src={pic3} />
        <div className="bestSelling__format-text">
          <p><span>$61.9</span></p>
          <p>Aiersi full 21 inch ukulele</p>
          <p>Quantity: <b>1126</b></p>
        </div>
      </div>
      <div className="bestSelling__format">
        <img className="bestSelling__format-img" src={pic4} />
        <div className="bestSelling__format-text">
          <p><span>$61.9</span></p>
          <p>Aiersi full 21 inch ukulele</p>
          <p>Quantity: <b>1126</b></p>
        </div>
      </div>
      <div className="bestSelling__format">
        <img className="bestSelling__format-img" src={pic5} />
        <div className="bestSelling__format-text">
          <p><span>$61.9</span></p>
          <p>Aiersi full 21 inch ukulele</p>
          <p>Quantity: <b>1126</b></p>
        </div>
      </div>
      <div className="bestSelling__format">
        <img className="bestSelling__format-img" src={pic6} />
        <div className="bestSelling__format-text">
          <p><span>$61.9</span></p>
          <p>Aiersi full 21 inch ukulele</p>
          <p>Quantity: <b>1126</b></p>
        </div>
      </div>
      <div className="bestSelling__format">
        <img className="bestSelling__format-img" src={pic7} />
        <div className="bestSelling__format-text">
          <p><span>$61.9</span></p>
          <p>Aiersi full 21 inch ukulele</p>
          <p>Quantity: <b>1126</b></p>
        </div>
      </div>
      <div className="bestSelling__format">
        <img className="bestSelling__format-img" src={pic8} />
        <div className="bestSelling__format-text">
          <p><span>$61.9</span></p>
          <p>Aiersi full 21 inch ukulele</p>
          <p>Quantity: <b>1126</b></p>
        </div>
      </div>
      <div className="bestSelling__format">
        <img className="bestSelling__format-img" src={pic9} />
        <div className="bestSelling__format-text">
          <p><span>$61.9</span></p>
          <p>Aiersi full 21 inch ukulele</p>
          <p>Quantity: <b>1126</b></p>
        </div>
      </div>
      <div className="bestSelling__format">
        <img className="bestSelling__format-img" src={pic10} />
        <div className="bestSelling__format-text">
          <p><span>$61.9</span></p>
          <p>Aiersi full 21 inch ukulele</p>
          <p>Quantity: <b>1126</b></p>
        </div>
      </div>
    </div>
  )
}
