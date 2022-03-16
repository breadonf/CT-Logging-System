import fetchData from "../helpers/fetchData";

/** 
 *  @Description For fetching records
 *  @query 

*/

const HomepageCT = `
    #graphql
    query HomePageCT($page: Int!) {
      CT (page:$page, limit: 100, sort: ["sort", "-Date"]){
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
const HomepageCTNumber = `
    #graphql
    query HomePageCT {

      CT_aggregated {
        countDistinct {
          count
        }
      }
    }
`;

// const HomepageCT = `
// query HomePageCT {
//   CT (offset:20, limit: 10, sort: ["sort", "-Date"]) {
//     count
//     remark

//   }
// }`;
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

export const getHomepageCT = async (page) => {
  const data = await fetchData(HomepageCT, {
    variables: { page: page },
  });

  return data.data.CT;
};

export const getHomepageCTNumber = async () => {
  const data = await fetchData(HomepageCTNumber, {
    variables: {},
  });

  return data.data.CT_aggregated[0].countDistinct.count;
};

export const getHomepageData = async () => {
  const data = await fetchData(HomepageData, {
    variables: {},
  });

  return data.data;
};
