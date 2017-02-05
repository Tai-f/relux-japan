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

ActiveRecord::Schema.define(version: 20170202124020) do

  create_table "courses", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string   "name",                     null: false
    t.string   "kanji_name",               null: false
    t.string   "theme",                    null: false
    t.integer  "price",                    null: false
    t.text     "body",       limit: 65535, null: false
    t.datetime "created_at",               null: false
    t.datetime "updated_at",               null: false
  end

  create_table "hotel_selections", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.integer  "hotel_id"
    t.integer  "selection_id"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.index ["hotel_id"], name: "index_hotel_selections_on_hotel_id", using: :btree
    t.index ["selection_id"], name: "index_hotel_selections_on_selection_id", using: :btree
  end

  create_table "hotels", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string   "name",                                                       null: false
    t.string   "hiragana_name",                                              null: false
    t.string   "prefecture",                                                 null: false
    t.string   "city",                                                       null: false
    t.string   "street",                                                     null: false
    t.string   "phone_number",                                               null: false
    t.string   "url"
    t.string   "check_in_time"
    t.string   "check_out_time"
    t.integer  "total_rooms"
    t.string   "card_type"
    t.integer  "grade"
    t.text     "amenity",            limit: 65535
    t.text     "cancel",             limit: 65535
    t.datetime "created_at",                                                 null: false
    t.datetime "updated_at",                                                 null: false
    t.integer  "course_id"
    t.decimal  "location_latitude",                precision: 15, scale: 12
    t.decimal  "location_longitude",               precision: 15, scale: 12
    t.text     "access_by_public",   limit: 65535
    t.text     "access_by_car",      limit: 65535
    t.text     "concept",            limit: 65535
    t.text     "description",        limit: 65535
    t.text     "plan",               limit: 65535
    t.text     "remark",             limit: 65535
    t.index ["course_id"], name: "index_hotels_on_course_id", using: :btree
  end

  create_table "photos", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string   "image",      null: false
    t.integer  "hotel_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["hotel_id"], name: "index_photos_on_hotel_id", using: :btree
  end

  create_table "reviews", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.text     "body",               limit: 65535, null: false
    t.integer  "rate",                             null: false
    t.string   "accommodation_date",               null: false
    t.integer  "hotel_id"
    t.datetime "created_at",                       null: false
    t.datetime "updated_at",                       null: false
    t.string   "name",                             null: false
    t.index ["hotel_id"], name: "index_reviews_on_hotel_id", using: :btree
  end

  create_table "rooms", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.integer  "hotel_id"
    t.string   "name",                              null: false
    t.string   "image"
    t.integer  "price",                             null: false
    t.text     "body",                limit: 65535
    t.text     "feature",             limit: 65535
    t.text     "room_type",           limit: 65535
    t.integer  "maximum_room_number"
    t.datetime "created_at",                        null: false
    t.datetime "updated_at",                        null: false
    t.index ["hotel_id"], name: "index_rooms_on_hotel_id", using: :btree
  end

  create_table "selections", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string   "name",                     null: false
    t.string   "image",                    null: false
    t.text     "body",       limit: 65535, null: false
    t.datetime "created_at",               null: false
    t.datetime "updated_at",               null: false
  end

  add_foreign_key "hotel_selections", "hotels"
  add_foreign_key "hotel_selections", "selections"
  add_foreign_key "hotels", "courses"
  add_foreign_key "photos", "hotels"
  add_foreign_key "reviews", "hotels"
  add_foreign_key "rooms", "hotels"
end
