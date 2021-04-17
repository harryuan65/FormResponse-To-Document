// Follow Me on https://medium.com/@harryuan-65

function myFunction(event) {
  var formData = event.values;
  var timeString = formData[0];
  var datetime = timeString.split(" ")[0];
  var [month, day, year] = datetime.split("/");
  timestamp = `${year}/${month}/${day}`;

  var name = formData[1];
  var email = formData[2];
  var message = formData[3];

  // 打開模板檔案
  var file = DriveApp.getFileById("模板檔案ID");
  // 打開輸出資料夾
  var folder = DriveApp.getFolderById("模板資料夾ID");

  // 複製一份模板進去輸出資料夾
  var copy = file.makeCopy(name + "同意書", folder);

  // 打開剛剛複製出來的新檔案
  var doc = DocumentApp.openById(copy.getId());
  var body = doc.getBody();  // 取得新文件的內容。也可以透過它直接更改他的內容

  // 將資料塞到對應內容上面
  body.replaceText("{{name}}", name);
  body.replaceText("{{email}}", email);
  body.replaceText("{{message}}", message);
  body.replaceText("{{timestamp}}", timestamp);

  doc.saveAndClose();
}



