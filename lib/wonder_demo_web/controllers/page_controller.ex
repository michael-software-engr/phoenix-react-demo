defmodule WonderDemoWeb.PageController do
  use WonderDemoWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
