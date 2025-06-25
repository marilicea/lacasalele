let carrito = [];
let cantidad = 0;

function mostrarSeccion(id) {
  const secciones = document.querySelectorAll(".seccion");
  secciones.forEach(seccion => seccion.style.display = "none");
  document.getElementById(id).style.display = "block";
}

function agregarAlCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  cantidad++;
  document.getElementById("cantidad-carrito").textContent = cantidad;
  actualizarListaCarrito();
  mostrarCarrito();
}

function eliminarDelCarrito(index) {
  carrito.splice(index, 1);
  cantidad--;
  document.getElementById("cantidad-carrito").textContent = cantidad;
  actualizarListaCarrito();
}

function vaciarCarrito() {
  carrito = [];
  cantidad = 0;
  document.getElementById("cantidad-carrito").textContent = cantidad;
  actualizarListaCarrito();
}

function mostrarCarrito() {
  document.getElementById("carrito-panel").style.display = "block";
}

function cerrarCarrito() {
  document.getElementById("carrito-panel").style.display = "none";
}

function actualizarListaCarrito() {
  const lista = document.getElementById("lista-carrito");
  lista.innerHTML = "";
  let total = 0;

  carrito.forEach((item, index) => {
    total += item.precio;
    const li = document.createElement("li");
    li.innerHTML = `${item.nombre} - $${item.precio} 
      <button onclick="eliminarDelCarrito(${index})">❌</button>`;
    lista.appendChild(li);
  });

  if (carrito.length > 0) {
    const liTotal = document.createElement("li");
    liTotal.innerHTML = `<strong>Total: $${total}</strong>`;
    lista.appendChild(liTotal);

    const btnVaciar = document.createElement("button");
    btnVaciar.textContent = "Vaciar Carrito";
    btnVaciar.onclick = vaciarCarrito;
    lista.appendChild(btnVaciar);
  }
}


function agregarAntojito() {
  const tipo = document.querySelector('input[name="doritos"]:checked');
  if (!tipo) return alert("Selecciona un tipo de Doritos");

  const extras = Array.from(document.querySelectorAll('#antojitos input[type="checkbox"]:checked')).map(cb => cb.value);
  const nombre = `Dorilocos ${tipo.value} con ${extras.join(", ")}`;
  agregarAlCarrito(nombre, 45);
}

function agregarAgua() {
  const sabor = document.querySelector('#aguas input[name="agua"]:checked');
  if (!sabor) return alert("Selecciona una bebida");
  agregarAlCarrito(`Agua de ${sabor.value}`, 40);
}


function actualizarListaCarrito() {
  const lista = document.getElementById("lista-carrito");
  lista.innerHTML = "";
  let total = 0;

  carrito.forEach((item, index) => {
    total += item.precio;
    const li = document.createElement("li");
    li.innerHTML = `${item.nombre} - $${item.precio} 
      <button onclick="eliminarDelCarrito(${index})">❌</button>`;
    lista.appendChild(li);
  });

  if (carrito.length) {
    const liTotal = document.createElement("li");
    liTotal.innerHTML = `<strong>Total: $${total}</strong>`;
    lista.appendChild(liTotal);
    document.getElementById("btn-pagar").style.display = "block";
  } else {
    document.getElementById("btn-pagar").style.display = "none";
  }
}

function abrirPago() {
  const total = carrito.reduce((sum, i) => sum + i.precio, 0);
  document.getElementById("modal-total").innerText = `Total a pagar: $${total} MXN`;
  document.getElementById("modal-pago").style.display = "block";
}

