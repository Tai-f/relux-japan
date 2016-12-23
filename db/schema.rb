# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20161223110943) do

  create_table "hotels", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string   "name",                         null: false
    t.string   "hiragana_name",                null: false
    t.string   "prefecture",                   null: false
    t.string   "city",                         null: false
    t.string   "street",                       null: false
    t.integer  "phone_number",                 null: false
    t.string   "url"
    t.time     "check_in_time"
    t.time     "check_out_time"
    t.integer  "total_rooms"
    t.string   "card_type"
    t.integer  "grade"
    t.text     "amenity",        limit: 65535
    t.text     "cancel",         limit: 65535
    t.datetime "created_at",                   null: false
    t.datetime "updated_at",                   null: false
  end

end
