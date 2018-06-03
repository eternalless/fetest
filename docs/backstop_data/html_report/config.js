report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "..\\..\\..\\backstop_data\\bitmaps_reference\\backstop_default_qqmap_0_document_0_phone.png",
        "test": "..\\..\\..\\backstop_data\\bitmaps_test\\20180603-130534\\backstop_default_qqmap_0_document_0_phone.png",
        "selector": "document",
        "fileName": "backstop_default_qqmap_0_document_0_phone.png",
        "label": "qq.map",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "https://map.baidu.com/mobile/webapp/index/index/",
        "referenceUrl": "",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": -10
          },
          "misMatchPercentage": "2.00",
          "analysisTime": 35
        },
        "diffImage": "..\\..\\..\\backstop_data\\bitmaps_test\\20180603-130534\\failed_diff_backstop_default_qqmap_0_document_0_phone.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\..\\..\\backstop_data\\bitmaps_reference\\backstop_default_qqmap_0_document_1_tablet.png",
        "test": "..\\..\\..\\backstop_data\\bitmaps_test\\20180603-130534\\backstop_default_qqmap_0_document_1_tablet.png",
        "selector": "document",
        "fileName": "backstop_default_qqmap_0_document_1_tablet.png",
        "label": "qq.map",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "https://map.baidu.com/mobile/webapp/index/index/",
        "referenceUrl": "",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.62",
          "analysisTime": 58
        },
        "diffImage": "..\\..\\..\\backstop_data\\bitmaps_test\\20180603-130534\\failed_diff_backstop_default_qqmap_0_document_1_tablet.png"
      },
      "status": "fail"
    }
  ],
  "id": "backstop_default"
});