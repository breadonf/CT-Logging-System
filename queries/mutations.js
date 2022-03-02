import { useMutation } from "react-query";
import { useRouter } from "next/router";
// need custom date scalar?
// change type to contrastType?
export const createCTrecord = `
  mutation Mutation($data: create_CT_input!) {
    create_CT_item(data: $data) {
      count
      PID
      protocol
      status
    }
  }
`;