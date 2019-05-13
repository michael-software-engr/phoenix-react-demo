defmodule WonderDemoWeb.TaskController do
  use WonderDemoWeb, :controller

  alias WonderDemo.Demos
  alias WonderDemo.Demos.Task

  action_fallback WonderDemoWeb.FallbackController

  def index(conn, _params) do
    tasks = Demos.list_tasks()
    render(conn, "index.json", tasks: tasks)
  end

  def create(conn, %{"task" => task_params}) do
    with {:ok, %Task{} = task} <- Demos.create_task(task_params) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", Routes.task_path(conn, :show, task))
      |> render("show.json", task: task)
    end
  end

  def show(conn, %{"id" => id}) do
    task = Demos.get_task!(id)
    render(conn, "show.json", task: task)
  end

  def update(conn, %{"id" => id, "task" => task_params}) do
    task = Demos.get_task!(id)

    with {:ok, %Task{} = task} <- Demos.update_task(task, task_params) do
      render(conn, "show.json", task: task)
    end
  end

  def delete(conn, %{"id" => id}) do
    task = Demos.get_task!(id)

    with {:ok, %Task{}} <- Demos.delete_task(task) do
      send_resp(conn, :no_content, "")
    end
  end
end
