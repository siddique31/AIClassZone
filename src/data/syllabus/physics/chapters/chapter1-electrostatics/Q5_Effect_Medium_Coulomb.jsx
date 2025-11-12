import React from 'react';
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';

const Q5EffectMediumCoulomb = () => {
  return (
    <div className="long-question">
      <h3>Q.5 What is the effect of medium on the Coulomb's force?</h3>
      
      <div className="answer">
        <h4>EFFECT OF MEDIUM BETWEEN THE TWO CHARGES UPON THE COULOMB'S FORCE</h4>
        
        <p>
          If the medium is an insulator, it is usually referred as dielectric. It has been found that the presence of a dielectric always reduces the electrostatic force as compared with that in free space by a certain factor which is a constant for the given dielectric. This constant is known as relative permittivity i.e., <BlockMath math="\epsilon_r" />. Thus the Coulomb's force in a medium of relative permittivity <BlockMath math="\epsilon_r" /> is given by:
        </p>

        <div className="formula">
          <BlockMath math="F_{med} = \frac{1}{4\pi\epsilon_0} \frac{q_1 q_2}{r^2}" />
        </div>
        
        <p>when air is placed between the same two charges then,</p>
        
        <div className="formula">
          <BlockMath math="F_{air} = \frac{1}{4\pi\epsilon_0} \frac{q_1 q_2}{r^2}" />
        </div>
        
        <p>Dividing (ii) by (i):</p>
        
        <div className="formula">
          <BlockMath math="\frac{F_{air}}{F_{med}} = \frac{1}{4\pi\epsilon_0} \frac{q_1 q_2}{r_2} \cdot \frac{q_1 q_2}{r_2}" />
        </div>

        <div className="table-section">
          <h5>Relative Permittivity of Various Materials</h5>
          <table>
            <thead>
              <tr>
                <th>Material</th>
                <th><BlockMath math="\epsilon_r" /></th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Vacuum</td><td>1</td></tr>
              <tr><td>Air (1 atm)</td><td>1.0006</td></tr>
              <tr><td>Ammonia (liquid)</td><td>22–25</td></tr>
              <tr><td>Bakelite</td><td>5–18</td></tr>
              <tr><td>Benzene</td><td>2.284</td></tr>
              <tr><td>Germanium</td><td>16</td></tr>
              <tr><td>Glass</td><td>4.8–10</td></tr>
              <tr><td>Mica</td><td>3–7.5</td></tr>
              <tr><td>Paraffined paper</td><td>2</td></tr>
              <tr><td>Plexiglas</td><td>3.40</td></tr>
              <tr><td>Rubber</td><td>2.94</td></tr>
              <tr><td>Teflon</td><td>2.1</td></tr>
              <tr><td>Transformer oil</td><td>2.1</td></tr>
              <tr><td>Water (distilled)</td><td>78.5</td></tr>
            </tbody>
          </table>
        </div>

        <div className="calculation">
          <p>As for all dielectrics <BlockMath math="\epsilon_r > 1" /> except for air which is 1. i.e., <BlockMath math="\epsilon_r = 1.0006" />.</p>
          
          <div className="important-formula">
            <BlockMath math="F_{med} = \frac{F_{air}}{\epsilon_r}" />
            <BlockMath math="\therefore F_{med} < F_{air}" />
          </div>
        </div>

        <div className="definition">
          <h5>Relative Permittivity</h5>
          <p>
            It is the ratio of force between the two charges placed in air to the force between the same two charges when a dielectric is placed between them. It has no unit.
          </p>
        </div>
      </div>

      <style jsx>{`
        /* existing CSS styles remain unchanged */
      `}</style>
    </div>
  );
};

export default Q5EffectMediumCoulomb;
