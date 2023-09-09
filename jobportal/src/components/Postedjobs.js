import React, { useEffect } from "react";
import { Row, Col, Card } from "react-bootstrap";
import PostedJobStructure from "./PostedJobStructure";
import { useDispatch } from "react-redux";
import { getAllJobs } from "../store/reducers/jobSlice";

const Postedjobs = () => {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getAllJobs);
    console.log("dispached");
  })
  return (
    <>
      <Row>
        <Col lg="1"></Col>
        <Col>
          <h1 className="fs-1 fw-bold m-3">Posted Job</h1>
        </Col>
      </Row>
      <Row className="justify-content-around mx-5 p-5">
        <Col lg="4" className="mb-4">
          <PostedJobStructure post="senior developer" />
        </Col>
        <Col lg="4" className="mb-4">
          <PostedJobStructure post="senior developer" />
        </Col>
        <Col lg="4" className="mb-4">
          <PostedJobStructure post="senior developer" />
        </Col>
        <Col lg="4" className="mb-4">
          <PostedJobStructure post="senior developer" />
        </Col>
        <Col lg="4" className="mb-4">
          <PostedJobStructure post="senior developer" />
        </Col>
        <Col lg="4" className="mb-4">
          <PostedJobStructure post="senior developer" />
        </Col>
      </Row>
    </>
  );
};

export default Postedjobs;
