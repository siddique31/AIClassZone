import React from 'react';
import 'katex/dist/katex.min.css';
import { BlockMath, InlineMath } from 'react-katex';

const Q3CoulombsLaw = () => {
  return (
    <div className="long-question">
      <h3>Q.3 State Coulomb's Law.</h3>
      <div className="answer">
        <p>
          Coulomb's law states that the electrostatic force between two point charges is directly proportional to the product of their charges and inversely proportional to the square of the distance between them.
        </p>

        <div className="formula">
          <BlockMath math="F = k \frac{q_1 q_2}{r^2}" />
        </div>
      </div>

      <style jsx>{`
        .long-question {margin: 20px 0; padding: 15px; border: 1px solid #ddd; border-radius: 8px; background: #f9f9f9;}
        .answer {margin-top: 15px;}
        p {line-height: 1.6; color: #333; margin-bottom: 10px;}
        .formula {margin: 15px 0; padding: 10px; background: #fff; border-left: 4px solid #007acc; font-family: 'Cambria Math', serif;}
      `}</style>
    </div>
  );
};

export default Q3CoulombsLaw;
