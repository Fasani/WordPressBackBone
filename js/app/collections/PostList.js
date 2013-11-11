'use strict';

define([
  'jquery',
  'underscore',
  'backbone',
  //App Files
  'dateformat',
  'app/models/PostItem'
], function($, _, Backbone, dateFormat, PostItem){

  var PostList = Backbone.Collection.extend({

  model: PostItem,
  url: 'http://blog.michaelfasani.com/api/get_posts/',

  parse: function (data) {
    var parsed = [];
    var self = this;

    $(data.posts).each(function () {
      var id = this.id;
      var type = this.type;
      var slug = this.slug;
      var url = this.url; 
      var status = this.status;
      var title = this.title;
      var title_plain = this.title_plain;
      var content = this.content;
      var excerpt = this.excerpt;
      var date = this.date;
      var modified = this.modified;
      var categories = this.categories;
      var tags = this.tags;
      var author = this.author;
      var comments = this.comments;
      var attachments = this.attachments;
      var comment_count = this.comment_count;
      var comment_status = this.comment_status;
      var custom_fields = this.custom_fields;

      parsed.push({
        id: id,
        type: type,
        slug: slug,
        url: url,
        status: status,
        title: self.removeWidow(title),
        title_plain: title_plain,
        content: content,
        excerpt: excerpt,
        date: $.format.date(date, 'dd/MM/yyyy hh:mm:ss'),
        dateDay: $.format.date(date, 'dd'),
        dateMonthYear: $.format.date(date, 'MMM yy'),
        prettyDate: $.format.prettyDate(date),
        modified: modified,
        categories: categories,
        tags: tags,
        author: author,
        comments: comments,
        attachments: attachments,
        comment_count: comment_count,
        comment_status: comment_status,
        custom_fields: custom_fields
      });
    });

    return parsed;
  },

  removeWidow: function (title) {
    var wordArray = title.split(" "),
        newTitle = "";

    if (wordArray.length > 1) {
      wordArray[wordArray.length - 2] += "&nbsp;" + wordArray[wordArray.length - 1];
      wordArray.pop();
      newTitle = wordArray.join(" ");
    }

    return newTitle;
  }

});

  return PostList;

});