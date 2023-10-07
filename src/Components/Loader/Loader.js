import React from "react";
import ReactLoading from "react-loading";
import { Section,  Article} from "./generic";

const Loader = () => (
  <Section>
      <Article>
        <ReactLoading type="spin" color="#2196F3" />
      </Article>
  </Section>
);

export default Loader;  
