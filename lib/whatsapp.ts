export function generateWhatsAppLink(phoneNumber: string) {
	return `https://wa.me/${phoneNumber
		.replace(/^\+0*/, "")
		.replace(/[^0-9]/g, "")}`;
}
