defmodule WonderDemoWeb.TaskGroupControllerTest do
  use WonderDemoWeb.ConnCase

  alias WonderDemo.Demos
  alias WonderDemo.Demos.TaskGroup

  @create_attrs %{
    name: "some name"
  }
  @update_attrs %{
    name: "some updated name"
  }
  @invalid_attrs %{name: nil}

  def fixture(:task_group) do
    {:ok, task_group} = Demos.create_task_group(@create_attrs)
    task_group
  end

  setup %{conn: conn} do
    {:ok, conn: put_req_header(conn, "accept", "application/json")}
  end

  describe "index" do
    test "lists all task_groups", %{conn: conn} do
      conn = get(conn, Routes.task_group_path(conn, :index))
      assert json_response(conn, 200)["data"] == []
    end
  end

  describe "create task_group" do
    test "renders task_group when data is valid", %{conn: conn} do
      conn = post(conn, Routes.task_group_path(conn, :create), task_group: @create_attrs)
      assert %{"id" => id} = json_response(conn, 201)["data"]

      conn = get(conn, Routes.task_group_path(conn, :show, id))

      assert %{
               "id" => id,
               "name" => "some name"
             } = json_response(conn, 200)["data"]
    end

    test "renders errors when data is invalid", %{conn: conn} do
      conn = post(conn, Routes.task_group_path(conn, :create), task_group: @invalid_attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "update task_group" do
    setup [:create_task_group]

    test "renders task_group when data is valid", %{conn: conn, task_group: %TaskGroup{id: id} = task_group} do
      conn = put(conn, Routes.task_group_path(conn, :update, task_group), task_group: @update_attrs)
      assert %{"id" => ^id} = json_response(conn, 200)["data"]

      conn = get(conn, Routes.task_group_path(conn, :show, id))

      assert %{
               "id" => id,
               "name" => "some updated name"
             } = json_response(conn, 200)["data"]
    end

    test "renders errors when data is invalid", %{conn: conn, task_group: task_group} do
      conn = put(conn, Routes.task_group_path(conn, :update, task_group), task_group: @invalid_attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "delete task_group" do
    setup [:create_task_group]

    test "deletes chosen task_group", %{conn: conn, task_group: task_group} do
      conn = delete(conn, Routes.task_group_path(conn, :delete, task_group))
      assert response(conn, 204)

      assert_error_sent 404, fn ->
        get(conn, Routes.task_group_path(conn, :show, task_group))
      end
    end
  end

  defp create_task_group(_) do
    task_group = fixture(:task_group)
    {:ok, task_group: task_group}
  end
end
