import fetchData from "../helpers/fetchData";

/** 
 *  @Description For fetching records
 *  @query 

*/

const HomepageCT = `
    #graphql
    query HomepageCT {
        CT {
            count
            Date
            PID
            Inpatient
            Age
            remark
            kV_A
            kV_b
            Pitch
            Route
            Type
            rate
            volume
           
            modeOfInjection
            monitoringDelay
            scanDelay
            monitoringInterval
            height   
            }
    }
`;

const HomepageProtocol = `
    #graphql
    query HomepageFilter {
      protocol {
        name
        id
      }
    }
`;

const HomepageFilteredRecord = `
    #graphql
    query HomepageFilteredRecord($protocols: [Float]) {
      CT(filter: { protocols: {protocol_id: {id: {_in: 156}}}}) {
        name
        id
      }
    }
`;

export const getHomepageCT = async () => {
  const data = await fetchData(HomepageCT, {
    variables: {},
  });

  return data.data.CT;
};

export const getHomepageProtocol = async () => {
  const data = await fetchData(HomepageProtocol, {
    variables: {},
  });

  return data.data.protocol;
};
