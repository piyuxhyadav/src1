import React, { Component } from "react";
import * as Survey from "survey-core";
import * as SurveyReact from "survey-react-ui";
import "survey-core/defaultV2.css";


Survey.StylesManager.applyTheme("defaultV2");


class SurveyComponent extends Component {
    constructor() {
        super();
        
        

        const json = {
  "elements": [
    {
      "type": "matrix",
      "name": "Quality",
      "title": "Please indicate if you agree or disagree with the following statements",
      "columns": [
        {
          "value": 1,
          "text": "Strongly Disagree"
        },
        {
          "value": 2,
          "text": "Disagree"
        },
        {
          "value": 3,
          "text": "Neutral"
        },
        {
          "value": 4,
          "text": "Agree"
        },
        {
          "value": 5,
          "text": "Strongly Agree"
        }
      ],
      "rows": [
        {
          "value": "affordable",
          "text": "Product is affordable"
        },
        {
          "value": "does what it claims",
          "text": "Product does what it claims"
        },
        {
          "value": "better then others",
          "text": "Product is better than other products on the market"
        },
        {
          "value": "easy to use",
          "text": "Product is easy to use"
        }
      ]
    }
  ]
};

const survey = new Survey.Model(json);
        this.survey = survey;

        

        
    }
    
    render() {

        return (
         
            <SurveyReact.Survey 
                model={this.survey}
            />

        );
    }
}

export default SurveyComponent;
