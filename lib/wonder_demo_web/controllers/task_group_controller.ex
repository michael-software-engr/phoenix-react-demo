defmodule WonderDemoWeb.TaskGroupController do
  use WonderDemoWeb, :controller

  alias WonderDemo.Demos
  alias WonderDemo.Demos.TaskGroup

  action_fallback WonderDemoWeb.FallbackController

  def index(conn, _params) do
    task_groups = Demos.list_task_groups()
    render(conn, "index.json", task_groups: task_groups)
  end

  def create(conn, %{"task_group" => task_group_params}) do
    with {:ok, %TaskGroup{} = task_group} <- Demos.create_task_group(task_group_params) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", Routes.task_group_path(conn, :show, task_group))
      |> render("show.json", task_group: task_group)
    end
  end

  def show(conn, %{"id" => id}) do
    task_group = Demos.get_task_group!(id)
    render(conn, "show.json", task_group: task_group)
  end

  def update(conn, %{"id" => id, "task_group" => task_group_params}) do
    task_group = Demos.get_task_group!(id)

    with {:ok, %TaskGroup{} = task_group} <- Demos.update_task_group(task_group, task_group_params) do
      render(conn, "show.json", task_group: task_group)
    end
  end

  def delete(conn, %{"id" => id}) do
    task_group = Demos.get_task_group!(id)

    with {:ok, %TaskGroup{}} <- Demos.delete_task_group(task_group) do
      send_resp(conn, :no_content, "")
    end
  end
end
