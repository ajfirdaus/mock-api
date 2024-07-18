const successCreate = {
    "statusCode": "0",
    "subStatusCode": "00",
    "statusDesc": "SUCCESS",
    "id": "31898",
    "orderNumber": "TO21070208152930405158",
    "orderReference": "trx90393933",
    "status": "on process",
    "orderVendors": [
        {
            "dataList": [
                {
                    "itemId": 34095,
                    "brand": "Alfamart",
                    "mid": "2759",
                    "egiftCode": "6913941",
                    "code": "0df22c07c069737cba",
                    "programName": "e-Voucher Alfamart Rp 10.000",
                    "itemName": "e-Voucher",
                    "egiftType": "External",
                    "value": "10000",
                    "useRedemPin": "true",
                    "pin": "928756",
                    "expiredDate": "2021-10-30T10:00:00.0000",
                    "url": "http://demo-e.gift.id/u/0df22c07c069737cba",
                    "message": "e-Voucher Alfamart Rp 10,000 untuk Anda!"
                }
            ]
        }
    ]
};

const failedCreate = {
  "statusCode": "9998",
  "subStatusCode": "500",
  "subStatusProviderList": [
    {
      "code": "400",
      "desc": "OrderNotFound",
      "providerCode": "TADA_ID"
    }
  ],
  "statusDesc": "Unknown Error from Provider"
};

const tadaController = {

    create :async (req, res) => {
        try {
            

            if (req.body.itemList[0].quantity < 5) {
                res.status(200).json(successCreate);
            }else{
                res.status(200).json(failedCreate);
            }

        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Unknown error.' });
        }
    },
    check: async (req, res) => {
        try {
            res.status(200).json(successCreate);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Unknown error.' });
        }
    }
}

module.exports = tadaController




