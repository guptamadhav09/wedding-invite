const SHEET_NAME = "RSVP Responses";

function doPost(e) {
  const data = JSON.parse(e.postData.contents || "{}");
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.insertSheet(SHEET_NAME);

  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      "Submitted At",
      "Name",
      "Contact",
      "Guests",
      "Events",
      "Dietary",
      "Message",
      "Side",
    ]);
  }

  sheet.appendRow([
    data.submittedAt || new Date(),
    data.name || "",
    data.contact || data.phone || data.email || "",
    data.guests || "",
    Array.isArray(data.events) ? data.events.join(", ") : data.events || "",
    data.dietary || "",
    data.message || data.wishes || "",
    data.side || "",
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
