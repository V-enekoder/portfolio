package main

import (
	"log"

	"gorm.io/gorm"
)

func SeedData(db *gorm.DB) {
	// Seed de Servicios
	var serviceCount int64
	db.Model(&Service{}).Count(&serviceCount)
	if serviceCount == 0 {
		services := []Service{
			{
				Title: "DESARROLLO DE APIS Y BACKEND",
				Desc:  "Diseño y construyo el 'cerebro' de tu aplicación. Creo sistemas robustos.",
				Img:   "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
			},
			{
				Title: "ADMINISTRACIÓN DE SERVIDORES LINUX",
				Desc:  "La estabilidad es innegociable. Configuración y optimización operativa 24/7.",
				Img:   "https://images.unsplash.com/photo-1558494949-ef526b01201b?q=80&w=2000&auto=format&fit=crop",
			},
			{
				Title: "CONSULTORÍA Y ESTRATEGIA IT",
				Desc:  "Análisis de necesidades y diseño de hoja de ruta técnica para tu negocio.",
				Img:   "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
			},
		}
		db.Create(&services)
		log.Println("✅ Seed: Servicios insertados")
	}

	// Seed de Proyectos
	var projectCount int64
	db.Model(&Project{}).Count(&projectCount)
	if projectCount == 0 {
		projects := []Project{
			{
				Title: "E-Commerce API",
				Tag:   "Go / PostgreSQL",
				Img:   "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800",
				Link:  "#",
			},
			{
				Title: "Monitor de Servidores",
				Tag:   "Python / Linux",
				Img:   "https://images.unsplash.com/photo-1558494949-ef526b01201b?q=80&w=800",
				Link:  "#",
			},
		}
		db.Create(&projects)
		log.Println("✅ Seed: Proyectos insertados")
	}
}
