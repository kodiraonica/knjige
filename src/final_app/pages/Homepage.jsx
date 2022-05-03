import "final_app/assets/style.css";
import img1 from "final_app/assets/images/1.jpg";
import img3 from "final_app/assets/images/3.jpg";
import img6 from "final_app/assets/images/6.jpg";
import img8 from "final_app/assets/images/8.png";
import img10 from "final_app/assets/images/10.png";
import img770 from "final_app/assets/images/770.jpg";

export default function Homepage() {
  return (
    <>
      <header>
        <div className="flex w-100">
          <div className="col flex blue-background text-white items-center">
            <h1>
              Savršeno mjesto <br />
              za tvoje knjige.
            </h1>
          </div>
          <div className="col flex content-end">
            <img src={img770} alt="reading" className="float" />
          </div>
        </div>
      </header>

      <section className="purple-background">
        <div className="flex">
          <div className="col">
            <h2 className="text-white text-center">Kreni čitati već danas!</h2>
          </div>
        </div>
      </section>

      <section className="gray-background">
        <div className="flex items-center">
          <div className="col">
            <div className="card">
              <img src={img3} alt="" />
              <h3 className="mb-2">Bilo kad. Bilo gdje.</h3>
              <p className="mb-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Sapiente, nisi.
              </p>
              <button>See more</button>
            </div>
          </div>

          <div className="col">
            <div className="card active">
              <img src={img6} alt="" />
              <h3 className="mb-2">S ekipom. Ili sam_a.</h3>
              <p className="mb-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Sapiente, nisi.
              </p>
              <button>See more</button>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <img src={img1} alt="" />
              <h3 className="mb-2">Odmori uz knjigu.</h3>
              <p className="mb-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Sapiente, nisi.
              </p>
              <button>See more</button>
            </div>
          </div>
        </div>
      </section>

      <section className="special purple-background">
        <div className="flex content-center">
          <div className="col max-50 text-center">
            <h3 className="mb-4 text-white">Odmor je najbolji uz knjigu.</h3>
            <img src={img8} alt="Rest" className="float mt-4" />
          </div>
        </div>
      </section>

      <section>
        <div className="flex">
          <div className="col max-50 flex content-center">
            <img src={img10} alt="" className="float max-70 mt-4" />
          </div>

          <div className="col">
            <h2 className="mt-8">Neke od naših mogućnosti</h2>
            <p className="mb-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequuntur accusantium quas nam sit veniam officiis quia dolor
              omnis enim! Labore!
            </p>
            <div className="flex">
              <div className="col mb-4">
                <span className="material-icons"> favorite_border </span>
                <h4>Some title</h4>
                <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
              </div>
              <div className="col mb-4">
                <span className="material-icons"> done </span>
                <h4>Some title</h4>
                <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
              </div>
            </div>

            <div className="flex">
              <div className="col mb-4">
                <span className="material-icons">
                  {" "}
                  sentiment_very_satisfied{" "}
                </span>
                <h4>Some title</h4>
                <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
              </div>
              <div className="col mb-4">
                <span className="material-icons"> wb_incandescent </span>
                <h4>Some title</h4>
                <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="blue-background">
        <div className="flex">
          <div className="col">
            <ul>
              <li>
                <span className="material-icons"> facebook </span>
              </li>
              <li>
                <span className="material-icons"> email </span>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
