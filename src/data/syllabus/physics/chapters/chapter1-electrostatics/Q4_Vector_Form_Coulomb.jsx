import React from 'react';
import 'katex/dist/katex.min.css';
import { BlockMath, InlineMath } from 'react-katex';

const Q4VectorFormCoulomb = () => {
  return (
    <div className="long-question">
      <h3>Q.4 What is the vector form of Coulomb's law?</h3>
      <div className="answer">
        <p>
          Force exerted by charge <InlineMath math="q_1" /> on <InlineMath math="q_2" /> is:
        </p>

        <div className="formula">
          <BlockMath math="\vec{F}_{21} = \frac{1}{4 \pi \epsilon_0} \frac{q_1 q_2}{r^2} \hat{r}_{21}" />
          <BlockMath math="\vec{F}_{12} = -\vec{F}_{21}" />
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

export default Q4VectorFormCoulomb;
