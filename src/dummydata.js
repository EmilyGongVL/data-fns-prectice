const locationAccessTimes = [
  {
    id: "6931c9a1-d21e-4fcc-b83c-c5105b9a52ef",
    day: "MONDAY",
    openTime: "09:00:00",
    closeTime: "17:00:00",
    type: "CREACHE"
  },
  {
    id: "80a5fa84-423b-4c87-be3f-4c1f83a76755",
    day: "MONDAY",
    openTime: "09:00:00",
    closeTime: "17:00:00",
    type: "OPENCLOSE"
  },
  {
    id: "582ef4dd-5403-4704-b85c-3b2bf878a179",
    day: "SUNDAY",
    openTime: "09:00:00",
    closeTime: "12:00:00",
    type: "OPENCLOSE"
  },
  {
    id: "c63764a5-0f9b-4a3c-a730-c5c786399387",
    day: "WEDNESDAY",
    openTime: "09:00:00",
    closeTime: "14:00:00",
    type: "OPENCLOSE"
  },
  {
    id: "0c67cefa-64d1-4509-8b08-0ee65f3a30cb",
    day: "MONDAY",
    openTime: "10:00:00",
    closeTime: "10:00:00",
    type: "OPENCLOSE"
  },
  {
    id: "8345bde7-3d87-4316-a2bc-2f885fa7c50f",
    day: "THURSDAY",
    openTime: "09:30:00",
    closeTime: "19:00:00",
    type: "OPENCLOSE"
  },
  {
    id: "63cca68e-496d-4c13-851e-bcbfdb8f5bc5",
    day: "SUNDAY",
    openTime: "10:00:00",
    closeTime: "13:00:00",
    type: "OPENCLOSE"
  },
  {
    id: "51440081-f7e3-483f-a2c0-6201276d315d",
    day: "TUESDAY",
    openTime: "02:22:00",
    closeTime: "02:22:00",
    type: "OPENCLOSE"
  },
  {
    id: "830e2131-89fe-43dc-a46e-f5e3078bc250",
    day: "THURSDAY",
    openTime: "08:00:00",
    closeTime: "12:00:00",
    type: "OPENCLOSE"
  },
  {
    id: "36df666f-55f9-403a-a3f9-b270eb714709",
    day: "SATURDAY",
    openTime: "08:00:00",
    closeTime: "11:00:00",
    type: "OPENCLOSE"
  },
  {
    id: "2e57351b-1c88-4508-a6da-f83afae74374",
    day: "TUESDAY",
    openTime: "09:00:00",
    closeTime: "14:00:00",
    type: "OPENCLOSE"
  },
  {
    id: "d81e00d8-ce5e-417e-8710-08cdca52930b",
    day: "WEDNESDAY",
    openTime: "11:00:00",
    closeTime: "19:00:00",
    type: "OPENCLOSE"
  },
  {
    id: "a427715a-fb12-4a8d-8e9a-e57f41a612e9",
    day: "TUESDAY",
    openTime: "09:00:00",
    closeTime: "14:00:00",
    type: "OPENCLOSE"
  },
  {
    id: "a56d3dbf-9a98-4080-9c06-56b03380dd84",
    day: "FRIDAY",
    openTime: "10:00:00",
    closeTime: "18:00:00",
    type: "OPENCLOSE"
  },
  {
    id: "ed7dbcbd-4077-40a9-b787-b872359263ad",
    day: "SATURDAY",
    openTime: "09:30:00",
    closeTime: "17:00:00",
    type: "OPENCLOSE"
  },
  {
    id: "a54a3810-391d-4507-9ea7-d8570050c423",
    day: "TUESDAY",
    openTime: "08:00:00",
    closeTime: "17:00:00",
    type: "OPENCLOSE"
  },
  {
    id: "d0483130-511d-4776-a3c1-18e2ccbfc472",
    day: "TUESDAY",
    openTime: "02:22:00",
    closeTime: "02:22:00",
    type: "OPENCLOSE"
  },
  {
    id: "b67396c6-2ed8-4fd3-a89c-7814e5f16cc9",
    day: "TUESDAY",
    openTime: "10:00:00",
    closeTime: "10:00:00",
    type: "OPENCLOSE"
  },
  {
    id: "a3e5c267-6094-4268-b915-2f01a71b71df",
    day: "FRIDAY",
    openTime: "10:00:00",
    closeTime: "10:00:00",
    type: "OPENCLOSE"
  },
  {
    id: "5b8c4356-30f8-4140-a30a-b3bcbd79e36d",
    day: "TUESDAY",
    openTime: "00:00:00",
    closeTime: "00:00:00",
    type: "OPENCLOSE"
  },
  {
    id: "35355101-e83d-4f07-b148-b81e8e00ddef",
    day: "SUNDAY",
    openTime: "09:00:00",
    closeTime: "12:00:00",
    type: "STAFF"
  },
  {
    id: "5337797d-a0a5-4d41-95a5-b7ab630225b8",
    day: "TUESDAY",
    openTime: "09:00:00",
    closeTime: "14:00:00",
    type: "STAFF"
  },
  {
    id: "b20fb0fc-5689-41e6-8867-5df059482f9d",
    day: "SATURDAY",
    openTime: "09:30:00",
    closeTime: "17:00:00",
    type: "STAFF"
  },
  {
    id: "4b806188-3dcf-4900-a8dd-c1f64af74d58",
    day: "TUESDAY",
    openTime: "10:00:00",
    closeTime: "10:00:00",
    type: "STAFF"
  },
  {
    id: "fe715b8c-d484-46e3-9374-4edcf83cdbb3",
    day: "THURSDAY",
    openTime: "09:30:00",
    closeTime: "19:00:00",
    type: "STAFF"
  },
  {
    id: "5586c427-d53b-434f-a99f-05fe64b0fb9c",
    day: "WEDNESDAY",
    openTime: "09:00:00",
    closeTime: "14:00:00",
    type: "STAFF"
  },
  {
    id: "d3e985e9-eade-4f70-be38-57f487759b2d",
    day: "SUNDAY",
    openTime: "10:00:00",
    closeTime: "13:00:00",
    type: "STAFF"
  },
  {
    id: "b5013267-39ea-4cda-961f-90340e18667b",
    day: "TUESDAY",
    openTime: "09:00:00",
    closeTime: "14:00:00",
    type: "STAFF"
  },
  {
    id: "d74de94d-10c5-4be2-ad09-abe1efd9aeed",
    day: "MONDAY",
    openTime: "10:00:00",
    closeTime: "10:00:00",
    type: "STAFF"
  },
  {
    id: "3b7f48ef-5d52-444c-b5c4-3cdd79097b78",
    day: "TUESDAY",
    openTime: "02:22:00",
    closeTime: "02:22:00",
    type: "STAFF"
  },
  {
    id: "d3954562-143f-4bac-a06c-fdd4810592ea",
    day: "TUESDAY",
    openTime: "02:22:00",
    closeTime: "02:22:00",
    type: "STAFF"
  },
  {
    id: "7115d072-135a-431f-ba73-4d38023e0bf0",
    day: "FRIDAY",
    openTime: "10:00:00",
    closeTime: "18:00:00",
    type: "STAFF"
  },
  {
    id: "14effc11-e5fb-4c0d-937b-cf7b1dd5e626",
    day: "TUESDAY",
    openTime: "09:00:00",
    closeTime: "14:00:00",
    type: "STAFF"
  },
  {
    id: "5850791c-f471-4205-b9a0-ad857c76d0f7",
    day: "SATURDAY",
    openTime: "08:00:00",
    closeTime: "11:00:00",
    type: "STAFF"
  },
  {
    id: "686e5fe1-1aee-403e-9ae3-3f5934e37604",
    day: "0",
    openTime: "00:00:00",
    closeTime: "00:00:00",
    type: "STAFF"
  },
  {
    id: "ef07375e-93c4-4e46-a054-e91d823be2f9",
    day: "MONDAY",
    openTime: "09:00:00",
    closeTime: "17:00:00",
    type: "STAFF"
  },
  {
    id: "393fa8e8-5215-4022-bd0b-e806bc6d1fae",
    day: "THURSDAY",
    openTime: "08:00:00",
    closeTime: "12:00:00",
    type: "STAFF"
  },
  {
    id: "2b60bd99-bce3-432a-a299-35da82865dd9",
    day: "TUESDAY",
    openTime: "08:00:00",
    closeTime: "17:00:00",
    type: "STAFF"
  },
  {
    id: "81d85e19-d1bc-4a37-b843-faef21fdb117",
    day: "TUESDAY",
    openTime: "00:00:00",
    closeTime: "00:00:00",
    type: "STAFF"
  },
  {
    id: "d22c5756-19cd-4592-8f41-46b748911055",
    day: "FRIDAY",
    openTime: "10:00:00",
    closeTime: "10:00:00",
    type: "STAFF"
  },
  {
    id: "3b89b99b-bb39-4f2e-9ef6-240f27e528a0",
    day: "MONDAY",
    openTime: "19:00:00",
    closeTime: "23:00:00",
    type: "STAFF"
  },
  {
    id: "ac6a81d5-8b3f-4aaa-9cef-5b3211f8f1dd",
    day: "WEDNESDAY",
    openTime: "11:00:00",
    closeTime: "19:00:00",
    type: "STAFF"
  }
]

export {locationAccessTimes}