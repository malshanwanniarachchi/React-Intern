import React from 'react';
import './home.css'; // Import the CSS file

export default function Home() {
  return (
    <div id="card">
      <div>
      <div className='row'>
        <h2 id="title">Our Exclusive Courses</h2>
      </div>
      </div>
      <div className='row'>
        <div className='col'>
          <div className="card" style={{ width: '18rem' }}>
            <img src="https://cdn.pixabay.com/photo/2022/11/18/08/02/spider-web-7599664_1280.jpg" className="card-img-top" alt="Placeholder image" />
            <div className="card-body">
              <h6 className="card-title"><b>Comprehensive Curriculum</b></h6>
              <p className="card-text">Our course covers everything from the fundamentals of currency markets to advanced trading strategies, ensuring you have the knowledge and skills to excel.</p>
              <a href="#" className="btn">Get it Now</a>
            </div>
          </div>
        </div>
        <div className='col'>
          <div className="card" style={{ width: '18rem' }}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM45-etIK4hECn1UCGegvNozks265cldV0YEYzPwXFGQqvl9VmQTkAfPcrzWy0T3IQ0xo&usqp=CAU" className="card-img-top" alt="Placeholder image" />
            <div className="card-body">
              <h6 className="card-title"><b>Practical Learning</b></h6>
              <p className="card-text">We believe in hands-on experience. Our curriculum includes real-world case studies, simulations, and practical exercises to reinforce learning and build confidence.</p>
              <a href="#" className="btn">Get it Now</a>
            </div>
          </div>
        </div>
        <div className='col'>
          <div className="card" style={{ width: '18rem' }}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsQ6J89H_JYAN83ChvLS_qmA6DXdtmYosRwCk7rRrqVwc7g1i41sYsRXcnHycNYt8DcsM&usqp=CAU" className="card-img-top" alt="Placeholder image" />
            <div className="card-body">
              <h6 className="card-title"><b>Track Records</b></h6>
              <p className="card-text">Our track record speaks for itself. Many of our past students have gone on to become successful traders, and we're committed to helping you achieve the same level of success.</p>
              <a href="#" className="btn">Get it Now</a>
            </div>
          </div>
        </div>
      </div>

      <div className='row'>
        <div className='col'>
          <div className="card" style={{ width: '18rem' }}>
            <img src="https://cdn.pixabay.com/photo/2022/11/18/08/02/spider-web-7599664_1280.jpg" className="card-img-top" alt="Placeholder image" />
            <div className="card-body">
              <h6 className="card-title"><b>Comprehensive Curriculum</b></h6>
              <p className="card-text">Our course covers everything from the fundamentals of currency markets to advanced trading strategies, ensuring you have the knowledge and skills to excel.</p>
              <a href="#" className="btn">Get it Now</a>
            </div>
          </div>
        </div>
        <div className='col'>
          <div className="card" style={{ width: '18rem' }}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM45-etIK4hECn1UCGegvNozks265cldV0YEYzPwXFGQqvl9VmQTkAfPcrzWy0T3IQ0xo&usqp=CAU" className="card-img-top" alt="Placeholder image" />
            <div className="card-body">
              <h6 className="card-title"><b>Practical Learning</b></h6>
              <p className="card-text">We believe in hands-on experience. Our curriculum includes real-world case studies, simulations, and practical exercises to reinforce learning and build confidence.</p>
              <a href="#" className="btn">Get it Now</a>
            </div>
          </div>
        </div>
        <div className='col'>
          <div className="card" style={{ width: '18rem' }}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsQ6J89H_JYAN83ChvLS_qmA6DXdtmYosRwCk7rRrqVwc7g1i41sYsRXcnHycNYt8DcsM&usqp=CAU" className="card-img-top" alt="Placeholder image" />
            <div className="card-body">
              <h6 className="card-title"><b>Track Records</b></h6>
              <p className="card-text">Our track record speaks for itself. Many of our past students have gone on to become successful traders, and we're committed to helping you achieve the same level of success.</p>
              <a href="#" className="btn">Get it Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
