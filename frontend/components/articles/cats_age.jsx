import React from "react";
import { Link } from "react-router-dom";

const CatsAge = () => (
  <div className="article-container">
    <div className="article-header-container">
      <Link to="/" className="article-header-container-item">Home</Link>
      <p className="article-header-container-item">{` > `}</p>
      <Link to="/cats" className="article-header-container-item">Cats</Link>
    </div>
    <div className="article-body-container">
      <div className="article-title">
        Age-Related Health Problems by Breed
      </div>
      <div className="article-author">
        The following article is courtesy of, Banfield Pet Hospital.
      </div>
      <br />
      <p>
        Your pet’s breed and size are important determinants and predictors of health issues he or she might experience with age. For example, geriatric (more than 10 years old, on average), smaller-breed dogs (under 20 pounds), such as Cavalier King Charles Spaniels, Maltese, Lhasa Apsos and Chihuahuas are predisposed to mitral valve disease, an inefficiency in the function of one of the heart valves, leading to backflow of blood when the heart contracts. Early detection of this condition is crucial, as it can often be effectively managed with specific attention to diet, as well as exercise restrictions. During an examination, your veterinarian will listen to your dog’s heart to note any abnormalities.
        <br />
        <br />
        Because of the smaller size of their teeth and jaw, smaller dogs are also prone to dental disease. Regular dental cleanings and at-home dental care, such as brushing, is especially important. Small breeds with proportionally longer spines, such as Dachshunds and Welsh Corgis, are at higher risk of developing spinal diseases. Preventive measures to avoid spinal/disc injury and maintain normal weight are important. As these breeds age, it’s a good idea to help them in and out of the car, as well as taking measures to discourage jumping on and off of furniture. Pet stairs or ramps for cars or furniture can be purchased to help alleviate this risk.
        <br />
        <br />
        Giant breeds such as Doberman Pinchers, Rottweilers and Great Danes are at a higher risk, when compared with their smaller counterparts, of developing arthritis, joint issues and a variety of forms of cardiac disease. In addition, giant breeds age faster than small and medium sized breeds, making regular preventive and early detection of any cardiac problems especially important.
        <br />
        <br />
        Regardless of their breed or size, both geriatric cats and dogs are at risk of developing diseases such as kidney disease, often characterized by excessive drinking of water, combined with increased urination, and often, weight loss. The health issues affecting aging cats tend to be similar across all domestic breeds, largely because of their similarity in size. In both cats and dogs, similar size and weight usually correlates with a similar aging process and lifespan.
        <br />
        <br />
        Geriatric cats (more than 10 years old) are at a higher risk of developing hyperthyroidism. This condition is characterized by an excess of thyroid hormone produced by the thyroid gland, which causes the heart to work harder than it should. For both of these conditions, early detection through preventive care is important. Watch for any changes in eating habits, water consumption, energy levels or weight and consult your Pets veterinarian at the first signs. Among cats, the following breeds are especially at risk for developing hyperthyroidism: Himalayan, Siamese, Burmese, Persian and manx.
        <br />
        <br />
        If you notice anything abnormal in your pet, speak with your veterinarian immediately so he/she can address any issues early when they are easiest to treat or manage. Preventive care, combined with early detection and treatment, are paramount to making sure your pet lives a long, healthy life.
      </p>
    </div>
  </div>
)

export default CatsAge