defmodule WonderDemoWeb.TodoView do
  use WonderDemoWeb, :view
  alias WonderDemoWeb.TodoView

  def render("index.json", %{todos: todos}) do
    %{data: render_many(todos, TodoView, "todo.json")}
  end

  def render("show.json", %{todo: todo}) do
    %{data: render_one(todo, TodoView, "todo.json")}
  end

  def render("todo.json", %{todo: todo}) do
    %{id: todo.id,
      title: todo.title,
      date_due: todo.date_due,
      date_done: todo.date_done,
      done: todo.done}
  end
end
