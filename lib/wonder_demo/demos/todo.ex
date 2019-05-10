defmodule WonderDemo.Demos.Todo do
  use Ecto.Schema
  import Ecto.Changeset

  schema "todos" do
    field :date_done, :utc_datetime
    field :date_due, :utc_datetime
    field :done, :boolean, default: false
    field :title, :string

    timestamps()
  end

  @doc false
  def changeset(todo, attrs) do
    todo
    |> cast(attrs, [:title, :date_due, :date_done, :done])
    |> validate_required([:title])
  end
end
