export const normalizeErrors = (errors) => {
    return errors.reduce((acc, val) => {
      acc[val.path] = val.message
      return acc
    }, {})
  }
  
  export const formatError = (error) =>
    error && error[0].toUpperCase() + error.slice(1)