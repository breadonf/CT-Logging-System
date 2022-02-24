import { useMutation } from 'react-query'

const graphQLAPI = process.env.NEXT_PUBLIC_GRAPHQL;

const SubmitCase = () => {
    const mutation = useMutation(newCase => {
        return axios.post(graphQLAPI, newCase)
    })

    return 
}