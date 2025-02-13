enum ModalStatus {
	Opened = '1',
	Closed = '0',
}

function buildModal(text: string, status: ModalStatus) {
	return { text, status }
}

const modal = buildModal('hexlet forever', ModalStatus.Opened)
console.log(modal) 

const modal1 = buildModal('bark forever', ModalStatus.Closed)
console.log(modal1) 

