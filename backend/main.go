package main

import (
	"log"
	"os" // Importante para leer variables de entorno

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"gorm.io/driver/postgres" // Cambiado de sqlite a postgres
	"gorm.io/gorm"
)

func main() {
	godotenv.Load()
	dsn := os.Getenv("DATABASE_URL")
	if dsn == "" {
		dsn = "host=localhost user=postgres password=... dbname=postgres port=5432 sslmode=disable"
	}

	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatal("Error conectando a Supabase:", err)
	}

	// 2. Migraciones y Seeders (igual que antes)
	db.AutoMigrate(&Service{}, &Project{}, &Tech{}, &About{})
	SeedData(db)

	r := gin.Default()

	// 3. CORS PRO: En producción deberías poner la URL de tu frontend
	r.Use(cors.Default())

	r.Static("/assets", "./assets")

	api := r.Group("/api")
	{
		api.GET("/services", GetServices(db))
		api.GET("/projects", GetProjects(db))
		api.GET("/tech", GetTechStack(db))
		api.GET("/about", GetAbout(db))
	}

	// 4. PUERTO DINÁMICO (Render asigna uno automáticamente)
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}
	r.Run(":" + port)
}
