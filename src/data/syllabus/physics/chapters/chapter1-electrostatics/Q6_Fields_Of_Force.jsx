import React from 'react';
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';

const Q6FieldsOfForce = () => {
  return (
    <div className="long-question">
      <h3>Q.6 Fields of Force</h3>
      <div className="answer">
        <p>
          Electric field intensity <InlineMath math="\vec{E}" /> at a point due to charge <InlineMath math="q" /> is:
        </p>

        <div className="formula">
          <BlockMath math="\vec{E} = \frac{1}{4 \pi \epsilon_0} \frac{q}{r^2} \hat{r}" />
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

export default Q6FieldsOfForce;
