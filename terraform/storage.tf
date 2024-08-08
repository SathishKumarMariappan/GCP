
resource "google_storage_bucket" "storageBucket" {
  name          = "demo-20240801"
  location      = "EU"
}



resource "google_storage_bucket" "storageBucket2" {
  name          = "demo-20240802"
  location      = "EU"
}
