import React from 'react';
import Card from 'react-bootstrap/Card';
import {Rating} from 'react-simple-star-rating'
import {Link} from 'react-router-dom';

const TopSellingBikes = () => {

    return (

    <div className='container'>
      <h4 className='mt-3'>Top Selling Bikes</h4>
      <div className='row'>
        <div className='col-md-6 mb-4'>
          <Link to='/bike/Unicorn' style={{ textDecoration: 'none' }}>
            <Card style={{ width: '100%' }}>
              <Card.Img variant="top" src="/asset/images/Bike/honda_unicorn.png" />
              <Card.Body>
                <Card.Title>Honda Unicorn</Card.Title>
                <Card.Text>
                  &#8377;1,05,000 onwards
                  <br />
                  <Rating initialValue={"4.6"} size={20} readonly allowFraction />
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </div>

        <div className='col-md-6 mb-4'>
          <Link to='/bike/Activa 6G' style={{ textDecoration: 'none' }}>
            <Card style={{ width: '100%' }}>
              <Card.Img variant="top" src="/asset/images/Bike/honda_activa_6g.png" />
              <Card.Body>
                <Card.Title>Honda Activa 6G</Card.Title>
                <Card.Text>
                  &#8377;73,900 onwards
                  <br />
                  <Rating initialValue={"4.3"} size={20} readonly allowFraction />
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </div>

        <div className='col-md-6 mb-4'>
          <Link to='/bike/Dominar 400' style={{ textDecoration: 'none' }}>
            <Card style={{ width: '100%' }}>
              <Card.Img variant="top" src="/asset/images/Bike/bajaj_dominar_400.png" />
              <Card.Body>
                <Card.Title>Bajaj Dominar 400</Card.Title>
                <Card.Text>
                  &#8377;2,40,000 onwards
                  <br />
                  <Rating initialValue={"4.8"} size={20} readonly allowFraction />
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </div>

        <div className='col-md-6 mb-4'>
          <Link to='/bike/Apache RTR 310' style={{ textDecoration: 'none' }}>
            <Card style={{ width: '100%' }}>
              <Card.Img variant="top" src="/asset/images/Bike/tvs_apache_rtr_310.png" />
              <Card.Body>
                <Card.Title>TVS Apache RTR 310</Card.Title>
                <Card.Text>
                  &#8377;3,10,000 onwards
                  <br />
                  <Rating initialValue={"4"} size={20} readonly allowFraction />
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </div>

        <div className='col-md-6 mb-4'>
          <Link to='/bike/Duke 390' style={{ textDecoration: 'none' }}>
            <Card style={{ width: '100%' }}>
              <Card.Img variant="top" src="/asset/images/Bike/ktm_duke_390.png" />
              <Card.Body>
                <Card.Title>KTM Duke 390</Card.Title>
                <Card.Text>
                  &#8377;2,70,000 onwards
                  <br />
                  <Rating initialValue={"3.5"} size={20} readonly allowFraction />
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </div>

        <div className='col-md-6 mb-4'>
          <Link to='/bike/S1 X' style={{ textDecoration: 'none' }}>
            <Card style={{ width: '100%' }}>
              <Card.Img variant="top" src="/asset/images/bikes/S1_Pro_X.webp" />
              <Card.Body>
                <Card.Title>Ola S1 X</Card.Title>
                <Card.Text>
                  &#8377;1,10,000 onwards
                  <br />
                  <Rating initialValue={"4.2"} size={20} readonly allowFraction />
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </div>

        <div className='col-md-6 mb-4'>
          <Link to='/bike/Hunter 350' style={{ textDecoration: 'none' }}>
            <Card style={{ width: '100%' }}>
              <Card.Img variant="top" src="/asset/images/Bike/royal_enfield_hunter_350.png" />
              <Card.Body>
                <Card.Title>Royal Enfield Hunter 350</Card.Title>
                <Card.Text>
                  &#8377;1,49,900 onwards
                  <br />
                  <Rating initialValue={"4.3"} size={20} readonly allowFraction />
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </div>

        <div className='col-md-6 mb-4'>
          <Link to='/bike/Jupiter' style={{ textDecoration: 'none' }}>
            <Card style={{ width: '100%' }}>
              <Card.Img variant="top" src="/asset/images/Bike/tvs_jupiter.png" />
              <Card.Body>
                <Card.Title>TVS Jupiter</Card.Title>
                <Card.Text>
                  &#8377;73,700 onwards
                  <br />
                  <Rating initialValue={"5"} size={20} readonly allowFraction />
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </div>

      </div>
    </div>
    );
}

export default TopSellingBikes;
