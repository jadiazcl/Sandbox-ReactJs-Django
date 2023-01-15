import React from "react";
import logo from "../logo.svg";
import { useState, useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Container } from "react-bootstrap";
export default function Content() {
  const formatDate = (current_datetime) => {
    let date_input = new Date(current_datetime);
    let formatted_date =
      date_input.getFullYear() +
      "-" +
      (date_input.getMonth() + 1) +
      "-" +
      date_input.getDate();
    /*" " +
      current_datetime.getHours() +
      ":" +
      current_datetime.getMinutes() +
      ":" +
      current_datetime.getSeconds();
      */
    return formatted_date;
  };
  const [ArrayPosts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/post/")
      .then((response) => {
        return response.json();
      })
      .then((ArrayPosts) => {
        setPosts(ArrayPosts);
      });
  }, []);

  return (
    <Container>
      <div class="px-4 py-5 my-5 text-center">
        <img
          class="d-block mx-auto mb-4"
          src={logo}
          alt=""
          width="72"
          height="57"
        />
        <h1 class="display-5 fw-bold">Forum Project</h1>
        <div class="col-lg-6 mx-auto">
          <p class="lead mb-4">
            👨🏽‍💻 This is an example of a forum software, using ReactJs like
            frontend and Django (Rest-framework) for backend.
          </p>
          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" class="btn btn-primary btn-lg px-4 gap-3">
              Sign Up
            </button>
            <button type="button" class="btn btn-outline-secondary btn-lg px-4">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
}
