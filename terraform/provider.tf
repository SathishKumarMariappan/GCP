provider "google" {
  project     = "ncpl-june-24-430818"
  region      = "us-central1"
}




// terraform init :: to set up the providerr so terraform understands the target cloud 
// terraform validate ::  to check if the code id correct
// terraform plan(terraform validate) :: to identify the changes betweent terraform and the cloud
// terraform apply(terraform plan(terraform validate)) :: to make the changes to the cloud 
// terraform destroy(terraform plan(terraform validate)) :: remove the changez from the cloud 


// Terraformkeyword(resource/provider/data) 
// providerKeyWord(google_storage_bucket) => indicates the service  you are using
// TerraformVariable(storageBucket) => the variable for the terraform element with in terraform 
// service properties {required and optional}