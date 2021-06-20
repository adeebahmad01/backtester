import React from "react";
import { useMutation, useQuery } from "@apollo/client";
import { Button, FormControl, FormLabel } from "@material-ui/core";
import gql from "graphql-tag";
import { TradeActionSelectQuery } from "./__generated__/TradeActionSelectQuery";
import Loader from "./utils/Loader";

function TradeActionButton({ data }: { data: string | null }) {
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={() => {
        console.log("post combo form to database");
      }}
    >
      {data}
    </Button>
  );
}

export default function TradeActionSelect() {
  const [f] = useMutation(gql`
    mutation AddCombo($combo: ComboInsertInput!) {
      insertOneCombo(data: $combo) {
        _id
      }
    }
  `);

  const { loading, error, data } = useQuery<TradeActionSelectQuery>(gql`
    query TradeActionSelectQuery {
      frontend {
        tradeActions
      }
      comboStrategies @client {
        indicator @client
        operand @client
        operator @client
      }
    }
  `);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>error</div>;
  }

  const isComboStrategiesEmpty = data?.comboStrategies.every(
    (f) => !f?.indicator && !f?.operator && !f?.operand
  );

  return (
    <>
      {!isComboStrategiesEmpty && (
        <FormControl component="fieldset">
          <FormLabel component="legend">Trade Action</FormLabel>
          {data?.frontend?.tradeActions?.map((f, index) => (
            <TradeActionButton data={f} key={`${index}`} />
          ))}
        </FormControl>
      )}
    </>
  );
}
