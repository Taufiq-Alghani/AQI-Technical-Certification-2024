const functions = ((
  {
    app,
    lib,
    globalVars
  }
) => {
  const {
    thisApp,
  } = app;
  const thisAppClient = lib.client(thisApp.token)
  return {
    downloadExcelFile: (record) => {
     const excelAttachment =  record.excelAttachment.value
     // Iterate each excel attachment in the record
     excelAttachment.forEach(async item => {
      if (item.contentType === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'){
        // download every excel attachment in the record
        console.log(item)
        const downloadExcelFile =  await thisAppClient.file.downloadFile({
          fileKey : item.fileKey
        })
        console.log(downloadExcelFile)
        // Access the downloaded excel attachment
        const workbook = new ExcelJS.Workbook();
        await workbook.xlsx.load(downloadExcelFile);
        console.log(workbook)
      const worksheet = workbook.worksheets[0]
      // Variable to make a condition if the attachment has the exact same template with PO template
      const headerTitle = worksheet.getCell('E1').value
      const headerPoNo = worksheet.getCell('G3').value
      const headerDate = worksheet.getCell('I4').value
        if (headerTitle !== 'PURCHASE ORDER' && headerPoNo !== 'P.O. NUMBER:' && headerDate !== 'Date:'){
        alert(item.name + ' is not a correct Purchase Order Excel Please Check it again')
        }else {
          console.log(worksheet.getCell('A7').value)
        }

      }else {
        alert(item.name + ' is not an excel file')
      }
     });
    }
  };
})(
  // eslint-disable-next-line no-undef
  init
);