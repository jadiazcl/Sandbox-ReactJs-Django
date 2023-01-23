import React from "react";
import imageMain from "media/image-main.png";
import logo from "media/logo.svg";
import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";
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
    <>
      <Container>
        <div class="px-4 py-1 my-3">
          <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div class="col-10 col-sm-8 col-lg-6">
              <img
                src={imageMain}
                class="d-block mx-lg-auto img-fluid"
                alt="Bootstrap Themes"
                width="700"
                height="500"
                loading="lazy"
              />
            </div>
            <div class="col-lg-6">
              <h1 class="display-5 fw-bold lh-1 mb-3">Forum Project</h1>
              <p class="lead">
                👨🏽‍💻 This is an example of a forum software, using ReactJs like
                frontend and Django (Rest-framework) for backend.
              </p>
              <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                <button
                  type="button"
                  class="btn btn-primary btn-lg px-4 me-md-2"
                >
                  Sing Up
                </button>
                <button
                  type="button"
                  class="btn btn-outline-secondary btn-lg px-4"
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="row mb-2">
          <h3 class="pb-4 mb-4 fst-italic border-bottom">Most Popular Posts</h3>
          {ArrayPosts.map((post) => {
            return (
              <div class="col-md-6">
                <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                  <div class="col p-4 d-flex flex-column position-static">
                    <strong class="d-inline-block mb-2 text-primary">
                      World
                    </strong>
                    <h3 class="mb-0">{post.name_post}</h3>
                    <div class="mb-1 text-muted">
                      {formatDate(post.create_time)}
                    </div>
                    <p class="card-text mb-auto">{post.text_post}</p>
                    <a href="#" class="stretched-link">
                      Continue reading
                    </a>
                  </div>
                  <div class="col-auto d-none d-lg-block">
                    <img
                      src={logo}
                      class="bd-placeholder-img"
                      width="200"
                      height="250"
                      aria-label="Placeholder: Thumbnail"
                      preserveAspectRatio="xMidYMid slice"
                      focusable="false"
                    />
                  </div>
                </div>
              </div>
            );
          })}
          <div class="col-md-6">
            <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div class="col p-4 d-flex flex-column position-static">
                <strong class="d-inline-block mb-2 text-success">Design</strong>
                <h3 class="mb-0">Post title</h3>
                <div class="mb-1 text-muted">Nov 11</div>
                <p class="mb-auto">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </p>
                <a href="#" class="stretched-link">
                  Continue reading
                </a>
              </div>
              <div class="col-auto d-none d-lg-block">
                <svg
                  class="bd-placeholder-img"
                  width="200"
                  height="250"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: Thumbnail"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595c"></rect>
                  <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                    Thumbnail
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
