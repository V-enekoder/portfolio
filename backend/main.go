package main

import (
	"log"
	"os"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv" // Para leer el .env en local
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

func main() {
	// 1. Cargar .env (solo fallará en producción, lo cual está bien)
	godotenv.Load()

	// 2. Leer la URL de Supabase desde el entorno
	dsn := os.Getenv("DATABASE_URL")
	if dsn == "" {
		log.Fatal("DATABASE_URL no está configurada")
	}

	// 3. Conectar a Postgres (Supabase)
	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatal("Error conectando a Supabase:", err)
	}

	// 4. Migrar y Seed
	db.AutoMigrate(&Service{}, &Project{}, &Tech{}, &About{})
	SeedData(db)

	r := gin.Default()

	// 5. Configurar CORS (Permitir todo por ahora)
	r.Use(cors.Default())

	// 6. Servir archivos estáticos (importante para tus imágenes)
	r.Static("/assets", "./assets")

	api := r.Group("/api")
	{
		api.GET("/services", GetServices(db))
		api.GET("/projects", GetProjects(db))
		api.GET("/tech", GetTechStack(db))
		api.GET("/about", GetAbout(db))
	}

	// 7. Puerto dinámico para Render
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	log.Printf("Servidor corriendo en el puerto %s", port)
	r.Run(":" + port)
}
