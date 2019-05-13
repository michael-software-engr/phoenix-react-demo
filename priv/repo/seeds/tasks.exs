alias WonderDemo.Repo
alias WonderDemo.Demos.TaskGroup
alias WonderDemo.Demos.Task

Repo.delete_all TaskGroup
Repo.delete_all Task

defmodule TaskSeeder do
  def data do
    __DIR__ |> Path.join('data.json') |> TaskSeeder.get_json
  end

  def get_json(filename) do
    with {:ok, body} <- File.read(filename),
         {:ok, json} <- Jason.decode!(body), do: {:ok, json}
  end
end

groups_by_name = Enum.reduce(
  ["Purchases", "Build Airplane"],
  %{},
  fn name, acc ->
    record = Repo.insert! %TaskGroup{name: name}
    Enum.into acc, %{name => record}
  end
)

tasks_by_name = TaskSeeder.data |> Enum.reduce(
  %{},
  fn task, acc ->
    name = task["task"]
    group = groups_by_name[task["group"]]

    record = Repo.insert! %Task{task: name, task_group_id: group.id}
    Enum.into acc, %{name => record}
  end
)

TaskSeeder.data |> Enum.each fn task ->
  dependencies = task["dependencies"]

  if dependencies do
    dependency_ids = Enum.map(
      dependencies, fn dep_name ->
        dep = tasks_by_name[dep_name]
        dep.id
      end
    )

    record = tasks_by_name[task["task"]]

    Ecto.Changeset.change(record, dependency_ids: dependency_ids) |> Repo.update!
  end
end
