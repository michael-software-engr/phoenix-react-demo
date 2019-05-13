# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     WonderDemo.Repo.insert!(%WonderDemo.SomeSchema{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.

alias WonderDemo.Repo
alias WonderDemo.Demos.Todo

date_due = DateTime.add DateTime.truncate(DateTime.utc_now, :second), 30 * 24 * 60 * 60, :second

Repo.delete_all Todo

Enum.each(
  [
    "Do laundry",
    "Pick up mail",
    "Buy groceries",
    "Fix broken lightbulb",
    "Attend spinning class"
  ],
  fn todo -> Repo.insert! %Todo{title: todo, done: false, date_due: date_due } end
)
