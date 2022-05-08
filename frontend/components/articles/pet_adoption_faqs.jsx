import React from "react";
import { Link } from "react-router-dom";

const PetAdoptionFaqs = () => (
  <div className="article-container">
    <div className="article-header-container">
      <Link to="/" className="article-header-container-item">Home</Link>
    </div>
    <div className="article-body-container">
      <div className="article-title">
        Pet-Adoption FAQs
      </div>
      <br />
      <p>
        Thank you for using Pet Rehome! We’re here to help you every step of the way from “just looking” at our pets, to bringing your imaginary pet home, to living a long and happy life with your new imaginary family member.
        <br />
        <br />
        How Do I Search For a Pet?
        <br />
        Pet Rehome is a searchable list of pets. To find an adoptable pet, you can begin your search by viewing our pets. Since Pet Rehome is updated regularly, we recommend that you keep checking back regularly.
      </p>
    </div>
  </div>
)

export default PetAdoptionFaqs;