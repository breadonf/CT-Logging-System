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
        IR
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
        label
        value
      }
      protocol(limit: -1) {
        label
        value
        
      }
      radiographers {
        label
        value
      }
      nurses: Nurses  {
        
        label
        value
      }
    }
`;

const MessageData = `
    #graphql
    query MessageData {
      message {
        inputDate
        effectiveDate
        category
        inputUser
        originatedBy
        important
        active
        messageEditorState
        htmlMessage
        comments
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
        IR
      }
    }
`;

const CardiacSetupByID = `
    #graphql
    query CardiacSetupByID($cardiacCtByIdId: ID!) {
      cardiacCT_by_id(id: $cardiacCtByIdId) {
        id
        PID
        radiologistInCharge
        IVSite
        sedation
        breathingControl
        targetHR
        scanMode
        phase
        name
        date
        date_func {
          year
          day
          month
        }
      }
    }
`;

const MessageByID = `
    #graphql
    query MessageByID($MessageByIdId: ID!) {
      Message_by_id(id: $MessageByIdId) {
        id
        inputDate
        effectiveDate
        date_func {
          year
          day
          month
        }
        category
        inputUser
        originatedBy
        important
        active
        htmlMessage
        comments
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
        IR
  }
}
`;
const CardiacSetupRecordBySearch = `
    #graphql
    query CardiacSetupRecordBySearch($key: String) {
      cardiacCT(search: $key, sort: ["sort", "-id"]) {
        id
        user_created
        user_updated
        PID
        name
        date_func {
          year
          month
          day
        }
        radiologistInCharge
        sedation
        breathingControl
        IVSite
        scanMode
        phase
        targetHR
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

export const getMessageData = async () => {
  const data = await fetchData(MessageData, {
    variables: {},
  });
  return data.data.message;
};

export const getExamDetailsByID = async (ctByIdId) => {
  const data = await fetchData(ExamDetailsByID, {
    variables: { ctByIdId: ctByIdId },
  });

  return data.data;
};
export const getCardiacSetupByID = async (cardiacCtByIdId) => {
  const data = await fetchData(CardiacSetupByID, {
    variables: { cardiacCtByIdId: cardiacCtByIdId },
  });

  return data.data;
};
export const getMessageByID = async (MessageByIdId) => {
  const data = await fetchData(MessageByID, {
    variables: { MessageByIdId: MessageByIdId },
  });

  return data.data;
};
export const getExamsRecordBySearch = async (key) => {
  const data = await fetchData(ExamsRecordBySearch, {
    variables: { key: key },
  });
  console.log("in queries", data);
  return data.data;
};

export const getCardiacSetupRecordBySearch = async (key) => {
  const data = await fetchData(CardiacSetupRecordBySearch, {
    variables: { key: key },
  });
  return data.data;
};
