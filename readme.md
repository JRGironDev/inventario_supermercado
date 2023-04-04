**Titulo**
Proyecto Supermercado

**Observaciones**
Para los usuarios, se agregaron las contraseñas encriptadas en la base de datos, pero en la interfaz se deben ingresar las contraseñas sin encriptar.

Los usuarios y contraseñas son los siguientes:

1. Usuario: 52356363, Contraseña: 123\*abc
2. Usuario: 84075446, Contraseña: Bienvenida\*2020

Las alertas presentan ciertos problemas de pérdida de focus en los inputs al cerrarlas, como por ejemplo cuando se ingresa un usuario o contraseña inválida. Según pude encontrar en Stack Overflow puede ser algo del browser, la solución rápida es minimizar la ventana y volver a abrirla para recuperar el focus.
Sin embargo, en la ventana de pedido de una vez se cierra electrón si además de la alerta cierro automáticamente la ventana de pedido, es por eso que se queda abierta después de generar el pedido.

La cantidad solicitada en los pedidos se muestra al lado de la existencia de cada producto, para esto se generó un evento que corre cada segundo y va verificando si hay pedidos para el mismo producto, si hay más de un pedido va sumando la cantidad total solicitada y guarda el resultado en una tabla que posteriormente se guarda en una columna de la tabla productos. Para poder ver esta cantidad solicitada entre los parentesis es necesario recargar la página para que carge correctamente la información, o bien entrar a la página de edición o pedido.

Los scripts de la base de datos (los archivos DML y DDL) están ubicados en el repositorio, solamente hay que ejecutarlos por completo.
