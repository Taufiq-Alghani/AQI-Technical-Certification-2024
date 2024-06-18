/* eslint-disable no-undef */
const init = {
  app: {
    thisApp: {
      id: kintone.app.getId(),
      token: 'E79YEIEbk6q7RvOk4QsB9GF4Kp4rIOuj4fJTvRsY',
      fieldCode: {
  "status": "Status",
  "assignee": "Assignee",
  "updatedDatetime": "Updated_datetime",
  "createdDatetime": "Created_datetime",
  "categories": "Categories",
  "purchaseOrderFile": "excelAttachment",
  "recordNumber": "Record_number",
  "createdBy": "Created_by",
  "receivedDate": "receivedDate",
  "updatedBy": "Updated_by"
},
      event: {
        indexShow: () => [
          'app.record.index.show'
        ],
        createEditShow: () => [
          'app.record.create.show',
          'app.record.edit.show',
        ],
        detailShow: () => [
          `app.record.detail.show`,
        ],
        submit: () => [
          `app.record.create.submit`,
          `app.record.edit.submit`,
        ],
        submitSuccess: () => [
          `app.record.create.submit.success`,
          `app.record.edit.submit.success`,
        ],
        exportExcel: () => [
          `app.record.detail.process.proceed`
        ]
      },
    },
  },
  lib: {
    client: apiToken => {
      const opt = apiToken ?
        {
          auth: {
            apiToken
          }
        } :
        {};

      return new KintoneRestAPIClient(opt);
    },
    Swal,
    Kuc: Kuc,
    dt: luxon.DateTime,
  },
  globalVars: {
  },
};