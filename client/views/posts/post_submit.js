if (Meteor.isClient){

	Template.categories.helpers({
    categories: function(){
        return ["facebook", "news", "tv", "tweets"]
			}
		});

		Template.categories.events({
    "change #category-select": function (event, template) {
        var category = $(event.currentTarget).val();
        console.log("category : " + category);
        // additional code to do what you want with the category
    },
    'keyup #add-category': function (e,t){
        lists.insert({Category:catVal,owner:Meteor.userId()});
    }
});

	
 	Template.postSubmit.events({
	 'submit form': function(e) {
		 e.preventDefault();
		 
		 var post = {
			 url: $(e.target).find('[name=url').val(),
			 title: $(e.target).find('[name=title]').val(),
			 message: $(e.target).find('[name=message]').val(),
			 category: $(e.target).find('[name=category]').val()
		 }
		 
		 post._id = Posts.insert(post);
		 Router.go('postPage', post);
	 }
 });
}