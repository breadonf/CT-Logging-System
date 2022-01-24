import fetchData from "../helpers/fetchData";

/** 
 *  @Description For fetching records
 *  @query 

*/

const HomepageCT = `
    #graphql
    query HomePageCT {
      CT {
        count
        Date_func {
          year
          month
          day
        }
        PID
        Inpatient
        Age
        remark
        kV_A
        kV_b
        Pitch
        Height
        Weight
        Route
        Type
        rate
        volume
        protocol
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
