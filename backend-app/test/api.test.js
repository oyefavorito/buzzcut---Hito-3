import request from "supertest";
import app from "../index.js";
import dotenv from "dotenv";

dotenv.config(); // Cargar variables de entorno

describe("🧪 Pruebas de API REST", () => {
  const token = process.env.TEST_TOKEN;

  test("🔍 POST /colaboraciones/colaborar - Crear colaboración exitosa", async () => {
    const response = await request(app)
      .post("/colaboraciones/colaborar")
      .set("Authorization", `Bearer ${token}`)
      .send({
        img_url: "https://example.com/image.jpg",
        nombre: "Colaboración de prueba",
        precio: 15000,
        descripcion: "Prueba automática",
        id_categoria: 4,
      });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id_producto");
    expect(response.body.mensaje).toMatch(/colaboración creada/i);
  });

  test("🔒 GET /colaboraciones/mis-colaboraciones - Sin token", async () => {
    const response = await request(app).get(
      "/colaboraciones/mis-colaboraciones"
    );

    expect(response.status).toBe(401);
    expect(response.body.mensaje).toMatch(/denegado|token/i);
  });

  test("📖 GET /productos/colaboraciones - Listar colaboraciones públicas", async () => {
    const response = await request(app).get("/productos/colaboraciones");

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("colaboraciones");
    expect(response.body.colaboraciones).toBeInstanceOf(Array);
  });

  test("❌ GET /productos/9999 - Producto no existente", async () => {
    const response = await request(app).get("/productos/9999");

    expect(response.status).toBe(404);
    expect(response.body.mensaje).toMatch(/no encontrado/i);
  });
});
