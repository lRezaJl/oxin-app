import React from "react";
import styled from "styled-components";

const Radio = () => {
  return (
    <StyledWrapper>
      <div className="container">
        <div className="pane">
          <label className="label">
            <span>Yes</span>
            <input id="left" className="input" name="radio" type="radio" />
          </label>
          <label className="label">
            <span>No</span>
            <input
              id="middle"
              className="input"
              checked={true}
              name="radio"
              type="radio"
            />
          </label>
          <label className="label">
            <span>Idk</span>
            <input id="right" className="input" name="radio" type="radio" />
          </label>
          <span className="selection" />
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .container {
    transform-style: preserve-3d;
    perspective: 1000px;
  }

  .pane {
    outline: 2px solid #00ff6a;
    box-shadow: 0 0 10px #00ff6a77, inset 0 0 10px #00ff6a77;
    height: 1cm;
    width: 4.5cm;
    border-radius: 5px;
    position: relative;
    overflow: hidden;
    transition: 0.7s ease;
  }

  .input {
    display: none;
  }

  .label {
    height: 1cm;
    width: 1.5cm;
    float: left;
    font-weight: 600;
    letter-spacing: -1px;
    font-size: 14px;
    padding: 0px;
    position: relative;
    z-index: 1;
    color: #00ff6a;
    text-align: center;
    padding-top: 10px;
  }

  .selection {
    display: none;
    position: absolute;
    height: 1cm;
    width: calc(4.5cm / 3);
    z-index: 0;
    left: 0;
    top: 0;
    box-shadow: 0 0 10px #00ff6a77;
    transition: 0.15s ease;
  }

  .label:has(input:checked) {
    color: #212121;
  }

  .pane:has(.label:nth-child(1):hover) {
    transform: rotateY(-30deg);
  }

  .pane:has(.label:nth-child(3):hover) {
    transform: rotateY(35deg);
  }

  .label:has(input:checked) ~ .selection {
    background-color: #00ff6a;
    display: inline-block;
  }

  .label:nth-child(1):has(input:checked) ~ .selection {
    transform: translateX(calc(4.5cm * 0 / 3));
  }

  .label:nth-child(2):has(input:checked) ~ .selection {
    transform: translateX(calc(4.5cm * 1 / 3));
  }

  .label:nth-child(3):has(input:checked) ~ .selection {
    transform: translateX(calc(4.5cm * 2 / 3));
  }
`;

export default Radio;
