variable "resource_group_name" {
  description = "Name of the resource group"
  type        = string
  default     = "resume-frontend-rg"
}

variable "location" {
  description = "Azure region"
  type        = string
  default     = "uksouth"
}

variable "storage_account_name" {
  description = "Name of the storage account"
  type        = string
  default     = "zchresumestrfrontend"
}

variable "cdn_endpoint_name" {
  description = "Name of the CDN endpoint"
  type        = string
  default     = "shecodesclouds"
}