function handleClick(event) {
	console.log(event.target);
	if (event.target.matches(".btn-prices-item")) {
		const pricesItem = event.target.closest(".prices-item");
		pricesItem.classList.toggle("opened");
	}

	if (event.target.matches(".btn-city-select")) {
		const pricesItem = event.target.closest(".city-item");
		pricesItem.classList.toggle("opened");
	}

	if (event.target.matches(".btn-city-item")) {
		const cityItemInfo = event.target.nextElementSibling;
		console.log(cityItemInfo);
		cityItemInfo.classList.toggle("info-open");
	}
}

document.addEventListener("click", handleClick);
