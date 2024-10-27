// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails";
import "controllers";
import Rails from "@rails/ujs"; // Add this line
Rails.start(); // And this line to start Rails UJS
