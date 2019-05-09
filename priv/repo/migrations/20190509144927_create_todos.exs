defmodule WonderDemo.Repo.Migrations.CreateTodos do
  use Ecto.Migration

  def change do
    create table(:todos) do
      add :title, :string
      add :date_due, :utc_datetime
      add :date_done, :utc_datetime
      add :done, :boolean, default: false, null: false

      timestamps()
    end

  end
end
