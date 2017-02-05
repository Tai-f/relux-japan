**DB of "relux-japan"**
---
## overview
design DB of "relux-japan"

## **Description**
design **14** tables
【members, hotels, rooms, selections, hotel_selections, courses, reservations, reviews, requests, tickets,  interviews, foods, photos, cards】

***~members table~***

|id|family_name|first_name|email|sex|birth_year|birth_month|birth_day|postal_code|address|phone_number|password|password_confirmation|
|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
||||||||||||||

has_many :reservations
has_many :requests
has_many :reviews
t.string :family_name, null:false
t.string :first_name, null:false
t.string :email, null:false
t.string :sex, null:false
t.integer :birth_year, null:false
t.integer :birth_month, null:false
t.integer :birth_day, null:false
add_index :members, [:family_name, first_name, email]

***~hotels table~***

|id|name|hiragana_name|prefecture|city|street|phone_number|url|check-in_time|check-out_time|total_rooms|card_type|plan|grade|amenity|cancel|location_latitude|location_longitude|access_by_public|access_by_car|concept|course_id|
|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
|||||||||||||||||||||

has_many :foods
has_many :photos
has_many :rooms
has_many :reviews
belongs_to :course
has_many :selections, through: :hotel_selections
has_many :hotel_selections
has_many :interviews
t.string :name, null:false
t.string :hiragana_name, null:false
t.string :prefecture, null:false
t.string :city, null:false
t.string :street, null:false
t.integer :phone_number, null:false
t.references :course
add_index :hotels, :name
add_index :hotels, :prefecture

***~rooms table~***

|id|hotel_id|name|image|price|body|feature|room_type|maximum_room_number|
|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
||||||||||

has_many :reservations
belongs_to :hotel
t.string :name, null:false
t.integer :price, null:false
t.references :hotel
add_index :rooms, :name

***~selections table~***

|id|name|image|body|
|:--:|:--:|:--:|:--:|
|||||

has_many :hotels, through: :hotel_selections
has_many :hotel_selections
t.string :name, null:false
t.string :image, null:false
t.text :body, null:false

***~hotel_selections table~***

|id|hotel_id|selection_id|
|:--:|:--:|:--:|
||||

belongs_to :hotel
belongs_to :selection
t.references :hotel
t.references :selection

***~courses table~***

|id|name|kanji_name|price|theme|body|
|:--:|:--:|:--:|:--:|:--:|:--:|
|||||||

has_many :tickets
has_many :hotels
t.string :name, null:false
t.string :kanji_name, null:false
t.integer :price, null:false
t.string :theme, null:false
t.text :body, null:false

***~reservations table~***

|id|member_id|room_id|food_id|family_name|first_name|furigana_family|furigana_first|postal_code|address|email|phone-number|check-in_date|check-out_date|adult_number|child_number|total_number|total_price|comment|reminder_mail|coupon|pay_type|card_id|
|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
||||||||||||||||||||||

belongs_to :food
belongs_to :card
belongs_to :room
belongs_to :member
t.string :family_name, null:false
t.string :first_name, null:false
t.string :furigana_family, null:false
t.string :furigana_first, null:false
t.integer :postal_code, null:false
t.string :address, null:false
t.integer :phone_number, null:false
t.integer :check-in_date, null:false
t.integer :check-out_date, null:false
t.integer :check-in_time, null:false
t.references :member
t.references :room
t.references :food
t.references :card
add_index :reservations, [:family_name, :first_name, :room_id]

***~reviews table~***

|id|member_id|hotel_id|accommodation_date|body|rate|
|:--:|:--:|:--:|:--:|:--:|
||||||

belongs_to :member
belongs_to :hotel
t.references :member
t.references :hotel
t.text :body, null:false
t.integer :rate, null:false

***~requests table~***

|id|member_id|name|email|phone_number|room|male|female|adult|high_student|low_student|student|both|meal|futon|none|area|transportation|check-in_date|staying_night|minimum_budget|maximum_budget|condition|body|
|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
|||||||||||||||||||||||

belongs_to :member
t.string :name, null:false
t.string :email, null:false
t.integer :room, null:false
t.integer :male, null:false
t.integer :female, null:false
t.integer :adult, null:false
t.integer :high-student, null:false
t.integer :low-student, null:false
t.integer :student, null:false
t.integer :both, null:false
t.integer :meal, null:false
t.integer :futon, null:false
t.integer :none, null:false
t.string :area, null:false
t.integer :check-in_date, null:false
t.integer :staying_night, null:false
t.integer :minimum_budget, null:false
t.integer :maximum_budget, null:false
t.references :member

***~tickets table~***

|id|course_id|buyer_name|email|phone_number|card_id|receiver_name|postal_code|address|receive_number|message|date|
|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
|||||||||||||

belongs_to :course
belongs_to :card
t.string :buyer_name, null:false
t.string :email, null:false
t.string :receiver_name, null:false
t.string :address, null:false
t.integer :phone_number, null:false
t.integer :postal_code, null:false
t.references :course
t.references :card
add_index :tickets, [:buyer_name, :email]
add_index :tickets, [:receiver_name, :address]

***~interviews table~***

|id|hotel_id|title|family_name|first_name|carrier|theme|body|
|:--:|:--:|:--:|:--:|:--:|:--:|:--|:--:|
|||||||||

has_many :photos
belongs_to :hotel
t.string :title, null:false
t.string :family_name, null:false
t.string :first_name, null:false
t.string :carrier, null:false
t.string :theme, null:false
t.string :body, null:false
t.references :hotel
add_index :interviews, :name

***~foods table~***

|id|hotel_id|name|price|
|:--:|:--:|:--:|:--:|
|||||

has_many :reservations
belongs_to :hotel
t.references :hotel
t.string :name, null:false
t.integer :price, null:false
add_index :foods, [:name, :price]

***~photos table~***

|id|hotel_id|interview_id|image|
|:--:|:--:|:--:|:--:|
|||||

belongs_to :interview
belongs_to :hotel
t.references :hotel
t.references :interview
t.string :image, null:false

***~cards table~***

|id|card_number|security_code|expiration|card_name|
|:--:|:--:|:--:|:--:|:--:|
||||||

has_many :reservations
has_many :tickets
t.string :card_number, null:false
t.string :security_code, null:false
t.string :expiration, null:false
t.string :card_name, null:false
