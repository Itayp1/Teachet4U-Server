const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "teacher4u.app@gmail.com",
    pass: "Alroe2018"
  }
});

module.exports = class Lessons {
  constructor(to, subject, text, html, messageid) {
    this.mailOptions = {
      from: "test-fpucx3dim@mail-tester.com",
      to,
      subject: "test10 [Id: 18565]",
      text,
      html,
      headers: {
        "X-AuditID": `0a7d190e-35fff70000002185-3b-5e270b26a700`,
        "Content-Type": "multipart/alternative;",
        //"Message-ID": "<bb43abc9b4e496825409ade0c37cd503@SDE-SAFE-T>" //ok
        "Message-ID": `<${messageid}@sb1.menora.co.il>`, // notok
        // "Message-ID":"<1231231239fb81.58fbe.9727@mx.google.com>@sb1.menora.co.il>" // notok

        //  "Message-ID": "<y6dvekc9b4e496825409ade0c37cd503@mx.google.com>"
        // "Message-ID":
        // "<1579743815015.f6c83626-453e-4734-ba77-05b60bf08c39@SDE-SAFE-T>",
        "X-OriginalArrivalTime": `21 Jan 2020 14:31:01.0984 (UTC) FILETIME=[67D9E600:01D5D067]`,
        "X-C2ProcessedOrg": ` H4sIAAAAAAAAA+NgFrrPLMWRmVeSWpSXmKPExsXCVSt5RVeNWz3OYMYvMYuXU9qZHBg9Vh57
                yhTAGMVlk5Kak1mWWqRvl8CVsfXgBbaC9Z2MFZNO32FrYJzZytjFyMkhIWAicfzjO3YQm1mg
                UKLr6EywOK+ApcSvv9OA4hwcLAKqEjvml0KEBSVOznzCAmKzCUhJzJ3ykg3EFhKQk9j88CFY
                XERAUeLAq8dgY4SB4pMmnWSFWBUs8X7bfHYI20xi7YoLLBMYuWch2TwLyYpZQJuZBTQl1u/S
                hzClJZb/44Co1pZYtvA1M4QdIvHpwgU2CFtDonXOXHZMNcES3QvuskLYEhJ/Vl1nwTBSUWJK
                90OoVi+Jfz17mRYw8q5iFCxOSjfUy03Nyy9K1EvO18vM2cQICXa+HYyTz/geYhTgYFTi4TVm
                U48TYk0sK67MPcQowcGsJMK7oEk1Tog3JbGyKrUoP76oNCe1+BCjNAeLkjjvg39qcUIC6Ykl
                qdmpqQWpRTBZJg5OqQbGprgFxdWS7+00hU2Y1miFsZVOiXrsKLL+ZxH7DCPOXRGsYv9a7mTN
                FukMczis7KDz9eq3Mp7QDbVif7ycK1ja7i2w9DI8x/HkvNaPLauSH9u5e005f3dVq/OlDx21
                XG9XH/76mLlvpfuenliuMz/6FnWwuWbwab15LsylP3M943/PRQrrDu9UYinOSDTUYi4qTgQA
                ksCnrHICAAA=`,
        "Return-Path": "ITAYP@menora.co.il",
        "X-MS-Exchange-Organization-ExpirationStartTime":
          "21 Jan 2020 14:31:03.6307(UTC)",
        "X-MS-Exchange-Organization-ExpirationStartTimeReason":
          "OriginalSubmit",
        "X-MS-Exchange-Organization-ExpirationInterval": "1:00:00:00.0000000",
        "X-MS-Exchange-Organization-ExpirationIntervalReason": "OriginalSubmit",
        "X-MS-Exchange-Organization-Network-Message-Id":
          "9978b248-d79d-4b66-2bea-08d79e7e8b4c",
        "X-EOPAttributedMessage": 0,
        "X-EOPTenantAttributedMessage":
          "1ff71051-0de6-4b56-84f4-f5a01c974c07:0",
        "X-MS-Exchange-Organization-MessageDirectionality": "Incoming",
        "X-Forefront-Antispam-Report":
          "CIP:212.143.173.211;IPV:;CTRY:IL;EFV:NLI;SFV:SPM;SFS:(7916004)(286005)(199004)(189003)(33716001)(26005)(6916009)(956004)(111735003)(336012)(36736006)(86362001)(6486002)(6512007)(9686003)(6666004)(356004)(2876002)(118246002)(7636002)(246002)(564344004)(3450700001)(44144004)(33964004)(8676002)(1096003)(62216007);DIR:INB;SFP:;SCL:5;SRVR:VI1PR0402MB3359;H:sbg1.menora.co.il;FPR:;SPF:Pass;LANG:en;PTR:sbg1nv2.menora.co.il;A:1;MX:1;CAT:SPM;",
        "X-MS-Exchange-Organization-AuthSource":
          "AM6EUR05FT051.eop-eur05.prod.protection.outlook.com",
        "X-MS-Exchange-Organization-AuthAs": "Anonymous",
        "X-MS-PublicTrafficType": "Email",
        "X-MS-Office365-Filtering-Correlation-Id":
          "9978b248-d79d-4b66-2bea-08d79e7e8b4c",
        "X-MS-TrafficTypeDiagnostic": "VI1PR0402MB3359",
        "X-MS-Oob-TLC-OOBClassifiers": `OLM':1728;`,
        "X-MS-Exchange-Organization-SCL": 6,
        "X-Microsoft-Antispam": `BCL':2;`,
        "X-MS-Exchange-CrossTenant-OriginalArrivalTime": `21 Jan 2020 14':31':03.0703,'(UTC)`,
        "X-MS-Exchange-CrossTenant-Network-Message-Id": `9978b248-d79d-4b66-2bea-08d79e7e8b4c`,
        "X-MS-Exchange-CrossTenant-Id": "1ff71051-0de6-4b56-84f4-f5a01c974c07",
        "X-MS-Exchange-CrossTenant-FromEntityHeader": "Internet",
        "X-MS-Exchange-Transport-CrossTenantHeadersStamped": "VI1PR0402MB3359",
        "X-MS-Exchange-Transport-EndToEndLatency": `00:00:02.1720614`,
        "X-MS-Exchange-Processed-By-BccFoldering": "15.20.2644.026",
        "X-Microsoft-Antispam-Mailbox-Delivery":
          "ucf:0;jmr:1;ex:0;auth:0;dest:J;ENG:(20160513016)(750127)(520011016)(944504077)(944701077)(944506383)(944626516);",
        "X-Microsoft-Antispam-Message-Info": `=?us-ascii?Q?P6jP+YRdp75PSF9Vcb2rLe4bDuXGKJWkDJhKtel7ERHt7zFFk9ALZn7ufgHj?=
        =?us-ascii?Q?44dI1z2q2nNr3rfVuMpymSEOIViedrXbEVVK4Fp71H0vI8OOpnY9BT4JiRwz?=
        =?us-ascii?Q?9XzMw4ULkqkHOF1YLgL87hCflz6yeOeu5Q8As4j+kRjncnMSwZFv9wAWneXw?=
        =?us-ascii?Q?kwTzzRxbScAORL2dG152jpEl+ICyMx6Id7xTJr+1AHco6htxoYvJtmGTHfJT?=
        =?us-ascii?Q?JVGT/nj45ZhLqERj4ywXejvYepvDMsB7/Q64PhZmQ2Hs8PprwCo4MMc8NAr6?=
        =?us-ascii?Q?64PwIQ2Dxsznj4zVFixmblqDvcWJ//5KTtRiKxPC3CdR+7ehtG6u3q91i3b6?=
        =?us-ascii?Q?s18M4TzH1ZcZLOCpxD6ek9UXGUWg7sK2pCuy2NEzx8/vJHMuZhrCpMeP28OP?=
        =?us-ascii?Q?FH5vn0wn1zNCURaQTn/UnXLRMXVFZmwvDJksuUP/UAASBqcSiTrxLXz/mDbs?=
        =?us-ascii?Q?DQ8yTYX8J/NXrP3rk/bfuotfq8DHiRDCTg5p8EJsSranbhOQDiyKGaNgsEtA?=
        =?us-ascii?Q?iqBsWZIFaXvi4ssA2rKJmgudHHcx4RYtUh014MszuJ7DJ+EMM66t/3LzhJ9z?=
        =?us-ascii?Q?3x9lg8b49C7eNxDujLA2uPriY9nP/svsxtb784IuILM2yni6jEclEpja0Rpi?=
        =?us-ascii?Q?Gh0GesAlm/ACMVmbwzMCzmCUVJHwnF8XC97ra0APD9JM2HVNlC8tfPvP36x2?=
        =?us-ascii?Q?fC9zEMoaYfrXepIHsmKm+D9Y4iIWnDNY54/J5flrZ4GMzqAhmK+/MFtWfTmQ?=
        =?us-ascii?Q?opqt5OCUs1NJIX9NTefCSr0hdLajbKGJG28m8ZJe4oivf23iBbUSxFaZmH5B?=
        =?us-ascii?Q?wSGzFxgbszhcj4loDKZH3BZhLTkngsFvGIHuhDoTODwltq9g5eFXq9Ix5c9A?=
        =?us-ascii?Q?sXhJCGalwvFtmdEfRJ9JrbqQCP+hwHrYS+xyClNeGOqT2Evmjxvq6tCFJ6F2?=
        =?us-ascii?Q?YleHSX19SvLADKUNn8keoeFfhQCEKnEhwlqIKb4qIijv1/h69dwRilOEH/zj?=
        =?us-ascii?Q?Rv9cXMenU5/0W7Wku//ZcaLA0Zxl/4W+bRHc6q+avvbZ2pRMK4wtORiYNpcn?=
        =?us-ascii?Q?7dwauw7V03FRWTV6pr6+HvdYJDPsQjs8nJ07w+eBTLRPBpfFZnygvCwXbE7M?=
        =?us-ascii?Q?QZSRbs2jeKVi9J6KrlMBP+t823rQfYAQJ9kzJdOoALD6lF5M/a03JEHjW68X?=
        =?us-ascii?Q?YPcp1d5S6n+L0v44v1fnkiF8jCjsKOqg1cuC3Q=3D=3D?=`
      }
    };
  }

  sendEmail() {
    transporter.sendMail(this.mailOptions, (err, data) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(data);
    });
  }
};
