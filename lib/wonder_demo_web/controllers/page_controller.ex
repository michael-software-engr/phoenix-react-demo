defmodule WonderDemoWeb.PageController do
  use WonderDemoWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end

  def vanilla_js(conn, _params) do
    render(conn, "vanilla_js.html")
  end

  def minimal_e6(conn, _params) do
    render(conn, "minimal_e6.html")
  end
end
