
     const array = [
          "bg-blue-300",
          "bg-green-300",
          "bg-yellow-300",
          "bg-pink-300",
          "bg-purple-300",
     ];

     var i = 0;

     function AddTask() {
          var TaskName = document.getElementById("TaskName").value;
          var TaskDueDate = document.getElementById("TaskDueDate").value;
          var TaskPriorities = document.getElementById("TaskPriorities").value;
          var TaskDescription = document.getElementById("TaskDescription").value;

          if (
               TaskName != "" &&
               TaskDueDate != "" &&
               TaskPriorities != "" &&
               TaskDescription != ""
          ) {
               // setting demo block to display none

               document.getElementById("demo").style.display = "none";

               var List = document.getElementById("List");

               i = i >= array.length - 1 ? 0 : i + 1;

               var task = document.createElement("div");

               taskCSS =
                    array[i] +
                    " w-full sm:w-full md:w-2/5 lg:w-1/3 xl:w-1/4 h-fit rounded-lg shadow-lg m-5 p-7 overflow-hidden relative bg-opacity-55 backdrop-filter backdrop-blur-lg";
               task.className = taskCSS;
               task.style.opacity = "0";

               List.appendChild(task);

               const GlassBlock_1 = document.createElement("div");
               GlassBlock_1.className =
                    "w-full h-full absolute -z-10 bg-opacity-55 rounded-lg shadow-lg backdrop-filter backdrop-blur-sm";
               GlassBlock_1.classList.add("glass");
               task.appendChild(GlassBlock_1);

               const GlassBall_1 = document.createElement("div");
               const GlassBall_1_CSS =
                    "w-20 h-20 absolute m-2 bg-black -z-10 bg-opacity-40 rounded-full shadow-lg backdrop-filter backdrop-blur-sm";
               GlassBall_1.className = GlassBall_1_CSS;
               GlassBall_1.classList.add("glass");
               task.appendChild(GlassBall_1);

               const GlassBall_2 = document.createElement("div");
               GlassBall_2.className =
                    "w-24 h-24 top-20 left-40 bg-purple-400 absolute -z-10 bg-opacity-40 rounded-full shadow-lg backdrop-filter backdrop-blur-sm";
               GlassBall_2.classList.add("glass");
               task.appendChild(GlassBall_2);

               const GlassBall_3 = document.createElement("div");
               GlassBall_3.className = "w-28 h-28 top-36 left-10 bg-amber-900 absolute -z-10 bg-opacity-40 rounded-full shadow-lg backdrop-filter backdrop-blur-sm";
               GlassBall_3.classList.add("glass");
               task.appendChild(GlassBall_3);

               const GlassBall_4 = document.createElement("div");
               GlassBall_4.className = "w-16 h-16 bottom-0 left-40 bg-gray-400 absolute -z-10 bg-opacity-40 rounded-full shadow-lg backdrop-filter backdrop-blur-xl";
               GlassBall_4.classList.add("glass");
               task.appendChild(GlassBall_4);

               const GlassBall_5 = document.createElement("div");
               GlassBall_5.className = "w-12 h-12 bottom-16 right-20 bg-teal-400 absolute -z-10 bg-opacity-40 rounded-full shadow-lg backdrop-filter backdrop-blur-xl";
               GlassBall_5.classList.add("glass");
               task.appendChild(GlassBall_5);

               const Circle_1 = document.createElement("div");
               Circle_1.className = "w-[850px] h-[850px] border-[2rem] border-amber-400 rounded-full absolute -z-20";
               task.appendChild(Circle_1);

               const Circle_2 = document.createElement("div");
               Circle_2.className = "w-[1050px] h-[1050px] border-[2rem] border-red-200 rounded-full absolute top-40  -z-20";
               task.appendChild(Circle_2);

               var taskTiltle = document.createElement("div");
               taskTiltle.className = "w-full h-10 text-3xl font-font-bold pt-1 pl-5 flex";
               task.appendChild(taskTiltle);

               var TaskInfo = document.createElement("div");
               TaskInfo.className = "text-gray-100 font-bold w-full h-fit flex space-x-20 mt-2";
               task.appendChild(TaskInfo);

               var taskDate = document.createElement("div");
               taskDate.className = "text-gray-100 font-bold w-full h-10 pl-4 pt-1 text-sm";
               TaskInfo.appendChild(taskDate);

               var TaskStatus = document.createElement("div");
               TaskStatus.className = "w-full h-10 pt-1 text-sm";
               TaskInfo.appendChild(TaskStatus);

               var TaskText = document.createElement("pre");
               TaskText.className = "w-full h-40 text-sm md:text-md px-4 overflow-y-scroll overflow-hidden font-sans";
               task.appendChild(TaskText);

               var svgElement = document.createElementNS(
                    "http://www.w3.org/2000/svg",
                    "svg"
               );
               svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg");
               svgElement.setAttribute("fill", "none");
               svgElement.setAttribute("viewBox", "0 0 24 24");
               svgElement.setAttribute("stroke-width", "1.5");
               svgElement.setAttribute("stroke", "red");
               svgElement.setAttribute(
                    "class",
                    "w-8 h-8 cursor-pointer hover:scale-110 duration-200 bg-gray-200 ml-5 mt-2 p-1 rounded-lg absolute bottom-5 -left-3 z-[99]"
               );

               // Create SVG path element
               var svgPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
               svgPath.setAttribute("stroke-linecap", "round");
               svgPath.setAttribute("stroke-linejoin", "round");
               svgPath.setAttribute(
                    "d",
                    "M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
               );

               // Append SVG path to SVG element
               svgElement.appendChild(svgPath);

               // Append SVG element to task div
               task.appendChild(svgElement);

               taskTiltle.innerHTML = TaskName;
               taskDate.innerHTML = TaskDueDate;
               TaskStatus.innerHTML = TaskPriorities;
               TaskText.innerHTML = TaskDescription;

               setTimeout(function () {
                    task.style.opacity = "1";
                    task.style.transition = "opacity 1000ms";
               }, 100);

               var ClearText = document.querySelectorAll("input , textarea")
               ClearText.forEach((element) => {
                    if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                         element.value = '';
                    }
               });
               
          } else {
               var alert = document.getElementById("alert");

               setTimeout(function () {
                    alert.style.display = "block";
                    alert.style.transition = "opacity 400ms";
                    document.getElementById("TodoForm").style.filter = "blur(4px)";

                    setTimeout(function () {
                         alert.style.display = "none";
                         document.getElementById("TodoForm").style.filter = "blur(0px)";
                    }, 1000);
               }, 100);
          }
     }

     var scroll = "start";
     function autoscroll() {
          if (scroll == "start") {
               window.scrollBy(0, 100);
               setTimeout(autoscroll, 0);
               scroll = "stop";
          } else if (scroll == "stop") {
               window.scrollBy(0, 0);
               setTimeout(autoscroll, 1);
               scroll = "start";
          }
     }

