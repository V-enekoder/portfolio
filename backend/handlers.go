package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

func GetServices(db *gorm.DB) gin.HandlerFunc {
	return func(c *gin.Context) {
		var services []Service
		db.Find(&services)
		c.JSON(http.StatusOK, services)
	}
}

func GetProjects(db *gorm.DB) gin.HandlerFunc {
	return func(c *gin.Context) {
		var projects []Project
		db.Find(&projects)
		c.JSON(http.StatusOK, projects)
	}
}

func HealthCheck(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{"status": "online"})
}

func GetTechStack(db *gorm.DB) gin.HandlerFunc {
	return func(c *gin.Context) {
		var techs []Tech
		db.Find(&techs)
		c.JSON(http.StatusOK, techs)
	}
}

func GetAbout(db *gorm.DB) gin.HandlerFunc {
	return func(c *gin.Context) {
		var about About
		// Buscamos el primer registro
		if err := db.First(&about).Error; err != nil {
			c.JSON(http.StatusNotFound, gin.H{"error": "No hay información"})
			return
		}
		c.JSON(http.StatusOK, about)
	}
}
