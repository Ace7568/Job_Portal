import React from "react";
import { Container, Row, Col, Form, Card, Button } from "react-bootstrap";
import JobsStructure from "./JobsStructure";
import { useDispatch, useSelector } from "react-redux";
import { getAllJobs } from "../store/reducers/jobSlice";
import { useEffect } from "react";

const Jobs = () => {

  const jobs = useSelector((state) => state?.jobs?.jobs);

  console.log(jobs);
  const dispatch = useDispatch();
  
  useEffect(()=>{
        dispatch(getAllJobs());
    },[])

  

  return (
    <Container>
      <Row>
        <h1 style={{ fontSize: "3em" }} className="mt-3 ms-5">
          Available Jobs
        </h1>
      </Row>

      <Row className="justify-content-center  mb-5">
        <Col lg="8" sm="8" className="justify-content-center m-4">
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>
        </Col>
      </Row>

      {jobs.map((job)=>{
        return(
          <Row className="justify-content-center m-4">
        <Col lg='9'>
            <JobsStructure post={job.jobField} company={job.companyName} desc={job.discription}/>
        </Col>
      </Row>
        )
      })}
    </Container>
  );
};

export default Jobs;
