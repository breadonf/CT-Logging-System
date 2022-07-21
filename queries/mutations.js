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
export const createCardiacCTrecord = `
mutation Mutation($data: create_cardiacCT_input!) {
  create_cardiacCT_item(data: $data) {
    id
    PID
  }
}
`;

export const updateCardiacCTSetupById = `
  mutation Mutation($updateCardiacCtItemId: ID!, $data: update_cardiacCT_input!) {
    update_cardiacCT_item(id: $updateCardiacCtItemId, data: $data) {
      id
      PID
    }
  }
`;

export const createMessage = `
mutation Mutation($data: create_message_input!) {
  create_message_item(data: $data) {
    id
  }
}
`;

export const updateMessageById = `
  mutation Mutation($updateMessageItemId: ID!, $data: update_Message_input!) {
    update_message_item(id: $updateMessageItemId, data: $data) {
      id
    }
  }
`;