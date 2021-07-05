import React from "react";
import BlackBar from "../Components/BlackBar";
class About extends React.Component {
  render() {
    return (
      <div>
        <div className="textSection">
          <BlackBar />
          <h3>Hello!</h3>
          Here are some of the things I like to do while I spin around on a rock
          in the black void:
          <ul>
            <li>Coding!</li>
            <li>Practicing/Playing Guitar</li>
            <li>Building mechanical keyboards</li>
            <li>Sit outside with a cigar</li>
            <li>Read books</li>
            <li>Play video games</li>
          </ul>
          <h1 title="And why do I exist... good questions... I am not sure">
            But, who am I?
          </h1>
          My name is Michael, and I am a software engineer.
          <br />I have my Bachelors of Science in Mathematics, with an emphasis
          in Computer Science and Numerical Analysis.
          <br />
          <br />
          <h2>Why Maths instead of pure CS?</h2>
          At the end of the day all engineering is applied math. All math is
          logic and problem solving.
          <br /> It is my belief that having a solid foundation in logic and
          processing a problem is much more valuable than knowing exactly how to
          invert a binary tree from a textbook.
          <button
            className="pseudoLinkButton"
            onClick={this.handleClick}
            title="This is a JS alert, because it is completely superflous"
          >
            Still Curious?
          </button>
          <br />
        </div>
      </div>
    );
  }
  handleClick = () => {
    var blerb =
      "To be more specific, I actually was a pure computer science major " +
      "until my senior year. I was taking Real Analysis (Study of Real " +
      "numbers, sequences, series, convergence, limits... a lot of important " +
      "building blocks to math/calculus) and I fell in love with Math as a " +
      "subject. At the same time, I was in a Software Engineering internship " +
      "with CSI, and realized that the work I was doing on the day to day " +
      "was not really aligning with the course work in my Computer Science " +
      "studies. Thus, I made the switch, from CS to Math, and I am glad I " +
      "did. It has been very beneficial in problem solving.";
    alert(blerb);
  };
}

export default About;
