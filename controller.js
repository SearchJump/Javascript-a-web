const router = require("express").Router();
const productoModel = require("./models/producto");
const categoriaModel = require("./models/categoria");
const proveedorModel = require("./models/proveedor");

router.get("/productos", async (req, res) => {
  const productos = await productoModel.find();
  res.send(productos);
});

router.get("/productos/:id", async (req, res) => {
  const producto = await productoModel.findById(req.params.id);
  if (!producto) {
    res.status(404).send("Producto no encontrado");
  }

  res.send(producto);
});

router.post("/productos", async (req, res) => {
  const producto = new productoModel({
    nombre: req.body.nombre,
    descripcion: req.body.descripcion,
    precio: req.body.precio,
    categoriaId: req.body.categoriaId,
    proveedorId: req.body.proveedorId
  });

  await producto.save();
  res.status(201).send(producto);
});

router.put("/productos/:id", async (req, res) => {
  const producto = await productoModel.findById(req.params.id);
  if (!producto) {
    res.status(404).send("Producto no encontrado");
  }

  producto.nombre = req.body.nombre;
  producto.descripcion = req.body.descripcion;
