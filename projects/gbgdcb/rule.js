function convertToNotes(inputCharArray){
	var notes = new Array();

	for(var i=0; i<inputCharArray.length; i++){
		var character = inputCharArray[i];
		//8분음표 음표 템플릿
		var noteTemplate = "<note><pitch><%=stepAndOctave=></pitch><duration>1</duration><voice>1</voice><type>quarter</type><stem>down</stem></note>";
		//4분음표-프로토타입 템플릿
		//var noteTemplate = "<note><pitch><step><%step%></step><octave><%octave%></octave></pitch><duration>1</duration></note>";
		var step,octave,sharp;

		if(character == 'ㄱ'){
			step = 'C';
			octave = 4;
			sharp = false;
		}else if(character == 'ㄴ'){
			step = 'C';
			octave = 4;
			sharp = true;
		}else if(character == 'ㄷ'){
			step = 'D';
			octave = 4;
			sharp = false;
		}else if(character == 'ㄹ'){
			step = 'D';
			octave = 4;
			sharp = true;
		}else if(character == 'ㅁ'){
			step = 'E';
			octave = 4;
			sharp = false;
		}else if(character == 'ㅂ'){
			step = 'F';
			octave = 4;
			sharp = false;
		}else if(character == 'ㅅ'){
			step = 'F';
			octave = 4;
			sharp = true;
		}else if(character == 'ㅇ'){
			step = 'G';
			octave = 4;
			sharp = false;
		}else if(character == 'ㅈ'){
			step = 'G';
			octave = 4;
			sharp = true;
		}else if(character == 'ㅊ'){
			step = 'A';
			octave = 4;
			sharp = false;
		}else if(character == 'ㅋ'){
			step = 'A';
			octave = 4;
			sharp = true;
		}else if(character == 'ㅌ'){
			step = 'B';
			octave = 4;
			sharp = false;
		}else if(character == 'ㅍ'){
			step = 'C';
			octave = 5;
			sharp = false;
		}else if(character == 'ㅎ'){
			step = 'C';
			octave = 5;
			sharp = true;
		}else if(character == 'ㄲ'){
			step = 'G';
			octave = 2;
			sharp = true;
		}else if(character == 'ㄸ'){
			step = 'A';
			octave = 2;
			sharp = false;
		}else if(character == 'ㅃ'){
			step = 'A';
			octave = 2;
			sharp = true;
		}else if(character == 'ㅆ'){
			step = 'B';
			octave = 2;
			sharp = false;
		}else if(character == 'ㅉ'){
			step = 'C';
			octave = 3;
			sharp = false;
		}else if(character == 'ㄳ'){
			step = 'C';
			octave = 3;
			sharp = true;
		}else if(character == 'ㄵ'){
			step = 'D';
			octave = 3;
			sharp = false;
		}else if(character == 'ㄶ'){
			step = 'D';
			octave = 3;
			sharp = true;
		}else if(character == 'ㄺ'){
			step = 'E';
			octave = 3;
			sharp = false;
		}else if(character == 'ㄻ'){
			step = 'F';
			octave = 3;
			sharp = false;
		}else if(character == 'ㄼ'){
			step = 'F';
			octave = 3;
			sharp = true;
		}else if(character == 'ㄽ'){
			step = 'G';
			octave = 3;
			sharp = false;
		}else if(character == 'ㄾ'){
			step = 'G';
			octave = 3;
			sharp = true;
		}else if(character == 'ㄿ'){
			step = 'A';
			octave = 3;
			sharp = false;
		}else if(character == 'ㅀ'){
			step = 'A';
			octave = 3;
			sharp = true;
		}else if(character == 'ㅄ'){
			step = 'B';
			octave = 3;
			sharp = false;
		}else if(character == 'ㅏ'){
			step = 'D';
			octave = 5;
			sharp = false;
		}else if(character == 'ㅑ'){
			step = 'D';
			octave = 5;
			sharp = true;
		}else if(character == 'ㅓ'){
			step = 'E';
			octave = 5;
			sharp = false;
		}else if(character == 'ㅕ'){
			step = 'F';
			octave = 5;
			sharp = false;
		}else if(character == 'ㅗ'){
			step = 'F';
			octave = 5;
			sharp = true;
		}else if(character == 'ㅛ'){
			step = 'G';
			octave = 5;
			sharp = false;
		}
		else if(character == 'ㅜ'){
			step = 'G';
			octave = 5;
			sharp = true;
		}
		else if(character == 'ㅠ'){
			step = 'A';
			octave = 5;
			sharp = false;
		}
		else if(character == 'ㅡ'){
			step = 'A';
			octave = 5;
			sharp = true;
		}else if(character == 'ㅣ'){
			step = 'B';
			octave = 5;
			sharp = false;
		}else if(character == 'ㅐ'){
			step = 'C';
			octave = 6;
			sharp = false;
		}else if(character == 'ㅒ'){
			step = 'C';
			octave = 6;
			sharp = true;
		}else if(character == 'ㅔ'){
			step = 'D';
			octave = 6;
			sharp = false;
		}else if(character == 'ㅖ'){
			step = 'D';
			octave = 6;
			sharp = true;
		}else if(character == 'ㅘ'){
			step = 'E';
			octave = 6;
			sharp = false;
		}else if(character == 'ㅙ'){
			step = 'F';
			octave = 6;
			sharp = false;
		}else if(character == 'ㅚ'){
			step = 'F';
			octave = 6;
			sharp = true;
		}else if(character == 'ㅝ'){
			step = 'G';
			octave = 6;
			sharp = false;
		}else if(character == 'ㅞ'){
			step = 'G';
			octave = 6;
			sharp = true;
		}else if(character == 'ㅟ'){
			step = 'A';
			octave = 6;
			sharp = false;
		}else if(character == 'ㅢ'){
			step = 'A';
			octave = 6;
			sharp = true;
		}

		// console.log(character + typeof(character) + "	step:" + step + " octave:" + octave);
		var replaceNoteOctaveString;
		if(sharp){//sharp
			replaceNoteOctaveString = "<step>" + step + "</step>" + "<alter>1</alter>" + "<octave>" + octave + "</octave>";
		}else{//natural
			replaceNoteOctaveString = "<step>" + step + "</step>" + "<octave>" + octave + "</octave>";
		}
		var ruledNote = noteTemplate.replace("<%=stepAndOctave=>", replaceNoteOctaveString);

		notes[i] = ruledNote;		
	}	
	return notes;
};

