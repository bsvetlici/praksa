import { Component, OnInit } from '@angular/core';
declare var $: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {


     generateGrid(rows, cols) {
      var grid = "<table>";
      for (var row = 1; row <= rows; row++) {
        grid += "<tr>";
        for  (var col = 1; col <= cols; col++) {
          var cell = "<td> </td>";
          grid += cell;
        }
        grid += "</tr>";
      }
      $("#tableContainer").empty();
      $("#tableContainer").append(grid);
      
      var color = "Grey"

      $( "#btnWorker" ).click(function() {
          color = "yellow"
       });

      $( "#btnDesk" ).click(function() {
          color = "brown"
        });

      $( "#btnMachine" ).click(function() {
          color ="blue"
        });
      $( "#btnEntry" ).click(function() {
          color = "orange"
        });
      $( "#btnWall" ).click(function() {
          color = "black"
        });

      $( "#btnGrass" ).click(function() {
          color = "green"
        });

      $( "#btnWall" ).click(function() {
          color ="black"
        });

      $( "#btnDelete" ).click(function() {
          color ="grey"
        });

      var isMouseClicked = false;
      $("table tr td").mousedown(function(){ 
        isMouseClicked = true;
      }).mouseup(function () {
        isMouseClicked = false;
        }).mousemove(function(){
          if (isMouseClicked){
            $(this).css("background-color", color);
          }
        }
        )}
      
    }



    
  
    