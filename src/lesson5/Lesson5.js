/**
 * @description The Lesson5 component.
 */
import React from 'react';
import PropTypes from 'prop-types';

import { ClassComponentExample } from "./1_refs-types/ClassComponentExample";
import { FunctionalComponentExample } from "./1_refs-types/FunctionalComponentExample";

import { FormExample as FormExampleDeclarative } from "./2_declarative-data-flow/FormExample";

import { FormExample as FormExampleImperative } from "./3_imperative-data-flow/FormExample";
import { DomApiExample } from "./3_imperative-data-flow/DomApiExample";
import { AnimationExample } from "./3_imperative-data-flow/AnimationExample";

import { ClassComponentWithRefExample } from "./4_refs-to-components/ClassComponentWithRefExample";
import { FunctionalComponentWithRefExample } from "./4_refs-to-components/FunctionalComponentWithRefExample";
import { FormExample as FormFunctionalComponentExample } from './4_refs-to-components/FormExample'
import { TextInputExample as TextInputFunctionalComponentExample } from './4_refs-to-components/TextInputExample'

import { IntervalExample } from './5_refs-as-this/IntervalExample'
import { PrevValueExample } from './5_refs-as-this/PrevValueExample'

export function Lesson5(props) {
  return (
    <>
      <AnimationExample />
    </>
  );
}

Lesson5.propTypes = {};

Lesson5.defaultProps = {};
