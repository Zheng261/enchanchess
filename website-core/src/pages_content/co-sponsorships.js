import EvalDoc from "../assets/Evaluating Co-sponsorships & Partnerships.pdf";
import CoSponsorshipAndPartnershipDoc from "../assets/Co-sponsorship & Partnership Application.pdf";

import React from "react";

export default {
  eventSupport: "Need Event Support?",
  eventSupportContent:
    "We serve to help student organizations and university departments.",
  weCanHelp: "We can help in two ways",
  coSponsorships: "Co-Sponsorships",
  coSponsorshipsContent: (
    <>
      Have an event lined up but are looking for financial support?
      <br />
      <br />
      We provide cosponsorships <strong>up to $1500</strong> in speaker fees and
      event service costs only. This includes honoraria, venues, A.V., but not
      travel, lodging, food, etc.
      <br />
      <br />
      We consider the following factors:
      <br />
      <br /> - Speaker name
      <br /> - Expected attendance
      <br /> - Overall event budget
      <br />
      <br />
      We also try to co-sponsor a variety of events every year, so we love
      creative ideas!
    </>
  ),
  partnerships: "Partnerships",
  partnershipsContent: (
    <>
      Have a budding idea for an event?
      <br />
      Need help with finding a speaker, funding the event, advertising, etc.?
      <br />
      <br />
      We provide cosponsorship contribution, and in addition, Speakers Bureau
      can provide extended services from the day your application is accepted to
      the day of your event. We have experience and expertise in{" "}
      <strong>
        finding speakers, negotiating costs, paperwork, venue booking,
        advertising, event staffing
      </strong>
      , and more
    </>
  ),
  interested: "Interested? Apply with the steps below!",
  step1: "1. Review",
  step1Content: (
    <>
      Review our{" "}
      <a href={EvalDoc} download>
        Evaluating Co-sponsorships & Partnerships document
      </a>{" "}
      for more details on Speakers Bureau’s evaluation process.
    </>
  ),
  step2: "2. Fill",
  step2Content: (
    <>
      Fill up the{" "}
      <a href={CoSponsorshipAndPartnershipDoc} download>
        Co-sponsorship & Partnership Application (PDF) document
      </a>
    </>
  ),
  step3: "3. Submit",
  step3Content: (
    <>
      Submit the application on{" "}
      <a
        href="https://orgsync.com/44692/forms/368141"
        target="_blank"
        rel="noopener noreferrer"
      >
        CardinalSync
      </a>
      , and please allow for 2-3 weeks for processing.
      <br />
      <br />
      For more urgent requests please email Jose Sabau at jlsabau@stanford.edu
    </>
  ),
  step4: "4. Present",
  step4Content:
    "Present your event in one of our team meetings (5 minutes), after which we will hold a team vote on funding.",
};
