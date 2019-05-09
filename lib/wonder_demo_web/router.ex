defmodule WonderDemoWeb.Router do
  use WonderDemoWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", WonderDemoWeb do
    pipe_through :browser

    get "/", PageController, :index
    get "/vanilla_js", PageController, :vanilla_js
    get "/minimal_e6", PageController, :minimal_e6
  end

  # Other scopes may use custom stacks.
  scope "/api", WonderDemoWeb do
    pipe_through :api

    resources "/todos", TodoController, except: [:new, :edit]
  end
end
