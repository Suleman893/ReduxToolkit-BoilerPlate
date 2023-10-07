import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { postTheProducts } from "../../features/product/productSlice";
import { Button, Input } from "../../GlobalStyles";
import { toast } from "react-toastify";
import Papa from "papaparse";

const CsvUploader = ({ setModal }) => {
  const dispatch = useDispatch();
  const [dataFile, setDataFile] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (dataFile.name) {
      if (dataFile.type !== "text/csv") {
        toast.error("Only csv file allowed", { theme: "colored" });
      } else {
        Papa.parse(dataFile, {
          complete: function (results) {
            const columns = results.data.shift();
            results.data.pop();
            let objectData = [];
            for (let i = 0; i < results.data.length; i++) {
              let obj = {};
              for (let j = 0; j < results.data[i].length; j++) {
                obj[columns[j]] = results.data[i][j];
              }
              objectData.push(obj);
            }
            dispatch(postTheProducts(objectData));
            setModal(false);
          },
        });
      }
    } else {
      toast.error("Please select file", { theme: "colored" });
    }
  };

  return (
    <>
      <p style={{ marginBottom: "10px" }}>Upload CSV file</p>
      <CsvForm id="csv-form">
        <Input
          type="file"
          accept=".csv"
          onChange={(e) => setDataFile(e.target.files[0])}
        ></Input>
        <Button
          style={{ padding: "12px 24px" }}
          onClick={(e) => handleSubmit(e)}
        >
          Submit
        </Button>
      </CsvForm>
    </>
  );
};

export const CsvForm = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 10px;
`;

export default CsvUploader;
