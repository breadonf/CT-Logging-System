// need custom date scalar?
// change type to contrastType?
export const createCTrecord = `
  mutation Mutation($data: create_CT_input!) {
    create_CT_item(data: $data) {
      PID
    Date_func {
      year
      month
      day
    }
  }
}
`;

export const updateCTRecordById = `
  mutation Mutation($updateCtItemId: ID!, $data: update_CT_input!) {
    update_CT_item(id: $updateCtItemId, data: $data) {
      count
      PID
      protocol
      status
    }
  }
`;
