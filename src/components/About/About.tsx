import "./About.css";

function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img
            src="images/logo.png"
            alt="The cousins making rainbow loom jewelry"
          />
        </div>

        <div className="about-content">
          <h2 style={{ fontSize: "4rem" }}>About Us</h2>
          <p style={{ fontSize: "2rem" }} id="about">
            We are four cousins who love making colorful rainbow loom trinkets
            and jewelry. with youngest 4 and oldest 11, We started creating
            these items to share with friends and family, then we made a stand
            on the street and now we’re excited to share them with you now.
            Every piece is made with skills, care, and lots of work! each one is
            made wih love and crafted by hand in our shop.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
