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
        <br />
        How Do I Search For a Pet?
        <br />
        <br />
        Pet Rehome is a searchable list of pets. To find an adoptable pet, you can begin your search by viewing our pets. Since Pet Rehome is updated regularly, we recommend that you keep checking back regularly.
        <br />
        <br />
        <br />
        Why Wasnt't I Selected to Adopt?
        <br />
        <br />
        Thank you for thinking adoption first! Each owner or rescue group has its own adoption process. We do not dictate adoption procedures to our Pet Rehome members, although we do encourage them to do everything possible to facilitate finding good homes for their adoptable pets. We hope you won’t let this one experience change your mind about providing a loving home to a pet in need. There are many animal shelters and rescue groups with many more adoptable pets waiting for their forever homes! Thank you for helping an adoptable pet and we wish you the best of luck in your search to find a new member of your family. If you have specific questions or concerns about a shelter, please contact us below
        <br />
        <br />
        <br />
        How Can I Tell If a Rescue Group is Real or a Scam?
        <br />
        <br />
        All the adoption groups that list their pets on Pet Rehome have been carefully screened by our staff. If you have concerns about a shelter or rescue group or user listed on Pet Rehome, please contact us. If you’re looking outside of Pet Rehome for a pet to adopt, there are some red flags to keep an eye out for. No one point alone proves whether a group is or is not legitimate. If you find several of these warning signs, you might want to look for your adoptable pet elsewhere.
      </p>
    </div>
  </div>
)

export default PetAdoptionFaqs;