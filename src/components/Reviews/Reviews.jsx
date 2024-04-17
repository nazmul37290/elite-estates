const Reviews = () => {
  return (
    <div className="max-w-6xl mx-auto pt-24">
      <h2 className="text-3xl mb-10 text-center font-bold">
        Reviews of Our Customers
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="card w-auto bg-base-100 shadow-xl">
          <figure>
            <img
              className="h-56 "
              src="https://i.ibb.co/9hx6WyT/young-handsome-business-man-dressed-260nw-1487434763.webp"
              alt="Shoes"
              style={{ borderRadius: "50%", width: "150px", height: "150px" }}
            />
          </figure>
          <div className="card-body">
            <p>
              “Navigating through this elite estate website was an absolute
              delight! From the stunning visuals of the properties to the
              seamless user experience, every aspect of this platform exudes
              elite sophistication. Finding my dream home was made effortless,
              thanks to the intuitive search and filtering options. A truly
              exquisite experience from start to finish!”
            </p>
            <h2 className="card-title">NICK JHONSON</h2>
            <p>Small Business Owner</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">
                {" "}
                <div className="rating">
                  <p>Rating:</p>
                  <span>⭐⭐⭐⭐⭐</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card w-auto bg-base-100 shadow-xl">
          <figure>
            <img
              className="h-56"
              src="https://i.ibb.co/CvrgWGY/cool-young-male-medical-doctor-biting-pill-isolated-gray-background-97712-110.jpg"
              alt="Shoes"
              style={{ borderRadius: "50%", width: "150px", height: "150px" }}
            />
          </figure>
          <div className="card-body">
            <p>
              I was blown away by the unparalleled selection of properties
              available on this website. From beachfront villas to mountain
              retreats, the diversity and quality of listings exceeded my
              expectations. The detailed descriptions and high-resolution images
              provided a comprehensive view of each property, making it easy to
              envision myself living in elite comfort. A top-notch platform for
              discerning buyers!
            </p>
            <h2 className="card-title">BOB ROBERTS</h2>
            <p> Business Owner</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">
                {" "}
                <div className="rating">
                  <p>Rating:</p>
                  <span>⭐⭐⭐⭐</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card w-auto bg-base-100 shadow-xl">
          <figure>
            <img
              className="h-56"
              src="https://i.ibb.co/3MtG7bn/istockphoto-1225576022-612x612.jpg"
              alt="Shoes"
              style={{ borderRadius: "50%", width: "150px", height: "150px" }}
            />
          </figure>
          <div className="card-body">
            <p>
              Not only does this elite estate website offer an exceptional
              selection of properties, but the service provided by the team
              behind it is also second to none. From prompt responses to
              inquiries to personalized recommendations based on my preferences,
              every interaction was handled with professionalism and care. I
              felt truly valued as a customer and could not be happier with the
              level of service received.”{" "}
            </p>
            <h2 className="card-title">John</h2>
            <p>Shop Owner</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">
                {" "}
                <div className="rating">
                  <p>Rating:</p>
                  <span>⭐⭐⭐⭐</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card w-auto bg-base-100 shadow-xl">
          <figure>
            <img
              className="h-56"
              src="https://i.ibb.co/hHLVkG7/feeling-happy-excited-surprised-shocked-smiling-astonished-something-unbelievable-1194-71873.jpg"
              alt="Shoes"
              style={{ borderRadius: "50%", width: "150px", height: "150px" }}
            />
          </figure>
          <div className="card-body">
            <p>
              In a sea of real estate websites, this elite estate platform
              stands out as a class above the rest. The attention to detail,
              both in terms of property listings and website design, is evident
              at every turn. Browsing through the curated collection of elite
              homes felt like embarking on a journey of elegance and
              sophistication. If you are in search of the epitome of elite
              living, look no further than this exceptional website.
            </p>
            <h2 className="card-title">Mikel</h2>
            <p>Builder</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">
                {" "}
                <div className="rating">
                  <p>Rating:</p>
                  <span>⭐⭐⭐</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
