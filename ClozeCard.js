//Constructor Arguments: 'text' 'cloze'

function ClozeCard(text, cloze) {
		this.text = text;
		this.cloze = cloze;
		this.partial = text.replace(cloze, "...");
		this.fullText = text;

	} else {

	return new ClozeCard(text, cloze);
	
	}
}

// Exports Cloze Constructor

module.exports = ClozeCard;
