import React from "react";
import { Link } from "react-router-dom";

const DogsSpayNeuter = () => (
  <div className="article-container">
    <div className="article-header-container">
      <Link to="/" className="article-header-container-item">Home</Link>
      <p className="article-header-container-item">{` > `}</p>
      <Link to="/dogs" className="article-header-container-item">Dogs</Link>
    </div>
    <div className="article-body-container">
      <div className="article-title">
        {`Spaying & Neutering – Benefits of Fixing Your Dog or Cat`}
      </div>
      <div className="article-author">
        By Dr. Lila Miller, D.V.M., ASPCA
      </div>
      <br />
      <p>
        The surgical altering of animals so that they cannot reproduce (otherwise known as gonadectomy) has been going on for centuries. It seems ironic that despite having spayed and neutered millions of animals, sufficient conclusive research has not been conducted to end the debate about the best age or reproductive stage of life to spay and neuter dogs and cats. Early age spay-neuter is still one of the more hotly debated issues in companion animal medicine today. It is fraught with misinformation, misconceptions, and high emotions. Hopefully, the debate will end as more research shows the procedures to be safe in both the short and long term, and veterinarians will then begin to embrace the concept as readily as they embrace neutering at 6 months of age.
        <br />
        <br />
        Males:
        <br />
        <br />
        Neutered cats and dogs focus their attention on their human families. On the other hand, unsterilized, unsupervised males roam in search of a mate, risking injury in traffic and in fights with other males. They mark territory by spraying strong-smelling urine on surfaces. Neutering eliminates the odor and markedly reduces the incidence of urine spraying. It is most effective when performed before marking starts, but will often work even after the marking has become a habit. Indoors, male dogs may embarrass you by mounting furniture and human legs when stimulated. Don’t confuse aggressiveness with protectiveness; a neutered dog protects his home and family just as well as an unneutered dog, and many aggression problems can be avoided by early neutering.
        <br />
        <br />
        Females:
        <br />
        <br />
        While their cycles vary greatly, most female cats exhibit the following signs when in heat. For four or five days, every three weeks during the breeding season, they yowl and urinate more frequently sometimes all over the house advertising for mates. Often, they attract unneutered males who spray urine around the female’s homes. Female dogs also attract males from great distances. Female dogs generally have a bloody discharge for about a week and can conceive for another week or so.
      </p>
    </div>
  </div>
)

export default DogsSpayNeuter