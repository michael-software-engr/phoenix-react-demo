defmodule WonderDemo.Repo.Migrations.CreateTasks do
  use Ecto.Migration

  def change do
    create table(:tasks) do
      add :task_group_id, :integer
      add :task, :string
      add :completed_at, :naive_datetime
      add :dependency_ids, {:array, :integer}

      timestamps()
    end

  end
end
