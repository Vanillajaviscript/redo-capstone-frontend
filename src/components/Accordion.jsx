import React from 'react';
import { MDBAccordion, MDBAccordionItem } from 'mdb-react-ui-kit';

const Accordion = () => {

 

  return (
    <div
    style={{
      margin: "auto",
      padding: "0px",
      maxWidth: "100%",
      alignContent: "center",
      backgroundColor: "rgba(189, 117, 15, 0.384)",
      background:"linear-gradient(to bottom, rgb(7, 4, 1), rgba(189, 116, 15, 0))"
    }}
    >
    <MDBAccordion flush initialActive={1} style={{marginTop: "107px"}} >
      <MDBAccordionItem collapseId={1} headerTitle='Dog Fact #1' style={{backgroundColor: "rgba(192, 112, 0, 0.587)"}}>
        <strong style={{color:"whitesmoke"}}>Approximately 10,000 dogs are slaughtered each year for the “festival”.</strong> <p style={{color:"whitesmoke"}}>During its prime years, circa 2014- 2016, it was estimated that approximately 10,000 dogs were slaughtered every year for the Yulin festival. In 2020, the number dropped to around 3,000 based on local activist’s estimates.</p>
      </MDBAccordionItem>
      <MDBAccordionItem collapseId={2} headerTitle='Dog Fact #2' style={{backgroundColor: "rgba(192, 112, 0, 0.587)"}}>
        <strong style={{color:"whitesmoke"}}>Countless dogs, including people’s pets, are stolen every year for the Yulin Festival.</strong> <p style={{color:"whitesmoke"}}>A very unfortunate aspect to the Yulin festival, from an animal welfare and activist perspective, is that it is very difficult to get reliable statistics on the comings and goings of the festival. In fact, soliciting an accurate count of the number of attendees and the number of dogs slaughtered and eaten is nearly impossible.

        While dog-eating is not illegal in your own home, the theft of dogs, transportation of animals across state lines and the sale of uninspected dog meat in restaurants, is absolutely illegal. Furthermore, the dog-meat industry is itself a spectacle in its wanton disregard for the suffering of the dogs and its blatant disregard for the law!</p>
      </MDBAccordionItem>
      <MDBAccordionItem collapseId={3} headerTitle='Dog Fact #3' style={{backgroundColor: "rgba(192, 112, 0, 0.587)"}}>
        <strong style={{color:"whitesmoke"}}>Dogs are brutally murdered by the hundreds and thousands every year for the Yulin Festival.</strong> <p style={{color:"whitesmoke"}}> A big portion of the dogs that unfortunately end up in the dog-meat trade are either stray dogs or stolen pet dogs that are snatched from the street or poisoned with darts. They are then transported to holding facilities until there are enough dogs to be sent to their final destination in horribly cramped conditions with no food or water. Once these poor, helpless dogs arrive at their “death camp”, they are bludgeoned to death.</p>
      </MDBAccordionItem>
    </MDBAccordion>
    </div>
  );
};

export default Accordion;