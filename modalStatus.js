var ModalStatus;
(function (ModalStatus) {
    ModalStatus["Opened"] = "1";
    ModalStatus["Closed"] = "0";
})(ModalStatus || (ModalStatus = {}));
function buildModal(text, status) {
    return { text: text, status: status };
}
var modal = buildModal('hexlet forever', ModalStatus.Opened);
console.log(modal);
var modal1 = buildModal('bark forever', ModalStatus.Closed);
console.log(modal1);
