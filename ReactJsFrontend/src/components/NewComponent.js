import React from "react";
import { useState, useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { BrowserRouter as Router, Link } from "react-router-dom";

export default function NewComponent() {
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
    <div>
      <h1>List Posts!</h1>
      <Table striped bordered responsive="md" hover variant="dark">
        <thead>
          <tr>
            <th>Id</th>
            <th>Text</th>
            <th>Date</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {ArrayPosts.map((art) => {
            return (
              <tr key={art.id_post}>
                <td>{art.id_post}</td>
                <td>{art.text_post}</td>
                <td>{formatDate(art.create_time)}</td>
                <td>
                  <Router>
                    <Link to={`search/${art.id_post}`}>
                      <Button variant="outline-primary">View</Button>
                    </Link>
                  </Router>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
