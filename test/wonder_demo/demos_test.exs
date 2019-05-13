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

  describe "task_groups" do
    alias WonderDemo.Demos.TaskGroup

    @valid_attrs %{name: "some name"}
    @update_attrs %{name: "some updated name"}
    @invalid_attrs %{name: nil}

    def task_group_fixture(attrs \\ %{}) do
      {:ok, task_group} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Demos.create_task_group()

      task_group
    end

    test "list_task_groups/0 returns all task_groups" do
      task_group = task_group_fixture()
      assert Demos.list_task_groups() == [task_group]
    end

    test "get_task_group!/1 returns the task_group with given id" do
      task_group = task_group_fixture()
      assert Demos.get_task_group!(task_group.id) == task_group
    end

    test "create_task_group/1 with valid data creates a task_group" do
      assert {:ok, %TaskGroup{} = task_group} = Demos.create_task_group(@valid_attrs)
      assert task_group.name == "some name"
    end

    test "create_task_group/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Demos.create_task_group(@invalid_attrs)
    end

    test "update_task_group/2 with valid data updates the task_group" do
      task_group = task_group_fixture()
      assert {:ok, %TaskGroup{} = task_group} = Demos.update_task_group(task_group, @update_attrs)
      assert task_group.name == "some updated name"
    end

    test "update_task_group/2 with invalid data returns error changeset" do
      task_group = task_group_fixture()
      assert {:error, %Ecto.Changeset{}} = Demos.update_task_group(task_group, @invalid_attrs)
      assert task_group == Demos.get_task_group!(task_group.id)
    end

    test "delete_task_group/1 deletes the task_group" do
      task_group = task_group_fixture()
      assert {:ok, %TaskGroup{}} = Demos.delete_task_group(task_group)
      assert_raise Ecto.NoResultsError, fn -> Demos.get_task_group!(task_group.id) end
    end

    test "change_task_group/1 returns a task_group changeset" do
      task_group = task_group_fixture()
      assert %Ecto.Changeset{} = Demos.change_task_group(task_group)
    end
  end

  describe "tasks" do
    alias WonderDemo.Demos.Task

    @valid_attrs %{completed_at: ~N[2010-04-17 14:00:00], dependency_ids: [], task: "some task", task_group_id: 42}
    @update_attrs %{completed_at: ~N[2011-05-18 15:01:01], dependency_ids: [], task: "some updated task", task_group_id: 43}
    @invalid_attrs %{completed_at: nil, dependency_ids: nil, task: nil, task_group_id: nil}

    def task_fixture(attrs \\ %{}) do
      {:ok, task} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Demos.create_task()

      task
    end

    test "list_tasks/0 returns all tasks" do
      task = task_fixture()
      assert Demos.list_tasks() == [task]
    end

    test "get_task!/1 returns the task with given id" do
      task = task_fixture()
      assert Demos.get_task!(task.id) == task
    end

    test "create_task/1 with valid data creates a task" do
      assert {:ok, %Task{} = task} = Demos.create_task(@valid_attrs)
      assert task.completed_at == ~N[2010-04-17 14:00:00]
      assert task.dependency_ids == []
      assert task.task == "some task"
      assert task.task_group_id == 42
    end

    test "create_task/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Demos.create_task(@invalid_attrs)
    end

    test "update_task/2 with valid data updates the task" do
      task = task_fixture()
      assert {:ok, %Task{} = task} = Demos.update_task(task, @update_attrs)
      assert task.completed_at == ~N[2011-05-18 15:01:01]
      assert task.dependency_ids == []
      assert task.task == "some updated task"
      assert task.task_group_id == 43
    end

    test "update_task/2 with invalid data returns error changeset" do
      task = task_fixture()
      assert {:error, %Ecto.Changeset{}} = Demos.update_task(task, @invalid_attrs)
      assert task == Demos.get_task!(task.id)
    end

    test "delete_task/1 deletes the task" do
      task = task_fixture()
      assert {:ok, %Task{}} = Demos.delete_task(task)
      assert_raise Ecto.NoResultsError, fn -> Demos.get_task!(task.id) end
    end

    test "change_task/1 returns a task changeset" do
      task = task_fixture()
      assert %Ecto.Changeset{} = Demos.change_task(task)
    end
  end
end
