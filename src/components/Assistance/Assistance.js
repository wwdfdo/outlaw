import React from "react";
import { useState, useEffect } from "react";
import AssistanceQuestions from "./AssistanceQuestions";
import AssistanceSearchBar from "./AssistanceSearchBar";
import "./Assistance.css";

const Assistance = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const results = props.data.filter((item) =>
      item.question.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <div className="container">
      <h2 className="heading">How can we help you?</h2>
      <AssistanceSearchBar onSearchChange={handleSearchChange} />
      <section className="faq">
        {searchResults.map((item) => (
          <AssistanceQuestions question={item.question} answer={item.answer} />
        ))}
      </section>
    </div>
  );
};

export default Assistance;
