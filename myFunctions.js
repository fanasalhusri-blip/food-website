function toggleDetails(id) {
  var x = document.getElementById(id);
  if (x.style.display === "none") {
    x.style.display = "table-row";
  } else {
    x.style.display = "none";
  }
}

function showForm() {
  document.getElementById("formSection").style.display = "block";
}

function validateForm() {
  var name = document.getElementById("name").value;
  var account = document.getElementById("account").value;
  var phone = document.getElementById("phone").value;

  var nameRegex = /^[A-Za-z]+\s[A-Za-z]+$/;
  var accountRegex = /^0\d{5}$/;
  var phoneRegex = /^(09|05)\d{8}$/;

  if (!nameRegex.test(name)) {
    alert("اسم غير صحيح");
    return false;
  }

  if (!accountRegex.test(account)) {
    alert("حساب خاطئ , الرجاء وضع حساب صحيح");
    return false;
  }

  if (!phoneRegex.test(phone)) {
    alert("رقم الهاتف غير صحيح");
    return false;
  }

  var total = 0;
  document.querySelectorAll('.meal:checked').forEach(function(el){
    total += parseInt(el.value);
  });

  var tax = total * 0.1;
  var finalTotal = total + tax;

  alert("المجموع: " + total + "\nالضريبة: " + tax + "\nالصافي: " + finalTotal);

  return false;
}
