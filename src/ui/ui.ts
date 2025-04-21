export function showNotification(message: string, type: "success" | "danger") {
    const container = document.getElementById("user-list") || document.body;
    const div = document.createElement("div");
    div.className = `alert alert-${type}`;
    div.innerText = message;
    container.appendChild(div);
    setTimeout(() => div.remove(), 3000);
  }
  