defmodule WonderDemo.Repo do
  use Ecto.Repo,
    otp_app: :wonder_demo,
    adapter: Ecto.Adapters.Postgres
end
