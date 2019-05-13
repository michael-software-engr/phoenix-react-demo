defmodule WonderDemo.Demos.TaskGroup do
  use Ecto.Schema
  import Ecto.Changeset

  alias WonderDemo.Demos.Task

  schema "task_groups" do
    field :name, :string
    has_many :tasks, Task
    timestamps()
  end

  @doc false
  def changeset(task_group, attrs) do
    task_group
    |> cast(attrs, [:name])
    |> validate_required([:name])
  end
end
