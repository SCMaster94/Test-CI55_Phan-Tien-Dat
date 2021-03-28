let numberRandom = Math.floor(Math.random() * 10);
let arr = [];
let count = 3;

$('#check').click(function(){
	if(numberRandom == $('#input_text').val()){
		alert($('#input_text').val() + ' là kết quả đúng');
		if(count < 3){
			alert('Những số bạn đã đoán sai: ' + arr + ' ');
		}
	}
	else{
		count--;
		alert('Vui lòng nhập lại đáp án, Bạn chỉ còn ' + count + ' lượt');
		arr.push($('#input_text').val());
	}
	if(count == 0){
		alert('Bạn đã hết lượt chơi');
	}
});
console.log(numberRandom)
