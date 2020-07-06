import React, { suspense } from "react";
import ReactDOM from "react-dom";
import { AppProvider } from "../context/app-provider";
import { FormContainer } from "../views/postFeedback";
import { ListContainer } from "#views/viewFeedback";
import { DripSection } from "#views/viewStatistics";
import { NavBar } from "#views/navbar";
import { ImageCard } from "./pizzaSection";
import { AverageRatingContainer } from "./viewStatistics/components/AverageRating";
import "./app.css";

const ProductAndFormWrapper = ({ children }) => {
  return (
    <div className="layout-container yellow-bg">
      <div className="row-container max-width-1000 margin-0-auto">
        {children}
      </div>
    </div>
  );
};

const AverageRatingAndFeedbackWrapper = ({ children }) => {
  return (
    <section
      id="comments"
      tabIndex="0"
      className="list-feedback max-width-1000 margin-0-auto margin-top-300px"
    >
      {children}
    </section>
  );
};

const App = () => {
  return (
    <AppProvider>
      <div>
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
      </div>
    </AppProvider>
  );
};

export default App;

const root = document.getElementById("root");
root ? ReactDOM.render(<App />, root) : false;
