defmodule WonderDemo.Repo.Migrations.CreateTaskGroups do
  use Ecto.Migration

  def change do
    create table(:task_groups) do
      add :name, :string

      timestamps()
    end

  end
end
