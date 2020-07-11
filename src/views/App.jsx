import React from "react";
import ReactDOM from "react-dom";
import { AppProvider } from "../context/app-provider";
import { FormContainer } from "../views/postFeedback";
import { ListContainer } from "#views/viewFeedback";
import { DripSection } from "#views/viewStatistics";
import { NavBar } from "#views/navbar";
import { ImageCard } from "./pizzaSection";
import { AverageRatingContainer } from "./viewStatistics/components/AverageRating";
import {
  ProductAndFormWrapper,
  AverageRatingAndFeedbackWrapper,
} from "./wrappers";

import "./app.css";

const App = () => {
  return (
    <AppProvider>
      <NavBar />
      <ProductAndFormWrapper>
        <ImageCard />
        <FormContainer />
      </ProductAndFormWrapper>
      <DripSection />
      <AverageRatingAndFeedbackWrapper>
        <AverageRatingContainer />
        <ListContainer />
      </AverageRatingAndFeedbackWrapper>
    </AppProvider>
  );
};

export default App;

const root = document.getElementById("root");
root ? ReactDOM.render(<App />, root) : false;
