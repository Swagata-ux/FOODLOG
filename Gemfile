# Gemfile
source "https://rubygems.org"

# Main Rails gem
gem "rails", "~> 7.2.2"

# Asset pipeline for Rails
gem "sprockets-rails"

# Database for Active Record (sqlite3 in development; consider using PostgreSQL in production)
gem "sqlite3", ">= 1.4"

# Puma web server
gem "puma", ">= 5.0"

# JavaScript with ESM import maps
gem "importmap-rails"

# Hotwire for SPA-like experience
gem "turbo-rails"
gem "stimulus-rails"

# For building JSON APIs
gem "jbuilder"

# Uncomment if you plan to use Redis (for caching, Action Cable, etc.)
# gem "redis", ">= 4.0.1"

# Uncomment if you need higher-level Redis data types with Kredis
# gem "kredis"

# Uncomment if you need secure password hashing
# gem "bcrypt", "~> 3.1.7"

# Time zone data for Windows
gem "tzinfo-data", platforms: %i[ windows jruby ]

# Speeds up boot time by caching; used in `config/boot.rb`
gem "bootsnap", require: false

# Uncomment if you plan to use Active Storage variants (for image transformations)
# gem "image_processing", "~> 1.2"

# CSS preprocessing
gem "sass-rails", "~> 6.0"

# Beautifies HTML output (used in development)
gem "htmlbeautifier"

# Development and Test Environments
group :development, :test do
  # Debugging in development
  gem "debug", platforms: %i[ mri windows ], require: "debug/prelude"

  # Security analysis
  gem "brakeman", require: false

  # Ruby style enforcement
  gem "rubocop-rails-omakase", require: false
end

# Development-only Gems
group :development do
  # For debugging in the browser console
  gem "web-console"

  # Add rufo for Ruby code formatting
  gem "rufo"
end

# Testing-only Gems
group :test do
  # For system testing with Capybara and Selenium
  gem "capybara"
  gem "selenium-webdriver"
end
