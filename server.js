require("dotenv").config();
const express = require("express");

const BrandsRouter = require("./src/Brands/Brands.route");
const Client_CompanyRouter = require("./src/Client_Company/Client_Company.route");
const CompanyRouter = require("./src/Companies/Company.router");
const ClientsRouter = require("./src/Clients/clients.route");
const InventoryRouter = require("./src/Inventory/inventory.route");
const InvenOpeRouter = require("./src/Inventory_Operations/InvenOpe.route");
const InvoicesRouter = require("./src/Invoices/invoices.route");
const LaborsRouter = require("./src/Labors/labors.route");
const MessageRouter = require("./src/Messages/message.route");
const modelPartRouter = require("./src/Model_parts/modelParts.route");
const modelsRouter = require("./src/Models/models.route");
const partsRouter = require("./src/Parts/parts.route");
const repaireLaborRouter = require("./src/Repaire_labor/repaireLabor.route");

const server = express();

server.use(express.urlencoded({ extended: true }));
server.use(express.json());

server.get("/", (req, res) => {
  res.json({
    msg: "Hello world",
  });
});

server.use("/brands", BrandsRouter);
server.use("/clientcompany", Client_CompanyRouter);
server.use("/companies", CompanyRouter);
server.use("/clients", ClientsRouter);
server.use("/inventory", InventoryRouter);
server.use("/inventoryopereations", InvenOpeRouter);
server.use("/invoices", InvoicesRouter);
server.use("/labors", LaborsRouter);
server.use("/messages", MessageRouter);
server.use("/modelparts", modelPartRouter);
server.use("/models", modelsRouter);
server.use("/parts", partsRouter);
server.use("/repairelabors", repaireLaborRouter);

server.listen(process.env.PORT, () => {
  console.log("Server is listening at PORT :", process.env.PORT);
});
