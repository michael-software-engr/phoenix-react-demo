defmodule WonderDemo.Demos.Task do
  use Ecto.Schema
  import Ecto.Changeset

  alias WonderDemo.Demos.TaskGroup

  schema "tasks" do
    field :completed_at, :naive_datetime
    field :dependency_ids, {:array, :integer}
    field :task, :string
    # field :task_group_id, :integer
    belongs_to :task_group, TaskGroup
    timestamps()
  end

  @doc false
  def changeset(task, attrs) do
    task
    |> cast(attrs, [:task_group_id, :task, :completed_at, :dependency_ids])
    |> validate_required([:task_group_id, :task, :completed_at, :dependency_ids])
  end
end