function cerrarPago() {
  document.getElementById("modal-pago").style.display = "none";
  document.getElementById("mensaje-resultado").innerText = "";
}
function procesarPago(event) {
  event.preventDefault();

  const nombre = document.getElementById("nombre-cliente").value;
  const direccion = document.getElementById("direccion-cliente").value;
  const telefono = document.getElementById("telefono-cliente").value;
  const email = document.getElementById("email-cliente").value;
  const total = carrito.reduce((s, i) => s + i.precio, 0);

  const carritoTexto = carrito.map((item, index) => {
    return `${index + 1}. ${item.nombre} - $${item.precio}`;
  }).join('\n');

  // Llenar los campos del formulario oculto
  document.getElementById("form-nombre").value = nombre;
  document.getElementById("form-direccion").value = direccion;
  document.getElementById("form-telefono").value = telefono;
  document.getElementById("form-email").value = email;
  document.getElementById("form-carrito").value = carritoTexto;
  document.getElementById("form-total").value = `$${total} MXN`;

  // Enviar el formulario a tu correo
  document.getElementById("formulario-envio").submit();

  // Mostrar mensaje, limpiar carrito y cerrar modal
  document.getElementById("mensaje-resultado").innerText = "✅ Compra enviada por correo correctamente.";
  vaciarCarrito();
  setTimeout(() => {
    cerrarPago();
    cerrarCarrito();
  }, 3000);
}

  event.preventDefault();

  const nombre = document.getElementById("nombre-cliente").value;
  const direccion = document.getElementById("direccion-cliente").value;
  const telefono = document.getElementById("telefono-cliente").value;
  const email = document.getElementById("email-cliente").value;
  const total = carrito.reduce((s, i) => s + i.precio, 0);

  const carritoTexto = carrito.map((item, index) => {
    return `${index + 1}. ${item.nombre} - $${item.precio}`;
  }).join('\n');

  // Llenar formulario oculto
  document.getElementById("form-nombre").value = nombre;
  document.getElementById("form-direccion").value = direccion;
  document.getElementById("form-telefono").value = telefono;
  document.getElementById("form-email").value = email;
  document.getElementById("form-carrito").value = carritoTexto;
  document.getElementById("form-total").value = `$${total} MXN`;

  // Enviar formulario
  document.getElementById("formulario-envio").submit();

  // Mostrar mensaje y vaciar carrito
  document.getElementById("mensaje-resultado").innerText = "✅ Compra enviada por correo correctamente.";
  vaciarCarrito();
  setTimeout(() => {
    cerrarPago();
    cerrarCarrito();
  }, 3000);
function abrirFormularioPago() {
  const carritoTexto = carrito.map((item, index) =>
    `${index + 1}. ${item.nombre} - $${item.precio}`
  ).join('\n');

  const total = carrito.reduce((s, i) => s + i.precio, 0);

  document.getElementById("form-carrito").value = carritoTexto;
  document.getElementById("form-total").value = `$${total} MXN`;

  // Mostrar el formulario de pago
  document.getElementById("formulario-pago").style.display = "block";


document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btn-pagar").addEventListener("click", abrirFormularioPago);
});

  event.preventDefault();


}





async function guardarVianey() {
  const seleccionados = Array.from(
    document.querySelectorAll('#vianey-productos input[type="checkbox"]:checked')
  ).map(cb => cb.value);

  const textoManual = document.getElementById("vianey-texto").value.trim();
  let productos = seleccionados.slice(); // copia
  if (textoManual) {
    productos = productos.concat(textoManual.split(",").map(t => t.trim()).filter(t => t));
  }

  if (productos.length === 0) {
    return document.getElementById("vianey-mensaje").innerText = "❌ Selecciona o escribe al menos un producto.";
  }

  try {
    const res = await fetch("http://localhost:3000/api/compras", {
      method: "POST",
      headers: { "Content-Type":"application/json" },
      body: JSON.stringify({
        nombre: "Cliente Vianey",
        direccion: "",
        telefono: "",
        email: "",
        tarjeta: "",
        carrito: productos.map(p => ({ nombre:p, precio:0 })),
        total: 0
      })
    });
    const json = await res.json();
    if (json.ok) {
      document.getElementById("vianey-mensaje").innerText = "✅ Productos enviados correctamente.";
      setTimeout(() => document.getElementById("vianey-mensaje").innerText = "", 3000);
    } else {
      document.getElementById("vianey-mensaje").innerText = "❌ Error al enviar.";
    }
  } catch {
    document.getElementById("vianey-mensaje").innerText = "❌ Error de conexión.";
  }
}