function convertToMeasures(notesArray){
	var measureCount;
	var noteCount = 1;
	var printAndAttributes = "<print><system-layout><system-margins><left-margin>0.00</left-margin><right-margin>-0.00</right-margin></system-margins><top-system-distance>170.00</top-system-distance></system-layout></print><attributes><divisions>1</divisions><key><fifths>0</fifths></key><time><beats>4</beats><beat-type>4</beat-type></time><clef><sign>G</sign><line>2</line></clef></attributes>";
	var measureOpen = "<measure number='" + measureCount + "'>"; //width무쓸모.....
	var measureClose = "</measure>";
	var measures = "";

	for (var i = 0; i<notesArray.length; i++) {
		//첫번째 마디 첫번째 음표.
		if(i==0){
			measureCount = 1;
			//measures += measureOpen;
			measures += "<measure number='" + measureCount + "'>";
			measures += printAndAttributes;
			measures += notesArray[i];
			noteCount++;
		}
		else if(i==notesArray.length-1){//마지막음표
			measures += notesArray[i];
			measures += '<barline location="right"><bar-style>light-heavy</bar-style></barline>';
			measures += measureClose;
			noteCount++;
		}
		else{
			measures += notesArray[i];
			if(noteCount%4 == 0){
				measures += measureClose;
				measureCount += 1;
				//measures += measureOpen;
				measures += "<measure number='" + measureCount + "'>";
			}
			noteCount++;
		}
	};
	return measures;
}
