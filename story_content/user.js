function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5yvO1OQdJ2g":
        Script1();
        break;
      case "65RbaQmDAfp":
        Script2();
        break;
      case "6U1ignTG8Jw":
        Script3();
        break;
      case "5x7jXyNqoLl":
        Script4();
        break;
      case "5v3khyy4PsB":
        Script5();
        break;
      case "6O5pZQSpLT3":
        Script6();
        break;
  }
}

function Script1()
{
  $("#tab-customlink").hide();
}

function Script2()
{
  $("#tab-customlink").hide();
}

function Script3()
{
  var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()
var dateString=month + "/" + day + "/" + year

var player = GetPlayer();
player.SetVar("SystemDate",dateString);
}

function Script4()
{
  $("#tab-customlink").show();
}

function Script5()
{
  $("#tab-customlink").show();
}

function Script6()
{
  window.print();
}

