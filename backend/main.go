package main

import (
	"log"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

func main() {
	// 1. Conexión a DB
	db, err := gorm.Open(sqlite.Open("portfolio.db"), &gorm.Config{})
	if err != nil {
		log.Fatal("Error al conectar DB:", err)
	}

	// 2. Migraciones
	db.AutoMigrate(&Service{}, &Project{}, &Tech{}, &About{})

	// 3. Ejecutar Seeder
	SeedData(db)

	// 4. Configurar Servidor
	r := gin.Default()
	r.Use(cors.Default())
	r.Static("/assets", "./assets")
	// 5. Definir Rutas usando los handlers
	api := r.Group("/api")
	{
		api.GET("/services", GetServices(db))
		api.GET("/projects", GetProjects(db))
		api.GET("/tech", GetTechStack(db))
		api.GET("/about", GetAbout(db))
	}
	r.GET("/health", HealthCheck)

	// 6. Iniciar
	log.Println("🚀 Servidor en http://localhost:8080")
	r.Run(":8080")
}
