import fetchData from "../helpers/fetchData";

/** 
 *  @Description For fetching records
 *  @query 

*/

const HomepageCT = `
    #graphql
    query HomePageCT($page: Int!) {
      CT (page:$page, limit: 25, sort: ["sort", "-count"]){
        Date
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
        ctdi
        examType
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
        
      }
      protocol {
        name
        
      }
      radiographers {
        
        name
      }
      nurses: Nurses  {
        
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

const ExamDetailsByID = `
    #graphql
    query ExamDetailsByID($ctByIdId: ID!) {
      CT_by_id(id:$ctByIdId) {
        Date
        Date_func {
          year
          month
          day
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
        ctdi
        examType
      }
    }
`;

const ExamsRecordBySearch = `
    #graphql
    query ExamsRecordBySearch( $key: String!) {
      CT (search:$key, sort: ["sort", "-count"]) {
        Date
        Date_func {
          year
          month
          day
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
        ctdi
        examType
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

export const getExamDetailsByID = async (ctByIdId) => {
  const data = await fetchData(ExamDetailsByID, {
    variables: { ctByIdId: ctByIdId },
  });

  return data.data;
};
export const getExamsRecordBySearch = async (key) => {
  const data = await fetchData(ExamsRecordBySearch, {
    variables: { key: key },
  });
  console.log(data);
  return data.data;
};
