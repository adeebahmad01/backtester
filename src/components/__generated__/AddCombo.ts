/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ComboInsertInput } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: AddCombo
// ====================================================

export interface AddCombo_insertOneCombo {
  __typename: "Combo";
  _id: any | null;
}

export interface AddCombo {
  insertOneCombo: AddCombo_insertOneCombo | null;
}

export interface AddComboVariables {
  combo: ComboInsertInput;
}
