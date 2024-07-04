import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const tourData = [
  {
    id: 1,
    title: "New York",
    desc: "New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that’s among the worlds major commercial, financial and cultural centers. Its iconic sites include skyscrapers such as the Empire State Building and sprawling Central Park. Broadway theater is staged in neon-lit Times Square",
    image:"https://static5.depositphotos.com/1030296/395/i/450/depositphotos_3958211-stock-photo-new-york-cityscape-tourism-concept.jpg",
    price: 12,
  },

  {
    id: 2,
    title: "Manila",
    desc: "Manila, capital and chief city of the Philippines. The city is the centre of the country's economic, political, social, and cultural activity. It is located on the island of Luzon and spreads along the eastern shore of Manila Bay at the mouth of the Pasig River",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ43Oy8-vZUoBhnRi9QpOUw9Fjuo_BPI1S8XgQkrsq7bw&s",
    tourIsUp: "Tour is Up",
  },

  {
    id: 3,
    title: "India",
    desc: "India covers an area of 32,87,263 sq. km, extending from the snow-covered Himalayan heights to the tropical rain forests of the south. As the 7th largest country in the world, India stands apart from the rest of Asia, marked off as it is by mountains and the sea, which give the country a distinct geographical entity.",
    image: "https://t3.ftcdn.net/jpg/02/65/64/24/360_F_265642486_IXw9DQVzjTfAzT8xMtTBXBvYD8Who6Fw.jpg",
    price: 15,
  },

  {
    id: 4,
    title: "Bali",
    desc: "Bali is an Indonesian island known for its forested volcanic mountains, iconic rice paddies, beaches and coral reefs. The island is home to religious sites such as cliffside Uluwatu Temple. To the south, the beachside city of Kuta has lively bars, while Seminyak, Sanur and Nusa Dua are popular resort towns. The island is also known for its yoga and meditation retreats",
    image: "https://media.istockphoto.com/id/675172642/photo/pura-ulun-danu-bratan-temple-in-bali.jpg?s=612x612&w=0&k=20&c=_MPdmDviIyhldqhf7t6s63C-bZbTGfNHMlJP9SIa8Y0=",
    price: 16,
  },

  {
    id: 5,
    title: "Pyramid of Giza",
    desc: "Several theories have been proposed about what the form represents: the pyramid may function as a stairway for the pharaoh's ka to reach the heavens, it could refer to the ancient mound of creation, or it might symbolize sunrays spreading to the earth",
    image:"https://media.istockphoto.com/id/177047347/photo/the-pyramids-of-giza.jpg?s=612x612&w=0&k=20&c=sNOn3ruKWcJD1bqi4AVgU7yNt7nChIA30oLfUfsZ4Ro=",
    price: 10,
  },
];

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

const Header = () => {
  return <header className="header">Tour Route</header>;
};
const Main = () => {
  const tour = tourData
    return (
      <div className="main">
        {tour.length > 0 ? (
          <div className="renderList">
            {tourData.map((tour) => (
              <Tour tourObj={tour} key={tour.id}/>
            ))}
          </div>
        ) : null}
      </div>
    )
}


const Tour = ({tourObj}) => {
  const {title, desc, image, price, tourIsUp} = tourObj
    return(
      <div className="tourWrapper">
        <img src= {image} alt={title} />
          <div className="tourBotton">
            <h3>{title}</h3>
            <p>{desc}</p>
            <span>{tourIsUp ? tourIsUp : price}</span>
          </div>
      </div>
    )

}

const Footer = () => {
  const hour = new Date().getHours()
  const openHours = 12;
  const closeHours = 22;
  const isOpen = hour >= openHours && hour <= closeHours;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order openHours={openHours} closeHours={closeHours}/>
      ) : (
        <p>We are Close ...</p>
      )}
    </footer>
  )
}


const Order = ({openHours, closeHours}) => {
  return(
    <div className="order">
      <p>We are open from {openHours}:00 untill {closeHours}:00</p>
        <div className="btn">
          <button>Order now</button>
        </div>
    </div>
  )
  
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
