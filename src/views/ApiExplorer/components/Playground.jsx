import React, { useState } from "react"
import axios from "axios"
import ReactJson from "react-json-view"
import { Row, Col, Button } from "antd"

const Playground = ({ type, endpoint, initPayload, initResponse }) => {
  const [payload, setPayload] = useState(initPayload)
  const [respons, setResponse] = useState(initResponse)
  const [isSent, setIsSent] = useState(false)

  const handleEdit = ({ updated_src: updatedPayload }) => {
    setPayload(updatedPayload)
  }

  const handleReset = () => {
    setPayload(initPayload)
    setResponse(initResponse)
  }

  const handleSubmit = () => {
    setIsSent(true)
    // TODO: handle request type
    axios
      .post(endpoint, payload)
      .then(({ data }) => {
        setResponse(data)
        setIsSent(false)
      })
      .catch((err) => {
        if (err?.response?.data) {
          setResponse(err.response)
        } else if (err.request) {
          setResponse(err.request)
        } else {
          setResponse({ error: err.message })
        }
        setIsSent(false)
      })
  }

  return (
    <Row>
      <Col span={24}>
        <Row>
          <Col span={20}>
            <div className="request-url">
              <span className="request-type">{type}</span>
              <span className="request-endpoint">{endpoint}</span>
            </div>
          </Col>
          <Col span={4} className="request-send">
            <Button onClick={handleSubmit} size="large" disabled={isSent}>
              Send
            </Button>
            <Button onClick={handleReset} size="large" disabled={isSent}>
              Reset
            </Button>
          </Col>
        </Row>
        <Row className="playground-json">
          <Col span={12} className="grow-col">
            <h3>Payload</h3>
            <div className="request">
              <ReactJson
                src={payload}
                theme="ocean"
                name={false}
                collapsed={2}
                onEdit={handleEdit}
                onAdd={handleEdit}
                displayDataTypes={false}
                displayObjectSize={false}
              />
            </div>
          </Col>
          <Col span={12} className="grow-col">
            <h3 className="response-label">Response</h3>
            <div className="response">
              <ReactJson
                src={respons}
                theme="ocean"
                name={false}
                collapsed={2}
                displayDataTypes={false}
                displayObjectSize={false}
              />
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default Playground
