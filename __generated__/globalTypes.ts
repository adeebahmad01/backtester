/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export interface ComboInsertInput {
  strategies?: (ComboStrategyInsertInput | null)[] | null;
  trade_action?: number | null;
  user_id?: string | null;
  _id?: any | null;
  html?: string | null;
  instrument?: string | null;
  points?: number | null;
}

export interface ComboStrategyInsertInput {
  operator?: string | null;
  indicator?: string | null;
  operand?: string | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
