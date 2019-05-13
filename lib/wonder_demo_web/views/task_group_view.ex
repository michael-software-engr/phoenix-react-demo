defmodule WonderDemoWeb.TaskGroupView do
  use WonderDemoWeb, :view
  alias WonderDemoWeb.TaskGroupView
  alias WonderDemoWeb.TaskView

  def render("index.json", %{task_groups: task_groups}) do
    %{data: render_many(task_groups, TaskGroupView, "task_group.json")}
  end

  def render("show.json", %{task_group: task_group}) do
    %{data: render_one(task_group, TaskGroupView, "task_group.json")}
  end

  def render("task_group.json", %{task_group: task_group}) do
    %{id: task_group.id,
      name: task_group.name,
      tasks: render_many(task_group.tasks, TaskView, "task.json")}
  end
end
