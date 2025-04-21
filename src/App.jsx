import { useState } from "react";
import Pagefooter from "./components/footer/footer";
import cardimg1 from "./assets/IMAGE (1).png";
import cardimg2 from "./assets/IMAGE (2).png";
import cardimg3 from "./assets/IMAGE (3).png";
import cardimg4 from "./assets/IMAGE (4).png";
import garageImg from "./assets/IMAGE (6).png";
import furniture from "./assets/IMAGE (7).png";
import assembleimg from "./assets/IMAGE (8).png";
import bestprodImg1 from "./assets/IMAGE (9).png";
import bestprodImg2 from "./assets/IMAGE (10).png";
import bestprodImg3 from "./assets/IMAGE (11).png";
import bestprodImg4 from "./assets/IMAGE (12).png";
import Floydfur from "./assets/IMAGE (13).png";
import star1 from "./assets/Frame (1).png";
import star2 from "./assets/Frame.png";
import star3 from "./assets/Vector (2).png";
import comp1 from "./assets/Frame (2).png";
import comp2 from "./assets/Frame (3).png";
import comp3 from "./assets/Frame (4).png";
import comp4 from "./assets/Frame (5).png";
import comp5 from "./assets/Frame (6).png";
import shopFurimg from "./assets/Frame (7).png";

let data2 = [
  {
    name: "Living Room",

    id: 1,
    status: false,
    img: cardimg1,
  },
  {
    name: "Bedroom",

    id: 2,
    status: false,
    img: cardimg2,
  },
  {
    name: "Home Office",

    id: 3,
    status: false,
    img: cardimg3,
  },
  {
    name: "Dining Room",

    id: 4,
    status: false,
    img: cardimg4,
  },
];

import "./App.css";
import "./app.media.css";
import Headernavbar from "./components/header/navbar";
import headimg from "./assets/IMAGE.png";

