exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("banknotes")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("banknotes").insert([
        {
          ctry_id: 1,
          catalog_no: "151A",
          denomination: 5,
          currency: "Kwanzas",
          issue_date: "2012",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Angola-151A-5Kwanza-10-2012.jpg"
        },
        {
          ctry_id: 1,
          catalog_no: "151B",
          denomination: 10,
          currency: "Kwanzas",
          issue_date: "2012",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Angola-151B-10Kwanzas-10-2012.jpg"
        },
        {
          ctry_id: 1,
          catalog_no: "152",
          denomination: 50,
          currency: "Kwanzas",
          issue_date: "2012",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Angola-152-50Kwanzas-10-2010.jpg"
        },
        {
          ctry_id: 1,
          catalog_no: "153",
          denomination: 100,
          currency: "Kwanzas",
          issue_date: "2012",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Angola-153-100Kwanzas-10-2012.jpg"
        },
        {
          ctry_id: 1,
          catalog_no: "154",
          denomination: 200,
          currency: "Kwanzas",
          issue_date: "2012",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Angola-154-200Kwanzas-10-2012.jpg"
        },
        {
          ctry_id: 1,
          catalog_no: "155",
          denomination: 500,
          currency: "Kwanzas",
          issue_date: "2012",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Angola-155-500Kwanzas-10-2012.jpg"
        },
        {
          ctry_id: 1,
          catalog_no: "156",
          denomination: 1000,
          currency: "Kwanzas",
          issue_date: "2012",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Angola-156-1000Kwanzas-10-2012.jpg"
        },
        {
          ctry_id: 1,
          catalog_no: "157",
          denomination: 2000,
          currency: "Kwanzas",
          issue_date: "2012",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Angola-157-2000Kwanzas-10-2012.jpg"
        },
        {
          ctry_id: 1,
          catalog_no: "158",
          denomination: 5000,
          currency: "Kwanzas",
          issue_date: "2012",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Angola-158-5000Kwanzas-10-2012.jpg"
        },
        {
          ctry_id: 2,
          catalog_no: "359",
          denomination: 5,
          currency: "Pesos",
          issue_date: "ND-2015",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Argentina-359-5Pesos-2015.jpg"
        },
        {
          ctry_id: 2,
          catalog_no: "360",
          denomination: 10,
          currency: "Pesos",
          issue_date: "2016",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Argentina-360-10Pesos-2016.jpg"
        },
        {
          ctry_id: 2,
          catalog_no: "361",
          denomination: 20,
          currency: "Pesos",
          issue_date: "2017",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Argentina-361-20Pesos-2017.jpg"
        },
        {
          ctry_id: 2,
          catalog_no: "362",
          denomination: 50,
          currency: "Pesos",
          issue_date: "2018",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Argentina-362-50Pesos-2018.jpg"
        },
        {
          ctry_id: 2,
          catalog_no: "363",
          denomination: 100,
          currency: "Pesos",
          issue_date: "2018",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Argentina-363-100Pesos-2018.jpg"
        },
        {
          ctry_id: 2,
          catalog_no: "364",
          denomination: 200,
          currency: "Pesos",
          issue_date: "2016",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Argentina-364-200Pesos-2016.jpg"
        },
        {
          ctry_id: 2,
          catalog_no: "365",
          denomination: 500,
          currency: "Pesos",
          issue_date: "2016",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Argentina-365-500Pesos-2016.jpg"
        },
        {
          ctry_id: 3,
          catalog_no: "New",
          denomination: 1000,
          currency: "Dram",
          issue_date: "2018",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Armenia-New-1000Dram-2018.jpg"
        },
        {
          ctry_id: 3,
          catalog_no: "New",
          denomination: 2000,
          currency: "Dram",
          issue_date: "2018",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Armenia-New-2000Dram-2018.jpg"
        },
        {
          ctry_id: 3,
          catalog_no: "New",
          denomination: 5000,
          currency: "Dram",
          issue_date: "2018",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Armenia-New-5000Dram-2018.jpg"
        },
        {
          ctry_id: 3,
          catalog_no: "New",
          denomination: 10000,
          currency: "Dram",
          issue_date: "2018",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Armenia-New-10000Dram-2018.jpg"
        },
        {
          ctry_id: 3,
          catalog_no: "New",
          denomination: 20000,
          currency: "Dram",
          issue_date: "2018",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Armenia-New-10000Dram-2018.jpg"
        },
        {
          ctry_id: 4,
          catalog_no: "73",
          denomination: 2,
          currency: "Dollars",
          issue_date: "02-05-2013",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Barbados-73-2Dollars-02-05-2013.jpg"
        },
        {
          ctry_id: 4,
          catalog_no: "74",
          denomination: 5,
          currency: "Dollars",
          issue_date: "02-05-2013",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Barbados-74-5Dollars-02-05-2013.jpg"
        },
        {
          ctry_id: 4,
          catalog_no: "75",
          denomination: 10,
          currency: "Dollars",
          issue_date: "02-05-2013",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Barbados-75-10Dollars-02-05-2013.jpg"
        },
        {
          ctry_id: 4,
          catalog_no: "76",
          denomination: 20,
          currency: "Dollars",
          issue_date: "02-05-2013",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Barbados-76-20Dollars-02-05-2013.jpg"
        },
        {
          ctry_id: 4,
          catalog_no: "77",
          denomination: 50,
          currency: "Dollars",
          issue_date: "02-05-2013",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Barbados-77-50Dollars-02-05-2013.jpg"
        },
        {
          ctry_id: 4,
          catalog_no: "78",
          denomination: 100,
          currency: "Dollars",
          issue_date: "02-05-2013",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Barbados-78-100Dollars-02-05-2013.jpg"
        },
        {
          ctry_id: 5,
          catalog_no: "66e",
          denomination: 2,
          currency: "Dollars",
          issue_date: "01-11-2014",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Belize-66e-2Dollars-01-11-2014.jpg"
        },
        {
          ctry_id: 5,
          catalog_no: "67f",
          denomination: 5,
          currency: "Dollars",
          issue_date: "01-12-2015",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Belize-67f-5Dollars-01-12-2015.jpg"
        },
        {
          ctry_id: 5,
          catalog_no: "68e",
          denomination: 10,
          currency: "Dollars",
          issue_date: "01-05-2016",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Belize-68e-10Dollars-01-05-2016.jpg"
        },
        {
          ctry_id: 5,
          catalog_no: "69e",
          denomination: 20,
          currency: "Dollars",
          issue_date: "01-01-2014",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Belize-69e-20Dollars-01-01-2014.jpg"
        },
        {
          ctry_id: 5,
          catalog_no: "70e",
          denomination: 50,
          currency: "Dollars",
          issue_date: "01-11-2014",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Belize-70e-50Dollars-01-11-2014.jpg"
        },
        {
          ctry_id: 5,
          catalog_no: "71c",
          denomination: 100,
          currency: "Dollars",
          issue_date: "01-05-2016",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Belize-71c-100Dollars-01-05-2016.jpg"
        },
        {
          ctry_id: 6,
          catalog_no: "57b",
          denomination: 2,
          currency: "Dollars",
          issue_date: "ND-2013",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Bermuda-57b-2Dollars-ND-2013.jpg"
        },
        {
          ctry_id: 6,
          catalog_no: "58",
          denomination: 5,
          currency: "Dollars",
          issue_date: "ND-2009",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Bermuda-58-5Dollars-ND-2009.jpg"
        },
        {
          ctry_id: 6,
          catalog_no: "59",
          denomination: 10,
          currency: "Dollars",
          issue_date: "ND-2009",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Bermuda-59-10Dollars-ND-2009.jpg"
        },
        {
          ctry_id: 6,
          catalog_no: "60",
          denomination: 20,
          currency: "Dollars",
          issue_date: "ND-2009",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Bermuda-60-20Dollars-ND-2009.jpg"
        },
        {
          ctry_id: 6,
          catalog_no: "61A",
          denomination: 50,
          currency: "Dollars",
          issue_date: "ND-2013",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Bermuda-61A-50Dollars-ND-2013.jpg"
        },
        {
          ctry_id: 6,
          catalog_no: "62",
          denomination: 100,
          currency: "Dollars",
          issue_date: "ND-2009",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Bermuda-62-100Dollars-ND-2009.jpg"
        },
        {
          ctry_id: 7,
          catalog_no: "50",
          denomination: 500,
          currency: "Francs",
          issue_date: "15-01-2015",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Burundi-50-500Francs-15-01-2015.jpg"
        },
        {
          ctry_id: 7,
          catalog_no: "51",
          denomination: 1000,
          currency: "Francs",
          issue_date: "15-01-2015",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Burundi-51-1000Francs-15-01-2015.jpg"
        },
        {
          ctry_id: 7,
          catalog_no: "52",
          denomination: 2000,
          currency: "Francs",
          issue_date: "15-01-2015",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Burundi-52-2000Francs-15-01-2015.jpg"
        },
        {
          ctry_id: 7,
          catalog_no: "53",
          denomination: 5000,
          currency: "Francs",
          issue_date: "15-01-2015",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Burundi-53-5000Francs-15-01-2015.jpg"
        },
        {
          ctry_id: 7,
          catalog_no: "54",
          denomination: 10000,
          currency: "Francs",
          issue_date: "15-01-2015",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Burundi-54-10000Francs-15-01-2015.jpg"
        },
        {
          ctry_id: 8,
          catalog_no: "66",
          denomination: 2000,
          currency: "Escudos",
          issue_date: "01-07-1999",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/CapeVerde-66-2000Escudos-01-07-1999.jpg"
        },
        {
          ctry_id: 8,
          catalog_no: "67",
          denomination: 5000,
          currency: "Escudos",
          issue_date: "05-07-2000",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/CapeVerde-67-5000Escudos-05-07-2000.jpg"
        },
        {
          ctry_id: 8,
          catalog_no: "68",
          denomination: 200,
          currency: "Escudos",
          issue_date: "20-1-2005",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/CapeVerde-68-200Escudos-20-1-2005.jpg"
        },
        {
          ctry_id: 8,
          catalog_no: "69",
          denomination: 500,
          currency: "Escudos",
          issue_date: "25-2-2007",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/CapeVerde-69-500Escudos-25-2-2007.jpg"
        },
        {
          ctry_id: 8,
          catalog_no: "70",
          denomination: 1000,
          currency: "Escudos",
          issue_date: "25-9-2007",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/CapeVerde-70-1000Escudos-25-9-2007.jpg"
        },
        {
          ctry_id: 9,
          catalog_no: "106T",
          denomination: 500,
          currency: "Francs",
          issue_date: "2002",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/CentralAfricanStates-Congo-106T-500Francs-2002.jpg"
        },
        {
          ctry_id: 9,
          catalog_no: "107T",
          denomination: 1000,
          currency: "Francs",
          issue_date: "2002",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/CentralAfricanStates-Congo-107T-1000Francs-2002.jpg"
        },
        {
          ctry_id: 9,
          catalog_no: "109T",
          denomination: 5000,
          currency: "Francs",
          issue_date: "2002",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/CentralAfricanStates-Congo-109T-5000Francs-2002.jpg"
        },
        {
          ctry_id: 9,
          catalog_no: "110T",
          denomination: 10000,
          currency: "Francs",
          issue_date: "2002",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/CentralAfricanStates-Congo-110T-10000Francs-2002.jpg"
        },
        {
          ctry_id: 10,
          catalog_no: "407g",
          denomination: 10,
          currency: "Pesos Oro",
          issue_date: "07-08-1980",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Colombia-407g-10PesosOro-07-08-1980.jpg"
        },
        {
          ctry_id: 10,
          catalog_no: "409d",
          denomination: 20,
          currency: "Pesos Oro",
          issue_date: "01-01-1982",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Colombia-409d-20PesosOro-01-01-1982.jpg"
        },
        {
          ctry_id: 10,
          catalog_no: "425b",
          denomination: 50,
          currency: "Pesos Oro",
          issue_date: "01-01-1986",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Colombia-425b-50PesosOro-01-01-1986.jpg"
        },
        {
          ctry_id: 10,
          catalog_no: "426e",
          denomination: 100,
          currency: "Pesos Oro",
          issue_date: "01-01-1990",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Colombia-426e-100PesosOro-01-01-1990.jpg"
        },
        {
          ctry_id: 10,
          catalog_no: "429A",
          denomination: 200,
          currency: "Pesos Oro",
          issue_date: "10-08-1992",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Colombia-429A-200PesosOro-10-08-1992.jpg"
        },
        {
          ctry_id: 10,
          catalog_no: "431A",
          denomination: 500,
          currency: "Pesos Oro",
          issue_date: "04-01-1993",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Colombia-431A-500PesosOro-04-01-1993.jpg"
        },
        {
          ctry_id: 10,
          catalog_no: "433A",
          denomination: 2000,
          currency: "Pesos Oro",
          issue_date: "02-03-1992",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Colombia-433A-2000PesosOro-02-03-1992.jpg"
        },
        {
          ctry_id: 10,
          catalog_no: "436A",
          denomination: 5000,
          currency: "Pesos Oro",
          issue_date: "04-01-1993",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Colombia-436A-5000PesosOro-04-01-1993.jpg"
        },
        {
          ctry_id: 10,
          catalog_no: "437",
          denomination: 10000,
          currency: "Pesos Oro",
          issue_date: "1992",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Colombia-437-10000PesosOro-1992.jpg"
        },
        {
          ctry_id: 10,
          catalog_no: "438",
          denomination: 1000,
          currency: "Pesos Oro",
          issue_date: "03-01-1994",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Colombia-438-1000PesosOro-03-01-1994.jpg"
        },
        {
          ctry_id: 11,
          catalog_no: "15b",
          denomination: 500,
          currency: "Francs",
          issue_date: "2006-2012",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Comoros-15b-500Francs-2006-2012.jpg"
        },
        {
          ctry_id: 11,
          catalog_no: "16",
          denomination: 1000,
          currency: "Francs",
          issue_date: "2005",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Comoros-16-1000Francs-2005.jpg"
        },
        {
          ctry_id: 11,
          catalog_no: "17",
          denomination: 2000,
          currency: "Francs",
          issue_date: "2005",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Comoros-17-2000Francs-2005.jpg"
        },
        {
          ctry_id: 11,
          catalog_no: "18b",
          denomination: 5000,
          currency: "Francs",
          issue_date: "2006",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Comoros-18b-5000Francs-2006.jpg"
        },
        {
          ctry_id: 11,
          catalog_no: "19",
          denomination: 10000,
          currency: "Francs",
          issue_date: "2006",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Comoros-19-10000Francs-2006.jpg"
        },
        {
          ctry_id: 12,
          catalog_no: "189b",
          denomination: 50,
          currency: "Pesos Dominicanos",
          issue_date: "2015",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/DominicanRepublic-189b-50PesosDominicanos-2015.jpg"
        },
        {
          ctry_id: 12,
          catalog_no: "190c",
          denomination: 100,
          currency: "Pesos Dominicanos",
          issue_date: "2017",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/DominicanRepublic-190c-100PesosDominicanos-2017.jpg"
        },
        {
          ctry_id: 12,
          catalog_no: "191a",
          denomination: 200,
          currency: "Pesos Dominicanos",
          issue_date: "2014",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/DominicanRepublic-191a-200PesosDominicanos-2014.jpg"
        },
        {
          ctry_id: 12,
          catalog_no: "192",
          denomination: 500,
          currency: "Pesos Dominicanos",
          issue_date: "2014",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/DominicanRepublic-192-500PesosDominicanos-2014.jpg"
        },
        {
          ctry_id: 12,
          catalog_no: "193",
          denomination: 1000,
          currency: "Pesos Dominicanos",
          issue_date: "2014",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/DominicanRepublic-193-1000PesosDominicanos-2014.jpg"
        },
        {
          ctry_id: 13,
          catalog_no: "63e",
          denomination: 5,
          currency: "Pounds",
          issue_date: "2013-06-20",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Egypt-63e-5Pounds-2013-06-20.jpg"
        },
        {
          ctry_id: 13,
          catalog_no: "64d",
          denomination: 10,
          currency: "Pounds",
          issue_date: "2014-06-23",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Egypt-64d-10Pounds-2014-06-23.jpg"
        },
        {
          ctry_id: 13,
          catalog_no: "65j",
          denomination: 20,
          currency: "Pounds",
          issue_date: "2014-03-10",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Egypt-65j-20Pounds-2014-03-10.jpg"
        },
        {
          ctry_id: 13,
          catalog_no: "66k",
          denomination: 50,
          currency: "Pounds",
          issue_date: "2013-06-17",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Egypt-66k-50Pounds-2013-06-17.jpg"
        },
        {
          ctry_id: 13,
          catalog_no: "72a",
          denomination: 100,
          currency: "Pounds",
          issue_date: "2015-19-04",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Egypt-72a-100Pounds-2015-19-04.jpg"
        },
        {
          ctry_id: 13,
          catalog_no: "75b",
          denomination: 200,
          currency: "Pounds",
          issue_date: "2015-15-06",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Egypt-75b-200Pounds-2015-15-06.jpg"
        },
        {
          ctry_id: 14,
          catalog_no: "47e",
          denomination: 5,
          currency: "Birr",
          issue_date: "2000-2008",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Ethiopia-47e-5Birr-2000-2008.jpg"
        },
        {
          ctry_id: 14,
          catalog_no: "47g",
          denomination: 5,
          currency: "Birr",
          issue_date: "2007-2015",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Ethiopia-47g-5Birr-2007-2015.jpg"
        },
        {
          ctry_id: 14,
          catalog_no: "48g",
          denomination: 10,
          currency: "Birr",
          issue_date: "2009-2017",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Ethiopia-48g-10Birr-2009-2017.jpg"
        },
        {
          ctry_id: 14,
          catalog_no: "51f",
          denomination: 50,
          currency: "Birr",
          issue_date: "2004-2012",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Ethiopia-51f-50Birr-2004-2012.jpg"
        },
        {
          ctry_id: 14,
          catalog_no: "52f",
          denomination: 100,
          currency: "Birr",
          issue_date: "2004-2012",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Ethiopia-52f-100Birr-2004-2012.jpg"
        },
        {
          ctry_id: 15,
          catalog_no: "115",
          denomination: 5,
          currency: "Dollars",
          issue_date: "ND-2013",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Fiji-115-5Dollars-ND-2013.jpg"
        },
        {
          ctry_id: 15,
          catalog_no: "116",
          denomination: 10,
          currency: "Dollars",
          issue_date: "ND-2013",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Fiji-116-10Dollars-ND-2013.jpg"
        },
        {
          ctry_id: 15,
          catalog_no: "117",
          denomination: 20,
          currency: "Dollars",
          issue_date: "ND-2013",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Fiji-117-20Dollars-ND-2013.jpg"
        },
        {
          ctry_id: 15,
          catalog_no: "118",
          denomination: 50,
          currency: "Dollars",
          issue_date: "ND-2013",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Fiji-118-50Dollars-ND-2013.jpg"
        },
        {
          ctry_id: 15,
          catalog_no: "119",
          denomination: 100,
          currency: "Dollars",
          issue_date: "ND-2013",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Fiji-119-100Dollars-ND-2013.jpg"
        },
        {
          ctry_id: 16,
          catalog_no: "68a",
          denomination: 1,
          currency: "Lari",
          issue_date: "2002",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Georgia-68a-1Lari-2002.jpg"
        },
        {
          ctry_id: 16,
          catalog_no: "70d",
          denomination: 5,
          currency: "Lari",
          issue_date: "2013",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Georgia-70d-5Lari-2013.jpg"
        },
        {
          ctry_id: 16,
          catalog_no: "71d",
          denomination: 10,
          currency: "Lari",
          issue_date: "2012",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Georgia-71d-10Lari-2012.jpg"
        },
        {
          ctry_id: 16,
          catalog_no: "72d",
          denomination: 20,
          currency: "Lari",
          issue_date: "2013",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Georgia-72d-20Lari-2013.jpg"
        },
        {
          ctry_id: 16,
          catalog_no: "76",
          denomination: 5,
          currency: "Lari",
          issue_date: "2017",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Georgia-76-5Lari-2017.jpg"
        },
        {
          ctry_id: 16,
          catalog_no: "78",
          denomination: 20,
          currency: "Lari",
          issue_date: "2016",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Georgia-78-20Lari-2016.jpg"
        },
        {
          ctry_id: 16,
          catalog_no: "79",
          denomination: 50,
          currency: "Lari",
          issue_date: "2016",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Georgia-79-50Lari-2016.jpg"
        },
        {
          ctry_id: 16,
          catalog_no: "80",
          denomination: 100,
          currency: "Lari",
          issue_date: "2015",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Georgia-80-100Lari-2015.jpg"
        },
        {
          ctry_id: 17,
          catalog_no: "113b",
          denomination: 50,
          currency: "Quetzales",
          issue_date: "17-1-2007",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Guatemala-113b-50Quetzales-17-1-2007.jpg"
        },
        {
          ctry_id: 17,
          catalog_no: "115a",
          denomination: 1,
          currency: "Quetzal",
          issue_date: "12-03-2008",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Guatemala-115a-1Quetzal-12-03-2008.jpg"
        },
        {
          ctry_id: 17,
          catalog_no: "116",
          denomination: 5,
          currency: "Quetzales",
          issue_date: "12-03-2008",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Guatemala-116-5Quetzales-12-03-2008.jpg"
        },
        {
          ctry_id: 17,
          catalog_no: "117",
          denomination: 10,
          currency: "Quetzales",
          issue_date: "12-03-2008",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Guatemala-117-10Quetzales-12-03-2008.jpg"
        },
        {
          ctry_id: 17,
          catalog_no: "118",
          denomination: 20,
          currency: "Quetzales",
          issue_date: "12-03-2008",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Guatemala-118-20Quetzales-12-03-2008.jpg"
        },
        {
          ctry_id: 17,
          catalog_no: "120",
          denomination: 200,
          currency: "Quetzales",
          issue_date: "18-2-2009",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Guatemala-120-200Quetzales-18-2-2009.jpg"
        },
        {
          ctry_id: 17,
          catalog_no: "126a",
          denomination: 100,
          currency: "Quetzales",
          issue_date: "19-5-2010",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Guatemala-126a-100Quetzales-19-5-2010.jpg"
        },
        {
          ctry_id: 18,
          catalog_no: "266e",
          denomination: 25,
          currency: "Gourdes",
          issue_date: "2014",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Haiti-266e-25Gourdes-2014.jpg"
        },
        {
          ctry_id: 18,
          catalog_no: "272e",
          denomination: 10,
          currency: "Gourdes",
          issue_date: "2012",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Haiti-272e-10Gourdes-2012.jpg"
        },
        {
          ctry_id: 18,
          catalog_no: "274e",
          denomination: 50,
          currency: "Gourdes",
          issue_date: "2014",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Haiti-274e-50Gourdes-2014.jpg"
        },
        {
          ctry_id: 18,
          catalog_no: "275f",
          denomination: 100,
          currency: "Gourdes",
          issue_date: "2016",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Haiti-275f-100Gourdes-2016.jpg"
        },
        {
          ctry_id: 18,
          catalog_no: "276g",
          denomination: 250,
          currency: "Gourdes",
          issue_date: "2016",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Haiti-276g-250Gourdes-2016.jpg"
        },
        {
          ctry_id: 18,
          catalog_no: "277f",
          denomination: 500,
          currency: "Gourdes",
          issue_date: "2016",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Haiti-277f-500Gourdes-2016.jpg"
        },
        {
          ctry_id: 19,
          catalog_no: "341d",
          denomination: 20,
          currency: "Dollars",
          issue_date: "01-01-2014",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/HongKong-BOC-341d-20Dollars-01-01-2014.jpg"
        },
        {
          ctry_id: 19,
          catalog_no: "342d",
          denomination: 50,
          currency: "Dollars",
          issue_date: "01-01-2014",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/HongKong-BOC-342d-50Dollars-01-01-2014.jpg"
        },
        {
          ctry_id: 19,
          catalog_no: "343d",
          denomination: 100,
          currency: "Dollars",
          issue_date: "01-01-2014",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/HongKong-BOC-343d-100Dollars-01-01-2014.jpg"
        },
        {
          ctry_id: 19,
          catalog_no: "344c",
          denomination: 500,
          currency: "Dollars",
          issue_date: "01-01-2014",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/HongKong-BOC-344c-500Dollars-01-01-2014.jpg"
        },
        {
          ctry_id: 19,
          catalog_no: "345d",
          denomination: 1000,
          currency: "Dollars",
          issue_date: "01-01-2014",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/HongKong-BOC-345d-1000Dollars-01-01-2014.jpg"
        },
        {
          ctry_id: 20,
          catalog_no: "104c",
          denomination: 50,
          currency: "Rupees",
          issue_date: "2014",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/India-104c-50Rupees-2014.jpg"
        },
        {
          ctry_id: 20,
          catalog_no: "105f",
          denomination: 100,
          currency: "Rupees",
          issue_date: "2014",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/India-105f-100Rupees-2014.jpg"
        },
        {
          ctry_id: 20,
          catalog_no: "106c",
          denomination: 500,
          currency: "Rupees",
          issue_date: "2014",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/India-106c-500Rupees-2014.jpg"
        },
        {
          ctry_id: 20,
          catalog_no: "107b",
          denomination: 1000,
          currency: "Rupees",
          issue_date: "2014",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/India-107b-1000Rupees-2014.jpg"
        },
        {
          ctry_id: 21,
          catalog_no: "85k",
          denomination: 500,
          currency: "Dollars",
          issue_date: "01-06-2017",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Jamaica-85k-500Dollars-01-06-2017.jpg"
        },
        {
          ctry_id: 21,
          catalog_no: "86j",
          denomination: 1000,
          currency: "Dollars",
          issue_date: "01-01-2014",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Jamaica-86j-1000Dollars-01-01-2014.jpg"
        },
        {
          ctry_id: 21,
          catalog_no: "94b",
          denomination: 50,
          currency: "Dollars",
          issue_date: "01-06-2017",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Jamaica-94b-50Dollars-01-06-2017.jpg"
        },
        {
          ctry_id: 21,
          catalog_no: "95b",
          denomination: 100,
          currency: "Dollars",
          issue_date: "01-06-2016",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Jamaica-95b-100Dollars-01-06-2016.jpg"
        },
        {
          ctry_id: 22,
          catalog_no: "28",
          denomination: 200,
          currency: "Tenge",
          issue_date: "2006",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Kazakhstan-28-200Tenge-2006.jpg"
        },
        {
          ctry_id: 22,
          catalog_no: "41",
          denomination: 2000,
          currency: "Tenge",
          issue_date: "2012",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Kazakhstan-41-2000Tenge-2012.jpg"
        },
        {
          ctry_id: 22,
          catalog_no: "45a",
          denomination: 1000,
          currency: "Tenge",
          issue_date: "2014",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Kazakhstan-45a-1000Tenge-2014.jpg"
        },
        {
          ctry_id: 22,
          catalog_no: "47",
          denomination: 10000,
          currency: "Tenge",
          issue_date: "2016",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Kazakhstan-47-10000Tenge-2016.jpg"
        },
        {
          ctry_id: 22,
          catalog_no: "48",
          denomination: 500,
          currency: "Tenge",
          issue_date: "2017",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Kazakhstan-48-500Tenge-2017.jpg"
        },
        {
          ctry_id: 23,
          catalog_no: "48e",
          denomination: 100,
          currency: "Shillings",
          issue_date: "16-7-2010",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Kenya-48e-100Shillings-16-7-2010.jpg"
        },
        {
          ctry_id: 23,
          catalog_no: "49e",
          denomination: 200,
          currency: "Shillings",
          issue_date: "16-7-2010",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Kenya-49e-200Shillings-16-7-2010.jpg"
        },
        {
          ctry_id: 23,
          catalog_no: "50a",
          denomination: 50,
          currency: "Shillings",
          issue_date: "16-7-2010",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Kenya-50a-50Shillings-16-7-2010.jpg"
        },
        {
          ctry_id: 23,
          catalog_no: "50e",
          denomination: 500,
          currency: "Shillings",
          issue_date: "16-7-2010",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Kenya-50e-500Shillings-16-7-2010.jpg"
        },
        {
          ctry_id: 23,
          catalog_no: "51e",
          denomination: 1000,
          currency: "Shillings",
          issue_date: "16-7-2010",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Kenya-51e-1000Shillings-16-7-2010.jpg"
        },
        {
          ctry_id: 24,
          catalog_no: "24",
          denomination: 20,
          currency: "Som",
          issue_date: "2009",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Kyrgyzstan-24-20Som-2009.jpg"
        },
        {
          ctry_id: 24,
          catalog_no: "25b",
          denomination: 50,
          currency: "Som",
          issue_date: "2016",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Kyrgyzstan-25b-50Som-2016.jpg"
        },
        {
          ctry_id: 24,
          catalog_no: "26b",
          denomination: 100,
          currency: "Som",
          issue_date: "2016",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Kyrgyzstan-26b-100Som-2016.jpg"
        },
        {
          ctry_id: 24,
          catalog_no: "27b",
          denomination: 200,
          currency: "Som",
          issue_date: "2016",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Kyrgyzstan-27b-200Som-2016.jpg"
        },
        {
          ctry_id: 25,
          catalog_no: "31",
          denomination: 5,
          currency: "Dollars",
          issue_date: "2016",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Liberia-31-5Dollars-2016.jpg"
        },
        {
          ctry_id: 25,
          catalog_no: "32",
          denomination: 10,
          currency: "Dollars",
          issue_date: "2016",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Liberia-32-10Dollars-2016.jpg"
        },
        {
          ctry_id: 25,
          catalog_no: "33",
          denomination: 20,
          currency: "Dollars",
          issue_date: "2016",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Liberia-33-20Dollars-2016.jpg"
        },
        {
          ctry_id: 25,
          catalog_no: "34",
          denomination: 50,
          currency: "Dollars",
          issue_date: "2016",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Liberia-34-50Dollars-2016.jpg"
        },
        {
          ctry_id: 25,
          catalog_no: "35",
          denomination: 100,
          currency: "Dollars",
          issue_date: "2016",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Liberia-35-100Dollars-2016.jpg"
        },
        {
          ctry_id: 25,
          catalog_no: "36",
          denomination: 500,
          currency: "Dollars",
          issue_date: "2016",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Liberia-36-500Dollars-2016.jpg"
        },
        {
          ctry_id: 26,
          catalog_no: "14d",
          denomination: 10,
          currency: "Denari",
          issue_date: "2003",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Macedonia-14d-10Denari-2003.jpg"
        },
        {
          ctry_id: 26,
          catalog_no: "15e",
          denomination: 50,
          currency: "Denari",
          issue_date: "2007",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Macedonia-15e-50Denari-2007.jpg"
        },
        {
          ctry_id: 26,
          catalog_no: "16g",
          denomination: 100,
          currency: "Denari",
          issue_date: "2007",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Macedonia-16g-100Denari-2007.jpg"
        },
        {
          ctry_id: 26,
          catalog_no: "19",
          denomination: 5000,
          currency: "Denari",
          issue_date: "1996",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Macedonia-19-5000Denari-1996.jpg"
        },
        {
          ctry_id: 26,
          catalog_no: "21a",
          denomination: 500,
          currency: "Denari",
          issue_date: "2003",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Macedonia-21a-500Denari-2003.jpg"
        },
        {
          ctry_id: 26,
          catalog_no: "22b",
          denomination: 1000,
          currency: "Denari",
          issue_date: "2009",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Macedonia-22b-1000Denari-2009.jpg"
        },
        {
          ctry_id: 27,
          catalog_no: "100",
          denomination: 1000,
          currency: "Ariary",
          issue_date: "ND-2017",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Madagascar-100-1000Ariary-ND-2017.jpg"
        },
        {
          ctry_id: 27,
          catalog_no: "101",
          denomination: 2000,
          currency: "Ariary",
          issue_date: "ND-2017",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Madagascar-101-2000Ariary-ND-2017.jpg"
        },
        {
          ctry_id: 27,
          catalog_no: "102",
          denomination: 5000,
          currency: "Ariary",
          issue_date: "ND-2017",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Madagascar-102-5000Ariary-ND-2017.jpg"
        },
        {
          ctry_id: 27,
          catalog_no: "103",
          denomination: 10000,
          currency: "Ariary",
          issue_date: "ND-2017",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Madagascar-103-10000Ariary-ND-2017.jpg"
        },
        {
          ctry_id: 27,
          catalog_no: "104",
          denomination: 20000,
          currency: "Ariary",
          issue_date: "ND-2017",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Madagascar-104-20000Ariary-ND-2017.jpg"
        },
        {
          ctry_id: 27,
          catalog_no: "97",
          denomination: 100,
          currency: "Ariary",
          issue_date: "ND-2017",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Madagascar-97-100Ariary-ND-2017.jpg"
        },
        {
          ctry_id: 27,
          catalog_no: "98",
          denomination: 200,
          currency: "Ariary",
          issue_date: "ND-2017",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Madagascar-98-200Ariary-ND-2017.jpg"
        },
        {
          ctry_id: 27,
          catalog_no: "99",
          denomination: 500,
          currency: "Ariary",
          issue_date: "ND-2017",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Madagascar-99-500Ariary-ND-2017.jpg"
        },
        {
          ctry_id: 28,
          catalog_no: "10f",
          denomination: 10,
          currency: "Lei",
          issue_date: "2009",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Moldova-10f-10Lei-2009.jpg"
        },
        {
          ctry_id: 28,
          catalog_no: "13j",
          denomination: 20,
          currency: "Lei",
          issue_date: "2013",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Moldova-13j-20Lei-2013.jpg"
        },
        {
          ctry_id: 28,
          catalog_no: "14f",
          denomination: 50,
          currency: "Lei",
          issue_date: "2013",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Moldova-14f-50Lei-2013.jpg"
        },
        {
          ctry_id: 28,
          catalog_no: "25",
          denomination: 100,
          currency: "Lei",
          issue_date: "2015",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Moldova-25-100Lei-2015.jpg"
        },
        {
          ctry_id: 28,
          catalog_no: "9e",
          denomination: 5,
          currency: "Lei",
          issue_date: "2009",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Moldova-9e-5Lei-2009.jpg"
        },
        {
          ctry_id: 29,
          catalog_no: "74b",
          denomination: 500,
          currency: "Rupees",
          issue_date: "2016",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Nepal-74b-500Rupees-2016.jpg"
        },
        {
          ctry_id: 29,
          catalog_no: "75b",
          denomination: 1000,
          currency: "Rupees",
          issue_date: "2016",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Nepal-75b-1000Rupees-2016.jpg"
        },
        {
          ctry_id: 29,
          catalog_no: "76",
          denomination: 5,
          currency: "Rupees",
          issue_date: "2017",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Nepal-76-5Rupees-2017.jpg"
        },
        {
          ctry_id: 29,
          catalog_no: "77",
          denomination: 10,
          currency: "Rupees",
          issue_date: "2017",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Nepal-77-10Rupees-2017.jpg"
        },
        {
          ctry_id: 29,
          catalog_no: "78",
          denomination: 20,
          currency: "Rupees",
          issue_date: "2016",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Nepal-78-20Rupees-2016.jpg"
        },
        {
          ctry_id: 29,
          catalog_no: "79",
          denomination: 50,
          currency: "Rupees",
          issue_date: "2015",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Nepal-79-50Rupees-2015.jpg"
        },
        {
          ctry_id: 29,
          catalog_no: "80",
          denomination: 100,
          currency: "Rupees",
          issue_date: "2015",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Nepal-80-100Rupees-2015.jpg"
        },
        {
          ctry_id: 30,
          catalog_no: "191",
          denomination: 5,
          currency: "Dollars",
          issue_date: "2015",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/NewZealand-191-5Dollars-2015.jpg"
        },
        {
          ctry_id: 30,
          catalog_no: "192",
          denomination: 10,
          currency: "Dollars",
          issue_date: "2015",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/NewZealand-192-10Dollars-2015.jpg"
        },
        {
          ctry_id: 30,
          catalog_no: "193",
          denomination: 20,
          currency: "Dollars",
          issue_date: "2015",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/NewZealand-193-20Dollars-2015.jpg"
        },
        {
          ctry_id: 30,
          catalog_no: "194",
          denomination: 50,
          currency: "Dollars",
          issue_date: "2015",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/NewZealand-194-50Dollars-2015.jpg"
        },
        {
          ctry_id: 30,
          catalog_no: "195",
          denomination: 100,
          currency: "Dollars",
          issue_date: "2015",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/NewZealand-195-100Dollars-2015.jpg"
        },
        {
          ctry_id: 31,
          catalog_no: "45i",
          denomination: 10,
          currency: "Rupees",
          issue_date: "2014",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Pakistan-45i-10Rupees-2014.jpg"
        },
        {
          ctry_id: 31,
          catalog_no: "47h",
          denomination: 50,
          currency: "Rupees",
          issue_date: "2014",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Pakistan-47h-50Rupees-2014.jpg"
        },
        {
          ctry_id: 31,
          catalog_no: "48h",
          denomination: 100,
          currency: "Rupees",
          issue_date: "2013",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Pakistan-48h-100Rupees-2013.jpg"
        },
        {
          ctry_id: 31,
          catalog_no: "50j",
          denomination: 1000,
          currency: "Rupees",
          issue_date: "2015",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Pakistan-50j-1000Rupees-2015.jpg"
        },
        {
          ctry_id: 31,
          catalog_no: "53a",
          denomination: 5,
          currency: "Rupees",
          issue_date: "2008",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Pakistan-53a-5Rupees-2008.jpg"
        },
        {
          ctry_id: 31,
          catalog_no: "55g",
          denomination: 20,
          currency: "Rupees",
          issue_date: "2014",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Pakistan-55g-20Rupees-2014.jpg"
        },
        {
          ctry_id: 32,
          catalog_no: "28b",
          denomination: 2,
          currency: "Kina",
          issue_date: "2008",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/PapuaNewGuinea-28b-2Kina-2008.jpg"
        },
        {
          ctry_id: 32,
          catalog_no: "29a",
          denomination: 5,
          currency: "Kina",
          issue_date: "2008",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/PapuaNewGuinea-29a-5Kina-2008.jpg"
        },
        {
          ctry_id: 32,
          catalog_no: "40",
          denomination: 10,
          currency: "Kina",
          issue_date: "2010",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/PapuaNewGuinea-40-10Kina-2010.jpg"
        },
        {
          ctry_id: 32,
          catalog_no: "41",
          denomination: 20,
          currency: "Kina",
          issue_date: "2010",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/PapuaNewGuinea-41-20Kina-2010.jpg"
        },
        {
          ctry_id: 32,
          catalog_no: "42",
          denomination: 50,
          currency: "Kina",
          issue_date: "2010",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/PapuaNewGuinea-42-50Kina-2010.jpg"
        },
        {
          ctry_id: 32,
          catalog_no: "43",
          denomination: 100,
          currency: "Kina",
          issue_date: "2010",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/PapuaNewGuinea-43-100Kina-2010.jpg"
        },
        {
          ctry_id: 33,
          catalog_no: "206a",
          denomination: 20,
          currency: "Piso",
          issue_date: "2010",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Philippines-206a-20Piso-2010.jpg"
        },
        {
          ctry_id: 33,
          catalog_no: "207",
          denomination: 50,
          currency: "Piso",
          issue_date: "2015",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Philippines-207-50Piso-2015.jpg"
        },
        {
          ctry_id: 33,
          catalog_no: "208",
          denomination: 100,
          currency: "Piso",
          issue_date: "2016",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Philippines-208-100Piso-2016.jpg"
        },
        {
          ctry_id: 33,
          catalog_no: "209a",
          denomination: 200,
          currency: "Piso",
          issue_date: "2010",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Philippines-209a-200Piso-2010.jpg"
        },
        {
          ctry_id: 33,
          catalog_no: "210",
          denomination: 500,
          currency: "Piso",
          issue_date: "2014",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Philippines-210-500Piso-2014.jpg"
        },
        {
          ctry_id: 33,
          catalog_no: "211a",
          denomination: 1000,
          currency: "Piso",
          issue_date: "2014",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Philippines-211a-1000Piso-2014.jpg"
        },
        {
          ctry_id: 34,
          catalog_no: "29b",
          denomination: 100,
          currency: "Francs",
          issue_date: "01-09-2003",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Rwanda-29b-100Francs-01-09-2003.jpg"
        },
        {
          ctry_id: 34,
          catalog_no: "35",
          denomination: 1000,
          currency: "Francs",
          issue_date: "01-02-2008",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Rwanda-35-1000Francs-01-02-2008.jpg"
        },
        {
          ctry_id: 34,
          catalog_no: "37",
          denomination: 5000,
          currency: "Francs",
          issue_date: "02-01-2009",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Rwanda-37-5000Francs-02-01-2009.jpg"
        },
        {
          ctry_id: 34,
          catalog_no: "38",
          denomination: 500,
          currency: "Francs",
          issue_date: "01-01-2013",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Rwanda-38-500Francs-01-01-2013.jpg"
        },
        {
          ctry_id: 34,
          catalog_no: "40",
          denomination: 2000,
          currency: "Francs",
          issue_date: "01-12-2014",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Rwanda-40-2000Francs-01-12-2014.jpg"
        },
        {
          ctry_id: 35,
          catalog_no: "38b",
          denomination: 5,
          currency: "Tala",
          issue_date: "2012",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Samoa-38b-5Tala-2012.jpg"
        },
        {
          ctry_id: 35,
          catalog_no: "39a",
          denomination: 10,
          currency: "Tala",
          issue_date: "2008",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Samoa-39a-10Tala-2008.jpg"
        },
        {
          ctry_id: 35,
          catalog_no: "40a",
          denomination: 20,
          currency: "Tala",
          issue_date: "2008",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Samoa-40a-20Tala-2008.jpg"
        },
        {
          ctry_id: 35,
          catalog_no: "41c",
          denomination: 50,
          currency: "Tala",
          issue_date: "ND-2006",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Samoa-41c-50Tala-ND-2016.jpg"
        },
        {
          ctry_id: 35,
          catalog_no: "44b",
          denomination: 100,
          currency: "Tala",
          issue_date: "ND-2007",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Samoa-44b-100Tala-ND-2016.jpg"
        },
        {
          ctry_id: 36,
          catalog_no: "38",
          denomination: 5,
          currency: "Riyals",
          issue_date: "2016",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/SaudiArabia-38-5Riyals-2016.jpg"
        },
        {
          ctry_id: 36,
          catalog_no: "39",
          denomination: 10,
          currency: "Riyals",
          issue_date: "2016",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/SaudiArabia-39-10Riyals-2016.jpg"
        },
        {
          ctry_id: 36,
          catalog_no: "40",
          denomination: 50,
          currency: "Riyals",
          issue_date: "2016",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/SaudiArabia-40-50Riyals-2016.jpg"
        },
        {
          ctry_id: 36,
          catalog_no: "41",
          denomination: 100,
          currency: "Riyals",
          issue_date: "2016",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/SaudiArabia-41-100Riyals-2016.jpg"
        },
        {
          ctry_id: 36,
          catalog_no: "42",
          denomination: 500,
          currency: "Riyals",
          issue_date: "2016",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/SaudiArabia-42-500Riyals-2016.jpg"
        },
        {
          ctry_id: 37,
          catalog_no: "46",
          denomination: 10,
          currency: "Dinara",
          issue_date: "2006",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Serbia-46-10Dinara-2006.jpg"
        },
        {
          ctry_id: 37,
          catalog_no: "55a",
          denomination: 20,
          currency: "Dinara",
          issue_date: "2011",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Serbia-55a-20Dinara-2011.jpg"
        },
        {
          ctry_id: 37,
          catalog_no: "56a",
          denomination: 50,
          currency: "Dinara",
          issue_date: "2011",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Serbia-56a-50Dinara-2011.jpg"
        },
        {
          ctry_id: 37,
          catalog_no: "57b",
          denomination: 100,
          currency: "Dinara",
          issue_date: "2013",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Serbia-57b-100Dinara-2013.jpg"
        },
        {
          ctry_id: 37,
          catalog_no: "58b",
          denomination: 200,
          currency: "Dinara",
          issue_date: "2013",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Serbia-58b-200Dinara-2013.jpg"
        },
        {
          ctry_id: 38,
          catalog_no: "48",
          denomination: 25,
          currency: "Rupees",
          issue_date: "2016",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Seychelles-48-25Rupees-2016.jpg"
        },
        {
          ctry_id: 38,
          catalog_no: "49",
          denomination: 50,
          currency: "Rupees",
          issue_date: "2016",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Seychelles-49-50Rupees-2016.jpg"
        },
        {
          ctry_id: 38,
          catalog_no: "50",
          denomination: 100,
          currency: "Rupees",
          issue_date: "2016",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Seychelles-50-100Rupees-2016.jpg"
        },
        {
          ctry_id: 39,
          catalog_no: "123c",
          denomination: 20,
          currency: "Rupees",
          issue_date: "2015-02-04",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/SriLanka-123c-20Rupees-02-04-2015.jpg"
        },
        {
          ctry_id: 39,
          catalog_no: "124c",
          denomination: 50,
          currency: "Rupees",
          issue_date: "2015-02-04",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/SriLanka-124c-50Rupees-02-04-2015.jpg"
        },
        {
          ctry_id: 39,
          catalog_no: "125d",
          denomination: 100,
          currency: "Rupees",
          issue_date: "2015-02-04",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/SriLanka-125d-100Rupees-02-04-2015.jpg"
        },
        {
          ctry_id: 39,
          catalog_no: "126",
          denomination: 500,
          currency: "Rupees",
          issue_date: "2010-01-01",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/SriLanka-126-500Rupees-01-01-2010.jpg"
        },
        {
          ctry_id: 39,
          catalog_no: "127",
          denomination: 1000,
          currency: "Rupees",
          issue_date: "2010-01-01",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/SriLanka-127-1000Rupees-01-01-2010.jpg"
        },
        {
          ctry_id: 39,
          catalog_no: "128b",
          denomination: 5000,
          currency: "Rupees",
          issue_date: "2015-02-04",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/SriLanka-128b-5000Rupees-02-04-2015.jpg"
        },
        {
          ctry_id: 40,
          catalog_no: "112",
          denomination: 50,
          currency: "Pounds",
          issue_date: "2009",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Syria-112-50Pounds-2009.jpg"
        },
        {
          ctry_id: 40,
          catalog_no: "113",
          denomination: 100,
          currency: "Pounds",
          issue_date: "2009",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Syria-113-100Pounds-2009.jpg"
        },
        {
          ctry_id: 40,
          catalog_no: "114",
          denomination: 200,
          currency: "Pounds",
          issue_date: "2009",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Syria-114-200Pounds-2009.jpg"
        },
        {
          ctry_id: 40,
          catalog_no: "115",
          denomination: 500,
          currency: "Pounds",
          issue_date: "2013",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Syria-115-500Pounds-2013.jpg"
        },
        {
          ctry_id: 40,
          catalog_no: "116",
          denomination: 1000,
          currency: "Pounds",
          issue_date: "2013",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Syria-116-1000Pounds-2013.jpg"
        },
        {
          ctry_id: 40,
          catalog_no: "117",
          denomination: 2000,
          currency: "Pounds",
          issue_date: "2015",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Syria-117-2000Pounds-2013.jpg"
        },
        {
          ctry_id: 41,
          catalog_no: "40",
          denomination: 500,
          currency: "Shillings",
          issue_date: "2010",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Tanzania-40-500Shillings-2010.jpg"
        },
        {
          ctry_id: 41,
          catalog_no: "41",
          denomination: 1000,
          currency: "Shillings",
          issue_date: "2010",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Tanzania-41-1000Shillings-2010.jpg"
        },
        {
          ctry_id: 41,
          catalog_no: "42",
          denomination: 2000,
          currency: "Shillings",
          issue_date: "2010",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Tanzania-42-2000Shillings-2010.jpg"
        },
        {
          ctry_id: 41,
          catalog_no: "43",
          denomination: 5000,
          currency: "Shillings",
          issue_date: "2010",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Tanzania-43-5000Shillings-2010.jpg"
        },
        {
          ctry_id: 41,
          catalog_no: "44b",
          denomination: 10000,
          currency: "Shillings",
          issue_date: "2010",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Tanzania-44b-10000Shillings-2010.jpg"
        },
        {
          ctry_id: 42,
          catalog_no: "46A",
          denomination: 1,
          currency: "Dollar",
          issue_date: "2006-2013",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Trinidad-46A-1Dollar-2006-2013.jpg"
        },
        {
          ctry_id: 42,
          catalog_no: "47c",
          denomination: 5,
          currency: "Dollars",
          issue_date: "2006-2013",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Trinidad-47c-5Dollars-2006-2013.jpg"
        },
        {
          ctry_id: 42,
          catalog_no: "49b",
          denomination: 20,
          currency: "Dollars",
          issue_date: "2006-2014",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Trinidad-49b-20Dollars-2006-2014.jpg"
        },
        {
          ctry_id: 42,
          catalog_no: "50",
          denomination: 50,
          currency: "Dollars",
          issue_date: "2012",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Trinidad-50-50Dollars-2012.jpg"
        },
        {
          ctry_id: 42,
          catalog_no: "51b",
          denomination: 100,
          currency: "Dollars",
          issue_date: "2006-2014",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Trinidad-51b-100Dollars-2006-2014.jpg"
        },
        {
          ctry_id: 42,
          catalog_no: "56",
          denomination: 50,
          currency: "Dollars",
          issue_date: "2015",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Trinidad-56-50Dollars-2015.jpg"
        },
        {
          ctry_id: 42,
          catalog_no: "57",
          denomination: 10,
          currency: "Dollars",
          issue_date: "2006-2013",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Trinidad-57-10Dollars-2006-2013.jpg"
        },
        {
          ctry_id: 43,
          catalog_no: "36",
          denomination: 1,
          currency: "Manat",
          issue_date: "2017",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Turkmenistan-36-1Manat-2017.jpg"
        },
        {
          ctry_id: 43,
          catalog_no: "37",
          denomination: 5,
          currency: "Manat",
          issue_date: "2017",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Turkmenistan-37-5Manat-2017.jpg"
        },
        {
          ctry_id: 43,
          catalog_no: "38",
          denomination: 10,
          currency: "Manat",
          issue_date: "2017",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Turkmenistan-38-10Manat-2017.jpg"
        },
        {
          ctry_id: 43,
          catalog_no: "39",
          denomination: 20,
          currency: "Manat",
          issue_date: "2017",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Turkmenistan-39-20Manat-2017.jpg"
        },
        {
          ctry_id: 43,
          catalog_no: "40",
          denomination: 50,
          currency: "Manat",
          issue_date: "2017",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Turkmenistan-40-50Manat-2017.jpg"
        },
        {
          ctry_id: 43,
          catalog_no: "41",
          denomination: 100,
          currency: "Manat",
          issue_date: "2017",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Turkmenistan-41-100Manat-2017.jpg"
        },
        {
          ctry_id: 44,
          catalog_no: "49e",
          denomination: 1000,
          currency: "Shillings",
          issue_date: "2017",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Uganda-49e-1000Shillings-2017.jpg"
        },
        {
          ctry_id: 44,
          catalog_no: "50d",
          denomination: 2000,
          currency: "Shillings",
          issue_date: "2017",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Uganda-50d-2000Shillings-2017.jpg"
        },
        {
          ctry_id: 44,
          catalog_no: "51e",
          denomination: 5000,
          currency: "Shillings",
          issue_date: "2017",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Uganda-51e-5000Shillings-2017.jpg"
        },
        {
          ctry_id: 44,
          catalog_no: "52d",
          denomination: 10000,
          currency: "Shillings",
          issue_date: "2017",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Uganda-52d-10000Shillings-2017.jpg"
        },
        {
          ctry_id: 44,
          catalog_no: "53d",
          denomination: 20000,
          currency: "Shillings",
          issue_date: "2017",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Uganda-53d-20000Shillings-2017.jpg"
        },
        {
          ctry_id: 44,
          catalog_no: "54c",
          denomination: 50000,
          currency: "Shillings",
          issue_date: "2017",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Uganda-54c-50000Shillings-2017.jpg"
        },
        {
          ctry_id: 45,
          catalog_no: "117d",
          denomination: 2,
          currency: "Hryven",
          issue_date: "2013",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Ukraine-117d-2Hryven-2013.jpg"
        },
        {
          ctry_id: 45,
          catalog_no: "118d",
          denomination: 5,
          currency: "Hryven",
          issue_date: "2013",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Ukraine-118d-5Hryven-2013.jpg"
        },
        {
          ctry_id: 45,
          catalog_no: "119Ac",
          denomination: 10,
          currency: "Hryven",
          issue_date: "2013",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Ukraine-119Ac-10Hryven-2013.jpg"
        },
        {
          ctry_id: 45,
          catalog_no: "120d",
          denomination: 20,
          currency: "Hryvnia",
          issue_date: "2013",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Ukraine-120d-20Hryvnia-2013.jpg"
        },
        {
          ctry_id: 45,
          catalog_no: "121e",
          denomination: 50,
          currency: "Hryven",
          issue_date: "2014",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Ukraine-121e-50Hryven-2014.jpg"
        },
        {
          ctry_id: 45,
          catalog_no: "123d",
          denomination: 200,
          currency: "Hryven",
          issue_date: "2014",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Ukraine-123d-200Hryven-2014.jpg"
        },
        {
          ctry_id: 46,
          catalog_no: "100",
          denomination: 100000,
          currency: "Bolivares",
          issue_date: "13-12-2017",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Venezuela-100-100000Bolivares-13-12-2017.jpg"
        },
        {
          ctry_id: 46,
          catalog_no: "94b",
          denomination: 500,
          currency: "Bolivares",
          issue_date: "23-3-2017",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Venezuela-94b-500Bolivares-23-3-2017.jpg"
        },
        {
          ctry_id: 46,
          catalog_no: "95b",
          denomination: 1000,
          currency: "Bolivares",
          issue_date: "23-3-2017",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Venezuela-95b-1000Bolivares-23-3-2017.jpg"
        },
        {
          ctry_id: 46,
          catalog_no: "96",
          denomination: 2000,
          currency: "Bolivares",
          issue_date: "18-8-2016",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Venezuela-96-2000Bolivares-18-8-2016.jpg"
        },
        {
          ctry_id: 46,
          catalog_no: "97b",
          denomination: 5000,
          currency: "Bolivares",
          issue_date: "13-12-2017",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Venezuela-97b-5000Bolivares-13-12-2017.jpg"
        },
        {
          ctry_id: 46,
          catalog_no: "98b",
          denomination: 10000,
          currency: "Bolivares",
          issue_date: "13-12-2017",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Venezuela-98b-10000Bolivares-13-12-2017.jpg"
        },
        {
          ctry_id: 46,
          catalog_no: "99b",
          denomination: 20000,
          currency: "Bolivares",
          issue_date: "13-12-2017",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Venezuela-99b-20000Bolivares-13-12-2017.jpg"
        },
        {
          ctry_id: 47,
          catalog_no: "815Ti",
          denomination: 1000,
          currency: "Francs",
          issue_date: "2014",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/WestAfricanStates-Togo-815Ti-1000Francs-2014.jpg"
        },
        {
          ctry_id: 47,
          catalog_no: "816Tg",
          denomination: 2000,
          currency: "Francs",
          issue_date: "2014",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/WestAfricanStates-Togo-816Tg-2000Francs-2014.jpg"
        },
        {
          ctry_id: 47,
          catalog_no: "817Tk",
          denomination: 5000,
          currency: "Francs",
          issue_date: "2014",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/WestAfricanStates-Togo-817Tk-5000Francs-2014.jpg"
        },
        {
          ctry_id: 47,
          catalog_no: "818Tj",
          denomination: 10000,
          currency: "Francs",
          issue_date: "2013",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/WestAfricanStates-Togo-818Tj-10000Francs-2013.jpg"
        },
        {
          ctry_id: 47,
          catalog_no: "819Tc",
          denomination: 500,
          currency: "Francs",
          issue_date: "2014",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/WestAfricanStates-Togo-819Tc-500Francs-2014.jpg"
        },
        {
          ctry_id: 48,
          catalog_no: "49a",
          denomination: 2,
          currency: "Kwacha",
          issue_date: "2012",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Zambia-49a-2Kwacha-2012.jpg"
        },
        {
          ctry_id: 48,
          catalog_no: "50a",
          denomination: 5,
          currency: "Kwacha",
          issue_date: "2012",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Zambia-50a-5Kwacha-2012.jpg"
        },
        {
          ctry_id: 48,
          catalog_no: "51a",
          denomination: 10,
          currency: "Kwacha",
          issue_date: "2012",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Zambia-51a-10Kwacha-2012.jpg"
        },
        {
          ctry_id: 48,
          catalog_no: "52a",
          denomination: 20,
          currency: "Kwacha",
          issue_date: "2012",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Zambia-52a-20Kwacha-2012.jpg"
        },
        {
          ctry_id: 48,
          catalog_no: "53a",
          denomination: 50,
          currency: "Kwacha",
          issue_date: "2012",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Zambia-53a-50Kwacha-2012.jpg"
        },
        {
          ctry_id: 48,
          catalog_no: "54a",
          denomination: 100,
          currency: "Kwacha",
          issue_date: "2012",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Zambia-54a-100Kwacha-2012.jpg"
        },
        {
          ctry_id: 49,
          catalog_no: "100",
          denomination: 5,
          currency: "Dollars",
          issue_date: "2016",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Zimbabwe-100-5Dollars-2016.jpg"
        },
        {
          ctry_id: 49,
          catalog_no: "99",
          denomination: 2,
          currency: "Dollars",
          issue_date: "2016",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Zimbabwe-99-2Dollars-2016.jpg"
        }
      ]);
    });
};
