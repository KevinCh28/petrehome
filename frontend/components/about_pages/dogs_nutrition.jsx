import React from "react";
import { Link } from "react-router-dom";

const DogsNutrition = () => (
  <div className="article-container">
    <div className="article-header-container">
      <Link to="/" className="article-header-container-item">Home</Link>
      <p className="article-header-container-item">{` > `}</p>
      <Link to="/dogs" className="article-header-container-item">Dogs</Link>
    </div>
    <div className="article-body-container">
      <div className="article-title">
        Understanding Pet Food Ingredients
      </div>
      <div className="article-author">
        By Dr. Marty Becker
      </div>
      <br />
      <p>
        By-products: They’re what’s for dinner. At least if you’re a dog or cat, although my wife Teresa and I have been to some pretty fancy restaurants that served what many people would consider by-products. Liver, anyone?
        <br />
        <br />
        Pet food ingredients and pet nutrition in general can be confusing for pet owners, but by-products get a bad rap that’s not always deserved. Let’s chew on the subject to find out more about them.
        <br />
        <br />
        First, what are by-products that are used in pet food? By-products are the co-product of food ingredients, including portions of an animal that are less commonly used in the U.S. human food supply but can provide essential nutritional benefits. Some examples of by-products include clean animal parts like the liver, kidneys, heart, lungs, spleen, corn gluten meal and tallow. Doesn’t sound that different from what you’d see African wild dogs eating on Nat Geo WILD.
        <br />
        <br />
        I’ll be the first to say that some of those things don’t seem appetizing to the human palate. However, by-products are incredibly nutrient-dense and highly palatable to animals. In fact, cats and dogs in the wild instinctively eat these organs first because they bring a wealth of nutrients such as protein, healthy fats, vitamins and minerals to the table. So it’s not a bad thing to feed by-products in your pet food so long as it is part of a complete and balanced diet.
        <br />
        <br />
        I asked my colleague Dr. Tony Buffington, a veterinary nutritionist, if by-products have any benefits for pets. Here’s what he had to say.
        <br />
        <br />
        “Properly produced by-products can provide a wide range of essential nutrients for pets and can be a safe and economical use of biological material.”
        <br />
        <br />
        That’s a benefit to both humans and other animals, he notes.
        <br />
        <br />
        Now, depending on the source and the processing, the nutrient content of by-products isn’t always reliable. Poor processing can allow by-products to become contaminated. Improper processing can also result in less availability of nutrients. That’s why it’s important to know the manufacturer’s reputation.
        <br />
        <br />
        Pet owners can ensure their pet’s food is safe and healthy, whether it includes by-products or not, by checking to make sure manufacturers meet or exceed FDA and AAFCO standards. For example, going directly to a manufacturer’s website to learn more about what safety and quality standards they are employing such as testing raw materials for impurities and nutrient content or working with food scientists, veterinary professions and nutritionists to develop products. Any meat and poultry by-products from farm animals should originate at facilities certified by the USDA or equivalent authority.
        <br />
        <br />
        “Avoiding all these potential problems is the responsibility of pet food manufacturers using by-products,” Dr. Buffington says. “Their success depends on the vigilance and integrity of the company.”
        <br />
        <br />
        In general, pet owners should research the quality and safety standards of the company that makes their pet food. It’s important to know who makes your pet’s food, where it’s made, and what steps does the manufacturer take to ensure the quality and safety of their food. Here are a few tips for pet owners to learn more about their pet food:
        <br />
        <br />
        • Look beyond the ingredient list on the package and check the quality of the manufacturing and how stringent are the quality standards of the company making the food.
        <br />
        • Go to your pet food manufacturer’s website. See if they own their factories, is their food made in the United States, and what steps do they take to ensure their pet foods meet or exceed FDA and AAFCO standards for safety and quality.
        <br />
        • Call your pet food manufacturer and ask them about their manufacturing process, their quality and safety standards and the ingredients they use in their foods. They should be able to explain why they use any ingredient and the nutritional benefits.
        <br />
        • Talk to your veterinarian. They understand pet food nutrition and can provide recommendations on pet foods that are safe and healthy for your pets.
      </p>
    </div>
  </div>
)

export default DogsNutrition