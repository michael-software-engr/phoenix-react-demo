# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
use Mix.Config

config :wonder_demo,
  ecto_repos: [WonderDemo.Repo]

# Configures the endpoint
config :wonder_demo, WonderDemoWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "ln9UcnJG/cRu6QLPglEcCQISmclJZT2Ffy5cq8vwIWJZnOz9SBHk98zP30XbO9Om",
  render_errors: [view: WonderDemoWeb.ErrorView, accepts: ~w(html json)],
  pubsub: [name: WonderDemo.PubSub, adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
