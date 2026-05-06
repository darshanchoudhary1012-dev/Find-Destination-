const busDatabase = [
    {
        no: "Bus 45",
        stops: ["Vijay Nagar", "Bapat Square", "Radisson", "College", "Rajwada"],
        dest: "Bansal College Campus"
    },
    {
        no: "Bus 12",
        stops: ["Station", "Rajwada", "Mhow Naka", "College"],
        dest: "Bansal College Campus"
    },
    {
        no: "Bus 08",
        stops: ["Bhawarkua", "Tower Square", "Sapna Sangeeta", "College"],
        dest: "Bansal College Campus"
    }
];

function searchBuses() {
    const input = document.getElementById('stopInput').value.trim().toLowerCase();
    const tbody = document.getElementById('tableBody');
    const table = document.getElementById('busTable');
    const error = document.getElementById('errorMsg');

    tbody.innerHTML = "";

    if (input === "") {
        alert("Please enter a stop name");
        return;
    }

    const filtered = busDatabase.filter(bus =>
        bus.stops.some(s => s.toLowerCase().includes(input))
    );

    if (filtered.length > 0) {
        table.style.display = "table";
        error.style.display = "none";

        filtered.forEach(bus => {
            const stopsHTML = bus.stops.map(s => {
                const isMatch = s.toLowerCase().includes(input);
                return `<span class="stop-chip ${isMatch ? 'highlight' : ''}">${s}</span>`;
            }).join("");

            tbody.innerHTML += `
                <tr>
                    <td><strong>${bus.no}</strong></td>
                    <td>${stopsHTML}</td>
                    <td>${bus.dest}</td>
                </tr>
            `;
        });
    } else {
        table.style.display = "none";
        error.style.display = "block";
    }
}
