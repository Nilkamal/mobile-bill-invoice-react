import { gql } from "apollo-boost";

export const getBillsQuery = gql`
  {
    bills {
      id
      customerName
      date
      modelNumber
      billNumber
    }
  }
`;

export const addBillMutation = gql`
  mutation(
    $billNumber: String!,
    $date: String!,
    $customerName: String!,
    $address: String!,
    $modelNumber: String!,
    $imeiNumber: String!,
    $chargerNumber: String!,
    $warrenty: String!,
    $amount: Int!,
  ) {
    addBill(
      billNumber: $billNumber,
      date: $date,
      customerName: $customerName,
      address: $address,
      modelNumber: $modelNumber,
      imeiNumber: $imeiNumber,
      chargerNumber: $chargerNumber,
      warrenty: $warrenty,
      amount: $amount
    ) {
      id
    }
  }
`;
