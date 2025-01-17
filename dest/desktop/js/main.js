((
  {
    app,
    lib,
    globalVars
  },
  functions
) => {
  const {thisApp} = app;

  kintone.events.on(thisApp.event.createEditShow(), e => {
    console.log({e});

    return e;
  });

  kintone.events.on(thisApp.event.detailShow(), e => {
    console.log({e});

    return e;
  });

  kintone.events.on(thisApp.event.indexShow(), e => {
    console.log({e});

    return e;
  });

  kintone.events.on(thisApp.event.exportExcel(),async e => {
    const record = e.record
    functions.downloadExcelFile(record)
    
    return false;
  })
})(
  // eslint-disable-next-line no-undef
  init,
  // eslint-disable-next-line no-undef
  functions
);