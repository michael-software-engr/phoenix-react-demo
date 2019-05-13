defmodule WonderDemo.Demos do
  @moduledoc """
  The Demos context.
  """

  import Ecto.Query, warn: false
  alias WonderDemo.Repo

  alias WonderDemo.Demos.Todo

  @doc """
  Returns the list of todos.

  ## Examples

      iex> list_todos()
      [%Todo{}, ...]

  """
  def list_todos do
    Repo.all(Todo)
  end

  @doc """
  Gets a single todo.

  Raises `Ecto.NoResultsError` if the Todo does not exist.

  ## Examples

      iex> get_todo!(123)
      %Todo{}

      iex> get_todo!(456)
      ** (Ecto.NoResultsError)

  """
  def get_todo!(id), do: Repo.get!(Todo, id)

  @doc """
  Creates a todo.

  ## Examples

      iex> create_todo(%{field: value})
      {:ok, %Todo{}}

      iex> create_todo(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_todo(attrs \\ %{}) do
    %Todo{}
    |> Todo.changeset(attrs)
    |> Repo.insert()
  end

  @doc """
  Updates a todo.

  ## Examples

      iex> update_todo(todo, %{field: new_value})
      {:ok, %Todo{}}

      iex> update_todo(todo, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_todo(%Todo{} = todo, attrs) do
    todo
    |> Todo.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a Todo.

  ## Examples

      iex> delete_todo(todo)
      {:ok, %Todo{}}

      iex> delete_todo(todo)
      {:error, %Ecto.Changeset{}}

  """
  def delete_todo(%Todo{} = todo) do
    Repo.delete(todo)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking todo changes.

  ## Examples

      iex> change_todo(todo)
      %Ecto.Changeset{source: %Todo{}}

  """
  def change_todo(%Todo{} = todo) do
    Todo.changeset(todo, %{})
  end

  alias WonderDemo.Demos.TaskGroup

  @doc """
  Returns the list of task_groups.

  ## Examples

      iex> list_task_groups()
      [%TaskGroup{}, ...]

  """
  def list_task_groups do
    Repo.all from p in TaskGroup, preload: [:tasks]
  end

  @doc """
  Gets a single task_group.

  Raises `Ecto.NoResultsError` if the Task group does not exist.

  ## Examples

      iex> get_task_group!(123)
      %TaskGroup{}

      iex> get_task_group!(456)
      ** (Ecto.NoResultsError)

  """
  def get_task_group!(id), do: Repo.get!(TaskGroup, id)

  @doc """
  Creates a task_group.

  ## Examples

      iex> create_task_group(%{field: value})
      {:ok, %TaskGroup{}}

      iex> create_task_group(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_task_group(attrs \\ %{}) do
    %TaskGroup{}
    |> TaskGroup.changeset(attrs)
    |> Repo.insert()
  end

  @doc """
  Updates a task_group.

  ## Examples

      iex> update_task_group(task_group, %{field: new_value})
      {:ok, %TaskGroup{}}

      iex> update_task_group(task_group, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_task_group(%TaskGroup{} = task_group, attrs) do
    task_group
    |> TaskGroup.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a TaskGroup.

  ## Examples

      iex> delete_task_group(task_group)
      {:ok, %TaskGroup{}}

      iex> delete_task_group(task_group)
      {:error, %Ecto.Changeset{}}

  """
  def delete_task_group(%TaskGroup{} = task_group) do
    Repo.delete(task_group)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking task_group changes.

  ## Examples

      iex> change_task_group(task_group)
      %Ecto.Changeset{source: %TaskGroup{}}

  """
  def change_task_group(%TaskGroup{} = task_group) do
    TaskGroup.changeset(task_group, %{})
  end

  alias WonderDemo.Demos.Task

  def list_tasks do
    Repo.all(Task)
  end

  def get_task!(id), do: Repo.get!(Task, id)

  def create_task(attrs \\ %{}) do
    %Task{}
    |> Task.changeset(attrs)
    |> Repo.insert()
  end

  def update_task(%Task{} = task, attrs) do
    task
    |> Task.changeset(attrs)
    |> Repo.update()
  end

  def delete_task(%Task{} = task) do
    Repo.delete(task)
  end

  def change_task(%Task{} = task) do
    Task.changeset(task, %{})
  end
end
