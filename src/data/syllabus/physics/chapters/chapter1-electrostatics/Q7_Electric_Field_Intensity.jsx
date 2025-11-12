import React from 'react';
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';

const Q7ElectricFieldIntensity = () => {
  return (
    <div className="long-question">
      <h3>Q.7 Define electric field and electric field intensity. Also calculate the electric field intensity due to a point charge.</h3>
      
      <div className="answer">
        <h4>ELECTRIC FIELD</h4>
        <p>
          The region or space around a charge within which other charges are influenced is called electric field.
        </p>

        <h5>Electric Field Intensity</h5>
        <p>
          Electric field intensity <BlockMath math="\overrightarrow{E}" /> at a point is force per unit charge acting on a positive test charge placed at that point.
        </p>
        <p>
          It is a vector quantity and its direction is same as that of force <BlockMath math="\overrightarrow{F}" />. Let <BlockMath math="\overrightarrow{F}" /> be the force experienced by test charge <BlockMath math="q_0" /> placed in the field of a charge <BlockMath math="q" />, then,
        </p>

        <div className="formula">
          <BlockMath math="\overrightarrow{E} = \frac{\overrightarrow{F}}{q_0}" />
        </div>

        <div className="unit">
          <p><strong>Unit of Electric Intensity:</strong> SI unit of electric intensity is <BlockMath math="\text{NC}^{-1}" /> or <BlockMath math="\frac{N}{C}" />.</p>
        </div>

        <h5>Electric Field Intensity Due to a Point Charge</h5>
        <p>
          Consider a point charge <BlockMath math="q" /> placed at O. A positive test charge <BlockMath math="q_0" /> at point P, distance r from O, experiences force:
        </p>

        <div className="formula">
          <BlockMath math="\overrightarrow{F} = \frac{1}{4\pi\epsilon_0} \frac{qq_0}{r^2} \cdot \overrightarrow{r}" />
        </div>

        <p>
          where <BlockMath math="\hat{r}" /> is a unit vector directed from q to q0. So electric field:
        </p>

        <div className="formula">
          <BlockMath math="\overrightarrow{E} = \frac{\overrightarrow{F}}{q_0}" />
        </div>

        <div className="formula">
          <BlockMath math="\overrightarrow{E} = \frac{1}{4\pi\epsilon_0} \frac{q}{r^2} \cdot \overrightarrow{r}" />
        </div>

        <div className="important-formula">
          <BlockMath math="E = \frac{1}{4\pi\epsilon_0} \frac{q}{r^2}" />
        </div>

        <div className="formula">
          <BlockMath math="E = \text{Constant} \frac{q}{r^2}" />
          <BlockMath math="E \propto \frac{1}{r^2}" />
        </div>

        <div className="conclusion">
          <p>Thus electric intensity is inversely proportional to the square of distance between the charges.</p>
        </div>
      </div>

      <style jsx>{`
        /* existing styles remain the same */
      `}</style>
    </div>
  );
};

export default Q7ElectricFieldIntensity;
