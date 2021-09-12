import { Button } from "@material-ui/core";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Buttons.css";

const data = [
  {
    backgroundColor: "#5E4FDB",
    payload: "bgprimary",
    buttonName: "Primary",
  },
  {
    backgroundColor: "#F3F2FC",
    payload: "bgprimarylight",
    buttonName: "Primary Light",
  },
  {
    backgroundColor: "#1ABC9C",
    payload: "bgsecondary",
    buttonName: "Secondary",
  },
  {
    backgroundColor: "#D64B4B",
    payload: "bgnegative",
    buttonName: "Negative",
  },
  {
    backgroundColor: "#852121",
    payload: "bgdarkred",
    buttonName: "Dark Red",
  },
  {
    backgroundColor: "#FFE3E3",
    payload: "bglightred",
    buttonName: "Light Red",
  },
  {
    backgroundColor: "#C06801",
    payload: "bgdarkambar",
    buttonName: "Dark Amber",
  },
  {
    backgroundColor: "#FFF7E3",
    payload: "bglightambar",
    buttonName: "Light Amber",
  },
  {
    backgroundColor: "#0E4316",
    payload: "bgdarkgreen",
    buttonName: "Dark Green",
  },
  {
    backgroundColor: "#E1EFE1",
    payload: "bglightgreen",
    buttonName: "Light Green",
  },
  {
    backgroundColor: "#000000",
    payload: "bgblack",
    buttonName: "Black",
  },
  {
    backgroundColor: "#FFFFFF",
    payload: "bgwhite",
    buttonName: "White",
  },
  {
    backgroundColor: "#808080",
    payload: "bgblacktransperant",
    buttonName: "Black Transparent",
  },
  {
    backgroundColor: "#D8D8D8",
    payload: "bgdarkgrey",
    buttonName: "Dark Grey",
  },
  {
    backgroundColor: "#F0F0F0",
    payload: "bggrey",
    buttonName: "Grey",
  },
  {
    backgroundColor: "#F6F6F6",
    payload: "bglightgrey",
    buttonName: "Light Grey",
  },
];

const Buttons = () => {
  const dispatch = useDispatch();
  const bgcolor = useSelector((state) => state.color);

  return (
    <div className={bgcolor}>
      {data.map((val) => {
        return (
          <div>
            <Button
              variant="contained"
              style={{
                backgroundColor: val.backgroundColor,
              }}
              onClick={() => {
                dispatch({
                  type: "CHANGE_COLOR",
                  payload: val.payload,
                });
              }}
            >
              {val.buttonName}
            </Button>
          </div>
        );
      })}
    </div>
  );
};

export default Buttons;
