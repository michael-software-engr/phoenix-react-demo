defmodule WonderDemoWeb.TaskView do
  use WonderDemoWeb, :view
  alias WonderDemoWeb.TaskView

  def render("index.json", %{tasks: tasks}) do
    %{data: render_many(tasks, TaskView, "task.json")}
  end

  def render("show.json", %{task: task}) do
    %{data: render_one(task, TaskView, "task.json")}
  end

  def render("task.json", %{task: task}) do
    %{id: task.id,
      task_group_id: task.task_group_id,
      task: task.task,
      completed_at: task.completed_at,
      dependency_ids: task.dependency_ids}
  end
end
