defmodule WonderDemoWeb.PageController do
  use WonderDemoWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end

  def vanilla_js(conn, _params) do
    render(conn, "vanilla_js.html")
  end
end
