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
export const submitCaseContainer = (props) => {
  const [mutate] = useMutation(submitCaseMutation);
  const router = useRouter();
  async function submit(values) {
    const { data } = await mutate({
      variables: values,
    });
    if (data) {
      return data.submitCase;
    }
    return null;
  }
  function onFinish() {
    router.push("/");
  }
  return props.children({ submit, onFinish });
};
