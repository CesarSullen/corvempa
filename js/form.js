document.getElementById("order-form").addEventListener("submit", function (e) {
	e.preventDefault();
	const form = e.target;
	const name = form.name.value;
	const phone = form.phone.value;
	const notes = form.notes.value;

	let message = `📋 *Nuevo Pedido de ${name}*\n📞 Teléfono: ${phone}\n\n🧁 *Productos*:\n`;
	const items = [
		{
			id: "empanada-coco",
			name: "Empanada Coco (c/u)",
			price: 70,
		},
		{
			id: "empanada-guayaba",
			name: "Empanada Guayaba (c/u)",
			price: 70,
		},
		{
			id: "calzones-guayaba",
			name: "Calzones Guayaba (c/u)",
			price: 80,
		},
		{
			id: "flores-guayaba",
			name: "Flores Guayaba (c/u)",
			price: 40,
		},
		{
			id: "bizcocho-chocolate",
			name: "Bizcocho Chocolate (16 cm)",
			price: 1300,
		},
		{
			id: "bizcocho-vainilla",
			name: "Bizcocho Vainilla (16 cm)",
			price: 1300,
		},
		{
			id: "rosquitas-azucaradas",
			name: "Rosquitas Azucaradas (10 uds.)",
			price: 800,
		},
		{
			id: "churros-leche-condensada",
			name: "Churros Leche Condensada (40 uds.)",
			price: 1600,
		},
		{
			id: "crepes-nutella",
			name: "Crepes Nutella (20 uds.)",
			price: 4000,
		},
		{
			id: "crepes-chocolate",
			name: "Crepes Chocolate Clásico (20 uds.)",
			price: 3000,
		},
		{
			id: "trufas-chocolate",
			name: "Trufas Chocolate y Leche Condensada (18 uds.)",
			price: 2400,
		},
		{
			id: "piononos-vainilla",
			name: "Piononos Vainilla (7 uds.)",
			price: 1200,
		},
		{
			id: "piononos-fresa",
			name: "Piononos Fresa (7 uds.)",
			price: 1200,
		},
		{
			id: "piononos-chocolate",
			name: "Piononos Chocolate (7 uds.)",
			price: 1200,
		},
	];

	let total = 0;
	items.forEach((item) => {
		const quantity = parseInt(form[item.id].value);
		if (quantity > 0) {
			const itemTotal = quantity * item.price;
			message += `${quantity} x ${item.name} - ${itemTotal} CUP\n`;
			total += itemTotal;
		}
	});

	if (total === 0) {
		alert("Por favor, selecciona al menos un producto.");
		return;
	}

	message += `\n💰 *Total*: ${total} CUP\n`;
	if (notes) message += `\n📝 *Notas*: ${notes}\n`;

	const whatsappURL = `https://wa.me/5359373721?text=${encodeURIComponent(
		message
	)}`;
	window.open(whatsappURL, "_blank");
});
