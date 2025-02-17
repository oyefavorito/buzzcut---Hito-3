-- crear la tabla
CREATE DATABASE buzzcut;

-- ingresar a la tabla
\c buzzcut;

-- Tabla de Usuarios
CREATE TABLE USUARIOS (
    id_usuario SERIAL PRIMARY KEY,
    nombre_apellido VARCHAR(100) NOT NULL,
    correo VARCHAR(35) UNIQUE NOT NULL,
    clave VARCHAR(255) NOT NULL,
    telefono VARCHAR(20),
    direccion VARCHAR(255),
    ciudad VARCHAR(50)
);

-- Tabla de Categorías
CREATE TABLE CATEGORIAS (
    id_categoria SERIAL PRIMARY KEY,
    nombre_categoria VARCHAR(50) NOT NULL
);

-- Tabla de Productos
CREATE TABLE PRODUCTOS (
    id_producto SERIAL PRIMARY KEY,
    img_url VARCHAR(500),
    nombre VARCHAR(100) NOT NULL,
    precio INTEGER NOT NULL,
    descripcion TEXT,
    id_categoria INTEGER NOT NULL,
    FOREIGN KEY (id_categoria) REFERENCES CATEGORIAS(id_categoria) ON DELETE CASCADE
);

-- Tabla de Colaboraciones
CREATE TABLE COLABORACIONES (
    id_colaboracion SERIAL PRIMARY KEY,
    id_usuario INTEGER NOT NULL,
    id_producto INTEGER NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES USUARIOS(id_usuario) ON DELETE CASCADE,
    FOREIGN KEY (id_producto) REFERENCES PRODUCTOS(id_producto) ON DELETE CASCADE
);

-- Tabla de Compras
CREATE TABLE COMPRAS (
    id_compra SERIAL PRIMARY KEY,
    id_usuario INTEGER NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES USUARIOS(id_usuario) ON DELETE CASCADE
);

-- Tabla intermedia de Compras y Productos (relación muchos a muchos)
CREATE TABLE COMPRAS_PRODUCTOS (
    id_compra_producto SERIAL PRIMARY KEY,
    id_compra INTEGER NOT NULL,
    id_producto INTEGER NOT NULL,
    FOREIGN KEY (id_compra) REFERENCES COMPRAS(id_compra) ON DELETE CASCADE,
    FOREIGN KEY (id_producto) REFERENCES PRODUCTOS(id_producto) ON DELETE CASCADE
);


\dt