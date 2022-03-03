import fetchData from "../helpers/fetchData";

/** 
 *  @Description For fetching records
 *  @query 

*/

const HomepageCT = `
    #graphql
    query HomePageCT {
      CT {
        Date_func {
          year
          day
          month
        }
        count
        remark
        rate
        volume
        kV_a
        sedation
        injectionSite
        circumference
        urgent
        directPostContrast
        handInjection
        mixedContrast
        keywords
        PID
        radiographers
        radiologists
        nurses
        protocol
        pitch
        height
        weight
        ttp
        age
        inPatient
        kV_b
        delays
        contrastType
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
