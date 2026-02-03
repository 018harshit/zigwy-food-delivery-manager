let orders = [];
let orderIdCounter = 1;

// ADD ORDER
function addOrder() {
    const restaurant = restaurantName.value.trim();
    const items = itemCount.value;
    const dist = distance.value;
    const paid = isPaid.value === "true";

    if (!restaurant || !items || !dist) {
        alert("Please fill all fields correctly");
        return;
    }

    orders.push({
        orderId: orderIdCounter++,
        restaurantName: restaurant,
        itemCount: Number(items),
        isPaid: paid,
        deliveryDistance: Number(dist)
    });

    displayOrders(orders);
}

// DISPLAY ORDERS
function displayOrders(list) {
    orderTable.innerHTML = "";

    if (list.length === 0) {
        orderTable.innerHTML = `<tr><td colspan="5">No orders found</td></tr>`;
        return;
    }

    list.forEach(o => {
        orderTable.innerHTML += `
        <tr>
            <td>${o.orderId}</td>
            <td>${o.restaurantName}</td>
            <td>${o.itemCount}</td>
            <td class="${o.isPaid ? 'paid' : 'unpaid'}">
                ${o.isPaid ? 'Paid' : 'Unpaid'}
            </td>
            <td>${o.deliveryDistance}</td>
        </tr>`;
    });
}

// FILTER
function applyFilter() {
    let result = orders;
    const status = filterPaid.value;
    const maxDist = maxDistance.value;

    if (status === "paid") result = result.filter(o => o.isPaid);
    if (status === "unpaid") result = result.filter(o => !o.isPaid);
    if (maxDist) result = result.filter(o => o.deliveryDistance <= maxDist);

    displayOrders(result);
}

// ASSIGN DELIVERY
function assignDelivery() {
    const maxDist = maxDistance.value;

    if (!maxDist) {
        output.innerText = "Please enter maximum distance";
        return;
    }

    const unpaidOrders = orders
        .filter(o => !o.isPaid && o.deliveryDistance <= maxDist)
        .sort((a, b) => a.deliveryDistance - b.deliveryDistance);

    if (unpaidOrders.length === 0) {
        output.innerText = "No order available";
        return;
    }

    unpaidOrders[0].isPaid = true;
    output.innerText = `Assigned Order ID: ${unpaidOrders[0].orderId}`;

    displayOrders(orders);
}

// DARK MODE
function toggleDarkMode() {
    document.body.classList.toggle("dark");
}
