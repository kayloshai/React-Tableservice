import React from "react";
import Toast from "react-bootstrap/Toast";
import Stack from "react-bootstrap/Stack";
import { Row, Col } from "react-bootstrap";
import "./item.scss";
export default function Item(props, { orderPaid }) {
  return (
    <>
      <Toast>
        <Toast.Header closeButton={false}>
          <strong className="me-auto">{props.record.Item}</strong>
          <Row>
            {!orderPaid ? (
              <Col>Quantity: {props.record.Quantity}</Col>
            ) : (
              <Col>Quantity: 0</Col>
            )}
          </Row>
          <Row>
            <Col></Col>
            {!orderPaid ? (
              <Col>(£{props.record.Quantity * props.record.Price})</Col>
            ) : (
              <Col>(£0)</Col>
            )}
          </Row>
        </Toast.Header>
        <Toast.Body>
          <Row>
            <Col>
              <Stack gap={3}>
                <img
                  src={props.img}
                  className="rounded me-2 resize-thumbnail"
                  alt={props.record.Item}
                />
              </Stack>
            </Col>
            <Col>
              <Stack gap={3}>
                <>{props.incrementItem}</>
                <>{props.decrementItem}</>
              </Stack>
            </Col>
          </Row>
        </Toast.Body>
      </Toast>
    </>
  );
}
