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
        kV_a
        kV_b
        Pitch
        height
        Weight
        route
        type
        rate
        volume
        protocol
      }
    }
`;

const HomepageData = `
    #graphql
    query HomepageData {
      radiologists: Radiologists {
        name
        id
      }
      protocol {
        name
        id
      }
      radiographers {
        id
        name
      }
      nurses: Nurses  {
        id
        name
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

export const getHomepageData = async () => {
  const data = await fetchData(HomepageData, {
    variables: {},
  });

  return data.data;
};
