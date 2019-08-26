var preset = {
	title: 'untitle',
	content: 'null',
	date: new Date()
}

class Anno{
	constructor(anno){
		if(anno.author == undefined){
			throw new Error('author is required');
		}else{
			for(var i in preset){
				if(!(i in anno)){
					anno[i] = preset[i];
				}
			}

			this.title = anno.title;
			this.content = anno.content;
			this.date = anno.date;
		}
	}

	toString(){
		return `${this.title}: ${this.content}; by ${this.author}`;
	}

	valueOf(){
		return this.date;
	}
}

module.exports = Anno;
