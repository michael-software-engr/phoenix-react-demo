defmodule WonderDemoWeb.TodoController do
  use WonderDemoWeb, :controller

  alias WonderDemo.Demos
  alias WonderDemo.Demos.Todo

  action_fallback WonderDemoWeb.FallbackController

  def index(conn, _params) do
    todos = Demos.list_todos()
    render(conn, "index.json", todos: todos)
  end

  def create(conn, %{"todo" => todo_params}) do
    with {:ok, %Todo{} = todo} <- Demos.create_todo(todo_params) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", Routes.todo_path(conn, :show, todo))
      |> render("show.json", todo: todo)
    end
  end

  def show(conn, %{"id" => id}) do
    todo = Demos.get_todo!(id)
    render(conn, "show.json", todo: todo)
  end

  def update(conn, %{"id" => id, "todo" => todo_params}) do
    todo = Demos.get_todo!(id)

    with {:ok, %Todo{} = todo} <- Demos.update_todo(todo, todo_params) do
      render(conn, "show.json", todo: todo)
    end
  end

  def delete(conn, %{"id" => id}) do
    todo = Demos.get_todo!(id)

    with {:ok, %Todo{}} <- Demos.delete_todo(todo) do
      send_resp(conn, :no_content, "")
    end
  end
end
