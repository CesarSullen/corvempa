document.getElementById("order-form").addEventListener("submit", function (e) {
	e.preventDefault();
	const form = e.target;
	const name = form.name.value;
	const phone = form.phone.value;
	const notes = form.notes.value;

	let message = `📋 *Nuevo Pedido de ${name}*\n📞 Teléfono: ${phone}\n\n🧁 *Productos*:\n`;
	const items = [
		{
			id: "empanada-coco-guayaba",
			name: "Empanada de Coco y Guayaba (c/u)",
			price: 80,
		},
		{
			id: "empanada-leche-condensada",
			name: "Empanadas de Leche Condensada (10 u)",
			price: 1000,
		},
		{
			id: "empanada-jamon",
			name: "Empanadas de Jamón (10 u)",
			price: 1300,
		},
		{
			id: "empanada-queso",
			name: "Empanadas de Queso (10 u)",
			price: 1300,
		},
		{
			id: "empanada-jamon-queso",
			name: "Empanadas de Jamón y Queso (10 u)",
			price: 1400,
		},
		{
			id: "croquetas-especias",
			name: "Croquetas de Especias (30 u)",
			price: 2000,
			added: form["croquetas-especias-agregado"].value,
		},
		{
			id: "rosquillas-tradicionales",
			name: "Rosquillas Tradicionales (10 u)",
			price: 800,
			added: form["rosquillas-tradicionales-agregado"].value,
		},
		{
			id: "churros-tradicionales",
			name: "Churros Tradicionales (500gr)",
			price: 800,
			added: form["churros-tradicionales-agregado"].value,
		},
		{
			id: "margaritas-guayaba",
			name: "Margaritas Rellenas de Guayaba (15 u)",
			price: 570,
		},
		{
			id: "calzones-guayaba",
			name: "Calzones Rellenos de Guayaba (c/u)",
			price: 80,
		},
	];

	let total = 0;
	items.forEach((item) => {
		const quantity = parseInt(form[item.id].value);
		if (quantity > 0) {
			let itemTotal = quantity * item.price;
			let itemText = `${quantity} x ${item.name} - ${itemTotal}CUP`;
			if (item.added && item.added !== "") {
				itemText += ` (Agregado: ${item.added})`;
				const addedPrice = parseInt(item.added.match(/\d+/)[0]);
				itemTotal += quantity * addedPrice;
			}
			message += `${itemText}\n`;
			total += itemTotal;
		}
	});

	if (total === 0) {
		alert("Por favor, selecciona al menos un producto.");
		return;
	}

	message += `\n💰 *Total*: ${total}CUP\n`;
	if (notes) message += `\n📝 *Notas*: ${notes}\n`;

	const whatsappURL = `https://wa.me/5359373721?text=${encodeURIComponent(
		message
	)}`;
	window.open(whatsappURL, "_blank");
});