const App = () => {
  let [data, setData] = useState(data2);
  let [addName, setaddName] = useState("");
  let [addImage, setaddImage] = useState("");
  let [addStatus, setaddStatus] = useState("true");

  let [EditName, setEditName] = useState("");
  let [EditImage, setEditImage] = useState("");
  let [selectEditname, setEditStatus] = useState("");
  let [idx, setidx] = useState(null);

  let [searchName, setasearchName] = useState("");
  let [selectname, setSelect] = useState("");

  let [addmodal, setaddmodal] = useState(false);
  let [editmodal, seteditmodal] = useState(false);

  // add
  let addUser = () => {
    let newuser = {
      id: Date.now(),
      name: addName,
      img: addImage,
      status: addStatus == "true" ? true : false,
    };
    setData([...data, newuser]);
    setaddName("");
    setaddImage("");
  };

  // editcheck
  let CheckEdit = (el) => {
    setEditName(el.name);
    setEditImage(el.img);
    setEditStatus(el.status ? "true" : "false");
    setidx(el.id);
  };

  // edituser
  let editUser = () => {
    setData(
      data.map((el) => {
        if (el.id == idx)
          return {
            ...el,
            name: EditName,
            img: EditImage,
            status: selectEditname == "true" ? true : false,
          };
        return el;
      })
    );
    setEditName("");
    setEditImage("");
    setEditStatus("true");
  };

  // deleteUser
  let deletUser = (id) => {
    setData(data.filter((el) => el.id != id));
  };
  
  // check user
  let CheckUser = (id) => {
    setData(
      data.filter((el) => {
        if (el.id == id) {
          el.status = !el.status;
        }
        return el;
      })
    );
  };

  return (
    <div>
      <header>
        <Headernavbar />
        <section className="TitleHeader">
          <aside className="leftHeader">
            <h1>Curated and Convenient</h1>
            <p>
              We've built our offerings on the principle that everyone deserves
              high-quality design without the high cost. We offer elevated
              rental inventory, to transform your space. Reuse and recycle - we
              make the decision as light as a “feather”
            </p>
            <button className="getBtn">Get Started</button>
          </aside>
          <aside className="rightHeader">
            <img src={headimg} alt="" />
          </aside>
        </section>
        <p className="shopby">Shop by Room</p>

        <section className="our_product">
          <div className="box">
            <div className="container2">
              <h2>SearchUser && SelectUser</h2>
              <input
                type="text"
                placeholder="SearchName"
                value={searchName}
                onChange={(e) => setasearchName(e.target.value)}
              />
              <select
                name=""
                id=""
                value={selectname}
                onChange={(e) => setSelect(e.target.value)}
              >
                <option value="">all</option>
                <option value="true">Active</option>
                <option value="false">Inactive</option>
              </select>
            </div>

            <button onClick={() => setaddmodal(!addmodal)}>ADD</button>
            {addmodal && (
              <div className="container2">
                <h2>AddUser</h2>
                <input
                  type="text"
                  placeholder="addName"
                  value={addName}
                  onChange={(e) => setaddName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="addImage"
                  value={addImage}
                  onChange={(e) => setaddImage(e.target.value)}
                />
                <select
                  name=""
                  id=""
                  value={addStatus}
                  onChange={(e) => setaddStatus(e.target.value)}
                >
                  <option value="true">Active</option>
                  <option value="false">Inactive</option>
                </select>
                <button onClick={addUser}>Save</button>
              </div>
            )}

            {editmodal && (
              <div className="container2">
                <h2>EditUser</h2>
                <input
                  type="text"
                  placeholder="EditName"
                  value={EditName}
                  onChange={(e) => setEditName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="EditImage"
                  value={EditImage}
                  onChange={(e) => setEditImage(e.target.value)}
                />
                <select
                  name=""
                  id=""
                  value={selectEditname}
                  onChange={(e) => setEditStatus(e.target.value)}
                >
                  <option value="true">Active</option>
                  <option value="false">Inactive</option>
                </select>
                <button
                  onClick={
                    editUser}
                >
                  Save Edit
                </button>
                <button onClick={()=>seteditmodal(!editmodal)}>Close</button>
              </div>
            )}
          </div>

          {data
            .filter((el) =>
              el.name.toLowerCase().includes(searchName.toLowerCase())
            )
            .filter((el) => el.status.toString().includes(selectname))
            .map((el) => {
              return (
                <div key={el.id} className="container">
                  <img src={el.img} alt="" />
                  <h1>{el.name}</h1>
                  <p
                    style={{
                      color: `${el.status == true ? "green" : "red"}`,
                      fontSize: "30px",
                    }}
                  >
                    {el.status ? "In Stock" : "Stock Out"}
                  </p>
                  <button onClick={() => deletUser(el.id)}>Delete</button>
                  <button onClick={() => CheckUser(el.id)}>Check</button>
                  <button onClick={() => {CheckEdit(el);seteditmodal(!editmodal)}}>Edit</button>
                </div>
              );
            })}
        </section>
      </header>
      <main>
        <section className="Keeping">
          <p className="Keeping_title">
            “Keeping Furniture in Homes and out of Landfills."
          </p>
          <p>
            This isn’t just another rental company - We’re elevating the future
            of furniture by replacing the commitment of ownership with a culture
            of sharing in a way that’s curated, convenient, and sustainable.
          </p>
        </section>

        <section className="TitleHeader">
          <aside className="leftHeader">
            <p style={{ fontSize: "40px" }}>
              Enjoy a fully furnished space in less than week
            </p>
            <p>
              Feather furniture is available to be delivered and assembled in
              New York City, Los Angeles and San Francisco.
            </p>
            <p style={{ color: "#E9672B" }}>Explore Furniture</p>
          </aside>
          <aside className="rightHeader">
            <img src={headimg} alt="" />
          </aside>
        </section>

        <section className="Garage">
          <aside className="leftGarage">
            <img src={garageImg} alt="" />
          </aside>
          <aside className="rightGarage">
            <p style={{ fontSize: "40px" }}>Garage Sale - 40% & Up</p>
            <p>
              Our Garage Sale is open! Savings start at 40% on favorite retired
              pieces. Find dressers, sofas, decor, and more to make the year one
              to remember.
            </p>
            <p>Terms and conditions apply. View here.</p>
            <p style={{ color: "#E9672B" }}>Shop Now</p>
          </aside>
        </section>

        <section className="furnitureBus">
          <aside className="leftfurnitureBus">
            <p style={{ fontSize: "40px" }}>
              Furniture for business, made simple.
            </p>
            <p>
              Say goodbye to cost, complexity, and commitment of furniture.
              Feather makes it easy with affordable rental plans, white glove
              delivery and best-in-class account service.
            </p>
            <p style={{ color: "#E9672B" }}>Visit Feather For Business</p>
          </aside>
          <aside className="rightfurnitureBus">
            <img src={furniture} alt="" />
          </aside>
        </section>
        <section className="asseble">
          <aside className="leftasseble">
            <img src={assembleimg} alt="" />
          </aside>
          <aside className="rightasseble">
            <p style={{ fontSize: "40px" }}>Never assemble furniture again.</p>
            <p>
              We move a lot. There are countless floor plans and roommates (oh,
              and your evolving tastes) between here and there. With Feather,
              furnish your space without breaking a sweat or reaching for a
              screwdriver.{" "}
            </p>
            <p>Terms and conditions apply. View here.</p>
            <p style={{ color: "#E9672B" }}>How Feather Works</p>
          </aside>
        </section>
        <section className="sell">
          <p className="shopby">Shop our Bestsellers</p>
          <div className="Bestsellers">
            <div className="selers">
              <img src={bestprodImg1} alt="" />
              <p>Cooper Dining Table</p>
              <p>
                rent for <span className="red">$15</span>/mo or buy for $359
                $314
              </p>
            </div>
            <div className="selers">
              <img src={bestprodImg2} alt="" />
              <p>Cooper Dining Table</p>
              <p>
                rent for <span className="red">$35</span>/mo or buy for $359
                $314
              </p>
            </div>
            <div className="selers">
              <img src={bestprodImg3} alt="" />
              <p>Cooper Dining Table</p>
              <p>
                rent for <span className="red">$18</span>/mo or buy for $359
                $314
              </p>
            </div>
            <div className="selers">
              <img src={bestprodImg4} alt="" />
              <p>Cooper Dining Table</p>
              <p>
                rent for <span className="red">$52</span>/mo or buy for $359
                $314
              </p>
            </div>
          </div>
          <p style={{ color: "#E9672B", textAlign: "center" }}>
            Shop All Furniture
          </p>
          <div className="Floydfur">
            <div className="FloydfurLeft">
              <img src={Floydfur} alt="" />
            </div>
            <div className="FloydfurRight">
              <p>feather x FLOYD</p>
              <p style={{ fontSize: "40px" }}>
                Floyd Furniture Meets Feather Flexibility
              </p>
              <button className="exp">Explore Floyd Furniture</button>
            </div>
          </div>
          <div className="allrates">
            <p style={{ fontSize: "40px", textAlign: "center" }}>
              The Reviews are In
            </p>
            <div className="our_rates">
              <div className="rates1">
                <div className="stars1">
                  <img src={star1} alt="" />
                  <img src={star1} alt="" />
                  <img src={star1} alt="" />
                  <img src={star1} alt="" />
                  <img src={star1} alt="" />
                </div>
                <p>Honestly BEST EXPERIENCE moving ever.</p>
                <p>-Julie. San Francisco,CA</p>
              </div>
              <div className="rates2">
                <div className="stars2">
                  <img src={star2} alt="" />
                  <img src={star2} alt="" />
                  <img src={star2} alt="" />
                  <img src={star2} alt="" />
                  <img src={star2} alt="" />
                </div>
                <p>
                  Extremely easy! Browsed for furniture and it was in my new
                  apartment within a week.
                </p>
                <p>-Anthony, Los Angeles,CA</p>
              </div>
              <div className="rates3">
                <div className="stars3">
                  <img src={star3} alt="" />
                  <img src={star3} alt="" />
                  <img src={star3} alt="" />
                  <img src={star3} alt="" />
                  <img src={star3} alt="" />
                </div>
                <p>Honestly BEST EXPERIENCE moving ever.</p>
                <p>-Wesley,New York City, NY</p>
              </div>
            </div>
          </div>

          <div className="apartments">
            <h1>Ease the pain of moving from apartment to apartment.</h1>
            <div className="company">
              <img src={comp1} alt="" />
              <img src={comp2} alt="" />
              <img src={comp3} alt="" />
              <img src={comp4} alt="" />
              <img src={comp5} alt="" />
            </div>
          </div>

          <div className="shopFurniture">
            <img src={shopFurimg} alt="" />
            <p style={{ fontSize: "30px" }}>
              Feather is the stress-free way to furnish your home
            </p>
            <button className="getBtn">Shop Furniture</button>
          </div>
        </section>
      </main>
      <footer>
        <Pagefooter />
      </footer>
    </div>
  );
};

export default App;
