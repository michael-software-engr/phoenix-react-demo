defmodule WonderDemo.DemosTest do
  use WonderDemo.DataCase

  alias WonderDemo.Demos

  describe "todos" do
    alias WonderDemo.Demos.Todo

    @valid_attrs %{date_done: 42, date_due: 42, done: true, title: "some title"}
    @update_attrs %{date_done: 43, date_due: 43, done: false, title: "some updated title"}
    @invalid_attrs %{date_done: nil, date_due: nil, done: nil, title: nil}

    def todo_fixture(attrs \\ %{}) do
      {:ok, todo} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Demos.create_todo()

      todo
    end

    test "list_todos/0 returns all todos" do
      todo = todo_fixture()
      assert Demos.list_todos() == [todo]
    end

    test "get_todo!/1 returns the todo with given id" do
      todo = todo_fixture()
      assert Demos.get_todo!(todo.id) == todo
    end

    test "create_todo/1 with valid data creates a todo" do
      assert {:ok, %Todo{} = todo} = Demos.create_todo(@valid_attrs)
      assert todo.date_done == 42
      assert todo.date_due == 42
      assert todo.done == true
      assert todo.title == "some title"
    end

    test "create_todo/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Demos.create_todo(@invalid_attrs)
    end

    test "update_todo/2 with valid data updates the todo" do
      todo = todo_fixture()
      assert {:ok, %Todo{} = todo} = Demos.update_todo(todo, @update_attrs)
      assert todo.date_done == 43
      assert todo.date_due == 43
      assert todo.done == false
      assert todo.title == "some updated title"
    end

    test "update_todo/2 with invalid data returns error changeset" do
      todo = todo_fixture()
      assert {:error, %Ecto.Changeset{}} = Demos.update_todo(todo, @invalid_attrs)
      assert todo == Demos.get_todo!(todo.id)
    end

    test "delete_todo/1 deletes the todo" do
      todo = todo_fixture()
      assert {:ok, %Todo{}} = Demos.delete_todo(todo)
      assert_raise Ecto.NoResultsError, fn -> Demos.get_todo!(todo.id) end
    end

    test "change_todo/1 returns a todo changeset" do
      todo = todo_fixture()
      assert %Ecto.Changeset{} = Demos.change_todo(todo)
    end
  end
end
