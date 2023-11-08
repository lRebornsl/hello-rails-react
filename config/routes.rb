# frozen_string_literal: true

Rails.application.routes.draw do
  get '/random_greeting', to: 'greetings#random_greeting'
  root 'root#index'
end
