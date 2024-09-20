let carrito = [
    {
      dia: "Lunes",
      comidas: [
        { nombre: "Pata Muslo", guarnicion: "Ensalada", nota: "Vacío", img: "../../../imag/empanadadepollo.png" },
        { nombre: "Ensalada cruda", guarnicion: "", nota: "Vacío", img: "../../../imag/empanadadepollo.png" }
      ]
    },
    {
      dia: "Jueves",
      comidas: [
        { nombre: "Pata Muslo", guarnicion: "Ensalada", nota: "Vacío", img: "../../../imag/empanadadepollo.png" }
      ]
    },
    {
      dia: "Viernes",
      comidas: [
        { nombre: "Pata Muslo", guarnicion: "Ensalada", nota: "Vacío", img: "../../../imag/empanadadepollo.png" },
        { nombre: "Pata Muslo", guarnicion: "Ensalada", nota: "Vacío", img: "../../../imag/empanadadepollo.png" }
      ]
    }
  ];
  
  function generarCarrito() {
    const container = document.getElementById('carrito-container');
    container.innerHTML = ''; // Limpiar el contenedor previo
  
    carrito.forEach(diaPedido => {

        const diaTitulo = document.createElement('h3');
        diaTitulo.textContent = diaPedido.dia;
        container.appendChild(diaTitulo);

      const diaDiv = document.createElement('div');
      diaDiv.classList.add('dia-container');
  
      // Crear los items de comida
      diaPedido.comidas.forEach((comida, index) => {
        const comidaDiv = document.createElement('div');
        comidaDiv.classList.add('comida-item');
        
        // Imagen de comida
        const img = document.createElement('img');
        img.src = comida.img;
        comidaDiv.appendChild(img);
        
        // Texto de comida
        const infoDiv = document.createElement('div');
        infoDiv.classList.add('info-comida');
        infoDiv.innerHTML = `
          <p><strong>${comida.nombre}</strong></p>
          <p>Guarnición: ${comida.guarnicion || "(Seleccionar en su sección)"}</p>
          <p>Nota producto: ${comida.nota || "Vacío"}</p>
        `;
        comidaDiv.appendChild(infoDiv);
        
        // Botón para eliminar
        const eliminarBtn = document.createElement('button');
        eliminarBtn.textContent = 'X';
        eliminarBtn.classList.add('eliminar-comida');
        eliminarBtn.onclick = () => eliminarComida(diaPedido.dia, index);
        comidaDiv.appendChild(eliminarBtn);
        
        diaDiv.appendChild(comidaDiv);
      });
      
      container.appendChild(diaDiv);
    });
  }
  
  // Función para eliminar una comida del carrito
  function eliminarComida(dia, index) {
    const diaSeleccionado = carrito.find(d => d.dia === dia);
    diaSeleccionado.comidas.splice(index, 1);
    generarCarrito(); // Regenerar la vista
  }
  
  // Llamada inicial para mostrar el carrito
  window.onload = function() {
    generarCarrito();
  };
  
  document.getElementById('encargar-btn').addEventListener('click', () => {
    // Mostrar el modal de confirmar pedido
    document.getElementById('modalConfirmarPedido').style.display = 'flex';
  
    // Aquí puedes generar la lista de productos seleccionados
    const carrito = [
      { dia: 'Lunes', producto: 'Pata muslo y ensalada' },
      { dia: 'Jueves', producto: 'Pata muslo y ensalada' },
      { dia: 'Viernes', producto: 'Pata muslo y ensalada' },
      { dia: 'Viernes', producto: 'Pata muslo y ensalada' },
      { dia: 'Viernes', producto: 'Pata muslo y ensalada' },
      { dia: 'Viernes', producto: 'Pata muslo y ensalada' }
    ];
  
    const pedidoLista = document.getElementById('pedido-lista');
    pedidoLista.innerHTML = carrito.map(item => `<p><strong>${item.dia}</strong>: ${item.producto}</p>`).join('');
  });
  
  document.getElementById('confirmar-btn').addEventListener('click', () => {
    // Ocultar el modal de confirmar pedido y mostrar el de pedido realizado
    document.getElementById('modalConfirmarPedido').style.display = 'none';
    document.getElementById('modalPedidoRealizado').style.display = 'flex';
  });
  
  document.getElementById('volver-btn').addEventListener('click', () => {
    // Ocultar el modal de confirmar pedido para que el usuario vuelva a editar
    document.getElementById('modalConfirmarPedido').style.display = 'none';
  });
  
  document.getElementById('continuar-btn').addEventListener('click', () => {
    // Ocultar el modal de pedido realizado
    document.getElementById('modalPedidoRealizado').style.display = 'none';
   
  });
  
  