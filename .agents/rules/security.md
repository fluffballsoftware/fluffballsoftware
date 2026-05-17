---
trigger: always_on
---

Enforce the principle of least privilege and general security in Terraform and the web architecture.

1. Terraform Security Rules

No Wildcards: The agent must not use Resource = "*" in any IAM policy. Every policy must target specific resource ARNs or use interpolation (e.g., ${aws_dynamodb_table.name.arn}).

No Admin Policies: The agent is prohibited from attaching AdministratorAccess or IAMFullAccess to any role.

Scoped Actions: Permissions must be limited to the exact actions required for the task (e.g., use s3:GetObject instead of s3:*).

Zero Hardcoding: The agent must not hardcode API keys, passwords, or tokens in .tf files.

Backend Security: Ensure the S3 backend configuration includes encrypt = true and dynamodb_table for state locking.

2. Web & Cloud Infrastructure Rules

Public Access Block: Every aws_s3_bucket resource must be accompanied by an aws_s3_bucket_public_access_block set to true for all fields.

When generating code for S3 uploads (e.g. Profile Photos), default to Bucket Owner Enforced settings. Never suggest code that uses PutObjectAcl unless explicitly requested for a public-read use case.

Origin Access Control (OAC): For frontend hosting, the agent must use CloudFront OAC to access S3. Do not configure S3 buckets for "Static Website Hosting" as this requires making the bucket public.

3. Agent Governance (Internal Guardrails)

Terraform Plan Audit: Before running terraform apply, the agent must parse the terraform plan output and report any "Destroy" actions or "IAM Policy Changes" to the user.

Dependency Scanning: When the agent adds a Go module, it must check the go.sum file and report if the module comes from an unverified or personal repository.