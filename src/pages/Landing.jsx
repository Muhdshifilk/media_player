import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

function Landing() {
  return (
    <>
      <div className="container-fluid mb-5">
        <Row className="align-items-center" style={{ height: "83vh" }}>
          <Col className="p-5" sm={12} md={6}>
            <h2>
              <i
                className="fa-solid fa-circle-play fa-beat bg-danger"
                style={{color:"gold",border:'solid 2px green',borderRadius:'180%'}}
              ></i>
              {""}
              Media Player 2024
            </h2>
            <p style={{ textAlign: "justify" }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
              quaerat voluptatibus quasi, consequatur, facilis, et ea adipisci
              aspernatur in fuga beatae impedit. Earum, a? Neque esse quasi amet
              autem non!
            </p>
            <div>
              <Link to={"/home"} className="btn btn-outline-success w-100 ">
                <b>Let's Go</b>
              </Link>
            </div>
          </Col>
          <Col className="py-4" sm={12} md={6}>
            <img
              className="container-fluid"
              src="https://media.licdn.com/dms/image/C4E12AQH7pchLmQdE4w/article-cover_image-shrink_720_1280/0/1600264966750?e=2147483647&v=beta&t=yLEqZCtjqb6CeC9Kt28Uf1166mWx6XYlrowaEb9DfTU"
              alt=""
            />
          </Col>
        </Row>
      </div>
      <div className="container-fluid mt-5">
        <h3 className="my-3 text-center">FEATURES</h3>
        <div className="p-4 d-flex justify-content-around">

          <Card style={{ width: "18rem" }}>
            <Card.Img className="h-50" variant="top" src="https://qph.cf2.quoracdn.net/main-qimg-e1e33b75c6622f230c61b0393e3fad7c" />
            <Card.Body>
              <Card.Title>Upload Youtube videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Img className="h-50" variant="top" src="https://media.sproutsocial.com/uploads/2021/12/Best-Types-of-Organic-Content-anim-2.gif" />
            <Card.Body>
              <Card.Title>Add Categories</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Img className="h-50"  variant="top" src="https://cdn.dribbble.com/users/2395254/screenshots/4954611/youtube-mobile.gif" />
            <Card.Body>
              <Card.Title>Watch history</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          
        </div>
      </div>

      <div className="p-5">
        <Row>
          <Col sm={12} md={7}>
            <h4>Simple And Faster</h4>
            <p style={{ textAlign: "justify" }}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Laudantium consequatur molestias aliquam necessitatibus labore
              minus? Ad, consequuntur rem. Eligendi placeat suscipit fugiat
              porro veniam ipsa sequi molestias cum cumque quidem!
            </p>
          </Col>
          <Col sm={12} md={5}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/SqcY0GlETPk?si=l2NaRmutc3iOLmfN"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Landing;
