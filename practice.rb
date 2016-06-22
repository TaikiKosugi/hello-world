require_relative 'html_whitespace_cleaner'
require_relative 'post'
require_relative 'comment'

require 'nokogiri'
require 'open-uri'
require 'pry'

html = open('https://news.ycombinator.com/item?id=5003980', &:read)
clean_html = HTMLWhitespaceCleaner.clean(html)
nokogiri_document = Nokogiri.parse(clean_html)

# title
title = nokogiri_document.css('.storylink').children.text
puts "Title: #{title}"

# url
url = nokogiri_document.css('td.title a')[0]['href']
puts "URL: #{url}"

# points
points = nokogiri_document.css('.score').children.text
puts "Points: #{points}"

# author_username
author_username = nokogiri_document.css('a')[12].text
puts "Author: #{author_username}"

# item_id
item_id = nokogiri_document.css('a')[8]["href"][-7..-1]
puts "item_id: #{item_id}"

new_post = {
  :title => title,
  :url => url,
  :points => points,
  :author_username => author_username,
  :item_id => item_id
}

post = Post.new(new_post)

binding.pry

p post
